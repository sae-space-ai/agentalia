import { useState } from 'react';
import { useAppStore } from '../store/appStore';
import { toast } from 'sonner';
import type { Routine } from '../data/schema';
import Modal from './Modal';

interface RoutineFormProps {
  isOpen: boolean;
  onClose: () => void;
  editingRoutine?: Routine | null;
}

export default function RoutineForm({ isOpen, onClose, editingRoutine }: RoutineFormProps) {
  const { addRoutine, updateRoutine, agents } = useAppStore();
  
  const [formData, setFormData] = useState({
    name: editingRoutine?.name || '',
    description: editingRoutine?.description || '',
    frequency: editingRoutine?.frequency || 'daily' as Routine['frequency'],
    schedule: editingRoutine?.schedule || '',
    assignedTo: editingRoutine?.assignedTo || '',
    isActive: editingRoutine?.isActive ?? true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.assignedTo) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    if (editingRoutine) {
      updateRoutine(editingRoutine.id, formData);
      toast.success('Rutina actualizada correctamente');
    } else {
      const newRoutine: Routine = {
        id: `routine-${Date.now()}`,
        ...formData,
        createdAt: new Date().toISOString(),
      };
      addRoutine(newRoutine);
      toast.success('Rutina creada correctamente');
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={editingRoutine ? 'Editar Rutina' : 'Nueva Rutina'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Nombre <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ej: Monitoreo diario de cumplimiento"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Descripción</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe qué hace esta rutina..."
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
            <label className="block text-sm font-medium text-white mb-2">Frecuencia</label>
            <select
              value={formData.frequency}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value as Routine['frequency'] })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none"
            >
              <option value="hourly" className="bg-gray-900">Cada hora</option>
              <option value="daily" className="bg-gray-900">Diaria</option>
              <option value="weekly" className="bg-gray-900">Semanal</option>
              <option value="monthly" className="bg-gray-900">Mensual</option>
              <option value="custom" className="bg-gray-900">Personalizada</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Horario</label>
            <input
              type="text"
              value={formData.schedule}
              onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
              placeholder="Ej: 09:00"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none"
            />
          </div>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.isActive}
            onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
            className="w-4 h-4 rounded accent-cyan-500"
          />
          <span className="text-sm text-white">Rutina activa</span>
        </label>

        <div className="flex gap-3 pt-4 border-t border-white/10">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium"
          >
            {editingRoutine ? 'Actualizar' : 'Crear'}
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
