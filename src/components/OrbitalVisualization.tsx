import { motion } from 'framer-motion';
import { useAppStore } from '../store/appStore';

export default function OrbitalVisualization() {
  const { agents } = useAppStore();
  const regularAgents = agents.filter(a => !a.isOrchestrator);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Orbital rings */}
      <div className="absolute w-[300px] h-[300px] border border-cyan-500/20 rounded-full animate-pulse-slow" />
      <div className="absolute w-[400px] h-[400px] border border-purple-500/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute w-[500px] h-[500px] border border-pink-500/20 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Center core - Agentalia Nexus */}
      <motion.div
        className="absolute z-20 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center glow-cyan"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
          <span className="text-3xl">⚡</span>
        </div>
      </motion.div>

      {/* Agent nodes */}
      {regularAgents.map((agent, index) => {
        const angle = (index * (360 / regularAgents.length)) * (Math.PI / 180);
        const radius = 150 + (index % 2) * 50;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={agent.id}
            className="absolute z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              x: x,
              y: y,
            }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className={`w-14 h-14 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center text-2xl border-2 border-white/20 backdrop-blur-sm cursor-pointer`}
              style={{
                boxShadow: `0 0 30px rgba(${
                  agent.glowColor === 'cyan' ? '6, 182, 212' :
                  agent.glowColor === 'purple' ? '168, 85, 247' :
                  agent.glowColor === 'blue' ? '59, 130, 246' :
                  agent.glowColor === 'green' ? '34, 197, 94' :
                  agent.glowColor === 'violet' ? '139, 92, 246' :
                  '236, 72, 153'
                }, 0.6)`
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
              title={agent.name}
            >
              {agent.avatar}
            </motion.div>
            
            {/* Agent name label */}
            <motion.div
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <div className="glass px-2 py-1 rounded-lg text-xs font-medium">
                {agent.name.split(' ')[1]}
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
