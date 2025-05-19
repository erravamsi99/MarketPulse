import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from '../animations/ParticleBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-neon uppercase tracking-wider mb-4 animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
            Next-gen AI for financial markets
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{animationDelay: '0.4s'}}>
            AI That Moves <span className="text-neon">With The Market</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
            Harness the power of real-time AI predictions and sentiment analysis for quantitative trading strategies
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{animationDelay: '0.8s'}}>
            <Link to="/products" className="btn-primary">
              Try MarketPulse Now
            </Link>
            <Link to="/technology" className="btn-outline">
              Explore Technology <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
          
          <div className="mt-12 animate-fade-in opacity-0" style={{animationDelay: '1s'}}>
            <p className="text-sm text-muted-foreground mb-3">Trusted by innovative trading desks</p>
            <div className="flex justify-center items-center space-x-8 opacity-70">
              <div className="w-24 h-6 bg-white/10 rounded animate-pulse"></div>
              <div className="w-24 h-6 bg-white/10 rounded animate-pulse"></div>
              <div className="w-24 h-6 bg-white/10 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
