
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/card';
import ParticleBackground from '../components/animations/ParticleBackground';
import { FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const About = () => {
  const globeVisualizationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (globeVisualizationRef.current) {
      // Globe Animation
      const globeTimeline = anime.timeline({
        easing: 'easeInOutSine',
        duration: 6000,
        loop: true,
        delay: 1000
      });
      
      globeTimeline
        .add({
          targets: '.exchange-node',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(250),
          easing: 'easeOutBack'
        })
        .add({
          targets: '.connection-line',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 1500,
          delay: anime.stagger(150),
          easing: 'easeInOutQuart'
        }, '-=600')
        .add({
          targets: '.data-pulse',
          scale: [1, 2, 1],
          opacity: [1, 0, 1],
          duration: 1800,
          delay: anime.stagger(400),
          easing: 'easeInOutSine'
        }, '-=800')
        .add({
          targets: '.analysis-bubble',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 700,
          delay: anime.stagger(200),
          easing: 'easeOutBack'
        }, '-=1000')
        .add({
          targets: '.globe-sphere',
          rotateY: '360deg',
          duration: 8000,
          easing: 'linear',
          loop: true
        }, '-=1500');

      // Separate continuous rotation for globe elements
      anime({
        targets: '.globe-meridian',
        rotateY: '360deg',
        duration: 12000,
        easing: 'linear',
        loop: true,
        delay: 2000
      });
    }
  }, []);

  const timelineEvents = [
    {
      year: "2023",
      title: "Genesis",
      description: "MarketPulse was founded by a team of ML researchers and quantitative traders with a vision to democratize AI-driven market predictions."
    },
    {
      year: "2023",
      quarter: "Q4",
      title: "Seed Funding",
      description: "Secured seed funding from Antler India and began building our core LSTM prediction engine."
    },
    {
      year: "2024",
      quarter: "Q1",
      title: "Alpha Release",
      description: "Launched our alpha version to select hedge funds and received valuable feedback to refine our algorithms."
    },
    {
      year: "2024",
      quarter: "Q2",
      title: "TrendBot Launch",
      description: "Released TrendBot, our LLM-based market sentiment analysis tool, integrating OpenAI's GPT-4."
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "API Platform",
      description: "Opened our API platform to developers, enabling seamless integration with trading systems."
    },
    {
      year: "2024",
      quarter: "Q4",
      title: "TradeSim Beta",
      description: "Unveiled TradeSim beta for backtesting ML-driven high-frequency trading strategies."
    },
    {
      year: "2025",
      title: "Looking Forward",
      description: "Expanding our prediction capabilities to global markets and launching the MarketPulse Academy for AI-driven trading education."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Maya Chen",
      role: "Founder & CEO",
      background: "PhD in Machine Learning from Stanford, ex-Goldman Sachs Quantitative Strategies"
    },
    {
      name: "Raj Patel",
      role: "CTO",
      background: "Former Tech Lead at Two Sigma, MS in Computer Science from MIT"
    },
    {
      name: "Elena Volkov",
      role: "Head of Research",
      background: "PhD in Financial Mathematics, 8 years at Renaissance Technologies"
    },
    {
      name: "Marcus Jackson",
      role: "Chief Product Officer",
      background: "Previously VP of Product at Robinhood, MBA from Harvard Business School"
    }
  ];

  return (
    <Layout>
      <Section className="relative overflow-hidden">
        <ParticleBackground className="opacity-50" />
        
        <div className="text-center mb-16 relative z-10">
          <p className="section-heading">About Us</p>
          <h1 className="section-title">Redefining the Edge in Quantitative Trading</h1>
          
          {/* Global Exchange Analysis Visualization */}
          <div ref={globeVisualizationRef} className="relative h-96 mt-12 flex items-center justify-center bg-muted/10 rounded-lg border border-muted/20" style={{ perspective: '1000px' }}>
            <svg className="w-full h-full max-w-4xl" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Grid */}
              <defs>
                <pattern id="about-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#333" strokeWidth="0.5" opacity="0.2"/>
                </pattern>
                <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00ff8c" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00ff8c" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-grid)" />
              
              {/* Central Globe */}
              <g className="globe-sphere" style={{ transformOrigin: '300px 175px', transformStyle: 'preserve-3d' }}>
                <circle cx="300" cy="175" r="80" fill="url(#globe-glow)" stroke="#00ff8c" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="300" cy="175" r="60" fill="none" stroke="#00ff8c" strokeWidth="1" opacity="0.5" strokeDasharray="3,3" />
                <circle cx="300" cy="175" r="40" fill="none" stroke="#00ff8c" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
                
                {/* Globe Grid Lines - Meridians and Parallels */}
                <g className="globe-meridian">
                  {/* Equator */}
                  <ellipse cx="300" cy="175" rx="80" ry="20" fill="none" stroke="#00ff8c" strokeWidth="1" opacity="0.4" />
                  {/* Tropics */}
                  <ellipse cx="300" cy="155" rx="75" ry="15" fill="none" stroke="#00ff8c" strokeWidth="1" opacity="0.3" />
                  <ellipse cx="300" cy="195" rx="75" ry="15" fill="none" stroke="#00ff8c" strokeWidth="1" opacity="0.3" />
                  {/* Prime Meridian */}
                  <ellipse cx="300" cy="175" rx="15" ry="80" fill="none" stroke="#00ff8c" strokeWidth="1" opacity="0.3" />
                  {/* 90° Meridians */}
                  <ellipse cx="300" cy="175" rx="80" ry="15" fill="none" stroke="#00ff8c" strokeWidth="1" opacity="0.2" />
                </g>
              </g>
              
              {/* Exchange Nodes */}
              <g className="exchange-nodes">
                {/* NYSE */}
                <g className="exchange-node" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="120" cy="120" r="25" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="3" />
                  <text x="120" y="115" textAnchor="middle" className="text-sm fill-neon font-mono">NYSE</text>
                  <text x="120" y="130" textAnchor="middle" className="text-xs fill-white">New York</text>
                  <circle className="data-pulse" cx="120" cy="120" r="10" fill="#00ff8c" opacity="0.3" />
                </g>
                
                {/* NASDAQ */}
                <g className="exchange-node" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="480" cy="130" r="25" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="3" />
                  <text x="480" y="125" textAnchor="middle" className="text-sm fill-neon font-mono">NASDAQ</text>
                  <text x="480" y="140" textAnchor="middle" className="text-xs fill-white">Tech</text>
                  <circle className="data-pulse" cx="480" cy="130" r="10" fill="#00ff8c" opacity="0.3" />
                </g>
                
                {/* LSE */}
                <g className="exchange-node" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="150" cy="230" r="25" fill="#1a1a1a" stroke="#ffd700" strokeWidth="3" />
                  <text x="150" y="225" textAnchor="middle" className="text-sm fill-yellow-400 font-mono">LSE</text>
                  <text x="150" y="240" textAnchor="middle" className="text-xs fill-white">London</text>
                  <circle className="data-pulse" cx="150" cy="230" r="10" fill="#ffd700" opacity="0.3" />
                </g>
                
                {/* TSE */}
                <g className="exchange-node" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="450" cy="220" r="25" fill="#1a1a1a" stroke="#ff6b6b" strokeWidth="3" />
                  <text x="450" y="215" textAnchor="middle" className="text-sm fill-red-400 font-mono">TSE</text>
                  <text x="450" y="230" textAnchor="middle" className="text-xs fill-white">Tokyo</text>
                  <circle className="data-pulse" cx="450" cy="220" r="10" fill="#ff6b6b" opacity="0.3" />
                </g>
                
                {/* SSE */}
                <g className="exchange-node" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="90" cy="80" r="25" fill="#1a1a1a" stroke="#9333ea" strokeWidth="3" />
                  <text x="90" y="75" textAnchor="middle" className="text-sm fill-purple-400 font-mono">SSE</text>
                  <text x="90" y="90" textAnchor="middle" className="text-xs fill-white">Shanghai</text>
                  <circle className="data-pulse" cx="90" cy="80" r="10" fill="#9333ea" opacity="0.3" />
                </g>
                
                {/* BSE */}
                <g className="exchange-node" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="510" cy="280" r="25" fill="#1a1a1a" stroke="#06d6a0" strokeWidth="3" />
                  <text x="510" y="275" textAnchor="middle" className="text-sm fill-emerald-400 font-mono">BSE</text>
                  <text x="510" y="290" textAnchor="middle" className="text-xs fill-white">Mumbai</text>
                  <circle className="data-pulse" cx="510" cy="280" r="10" fill="#06d6a0" opacity="0.3" />
                </g>
              </g>
              
              {/* Connection Lines */}
              <g className="connection-lines">
                <path className="connection-line" d="M145 120 L220 155" stroke="#00ff8c" strokeWidth="2" strokeDasharray="4,4" opacity="0.6" />
                <path className="connection-line" d="M380 155 L455 130" stroke="#00ff8c" strokeWidth="2" strokeDasharray="4,4" opacity="0.6" />
                <path className="connection-line" d="M175 230 L240 195" stroke="#ffd700" strokeWidth="2" strokeDasharray="4,4" opacity="0.6" />
                <path className="connection-line" d="M360 195 L425 220" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="4,4" opacity="0.6" />
                <path className="connection-line" d="M115 80 L250 135" stroke="#9333ea" strokeWidth="2" strokeDasharray="4,4" opacity="0.6" />
                <path className="connection-line" d="M350 215 L485 280" stroke="#06d6a0" strokeWidth="2" strokeDasharray="4,4" opacity="0.6" />
              </g>
              
              {/* Analysis Bubbles */}
              <g className="analysis-bubbles">
                <g className="analysis-bubble" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="20" y="30" width="120" height="40" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" rx="5" />
                  <text x="80" y="45" textAnchor="middle" className="text-xs fill-neon font-mono">SENTIMENT</text>
                  <text x="80" y="60" textAnchor="middle" className="text-xs fill-white">Bullish: 73%</text>
                </g>
                <g className="analysis-bubble" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="460" y="40" width="120" height="40" fill="#1a1a1a" stroke="#ffd700" strokeWidth="2" rx="5" />
                  <text x="520" y="55" textAnchor="middle" className="text-xs fill-yellow-400 font-mono">VOLATILITY</text>
                  <text x="520" y="70" textAnchor="middle" className="text-xs fill-white">Index: 18.2</text>
                </g>
                <g className="analysis-bubble" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="240" y="300" width="120" height="40" fill="#1a1a1a" stroke="#ff6b6b" strokeWidth="2" rx="5" />
                  <text x="300" y="315" textAnchor="middle" className="text-xs fill-red-400 font-mono">RISK LEVEL</text>
                  <text x="300" y="330" textAnchor="middle" className="text-xs fill-white">Medium</text>
                </g>
              </g>
              
              {/* Title and Metrics */}
              <g className="globe-metrics">
                <text x="300" y="25" textAnchor="middle" className="text-lg fill-neon font-mono">GLOBAL MARKET ANALYSIS</text>
                <text x="300" y="335" textAnchor="middle" className="text-xs fill-muted-foreground font-mono">
                  6 Major Exchanges • Real-time Data • AI-powered Insights
                </text>
              </g>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 mb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-6">
              MarketPulse was born from the belief that real-time intelligence shouldn't just be fast—it should be predictive. 
              We build AI-first tools that empower traders to anticipate, adapt, and outperform.
            </p>
            <p className="text-muted-foreground mb-6">
              Founded by a team with deep expertise in machine learning, quantitative finance, and high-performance 
              computing, MarketPulse represents the convergence of cutting-edge AI research and real-world trading experience. 
              We've built a platform that delivers what traders need most: accurate predictions at the speed of markets.
            </p>
            <p className="text-muted-foreground">
              Our team combines decades of experience across leading financial institutions, AI research labs, and 
              technology companies. This diverse background allows us to understand both the technical challenges 
              and practical applications of AI in financial markets.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
          <Card className="bg-card border-border p-6">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl mb-6 text-neon font-light">
                "To make advanced market prediction accessible to every trader on the planet."
              </p>
              <p className="text-muted-foreground">
                We believe that AI-driven insights shouldn't be limited to institutions with massive resources. 
                By democratizing access to sophisticated prediction technology, we're leveling the playing field 
                and empowering traders of all sizes to make more informed decisions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border p-6">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6">Our Technology</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-neon">#</span>
                  <span className="font-medium">Built on OpenAI</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-neon">#</span>
                  <span className="font-medium">Powered by TensorFlow</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-neon">#</span>
                  <span className="font-medium">Vector search via Pinecone</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-neon">#</span>
                  <span className="font-medium">High-performance FastAPI backend</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-neon">#</span>
                  <span className="font-medium">AWS infrastructure for global scale</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-16 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card border-border hover:border-neon transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="h-16 w-16 mx-auto bg-muted rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                  <p className="text-neon text-center text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm text-center">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative border-l border-neon ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border border-neon bg-muted flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neon"></div>
                </div>
                <div>
                  <span className="text-neon text-sm font-mono mb-2 block">
                    {event.year}{event.quarter ? ` ${event.quarter}` : ''}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center relative z-10">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <img src="/placeholder.svg" alt="Antler India" className="h-8" />
              <span className="font-bold">Backed by Antler India</span>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            As part of the Antler India portfolio, we're building the future of financial technology with 
            the support of one of the world's leading early-stage venture capital firms.
          </p>
          <Button className="flex items-center gap-2 bg-muted hover:bg-muted/80">
            <FileText size={18} />
            Download Media Kit
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
