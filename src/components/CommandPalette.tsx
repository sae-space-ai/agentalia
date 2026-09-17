import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Zap, FileText, Users, Settings, Home } from 'lucide-react';
import { useAppStore } from '../store/appStore';

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
}

export default function CommandPalette() {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { isCommandPaletteOpen, setCommandPaletteOpen, agents, tasks } = useAppStore();

  const commands: CommandItem[] = [
    {
      id: 'home',
      label: 'Ir al Dashboard',
      description: 'Volver a la página principal',
      icon: <Home className="w-4 h-4" />,
      action: () => navigate('/'),
      category: 'Navegación',
    },
    {
      id: 'agents',
      label: 'Ver Agentes',
      description: 'Ver todos los agentes disponibles',
      icon: <Users className="w-4 h-4" />,
      action: () => navigate('/agents'),
      category: 'Navegación',
    },
    {
      id: 'tasks',
      label: 'Ver Tareas',
      description: 'Gestionar tareas pendientes',
      icon: <Zap className="w-4 h-4" />,
      action: () => navigate('/tasks'),
      category: 'Navegación',
    },
    {
      id: 'files',
      label: 'Ver Archivos',
      description: 'Explorar archivos del sistema',
      icon: <FileText className="w-4 h-4" />,
      action: () => navigate('/files'),
      category: 'Navegación',
    },
    {
      id: 'settings',
      label: 'Configuración',
      description: 'Ajustes de la aplicación',
      icon: <Settings className="w-4 h-4" />,
      action: () => navigate('/settings'),
      category: 'Navegación',
    },
    ...agents.slice(0, 5).map(agent => ({
      id: `agent-${agent.id}`,
      label: `Ver ${agent.name}`,
      description: agent.role,
      icon: <span className="text-sm">{agent.avatar}</span>,
      action: () => navigate(`/agents/${agent.id}`),
      category: 'Agentes',
    })),
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.description?.toLowerCase().includes(query.toLowerCase())
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
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          setCommandPaletteOpen(false);
          setQuery('');
          setSelectedIndex(0);
        }
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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Buscar comandos, agentes, tareas..."
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400"
              autoFocus
            />
            <button
              onClick={() => setCommandPaletteOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {filteredCommands.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500">
                No se encontraron resultados
              </div>
            ) : (
              <div className="p-2">
                {filteredCommands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      cmd.action();
                      setCommandPaletteOpen(false);
                      setQuery('');
                      setSelectedIndex(0);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      index === selectedIndex
                        ? 'bg-gray-100'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      {cmd.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900">{cmd.label}</div>
                      {cmd.description && (
                        <div className="text-xs text-gray-500 truncate">{cmd.description}</div>
                      )}
                    </div>
                    <div className="text-xs text-gray-400">{cmd.category}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>↑↓ Navegar</span>
              <span>↵ Seleccionar</span>
              <span>esc Cerrar</span>
            </div>
            <span>⌘K para abrir</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
