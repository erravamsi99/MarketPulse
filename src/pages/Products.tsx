import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import ParticleBackground from '../components/animations/ParticleBackground';
import { Brain, TrendingUp, LineChart, ArrowRight, Zap, Shield, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const Products = () => {
  const tradeVisualizationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (tradeVisualizationRef.current) {
      // Reset any existing animations
      anime.remove('.trade-signal, .trade-path, .execution-point, .latency-bar, .trade-complete');
      
      // Create the trade execution animation
      const timeline = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 3000,
        loop: true,
        delay: 1000
      });
      
      timeline
        .add({
          targets: '.trade-signal',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutBack'
        })
        .add({
          targets: '.trade-path',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 1200,
          delay: anime.stagger(200)
        }, '-=300')
        .add({
          targets: '.execution-point',
          scale: [0, 1.3, 1],
          opacity: [0, 1],
          duration: 500,
          delay: anime.stagger(150)
        }, '-=600')
        .add({
          targets: '.latency-bar',
          width: ['0%', '100%'],
          duration: 800,
          easing: 'easeOutQuart'
        }, '-=400')
        .add({
          targets: '.trade-complete',
          scale: [0, 1.2, 1],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutBack'
        }, '-=200')
        .add({
          targets: '.trade-signal, .execution-point, .trade-complete',
          scale: 0,
          opacity: 0,
          duration: 400,
          delay: 1500
        });
    }
  }, []);
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        <ParticleBackground className="opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-neon uppercase tracking-wider mb-4">Discover The Advantage</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Products</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our suite of AI-powered tools to revolutionize your quantitative trading strategies
            </p>
          </div>
        </div>
      </div>

      {/* MarketPulse Core */}
      <Section className="bg-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-heading">Order Execution & Management System</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">High-Performance Trade Execution</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <Zap className="text-neon" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Low-latency execution</h3>
                  <p className="text-muted-foreground">
                    Co-located access and rapid compute speeds to reduce slippage and maximize execution quality
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <Shield className="text-neon" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Private trading infrastructure</h3>
                  <p className="text-muted-foreground">
                    Self-hosted infrastructure to protect sensitive IP and reduce front-running risk
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <DollarSign className="text-neon" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Sensible fee structure</h3>
                  <p className="text-muted-foreground">
                    No volume-based fees, so clients can scale their strategies without proportional cost increases
                  </p>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Request Demo <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div ref={tradeVisualizationRef} className="relative h-96 flex items-center justify-center bg-muted/10 rounded-lg border border-muted/20">
            <svg className="w-full h-full max-w-lg" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Grid */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#333" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Exchange Nodes */}
              <g className="exchange-nodes">
                <circle cx="100" cy="100" r="20" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" />
                <text x="100" y="75" textAnchor="middle" className="text-xs fill-neon font-mono">NYSE</text>
                
                <circle cx="400" cy="100" r="20" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" />
                <text x="400" y="75" textAnchor="middle" className="text-xs fill-neon font-mono">NASDAQ</text>
                
                <circle cx="100" cy="300" r="20" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" />
                <text x="100" y="325" textAnchor="middle" className="text-xs fill-neon font-mono">CBOE</text>
                
                <circle cx="400" cy="300" r="20" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" />
                <text x="400" y="325" textAnchor="middle" className="text-xs fill-neon font-mono">BATS</text>
              </g>
              
              {/* Central MarketPulse Hub */}
              <circle cx="250" cy="200" r="30" fill="#00ff8c" fillOpacity="0.1" stroke="#00ff8c" strokeWidth="3" />
              <circle cx="250" cy="200" r="15" fill="#00ff8c" fillOpacity="0.3" />
              <text x="250" y="205" textAnchor="middle" className="text-sm font-bold fill-neon">MP</text>
              
              {/* Trade Signal Origin */}
              <g className="trade-signal" style={{ opacity: 0, transform: 'scale(0)', transformOrigin: '50px 200px' }}>
                <circle cx="50" cy="200" r="10" fill="#ff6b6b" />
                <circle cx="50" cy="200" r="15" fill="none" stroke="#ff6b6b" strokeWidth="2" opacity="0.5" />
                <text x="25" y="190" className="text-xs fill-white font-mono">SIGNAL</text>
              </g>
              
              {/* Trade Paths */}
              <g className="trade-paths">
                <path className="trade-path" d="M70 200 L220 200" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
                <path className="trade-path" d="M280 200 L380 100" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
                <path className="trade-path" d="M280 200 L380 300" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
                <path className="trade-path" d="M220 180 L120 100" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
                <path className="trade-path" d="M220 220 L120 300" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
              </g>
              
              {/* Execution Points */}
              <g className="execution-points">
                <circle className="execution-point" cx="380" cy="100" r="8" fill="#ff6b6b" style={{ opacity: 0, transform: 'scale(0)' }} />
                <circle className="execution-point" cx="380" cy="300" r="8" fill="#ff6b6b" style={{ opacity: 0, transform: 'scale(0)' }} />
                <circle className="execution-point" cx="120" cy="100" r="8" fill="#ff6b6b" style={{ opacity: 0, transform: 'scale(0)' }} />
                <circle className="execution-point" cx="120" cy="300" r="8" fill="#ff6b6b" style={{ opacity: 0, transform: 'scale(0)' }} />
              </g>
              
              {/* Latency Display */}
              <g className="latency-display">
                <rect x="200" y="30" width="100" height="25" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" rx="12" />
                <rect className="latency-bar" x="200" y="30" width="0%" height="25" fill="#00ff8c" opacity="0.6" rx="12" />
                <text x="250" y="47" textAnchor="middle" className="text-sm fill-white font-mono font-bold">
                  &lt;50ms
                </text>
              </g>
              
              {/* Trade Complete Indicator */}
              <g className="trade-complete" style={{ opacity: 0, transform: 'scale(0)', transformOrigin: '450px 200px' }}>
                <circle cx="450" cy="200" r="15" fill="#00ff8c" />
                <path d="M442 200 L448 206 L458 194" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <text x="450" y="225" textAnchor="middle" className="text-xs fill-neon font-mono">EXECUTED</text>
              </g>
              
              {/* Performance Stats */}
              <g className="stats">
                <text x="250" y="380" textAnchor="middle" className="text-xs fill-muted-foreground font-mono">
                  Multi-venue execution • Real-time routing • Sub-50ms latency
                </text>
              </g>
            </svg>
          </div>
        </div>
      </Section>
      
      {/* Products Details */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-heading">Venue Integrations</p>
          <h2 className="section-title">Maximize your trading potential</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Centralized Exchanges */}
          <div className="card-highlight">
            <div className="flex justify-center mb-6">
              <div className="h-24 w-24 rounded-full bg-muted/30 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-2 border-neon animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Centralized Exchanges</h3>
            <p className="text-muted-foreground text-center">
              Connect to major centralized exchanges for swift and efficient trading execution
            </p>
          </div>
          
          {/* Decentralized Exchanges */}
          <div className="card-highlight">
            <div className="flex justify-center mb-6">
              <div className="h-24 w-24 rounded-full bg-muted/30 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-2 border-neon animate-spin" style={{ animationDuration: '12s' }}></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Decentralized Exchanges</h3>
            <p className="text-muted-foreground text-center">
              Access decentralized exchanges, ensuring flexibility and decentralized asset trading options
            </p>
          </div>
          
          {/* Prime Brokers & OTC Desks */}
          <div className="card-highlight">
            <div className="flex justify-center mb-6">
              <div className="h-24 w-24 rounded-full bg-muted/30 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-2 border-neon animate-spin" style={{ animationDuration: '8s' }}></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Prime Brokers & OTC Desks</h3>
            <p className="text-muted-foreground text-center">
              Partner with prime brokers and OTC desks for institutional-grade trading services
            </p>
          </div>
          
          {/* Market Makers */}
          <div className="card-highlight">
            <div className="flex justify-center mb-6">
              <div className="h-24 w-24 rounded-full bg-muted/30 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-2 border-neon animate-spin" style={{ animationDuration: '14s' }}></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Market Makers</h3>
            <p className="text-muted-foreground text-center">
              Engage seamlessly with market makers for optimal liquidity and trade execution
            </p>
          </div>
        </div>
      </Section>
      
      {/* Why MarketPulse */}
      <Section className="bg-card">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-heading">Why MarketPulse?</p>
          <h2 className="section-title">Our Competitive Edge</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Fast Execution */}
          <div>
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center">
                <Zap className="text-neon" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Fast Execution</h3>
            <p className="text-muted-foreground text-center">
              Execute low-latency trades while encountering reduced slippage
            </p>
          </div>
          
          {/* Private Trading */}
          <div>
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center">
                <Shield className="text-neon" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Private Trading</h3>
            <p className="text-muted-foreground text-center">
              Self-hosted infrastructure for sensitive IP and front-running risk protection
            </p>
          </div>
          
          {/* Sensible Fees */}
          <div>
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center">
                <DollarSign className="text-neon" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Sensible Fees</h3>
            <p className="text-muted-foreground text-center">
              Trade without the burden of high volume-based fees
            </p>
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-heading">The MarketPulse Advantage</p>
          <h2 className="section-title">Retain alpha to the highest degree</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to revolutionize your trading strategy with cutting-edge AI?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Request Demo
            </Link>
            <Link to="/technology" className="btn-outline">
              Learn More About Our Technology
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Products;
