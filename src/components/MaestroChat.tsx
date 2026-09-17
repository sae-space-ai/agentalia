import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'maestro';
  content: string;
  timestamp: string;
  agentAction?: {
    agent: string;
    action: string;
    status: 'completed' | 'pending' | 'in-progress';
  };
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'maestro',
    content: "Good morning, John! 👋 I've been reviewing your business overnight. Here's what I found:\n\n• 3 new leads came in from your website\n• Your marketing campaign is performing 15% above average\n• You have 2 meetings scheduled for today\n\nWould you like me to follow up with the new leads?",
    timestamp: '9:00 AM',
  },
  {
    id: '2',
    role: 'user',
    content: 'Yes, please follow up with the leads. Also, can you draft a social media post about our new service?',
    timestamp: '9:02 AM',
  },
  {
    id: '3',
    role: 'maestro',
    content: "On it! I'm delegating now:\n\n✅ **Outreach Agent** is sending personalized follow-up emails to your 3 new leads\n✅ **Marketing Agent** is drafting a social media post about your new service\n\nI'll share the outputs as soon as they're ready. The emails will be sent for your approval within the next few minutes.",
    timestamp: '9:02 AM',
    agentAction: {
      agent: 'Outreach Agent',
      action: 'Sending follow-up emails to 3 leads',
      status: 'in-progress',
    },
  },
  {
    id: '4',
    role: 'maestro',
    content: "Here's the draft from the Marketing Agent for your review:\n\n---\n🚀 **Exciting News!** We're thrilled to announce our newest service offering. Designed to help businesses like yours grow faster and smarter.\n\nReady to take the next step? DM us or visit our website to learn more!\n\n#BusinessGrowth #Innovation #NewService\n---\n\nShall I schedule this for posting, or would you like any changes?",
    timestamp: '9:05 AM',
    agentAction: {
      agent: 'Marketing Agent',
      action: 'Social media post draft ready',
      status: 'pending',
    },
  },
];

export default function MaestroChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: String(Date.now()),
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate Maestro response
    setTimeout(() => {
      const response: Message = {
        id: String(Date.now() + 1),
        role: 'maestro',
        content: "I understand! Let me coordinate the right agents to handle this. I'll have an update for you shortly. In the meantime, is there anything else you'd like me to look into?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-6">
        {/* Maestro intro */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-sm">Maestro</h3>
            <p className="text-[10px] text-gray-500">Your AI Orchestrator • Always ready</p>
          </div>
        </div>

        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${message.role === 'user' ? 'order-1' : 'order-1'}`}>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-[#14141f] border border-white/5 text-gray-200'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>

              {/* Agent action indicator */}
              {message.agentAction && (
                <div className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg bg-[#14141f] border border-white/5">
                  <div className={`w-2 h-2 rounded-full ${
                    message.agentAction.status === 'completed' ? 'bg-green-400' :
                    message.agentAction.status === 'in-progress' ? 'bg-blue-400 animate-pulse' :
                    'bg-yellow-400'
                  }`} />
                  <span className="text-[10px] text-gray-400">
                    <span className="text-gray-300 font-medium">{message.agentAction.agent}</span>
                    {' — '}
                    {message.agentAction.action}
                  </span>
                </div>
              )}

              <p className={`text-[10px] mt-1 ${message.role === 'user' ? 'text-right' : ''} text-gray-600`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#14141f] border border-white/5 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick actions */}
      <div className="px-4 lg:px-8 pb-2">
        <div className="flex flex-wrap gap-2">
          {[
            '📊 Show me today\'s metrics',
            '📧 Check my inbox',
            '📅 What\'s on my calendar?',
            '🚀 Suggest growth ideas',
          ].map((action) => (
            <button
              key={action}
              onClick={() => {
                setInput(action);
              }}
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="p-4 lg:px-8 lg:pb-6">
        <div className="flex items-center gap-3 bg-[#14141f] border border-white/10 rounded-xl px-4 py-3 focus-within:border-purple-500/30 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tell Maestro what you need..."
            className="flex-1 bg-transparent text-sm outline-none text-white placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:from-purple-500 hover:to-blue-500 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-gray-600 text-center mt-2">
          Maestro coordinates your agents. All actions require your approval before execution.
        </p>
      </div>
    </div>
  );
}
