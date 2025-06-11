
import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ChatMessage {
  role: 'bot' | 'user';
  content: string;
}

const SentimentPanel = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'bot',
      content: "Hello! I'm TrendBot, your AI market analyst. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (chatRef.current) {
      anime({
        targets: chatRef.current,
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 800,
        easing: 'easeOutCubic'
      });
    }
  }, []);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      anime({
        targets: '.chat-message:last-child',
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 600,
        easing: 'easeOutCubic'
      });
      
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    
    // Simulate bot response
    setTimeout(() => {
      let response;
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('tech') || lowerInput.includes('technology')) {
        response = "Based on my analysis of recent market data and news sentiment, the tech sector is showing strong bullish patterns. AI and semiconductor stocks are particularly strong, with 72% positive sentiment based on 1,245 analyzed news articles from the past 24 hours.";
      } else if (lowerInput.includes('energy') || lowerInput.includes('oil')) {
        response = "Energy stocks are showing mixed signals right now. While oil prices have stabilized, there's increased volatility in the sector due to geopolitical tensions and evolving regulatory landscapes. Sentiment is neutral with a slight bearish bias.";
      } else if (lowerInput.includes('market') || lowerInput.includes('trend')) {
        response = "The broader market is currently trending upward with moderate momentum. Key indices show positive technical indicators, with major support levels holding firm. Institutional money flow has been net positive over the past 7 trading sessions.";
      } else {
        response = "I've analyzed that topic using data from financial news, market trends, and technical indicators. The current sentiment appears mixed, with some positive signals counterbalanced by potential headwinds. Would you like me to provide more specific insights about a particular aspect?";
      }
      
      setMessages(prev => [...prev, { role: 'bot', content: response }]);
    }, 1000);
    
    setInput('');
  };
  
  return (
    <div ref={chatRef} className="flex flex-col h-[500px] opacity-0">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 bg-muted/20 rounded-md border border-muted">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`chat-message flex items-start ${
              msg.role === 'bot' ? '' : 'justify-end'
            }`}
          >
            {msg.role === 'bot' && (
              <div className="mr-3 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-neon font-medium">
                T
              </div>
            )}
            
            <div className={`${
              msg.role === 'bot' 
                ? 'bg-muted/30 rounded-lg p-3 max-w-[80%]'
                : 'bg-neon/20 rounded-lg p-3 max-w-[80%]'
            }`}>
              <p className="text-sm">{msg.content}</p>
            </div>
            
            {msg.role === 'user' && (
              <div className="ml-3 w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center">
                <span className="text-neon font-medium">U</span>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="relative">
        <input 
          type="text" 
          className="w-full p-4 rounded-md bg-muted/20 border border-muted focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
          placeholder="Ask TrendBot a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button 
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neon hover:text-neon-hover bg-transparent"
        >
          <Send size={20} />
        </Button>
      </form>
    </div>
  );
};

export default SentimentPanel;
