import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Zap, FileText, Users, Settings, Home, Target, Briefcase } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function CommandPalette() {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { isCommandPaletteOpen, setCommandPaletteOpen, agents, tasks, objectives } = useAppStore();

  const commands = [
    { id: 'home', label: 'Ir al Dashboard', icon: <Home className="w-4 h-4" />, action: () => navigate('/'), category: 'Navegación' },
    { id: 'agents', label: 'Ver Agentes', icon: <Users className="w-4 h-4" />, action: () => navigate('/agents'), category: 'Navegación' },
    { id: 'tasks', label: 'Ver Tareas', icon: <Zap className="w-4 h-4" />, action: () => navigate('/tasks'), category: 'Navegación' },
    { id: 'objectives', label: 'Ver Objetivos', icon: <Target className="w-4 h-4" />, action: () => navigate('/objectives'), category: 'Navegación' },
    { id: 'files', label: 'Ver Archivos', icon: <FileText className="w-4 h-4" />, action: () => navigate('/files'), category: 'Navegación' },
    { id: 'apps', label: 'Ver Apps', icon: <Briefcase className="w-4 h-4" />, action: () => navigate('/apps'), category: 'Navegación' },
    { id: 'settings', label: 'Configuración', icon: <Settings className="w-4 h-4" />, action: () => navigate('/settings'), category: 'Navegación' },
    ...agents.map(agent => ({
      id: `agent-${agent.id}`,
      label: `Ver ${agent.name}`,
      icon: <span className="text-sm">{agent.avatar}</span>,
      action: () => navigate(`/agents/${agent.id}`),
      category: 'Agentes',
    })),
    ...tasks.slice(0, 5).map(task => ({
      id: `task-${task.id}`,
      label: task.title,
      icon: <Zap className="w-4 h-4" />,
      action: () => navigate('/tasks'),
      category: 'Tareas',
    })),
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!isCommandPaletteOpen);
      }
      if (e.key === 'Escape' && isCommandPaletteOpen) {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setCommandPaletteOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isCommandPaletteOpen) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault();
        filteredCommands[selectedIndex].action();
        setCommandPaletteOpen(false);
        setQuery('');
        setSelectedIndex(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, selectedIndex, filteredCommands, setCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4"
        onClick={() => setCommandPaletteOpen(false)}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-2xl glass rounded-2xl overflow-hidden border border-cyan-500/20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
            <Search className="w-5 h-5 text-cyan-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
              placeholder="Buscar agentes, tareas, comandos..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              autoFocus
            />
            <button onClick={() => setCommandPaletteOpen(false)} className="p-1 hover:bg-white/10 rounded-lg">
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <div className="max-h-[400px] overflow-y-auto p-2">
            {filteredCommands.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500">No se encontraron resultados</div>
            ) : (
              filteredCommands.map((cmd, index) => (
                <button
                  key={cmd.id}
                  onClick={() => { cmd.action(); setCommandPaletteOpen(false); setQuery(''); setSelectedIndex(0); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${
                    index === selectedIndex ? 'bg-cyan-500/20 border border-cyan-500/30' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">{cmd.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white">{cmd.label}</div>
                  </div>
                  <div className="text-xs text-gray-500">{cmd.category}</div>
                </button>
              ))
            )}
          </div>
          <div className="px-4 py-2 border-t border-white/10 text-xs text-gray-500 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>↑↓ Navegar</span>
              <span>↵ Seleccionar</span>
              <span>esc Cerrar</span>
            </div>
            <span>⌘K</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
