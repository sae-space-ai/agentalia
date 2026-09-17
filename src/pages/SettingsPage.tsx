import { Settings, Moon, Sun, Bell, Shield, Database } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { theme, toggleTheme } = useAppStore();

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-white">Configuración</h1>
        <p className="text-gray-400 mt-1">Personaliza tu experiencia en Agentalia</p>
      </div>

      <div className="space-y-4">
        <div className="glass rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-white">Apariencia</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Tema</h3>
                <p className="text-sm text-gray-400">Elige entre tema claro u oscuro</p>
              </div>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-all"
              >
                {theme === 'light' ? (
                  <>
                    <Sun className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-white">Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-white">Oscuro</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-white">Notificaciones</h2>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-300">Notificaciones por email</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-cyan-500" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-300">Notificaciones push</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-cyan-500" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-300">Resumen semanal</span>
              <input type="checkbox" className="w-4 h-4 rounded accent-cyan-500" />
            </label>
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-white">Privacidad y Seguridad</h2>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-300">Autenticación de dos factores</span>
              <input type="checkbox" className="w-4 h-4 rounded accent-cyan-500" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-300">Compartir datos de uso</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-cyan-500" />
            </label>
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-white">Datos</h2>
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={() => {
                const data = localStorage.getItem('agentalia-storage');
                if (data) {
                  const blob = new Blob([data], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `agentalia-backup-${new Date().toISOString().split('T')[0]}.json`;
                  a.click();
                  URL.revokeObjectURL(url);
                  toast.success('Datos exportados correctamente');
                }
              }}
              className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/5 rounded-lg transition-all"
            >
              Exportar datos
            </button>
            <button 
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'application/json';
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      try {
                        const data = JSON.parse(e.target?.result as string);
                        localStorage.setItem('agentalia-storage', JSON.stringify(data));
                        toast.success('Datos importados correctamente. Recargando...');
                        setTimeout(() => window.location.reload(), 1500);
                      } catch (error) {
                        toast.error('Error al importar datos: archivo inválido');
                      }
                    };
                    reader.readAsText(file);
                  }
                };
                input.click();
              }}
              className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/5 rounded-lg transition-all"
            >
              Importar datos
            </button>
            <button 
              onClick={() => {
                if (window.confirm('¿Estás seguro de que quieres eliminar TODOS los datos? Esta acción no se puede deshacer.')) {
                  localStorage.removeItem('agentalia-storage');
                  toast.success('Todos los datos han sido eliminados. Recargando...');
                  setTimeout(() => window.location.reload(), 1500);
                }
              }}
              className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
            >
              Eliminar todos los datos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
