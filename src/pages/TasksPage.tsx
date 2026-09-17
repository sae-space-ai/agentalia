import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit2, CheckCircle, Clock, AlertCircle, X } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { toast } from 'sonner';
import type { Task } from '../data/schema';

export default function TasksPage() {
  const { tasks, agents, addTask, updateTask, deleteTask } = useAppStore();
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '', priority: 'medium' as Task['priority'], assignedTo: '', dueDate: '' });

  const handleSubmit = () => {
    if (!formData.title || !formData.assignedTo) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    if (editingTask) {
      updateTask(editingTask.id, formData);
      toast.success('Tarea actualizada correctamente');
    } else {
      const newTask: Task = {
        id: `task-${Date.now()}`,
        ...formData,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };
      addTask(newTask);
      toast.success('Tarea creada correctamente');
    }

    setShowForm(false);
    setEditingTask(null);
    setFormData({ title: '', description: '', priority: 'medium', assignedTo: '', dueDate: '' });
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      description: task.description,
      priority: task.priority,
      assignedTo: task.assignedTo,
      dueDate: task.dueDate || '',
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    deleteTask(id);
    toast.success('Tarea eliminada');
  };

  const handleStatusChange = (id: string, status: Task['status']) => {
    updateTask(id, { status, completedAt: status === 'completed' ? new Date().toISOString() : undefined });
    toast.success(`Tarea marcada como ${status === 'completed' ? 'completada' : status}`);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-400" />;
      case 'pending': return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Tareas</h1>
          <p className="text-gray-400 mt-1">Gestiona las tareas de tus agentes</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditingTask(null); setFormData({ title: '', description: '', priority: 'medium', assignedTo: '', dueDate: '' }); }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span className="font-medium">Nueva tarea</span>
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass rounded-2xl p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{editingTask ? 'Editar tarea' : 'Nueva tarea'}</h3>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-white/10 rounded-lg">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Título de la tarea"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none"
              />
              <select
                value={formData.assignedTo}
                onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none"
              >
                <option value="" className="bg-gray-900">Asignar a...</option>
                {agents.map(agent => (
                  <option key={agent.id} value={agent.id} className="bg-gray-900">{agent.name}</option>
                ))}
              </select>
              <textarea
                placeholder="Descripción"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none md:col-span-2"
                rows={3}
              />
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as Task['priority'] })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none"
              >
                <option value="low" className="bg-gray-900">Baja</option>
                <option value="medium" className="bg-gray-900">Media</option>
                <option value="high" className="bg-gray-900">Alta</option>
                <option value="critical" className="bg-gray-900">Crítica</option>
              </select>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={handleSubmit} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium">
                {editingTask ? 'Actualizar' : 'Crear'}
              </button>
              <button onClick={() => setShowForm(false)} className="px-6 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-all">
                Cancelar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-4">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass rounded-xl p-5 hover:border-cyan-500/20 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">{getStatusIcon(task.status)}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white mb-1">{task.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{task.description}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{agents.find(a => a.id === task.assignedTo)?.avatar}</span>
                    <span className="text-sm text-gray-300">{agents.find(a => a.id === task.assignedTo)?.name}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                    {task.status === 'completed' ? 'Completada' : task.status === 'in-progress' ? 'En progreso' : task.status === 'pending' ? 'Pendiente' : 'Cancelada'}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(task)} className="p-2 hover:bg-white/10 rounded-lg transition-all">
                  <Edit2 className="w-4 h-4 text-gray-400" />
                </button>
                <button onClick={() => handleDelete(task.id)} className="p-2 hover:bg-red-500/20 rounded-lg transition-all">
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
                {task.status !== 'completed' && (
                  <button onClick={() => handleStatusChange(task.id, 'completed')} className="px-3 py-1.5 text-sm bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all border border-green-500/30">
                    Completar
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
