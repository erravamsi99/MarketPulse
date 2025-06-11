
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, LineChart } from 'lucide-react';
import NumberTicker from '../animations/NumberTicker';

const FeaturedProducts = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-heading">Our Solutions</p>
          <h2 className="section-title">AI-Powered Trading Products</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MarketPulse Core */}
          <div className="card-highlight group">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors duration-300">
              <Brain className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">MarketPulse Core</h3>
            <p className="text-muted-foreground mb-6">
              Real-time stock prediction powered by LSTM neural networks with market-leading accuracy.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-muted-foreground">Accuracy</p>
                <p className="text-xl font-bold">
                  <NumberTicker end={85} suffix="%" />
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Latency</p>
                <p className="text-xl font-bold">
                  <NumberTicker end={50} prefix="<" suffix="ms" />
                </p>
              </div>
            </div>
            <Link to="/products" className="mt-6 text-neon hover:text-neon-hover inline-flex items-center">
              Learn more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M6.75 12.75L11.25 8.25L6.75 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          {/* TrendBot */}
          <div className="card-highlight group">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors duration-300">
              <TrendingUp className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">TrendBot</h3>
            <p className="text-muted-foreground mb-6">
              LLM-based NLP chatbot for real-time market sentiment analysis across news and social media.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-muted-foreground">Sources</p>
                <p className="text-xl font-bold">
                  <NumberTicker end={500} suffix="+" />
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Updates</p>
                <p className="text-xl font-bold">
                  <NumberTicker end={60} suffix="/min" />
                </p>
              </div>
            </div>
            <Link to="/products" className="mt-6 text-neon hover:text-neon-hover inline-flex items-center">
              Learn more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M6.75 12.75L11.25 8.25L6.75 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          {/* TradeSim */}
          <div className="card-highlight group">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors duration-300">
              <LineChart className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">TradeSim</h3>
            <p className="text-muted-foreground mb-6">
              ML-driven high-frequency strategy simulator to backtest and optimize your trading algorithms.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-muted-foreground">Scenarios</p>
                <p className="text-xl font-bold">
                  <NumberTicker end={1000} suffix="+" />
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time Periods</p>
                <p className="text-xl font-bold">
                  <NumberTicker end={10} suffix="yr" />
                </p>
              </div>
            </div>
            <Link to="/products" className="mt-6 text-neon hover:text-neon-hover inline-flex items-center">
              Learn more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M6.75 12.75L11.25 8.25L6.75 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
