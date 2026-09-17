import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, Users, CheckCircle, Target, Zap, FileText, 
  Grid3X3, Settings, Search, Moon, Sun, Bell, Command,
  Lightbulb
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import CommandPalette from './CommandPalette';
import { Toaster } from 'sonner';

export default function Layout() {
  const { theme, toggleTheme, setCommandPaletteOpen } = useAppStore();
  const location = useLocation();

  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/agents', icon: Users, label: 'Agentes' },
    { to: '/tasks', icon: CheckCircle, label: 'Tareas' },
    { to: '/objectives', icon: Target, label: 'Objetivos' },
    { to: '/routines', icon: Zap, label: 'Rutinas' },
    { to: '/files', icon: FileText, label: 'Archivos' },
    { to: '/apps', icon: Grid3X3, label: 'Apps' },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
      <Toaster 
        position="top-right" 
        theme={theme}
        toastOptions={{
          style: {
            background: theme === 'dark' ? 'rgba(17, 24, 39, 0.9)' : 'white',
            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e5e7eb',
            backdropFilter: 'blur(10px)',
          }
        }}
      />
      <CommandPalette />
      
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 glass border-r border-white/10 z-40 hidden lg:block">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center glow-cyan">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="font-bold text-white text-glow-cyan">Agentalia</h1>
              <p className="text-xs text-gray-400">AI Platform</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Configuración</span>
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 glass border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCommandPaletteOpen(true)}
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-all"
              >
                <Search className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Buscar...</span>
                <div className="flex items-center gap-1 ml-4 px-2 py-0.5 bg-white/5 rounded border border-white/10">
                  <Command className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">K</span>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-400" />
                ) : (
                  <Sun className="w-5 h-5 text-cyan-400" />
                )}
              </button>

              <button className="relative p-2 rounded-lg hover:bg-white/10 transition-all">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
