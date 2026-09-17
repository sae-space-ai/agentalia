import { useAppStore } from '../store/appStore';

export default function TeamOrbit() {
  const { agents } = useAppStore();
  const regularAgents = agents.filter(a => !a.isOrchestrator);
  const enabledCount = 14;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Tu equipo · {agents.length}</h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{enabledCount} habilitados</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            + Añadir agente
          </button>
        </div>
      </div>

      {/* Orbital visualization */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* Center app icon */}
        <div className="absolute z-10 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 bg-white rounded-full" />
        </div>

        {/* Orbit rings */}
        <div className="absolute w-[200px] h-[200px] border-2 border-dashed border-gray-200 rounded-full" />
        <div className="absolute w-[300px] h-[300px] border-2 border-dashed border-gray-200 rounded-full" />
        <div className="absolute w-[380px] h-[380px] border-2 border-dashed border-gray-200 rounded-full" />

        {/* Agent nodes on orbits */}
        {regularAgents.map((agent, index) => {
          const angle = (index * (360 / regularAgents.length)) * (Math.PI / 180);
          const radius = index % 2 === 0 ? 100 : index % 3 === 0 ? 150 : 190;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={agent.id}
              className="absolute z-20"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div
                className={`w-12 h-12 rounded-full ${agent.color} flex items-center justify-center text-xl shadow-md border-2 border-white cursor-pointer hover:scale-110 transition-transform`}
                title={agent.name}
              >
                {agent.avatar}
              </div>
            </div>
          );
        })}

        {/* Additional decorative dots */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const radius = 120 + (i % 3) * 40;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={`dot-${i}`}
              className="absolute w-2 h-2 bg-gray-400 rounded-full"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
