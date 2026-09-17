import { useState } from 'react';
import { useAppStore } from '../store/appStore';
import { toast } from 'sonner';
import type { Agent } from '../data/schema';
import Modal from './Modal';

interface AgentFormProps {
  isOpen: boolean;
  onClose: () => void;
  editingAgent?: Agent | null;
}

const avatarOptions = ['⚡', '🧠', '🌐', '🚀', '🔮', '✨', '🛡️', '🎯', '💎', '🔥', '⚙️', '🤖'];
const colorOptions = [
  { name: 'Cyan', value: 'from-cyan-500 to-blue-600', glow: 'cyan' },
  { name: 'Purple', value: 'from-purple-500 to-pink-600', glow: 'purple' },
  { name: 'Blue', value: 'from-blue-500 to-indigo-600', glow: 'blue' },
  { name: 'Green', value: 'from-green-500 to-emerald-600', glow: 'green' },
  { name: 'Violet', value: 'from-violet-500 to-purple-600', glow: 'violet' },
  { name: 'Pink', value: 'from-pink-500 to-rose-600', glow: 'pink' },
  { name: 'Emerald', value: 'from-emerald-500 to-teal-600', glow: 'green' },
  { name: 'Orange', value: 'from-orange-500 to-red-600', glow: 'orange' },
];

export default function AgentForm({ isOpen, onClose, editingAgent }: AgentFormProps) {
  const { addAgent, updateAgent } = useAppStore();
  
  const [formData, setFormData] = useState({
    name: editingAgent?.name || '',
    role: editingAgent?.role || '',
    avatar: editingAgent?.avatar || '⚡',
    color: editingAgent?.color || 'from-cyan-500 to-blue-600',
    glowColor: editingAgent?.glowColor || 'cyan',
    description: editingAgent?.description || '',
    status: editingAgent?.status || 'active' as Agent['status'],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.role) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    if (editingAgent) {
      updateAgent(editingAgent.id, formData);
      toast.success('Agente actualizado correctamente');
    } else {
      const newAgent: Agent = {
        id: `agent-${Date.now()}`,
        ...formData,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        skills: [],
        tasks: [],
        objectives: [],
        routines: [],
      };
      addAgent(newAgent);
      toast.success('Agente creado correctamente');
    }

    onClose();
  };

  const handleColorChange = (colorValue: string, glowColor: string) => {
    setFormData({ ...formData, color: colorValue, glowColor });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={editingAgent ? 'Editar Agente' : 'Nuevo Agente'} size="md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar Selection */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Avatar</label>
          <div className="grid grid-cols-6 gap-2">
            {avatarOptions.map((avatar) => (
              <button
                key={avatar}
                type="button"
                onClick={() => setFormData({ ...formData, avatar })}
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-all ${
                  formData.avatar === avatar
                    ? 'bg-cyan-500/20 border-2 border-cyan-500'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                {avatar}
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Nombre <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ej: Agentalia Nexus"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none"
            required
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Rol <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            placeholder="Ej: Neural Orchestrator"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none"
            required
          />
        </div>

        {/* Color Selection */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Color</label>
          <div className="grid grid-cols-4 gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => handleColorChange(color.value, color.glow)}
                className={`h-12 rounded-lg bg-gradient-to-br ${color.value} transition-all ${
                  formData.color === color.value
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900'
                    : 'opacity-60 hover:opacity-100'
                }`}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Descripción</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe las capacidades y funciones del agente..."
            rows={4}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none resize-none"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Estado</label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as Agent['status'] })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none"
          >
            <option value="active" className="bg-gray-900">Activo</option>
            <option value="idle" className="bg-gray-900">Inactivo</option>
            <option value="processing" className="bg-gray-900">Procesando</option>
            <option value="offline" className="bg-gray-900">Desconectado</option>
          </select>
        </div>

        {/* Preview */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-2">Vista previa:</p>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${formData.color} flex items-center justify-center text-2xl`}>
              {formData.avatar}
            </div>
            <div>
              <h4 className="font-semibold text-white">{formData.name || 'Nombre del agente'}</h4>
              <p className="text-sm text-gray-400">{formData.role || 'Rol del agente'}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium"
          >
            {editingAgent ? 'Actualizar Agente' : 'Crear Agente'}
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
