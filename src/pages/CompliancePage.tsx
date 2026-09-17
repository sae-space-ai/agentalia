import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, FileText, TrendingUp, Clock } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function CompliancePage() {
  const { agents, tasks, objectives } = useAppStore();
  const guardian = agents.find(a => a.id === 'guardian');
  const guardianTasks = tasks.filter(t => t.assignedTo === 'guardian');
  const guardianObjectives = objectives.filter(o => o.assignedTo === 'guardian');

  const complianceMetrics = {
    aiActCompliance: 78,
    rgpdCompliance: 85,
    riskScore: 23,
    pendingAudits: 3,
    certifications: 2,
    totalSystems: 12,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Shield className="w-8 h-8 text-emerald-400" />
            Cumplimiento Normativo UE
          </h1>
          <p className="text-gray-400 mt-2">
            AI Act & RGPD - Monitoreo y Certificación Continua
          </p>
        </div>
        
        <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-emerald-400">Monitoreo Activo</span>
        </div>
      </motion.div>

      {/* Agent Info Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-6 border border-emerald-500/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-3xl">
            🛡️
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-1">{guardian?.name}</h2>
            <p className="text-emerald-400 text-sm font-medium mb-2">{guardian?.role}</p>
            <p className="text-gray-400 text-sm">{guardian?.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Compliance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-2xl font-bold text-white">{complianceMetrics.aiActCompliance}%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-300 mb-1">Cumplimiento AI Act</h3>
          <div className="w-full bg-white/5 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
              style={{ width: `${complianceMetrics.aiActCompliance}%` }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-2xl font-bold text-white">{complianceMetrics.rgpdCompliance}%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-300 mb-1">Cumplimiento RGPD</h3>
          <div className="w-full bg-white/5 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
              style={{ width: `${complianceMetrics.rgpdCompliance}%` }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-2xl font-bold text-white">{complianceMetrics.riskScore}</span>
          </div>
          <h3 className="text-sm font-medium text-gray-300 mb-1">Nivel de Riesgo</h3>
          <p className="text-xs text-gray-400 mt-2">Bajo - Sin sanciones inminentes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-white">{complianceMetrics.pendingAudits}</span>
          </div>
          <h3 className="text-sm font-medium text-gray-300 mb-1">Auditorías Pendientes</h3>
          <p className="text-xs text-gray-400 mt-2">Requieren atención</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-2xl font-bold text-white">{complianceMetrics.certifications}</span>
          </div>
          <h3 className="text-sm font-medium text-gray-300 mb-1">Certificaciones Activas</h3>
          <p className="text-xs text-gray-400 mt-2">AI Act & RGPD</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-2xl font-bold text-white">{complianceMetrics.totalSystems}</span>
          </div>
          <h3 className="text-sm font-medium text-gray-300 mb-1">Sistemas Monitoreados</h3>
          <p className="text-xs text-gray-400 mt-2">En tiempo real</p>
        </motion.div>
      </div>

      {/* AI Act Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-400" />
          AI Act - Regulación de Inteligencia Artificial
        </h2>
        <div className="space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Clasificación de Riesgos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 font-medium text-sm">Alto Riesgo</p>
                <p className="text-white text-2xl font-bold">3</p>
                <p className="text-xs text-gray-400">Sistemas críticos</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-400 font-medium text-sm">Riesgo Limitado</p>
                <p className="text-white text-2xl font-bold">5</p>
                <p className="text-xs text-gray-400">Obligaciones transparencia</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 font-medium text-sm">Riesgo Mínimo</p>
                <p className="text-white text-2xl font-bold">4</p>
                <p className="text-xs text-gray-400">Sin restricciones</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Requisitos Clave</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Evaluación de conformidad para sistemas de alto riesgo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Documentación técnica y registro de actividades</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Transparencia y información a usuarios</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Supervisión humana para sistemas críticos (en progreso)</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* RGPD Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-purple-400" />
          RGPD - Protección de Datos Personales
        </h2>
        <div className="space-y-4">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Estado de Cumplimiento</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-purple-400 font-medium text-xs mb-1">Registro Tratamientos</p>
                <p className="text-white text-lg font-bold">✓ Completo</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-purple-400 font-medium text-xs mb-1">Consentimiento</p>
                <p className="text-white text-lg font-bold">✓ Válido</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-purple-400 font-medium text-xs mb-1">Derechos ARCO</p>
                <p className="text-white text-lg font-bold">✓ Implementado</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-purple-400 font-medium text-xs mb-1">DPO Designado</p>
                <p className="text-white text-lg font-bold">✓ Activo</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Medidas de Seguridad</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Cifrado de datos en tránsito y en reposo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Control de acceso basado en roles (RBAC)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Procedimiento de notificación de brechas (72h)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Evaluaciones de impacto (DPIA) completadas</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Tasks & Objectives */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tasks */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Tareas de Cumplimiento</h2>
          <div className="space-y-3">
            {guardianTasks.map((task) => (
              <div key={task.id} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-white text-sm">{task.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    task.priority === 'critical' ? 'bg-red-500/20 text-red-400' :
                    task.priority === 'high' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {task.priority}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{task.description}</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className={`px-2 py-0.5 rounded-full ${
                    task.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    task.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {task.status === 'completed' ? 'Completada' :
                     task.status === 'in-progress' ? 'En progreso' : 'Pendiente'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Objetivos de Certificación</h2>
          <div className="space-y-4">
            {guardianObjectives.map((obj) => (
              <div key={obj.id} className="bg-white/5 rounded-lg p-4">
                <h3 className="font-medium text-white mb-2">{obj.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{obj.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Progreso</span>
                    <span className="font-medium text-white">{obj.progress}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all"
                      style={{ width: `${obj.progress}%` }}
                    />
                  </div>
                </div>
                {obj.keyResults && obj.keyResults.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-xs text-gray-400 mb-2">Resultados clave:</p>
                    <ul className="space-y-1">
                      {obj.keyResults.slice(0, 3).map((kr, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          <span>{kr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sanctions Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="glass rounded-2xl p-6 border border-red-500/20 bg-red-500/5"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Sanciones Potenciales</h3>
            <p className="text-gray-300 text-sm mb-3">
              El incumplimiento de AI Act y RGPD puede resultar en sanciones significativas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 font-medium text-sm mb-1">AI Act</p>
                <p className="text-white text-xl font-bold">Hasta 35M€</p>
                <p className="text-xs text-gray-400">o 7% del volumen de negocios</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 font-medium text-sm mb-1">RGPD</p>
                <p className="text-white text-xl font-bold">Hasta 20M€</p>
                <p className="text-xs text-gray-400">o 4% del volumen de negocios</p>
              </div>
            </div>
            <p className="text-emerald-400 text-sm mt-3 font-medium">
              ✓ Guardian está monitoreando activamente para prevenir sanciones
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
