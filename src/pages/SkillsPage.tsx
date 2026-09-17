import { useAppStore } from '../store/appStore';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SkillsPage() {
  const { skills } = useAppStore();

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Habilidades</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Capacidades disponibles para tus agentes</p>
      </div>

      <div className="space-y-6">
        {Object.entries(skillsByCategory).map(([category, categorySkills], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{category}</h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {categorySkills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{skill.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{skill.description}</p>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${skill.isEnabled ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.isEnabled ? 'Habilitada' : 'Deshabilitada'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
