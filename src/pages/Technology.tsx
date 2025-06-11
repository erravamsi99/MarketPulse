import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import ParticleBackground from '../components/animations/ParticleBackground';
import { Cpu, Braces, Database, Zap, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const Technology = () => {
  const vectorVisualizationRef = useRef<HTMLDivElement>(null);
  const dataPipelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (vectorVisualizationRef.current) {
      // Create the vector search animation
      const timeline = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 3000,
        loop: true
      });
      
      timeline
        .add({
          targets: '.query-input',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 500
        })
        .add({
          targets: '.vector-embedding',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 600,
          delay: anime.stagger(100)
        }, '-=200')
        .add({
          targets: '.search-ray',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 800
        }, '-=300')
        .add({
          targets: '.similarity-match',
          scale: [0, 1.2, 1],
          opacity: [0, 1],
          duration: 500,
          delay: anime.stagger(50)
        }, '-=400')
        .add({
          targets: '.result-card',
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 600,
          delay: anime.stagger(100)
        }, '-=200')
        .add({
          targets: '.response-time',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 400
        }, '-=300');
    }

    if (dataPipelineRef.current) {
      // Data Pipeline Animation
      const pipelineTimeline = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 4000,
        loop: true,
        delay: 500
      });
      
      pipelineTimeline
        .add({
          targets: '.data-source',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 600,
          delay: anime.stagger(200)
        })
        .add({
          targets: '.data-flow',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 1200,
          delay: anime.stagger(150)
        }, '-=400')
        .add({
          targets: '.processing-node',
          scale: [0, 1.1, 1],
          opacity: [0, 1],
          duration: 500,
          delay: anime.stagger(100)
        }, '-=800')
        .add({
          targets: '.data-packet',
          translateX: ['-100%', '100%'],
          opacity: [0, 1, 0],
          duration: 1000,
          delay: anime.stagger(200)
        }, '-=600')
        .add({
          targets: '.ml-output',
          scale: [0, 1.2, 1],
          opacity: [0, 1],
          duration: 600
        }, '-=400');
    }
  }, []);
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        <ParticleBackground className="opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-neon uppercase tracking-wider mb-4">Execution Platform</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              High-Performance Trade Execution for Digital Assets
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our cutting-edge infrastructure powered by machine learning and AI
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <Section className="bg-card">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-heading">Tech Stack</p>
          <h2 className="section-title">Powered by Advanced Technology</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-highlight">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6">
              <Cpu className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">ML & AI</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                TensorFlow.js for model deployment
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                LSTM neural networks for time series
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                GPT-4 powered market sentiment
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                Reinforcement learning for optimization
              </li>
            </ul>
          </div>
          
          <div className="card-highlight">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6">
              <Braces className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">APIs & Integration</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                RESTful and WebSocket endpoints
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                Market data integration with 50+ sources
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                Low-code integration options
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                SDK support for Python, JavaScript, C++
              </li>
            </ul>
          </div>
          
          <div className="card-highlight">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-6">
              <Database className="text-neon" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Infrastructure</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                Co-located servers near exchanges
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                Kubernetes orchestration for scaling
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                99.99% uptime SLA
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></span>
                Multi-region redundancy
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Data Pipeline */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-heading">Data Pipeline</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Market Intelligence</h2>
            <p className="text-muted-foreground mb-6">
              Our sophisticated data pipeline ingests, processes, and analyzes market data from multiple sources in real-time, providing you with actionable insights before the market moves.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-xs font-semibold text-neon">1</span>
                </div>
                <p>Data ingestion from 50+ sources</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-xs font-semibold text-neon">2</span>
                </div>
                <p>Cleaning and normalization</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-xs font-semibold text-neon">3</span>
                </div>
                <p>Feature extraction and transformation</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-xs font-semibold text-neon">4</span>
                </div>
                <p>ML model prediction</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-xs font-semibold text-neon">5</span>
                </div>
                <p>Strategy generation and signal output</p>
              </div>
            </div>
            <Link to="/products" className="btn-outline inline-flex items-center">
              Explore Our Products <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div ref={dataPipelineRef} className="relative h-96 flex items-center justify-center bg-muted/10 rounded-lg border border-muted/20">
            <svg className="w-full h-full max-w-lg" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Grid */}
              <defs>
                <pattern id="pipeline-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#333" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
                <linearGradient id="data-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ff8c" stopOpacity="0" />
                  <stop offset="50%" stopColor="#00ff8c" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00ff8c" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#pipeline-grid)" />
              
              {/* Data Sources */}
              <g className="data-sources">
                <g className="data-source" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="60" cy="80" r="25" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" />
                  <text x="60" y="85" textAnchor="middle" className="text-xs fill-neon font-mono">NEWS</text>
                  <text x="60" y="110" textAnchor="middle" className="text-xs fill-muted-foreground">API</text>
                </g>
                <g className="data-source" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="60" cy="160" r="25" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" />
                  <text x="60" y="165" textAnchor="middle" className="text-xs fill-neon font-mono">PRICE</text>
                  <text x="60" y="185" textAnchor="middle" className="text-xs fill-muted-foreground">FEED</text>
                </g>
                <g className="data-source" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="60" cy="240" r="25" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" />
                  <text x="60" y="245" textAnchor="middle" className="text-xs fill-neon font-mono">SOCIAL</text>
                  <text x="60" y="265" textAnchor="middle" className="text-xs fill-muted-foreground">MEDIA</text>
                </g>
                <g className="data-source" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="60" cy="320" r="25" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" />
                  <text x="60" y="325" textAnchor="middle" className="text-xs fill-neon font-mono">ECON</text>
                  <text x="60" y="345" textAnchor="middle" className="text-xs fill-muted-foreground">DATA</text>
                </g>
              </g>
              
              {/* Data Flow Lines */}
              <g className="data-flows">
                <path className="data-flow" d="M85 80 L160 160" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
                <path className="data-flow" d="M85 160 L160 160" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
                <path className="data-flow" d="M85 240 L160 160" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
                <path className="data-flow" d="M85 320 L160 160" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
              </g>
              
              {/* Processing Nodes */}
              <g className="processing-nodes">
                <g className="processing-node" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="140" y="140" width="40" height="40" fill="#2a2a2a" stroke="#00ff8c" strokeWidth="2" rx="5" />
                  <text x="160" y="165" textAnchor="middle" className="text-xs fill-neon font-mono">CLEAN</text>
                </g>
                <g className="processing-node" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="220" y="140" width="40" height="40" fill="#2a2a2a" stroke="#00ff8c" strokeWidth="2" rx="5" />
                  <text x="240" y="165" textAnchor="middle" className="text-xs fill-neon font-mono">NORM</text>
                </g>
                <g className="processing-node" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="300" y="140" width="40" height="40" fill="#2a2a2a" stroke="#00ff8c" strokeWidth="2" rx="5" />
                  <text x="320" y="165" textAnchor="middle" className="text-xs fill-neon font-mono">FEAT</text>
                </g>
              </g>
              
              {/* Processing Flow */}
              <g className="processing-flows">
                <path className="data-flow" d="M180 160 L220 160" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
                <path className="data-flow" d="M260 160 L300 160" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
                <path className="data-flow" d="M340 160 L380 160" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.8" />
              </g>
              
              {/* Data Packets Moving */}
              <g className="data-packets">
                <circle className="data-packet" cx="85" cy="80" r="3" fill="#00ff8c" opacity="0" />
                <circle className="data-packet" cx="85" cy="160" r="3" fill="#00ff8c" opacity="0" />
                <circle className="data-packet" cx="85" cy="240" r="3" fill="#00ff8c" opacity="0" />
                <circle className="data-packet" cx="85" cy="320" r="3" fill="#00ff8c" opacity="0" />
              </g>
              
              {/* ML Model Output */}
              <g className="ml-outputs">
                <g className="ml-output" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="380" y="120" width="80" height="80" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="3" rx="10" />
                  <text x="420" y="140" textAnchor="middle" className="text-xs fill-neon font-mono">ML MODEL</text>
                  <text x="420" y="160" textAnchor="middle" className="text-xs fill-white">PREDICTION</text>
                  <text x="420" y="180" textAnchor="middle" className="text-sm fill-neon font-bold">$189.75</text>
                  <text x="420" y="195" textAnchor="middle" className="text-xs fill-green-400">+2.3%</text>
                </g>
              </g>
              
              {/* Performance Indicators */}
              <g className="performance">
                <text x="250" y="50" textAnchor="middle" className="text-xs fill-muted-foreground font-mono">
                  Real-time processing • &lt;50ms latency • 85% accuracy
                </text>
                <text x="250" y="380" textAnchor="middle" className="text-xs fill-muted-foreground font-mono">
                  Multi-source ingestion • ML feature engineering • Predictive output
                </text>
              </g>
            </svg>
          </div>
        </div>
      </Section>
      
      {/* Vector Search */}
      <Section className="bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={vectorVisualizationRef} className="relative h-80 order-last md:order-first">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full max-w-md" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Query Input */}
                <g className="query-input" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="20" y="20" width="120" height="30" fill="#2A2A2A" stroke="#00ff8c" strokeWidth="2" rx="5" />
                  <text x="80" y="40" textAnchor="middle" className="text-sm fill-neon">Query: "Fed rates"</text>
                </g>
                
                {/* Vector Embeddings Cloud */}
                <g className="vector-embeddings">
                  <circle className="vector-embedding" cx="200" cy="80" r="6" fill="#00ff8c" fillOpacity="0.7" style={{ opacity: 0, transform: 'scale(0)' }} />
                  <circle className="vector-embedding" cx="180" cy="120" r="5" fill="#00ff8c" fillOpacity="0.5" style={{ opacity: 0, transform: 'scale(0)' }} />
                  <circle className="vector-embedding" cx="220" cy="110" r="7" fill="#00ff8c" fillOpacity="0.8" style={{ opacity: 0, transform: 'scale(0)' }} />
                  <circle className="vector-embedding" cx="160" cy="160" r="4" fill="#00ff8c" fillOpacity="0.4" style={{ opacity: 0, transform: 'scale(0)' }} />
                  <circle className="vector-embedding" cx="240" cy="150" r="6" fill="#00ff8c" fillOpacity="0.6" style={{ opacity: 0, transform: 'scale(0)' }} />
                  <circle className="vector-embedding" cx="190" cy="180" r="5" fill="#00ff8c" fillOpacity="0.5" style={{ opacity: 0, transform: 'scale(0)' }} />
                  <circle className="vector-embedding" cx="210" cy="200" r="4" fill="#00ff8c" fillOpacity="0.4" style={{ opacity: 0, transform: 'scale(0)' }} />
                  <circle className="vector-embedding" cx="260" cy="180" r="6" fill="#00ff8c" fillOpacity="0.6" style={{ opacity: 0, transform: 'scale(0)' }} />
                </g>
                
                {/* Search Rays */}
                <g className="search-rays">
                  <path className="search-ray" d="M80 35 L195 75" stroke="#00ff8c" strokeWidth="2" strokeDasharray="3,3" />
                  <path className="search-ray" d="M80 35 L215 105" stroke="#00ff8c" strokeWidth="2" strokeDasharray="3,3" />
                  <path className="search-ray" d="M80 35 L235 145" stroke="#00ff8c" strokeWidth="2" strokeDasharray="3,3" />
                </g>
                
                {/* Similarity Matches */}
                <g className="similarity-matches">
                  <circle className="similarity-match" cx="200" cy="80" r="12" fill="none" stroke="#ff6b6b" strokeWidth="2" style={{ opacity: 0, transform: 'scale(0)' }} />
                  <circle className="similarity-match" cx="220" cy="110" r="12" fill="none" stroke="#ff6b6b" strokeWidth="2" style={{ opacity: 0, transform: 'scale(0)' }} />
                  <circle className="similarity-match" cx="240" cy="150" r="12" fill="none" stroke="#ff6b6b" strokeWidth="2" style={{ opacity: 0, transform: 'scale(0)' }} />
                </g>
                
                {/* Result Cards */}
                <g className="result-cards">
                  <g className="result-card" style={{ opacity: 0, transform: 'translateY(50px)' }}>
                    <rect x="280" y="60" width="100" height="40" fill="#2A2A2A" stroke="#00ff8c" strokeWidth="1" rx="5" />
                    <text x="330" y="75" textAnchor="middle" className="text-xs fill-white">Fed Policy 2024</text>
                    <text x="330" y="90" textAnchor="middle" className="text-xs fill-neon">92% match</text>
                  </g>
                  <g className="result-card" style={{ opacity: 0, transform: 'translateY(50px)' }}>
                    <rect x="280" y="120" width="100" height="40" fill="#2A2A2A" stroke="#00ff8c" strokeWidth="1" rx="5" />
                    <text x="330" y="135" textAnchor="middle" className="text-xs fill-white">Rate Impact</text>
                    <text x="330" y="150" textAnchor="middle" className="text-xs fill-neon">89% match</text>
                  </g>
                  <g className="result-card" style={{ opacity: 0, transform: 'translateY(50px)' }}>
                    <rect x="280" y="180" width="100" height="40" fill="#2A2A2A" stroke="#00ff8c" strokeWidth="1" rx="5" />
                    <text x="330" y="195" textAnchor="middle" className="text-xs fill-white">Market Response</text>
                    <text x="330" y="210" textAnchor="middle" className="text-xs fill-neon">85% match</text>
                  </g>
                </g>
                
                {/* Response Time Indicator */}
                <g className="response-time" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="20" y="250" width="80" height="25" fill="#2A2A2A" stroke="#00ff8c" strokeWidth="1" rx="5" />
                  <text x="60" y="268" textAnchor="middle" className="text-xs fill-neon">23ms</text>
                </g>
                
                {/* Vector Space Visualization */}
                <g className="vector-space">
                  <circle cx="200" cy="140" r="80" fill="none" stroke="#00ff8c" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2,2" />
                  <circle cx="200" cy="140" r="50" fill="none" stroke="#00ff8c" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2,2" />
                  <text x="200" y="260" textAnchor="middle" className="text-xs fill-muted-foreground">Vector Space</text>
                </g>
              </svg>
            </div>
          </div>
          
          <div>
            <p className="section-heading">Vector Search</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Q&A with Pinecone</h2>
            <p className="text-muted-foreground mb-6">
              Our integration with Pinecone's vector database enables semantic search and retrieval across millions of financial documents, allowing our models to provide context-aware answers to complex market questions.
            </p>
            <div className="bg-muted/20 p-4 rounded-md border border-muted mb-6">
              <p className="text-sm font-mono mb-2 text-muted-foreground">Example Query:</p>
              <p className="text-sm font-mono text-white">"How did tech stocks perform during the last Fed rate hike?"</p>
              <div className="mt-3 border-t border-muted pt-3">
                <p className="text-sm font-mono mb-1 text-muted-foreground">Response (23ms):</p>
                <p className="text-sm font-mono text-neon">
                  "During the last Fed rate hike on March 16, 2022, tech stocks initially fell by 2.3% but rallied 4.8% in the following week, outperforming the broader market..."
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                <p className="font-bold">&lt;25ms</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Indexed Documents</p>
                <p className="font-bold">10M+</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                <p className="font-bold">92%</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Performance Metrics */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-heading">Performance</p>
          <h2 className="section-title">Industry-Leading Metrics</h2>
          <p className="text-muted-foreground mb-8">
            Our technology stack delivers exceptional performance across key metrics that matter for quantitative trading.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card-highlight text-center">
            <div className="mb-4">
              <Zap className="mx-auto text-neon" size={28} />
            </div>
            <h3 className="text-4xl font-bold mb-2">&lt;50<span className="text-2xl">ms</span></h3>
            <p className="text-muted-foreground">Execution Latency</p>
          </div>
          
          <div className="card-highlight text-center">
            <div className="mb-4">
              <Cpu className="mx-auto text-neon" size={28} />
            </div>
            <h3 className="text-4xl font-bold mb-2">85<span className="text-2xl">%</span></h3>
            <p className="text-muted-foreground">Prediction Accuracy</p>
          </div>
          
          <div className="card-highlight text-center">
            <div className="mb-4">
              <Network className="mx-auto text-neon" size={28} />
            </div>
            <h3 className="text-4xl font-bold mb-2">100K<span className="text-2xl">+</span></h3>
            <p className="text-muted-foreground">API Calls/Day</p>
          </div>
          
          <div className="card-highlight text-center">
            <div className="mb-4">
              <Database className="mx-auto text-neon" size={28} />
            </div>
            <h3 className="text-4xl font-bold mb-2">99.99<span className="text-2xl">%</span></h3>
            <p className="text-muted-foreground">Platform Uptime</p>
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section className="bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-heading">Get Started</p>
          <h2 className="section-title">Ready to transform your trading strategy?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the power of MarketPulse's AI-driven platform for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Request Demo
            </Link>
            <Link to="/products" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Technology;
