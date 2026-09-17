import { useState } from 'react';

interface SidebarProps {
  activeView: 'agents' | 'chat' | 'metrics';
  setActiveView: (view: 'agents' | 'chat' | 'metrics') => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ activeView, setActiveView, isOpen }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'agents' as const, icon: '🤖', label: 'Agents', badge: '6' },
    { id: 'chat' as const, icon: '💬', label: 'Maestro', badge: null },
    { id: 'metrics' as const, icon: '📊', label: 'Metrics', badge: null },
  ];

  const bottomItems = [
    { icon: '⚙️', label: 'Settings' },
    { icon: '🔗', label: 'Connectors' },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0 lg:w-16'
      } flex flex-col bg-[#0d0d14] border-r border-white/5 transition-all duration-300 overflow-hidden shrink-0`}
    >
      {/* Logo */}
      <div className="p-4 flex items-center gap-3 border-b border-white/5 h-16">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </div>
        {isOpen && (
          <div className="flex flex-col">
            <span className="font-semibold text-sm">Symphony</span>
            <span className="text-[10px] text-gray-500">by Wix</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {isOpen && (
          <p className="text-[10px] uppercase tracking-wider text-gray-500 px-3 mb-2 mt-2">
            Workspace
          </p>
        )}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
              activeView === item.id
                ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                : hoveredItem === item.id
                ? 'bg-white/5 text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-base shrink-0">{item.icon}</span>
            {isOpen && (
              <>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom items */}
      <div className="p-3 border-t border-white/5 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <span className="text-base shrink-0">{item.icon}</span>
            {isOpen && <span>{item.label}</span>}
          </button>
        ))}

        {/* User avatar */}
        {isOpen && (
          <div className="flex items-center gap-3 px-3 py-3 mt-2 rounded-lg bg-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-xs font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-[10px] text-gray-500">Free Plan</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
