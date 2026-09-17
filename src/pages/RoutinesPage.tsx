import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Play, Pause, Edit2, Trash2, Plus } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { toast } from 'sonner';
import RoutineForm from '../components/RoutineForm';
import type { Routine } from '../data/schema';

export default function RoutinesPage() {
  const { routines, agents, updateRoutine, deleteRoutine } = useAppStore();
  const [showForm, setShowForm] = useState(false);
  const [editingRoutine, setEditingRoutine] = useState<Routine | null>(null);

  const getFrequencyLabel = (freq: string) => {
    switch (freq) {
      case 'hourly': return 'Cada hora';
      case 'daily': return 'Diaria';
      case 'weekly': return 'Semanal';
      case 'monthly': return 'Mensual';
      default: return 'Personalizada';
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`¿Estás seguro de eliminar la rutina "${name}"?`)) {
      deleteRoutine(id);
      toast.success(`Rutina "${name}" eliminada`);
    }
  };

  const handleEdit = (routine: Routine) => {
    setEditingRoutine(routine);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingRoutine(null);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Rutinas</h1>
          <p className="text-gray-400 mt-1">Automatizaciones programadas de tus agentes</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          Nueva rutina
        </button>
      </div>

      {routines.length === 0 ? (
        <div className="glass rounded-xl p-12 text-center">
          <Zap className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">No hay rutinas configuradas</h3>
          <p className="text-gray-400 mb-4">Crea rutinas para automatizar tareas recurrentes</p>
          <button
            onClick={handleCreate}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium"
          >
            Crear primera rutina
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {routines.map((routine, index) => (
            <motion.div
              key={routine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{routine.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{routine.description}</p>
                    <div className="flex items-center gap-3 text-sm flex-wrap">
                      <span className="text-gray-300">{agents.find(a => a.id === routine.assignedTo)?.name}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-300">{getFrequencyLabel(routine.frequency)}</span>
                      {routine.schedule && (
                        <>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-300">{routine.schedule}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => updateRoutine(routine.id, { isActive: !routine.isActive })}
                    className={`p-2 rounded-lg transition-all ${
                      routine.isActive
                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                    }`}
                    title={routine.isActive ? 'Pausar' : 'Activar'}
                  >
                    {routine.isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleEdit(routine)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-all"
                    title="Editar"
                  >
                    <Edit2 className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleDelete(routine.id, routine.name)}
                    className="p-2 hover:bg-red-500/20 rounded-lg transition-all"
                    title="Eliminar"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <RoutineForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingRoutine(null);
        }}
        editingRoutine={editingRoutine}
      />
    </div>
  );
}
