import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function FilesPage() {
  const { files } = useAppStore();

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Archivos</h1>
        <p className="text-gray-400 mt-1">Documentos gestionados por tus agentes</p>
      </div>

      <div className="glass rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1fr,100px,100px,120px] gap-4 px-6 py-3 bg-white/5 border-b border-white/10 text-sm font-medium text-gray-300">
          <div>Nombre</div>
          <div>Tamaño</div>
          <div>Espacio</div>
          <div>Acciones</div>
        </div>
        
        {files.map((file, index) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="grid grid-cols-[1fr,100px,100px,120px] gap-4 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-white">{file.name}</span>
            </div>
            <div className="text-sm text-gray-400">{formatFileSize(file.size)}</div>
            <div className="text-sm text-gray-400">{file.space}</div>
            <div>
              <button className="p-1.5 rounded-lg hover:bg-white/10 transition-all">
                <Download className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
