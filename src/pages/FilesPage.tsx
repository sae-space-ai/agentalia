import { useAppStore } from '../store/appStore';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Archivos</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Documentos gestionados por tus agentes</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="grid grid-cols-[1fr,100px,100px,120px] gap-4 px-6 py-3 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
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
            className="grid grid-cols-[1fr,100px,100px,120px] gap-4 px-6 py-4 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-white">{file.name}</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{formatFileSize(file.size)}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{file.space}</div>
            <div>
              <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <Download className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
