import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Edit2, Trash2, Plus } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { toast } from 'sonner';
import ObjectiveForm from '../components/ObjectiveForm';
import type { Objective } from '../data/schema';

export default function ObjectivesPage() {
  const { objectives, agents, deleteObjective } = useAppStore();
  const [showForm, setShowForm] = useState(false);
  const [editingObjective, setEditingObjective] = useState<Objective | null>(null);

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`¿Estás seguro de eliminar el objetivo "${title}"?`)) {
      deleteObjective(id);
      toast.success(`Objetivo "${title}" eliminado`);
    }
  };

  const handleEdit = (objective: Objective) => {
    setEditingObjective(objective);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingObjective(null);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Objetivos</h1>
          <p className="text-gray-400 mt-1">Seguimiento de objetivos del equipo</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          Nuevo objetivo
        </button>
      </div>

      {objectives.length === 0 ? (
        <div className="glass rounded-xl p-12 text-center">
          <Target className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">Aún no hay objetivos</h3>
          <p className="text-gray-400 mb-4">Crea objetivos para que tus agentes trabajen hacia ellos</p>
          <button
            onClick={handleCreate}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium"
          >
            Crear primer objetivo
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{obj.title}</h3>
                  <p className="text-sm text-gray-400">{obj.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">
                    {agents.find(a => a.id === obj.assignedTo)?.name}
                  </span>
                  <button
                    onClick={() => handleEdit(obj)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                    title="Editar"
                  >
                    <Edit2 className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleDelete(obj.id, obj.title)}
                    className="p-1.5 hover:bg-red-500/20 rounded-lg transition-all"
                    title="Eliminar"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Progreso</span>
                  <span className="font-medium text-white">{obj.progress}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all"
                    style={{ width: `${obj.progress}%` }}
                  />
                </div>
              </div>

              {obj.keyResults && obj.keyResults.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Resultados clave</h4>
                  <ul className="space-y-1">
                    {obj.keyResults.map((kr, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {kr}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      <ObjectiveForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingObjective(null);
        }}
        editingObjective={editingObjective}
      />
    </div>
  );
}
