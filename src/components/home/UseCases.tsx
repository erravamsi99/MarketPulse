import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Users, Newspaper } from 'lucide-react';
import Section from '../ui/Section';

const UseCases = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <p className="section-heading">Use Cases</p>
        <h2 className="section-title">Who Uses MarketPulse</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/use-cases" className="group">
          <div className="card-highlight h-full">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors duration-300">
              <Building2 className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Algo Trading Desks</h3>
            <p className="text-muted-foreground">
              Trading desks use MarketPulse to enhance their algorithmic strategies with real-time AI predictions and sentiment analysis.
            </p>
          </div>
        </Link>
        
        <Link to="/use-cases" className="group">
          <div className="card-highlight h-full">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors duration-300">
              <TrendingUp className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Hedge Funds</h3>
            <p className="text-muted-foreground">
              Hedge funds integrate our API for market predictions into their trading systems, gaining an edge in volatile markets.
            </p>
          </div>
        </Link>
        
        <Link to="/use-cases" className="group">
          <div className="card-highlight h-full">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors duration-300">
              <Users className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Retail Quant Traders</h3>
            <p className="text-muted-foreground">
              Individual quantitative traders use our platform to access institutional-grade AI tools at an affordable price point.
            </p>
          </div>
        </Link>
        
        <Link to="/use-cases" className="group">
          <div className="card-highlight h-full">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors duration-300">
              <Newspaper className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Financial News Platforms</h3>
            <p className="text-muted-foreground">
              News outlets integrate our sentiment analysis API to provide readers with AI-powered market insights alongside breaking stories.
            </p>
          </div>
        </Link>
      </div>
      
      <div className="text-center mt-12">
        <Link to="/use-cases" className="btn-outline">
          Explore All Use Cases
        </Link>
      </div>
    </Section>
  );
};

export default UseCases;
