import { useState } from 'react';
import { useAppStore } from '../store/appStore';
import { toast } from 'sonner';
import type { Objective } from '../data/schema';
import Modal from './Modal';

interface ObjectiveFormProps {
  isOpen: boolean;
  onClose: () => void;
  editingObjective?: Objective | null;
}

export default function ObjectiveForm({ isOpen, onClose, editingObjective }: ObjectiveFormProps) {
  const { addObjective, updateObjective, agents } = useAppStore();
  
  const [formData, setFormData] = useState({
    title: editingObjective?.title || '',
    description: editingObjective?.description || '',
    assignedTo: editingObjective?.assignedTo || '',
    targetDate: editingObjective?.targetDate || '',
    progress: editingObjective?.progress || 0,
    status: editingObjective?.status || 'not-started' as Objective['status'],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.assignedTo) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    if (editingObjective) {
      updateObjective(editingObjective.id, formData);
      toast.success('Objetivo actualizado correctamente');
    } else {
      const newObjective: Objective = {
        id: `obj-${Date.now()}`,
        ...formData,
        createdAt: new Date().toISOString(),
      };
      addObjective(newObjective);
      toast.success('Objetivo creado correctamente');
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={editingObjective ? 'Editar Objetivo' : 'Nuevo Objetivo'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Título <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Ej: Certificación AI Act completa"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Descripción</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe el objetivo en detalle..."
            rows={3}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Agente asignado <span className="text-red-400">*</span>
          </label>
          <select
            value={formData.assignedTo}
            onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none"
            required
          >
            <option value="" className="bg-gray-900">Seleccionar agente...</option>
            {agents.map(agent => (
              <option key={agent.id} value={agent.id} className="bg-gray-900">
                {agent.name} - {agent.role}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Fecha objetivo</label>
            <input
              type="date"
              value={formData.targetDate}
              onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Estado</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as Objective['status'] })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none"
            >
              <option value="not-started" className="bg-gray-900">No iniciado</option>
              <option value="in-progress" className="bg-gray-900">En progreso</option>
              <option value="completed" className="bg-gray-900">Completado</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Progreso: {formData.progress}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={formData.progress}
            onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
            className="w-full accent-cyan-500"
          />
        </div>

        <div className="flex gap-3 pt-4 border-t border-white/10">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium"
          >
            {editingObjective ? 'Actualizar' : 'Crear'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-all"
          >
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
}
