
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { BookText, LineChart, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const Insights = () => {
  const marketAnalysisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marketAnalysisRef.current) {
      // Market Analysis Visualization Animation
      const analysisTimeline = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 3500,
        loop: true,
        delay: 800
      });
      
      analysisTimeline
        .add({
          targets: '.market-sector',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 600,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.trend-line',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 1000,
          delay: anime.stagger(200)
        }, '-=400')
        .add({
          targets: '.data-point',
          scale: [0, 1.2, 1],
          opacity: [0, 1],
          duration: 400,
          delay: anime.stagger(100)
        }, '-=600')
        .add({
          targets: '.insight-bubble',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 500,
          delay: anime.stagger(150)
        }, '-=300')
        .add({
          targets: '.prediction-arrow',
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          duration: 800
        }, '-=200');
    }
  }, []);

  const articles = [
    {
      icon: <LineChart className="text-neon" size={24} />,
      title: "Deep Learning: The New Frontier in Financial Forecasting",
      subtitle: "Moving Beyond Traditional Technical Analysis",
      description: "How advanced neural networks are outperforming traditional forecasting methods by 37% in volatile market conditions.",
      readTime: "8 min read",
      date: "May 15, 2025",
      tag: "AI Research"
    },
    {
      icon: <Globe className="text-neon" size={24} />,
      title: "LLMs and Market Sentiment: Parsing Millions of Data Points in Real-Time",
      subtitle: "The Rise of AI-Driven Market Intelligence",
      description: "How large language models are transforming sentiment analysis by processing news, social media, and financial reports simultaneously.",
      readTime: "11 min read",
      date: "May 10, 2025",
      tag: "Technology"
    },
    {
      icon: <Zap className="text-neon" size={24} />,
      title: "Sub-Millisecond Market Predictions: The HFT Revolution",
      subtitle: "When Every Microsecond Counts",
      description: "Why high-frequency trading firms are investing millions in real-time prediction engines that operate at nanosecond speeds.",
      readTime: "7 min read",
      date: "May 8, 2025",
      tag: "Trading Strategies"
    },
    {
      icon: <BookText className="text-neon" size={24} />,
      title: "From Reactive to Proactive: Agent-Based Trading Systems",
      subtitle: "TrendBot and the Future of Autonomous Trading",
      description: "Why top-performing traders are shifting from manual analysis to agent-based tools that continuously learn and adapt to market conditions.",
      readTime: "9 min read",
      date: "May 3, 2025",
      tag: "Market Analysis"
    }
  ];

  return (
    <Layout>
      <Section>
        <div className="text-center mb-16">
          <p className="section-heading">Insights</p>
          <h1 className="section-title">AI-Driven Market Intelligence</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Cutting-edge research and analysis on how artificial intelligence is revolutionizing 
            quantitative trading and financial forecasting.
          </p>
        </div>

        {/* Dynamic Market Analysis Visualization */}
        <div className="mb-16">
          <div ref={marketAnalysisRef} className="relative h-80 flex items-center justify-center bg-muted/10 rounded-lg border border-muted/20">
            <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Grid */}
              <defs>
                <pattern id="insights-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#333" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
                <radialGradient id="sector-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00ff8c" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00ff8c" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#insights-grid)" />
              
              {/* Market Sectors */}
              <g className="market-sectors">
                <g className="market-sector" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="150" cy="80" r="30" fill="url(#sector-glow)" stroke="#00ff8c" strokeWidth="2" />
                  <text x="150" y="75" textAnchor="middle" className="text-sm fill-neon font-mono">TECH</text>
                  <text x="150" y="90" textAnchor="middle" className="text-xs fill-white">+2.4%</text>
                </g>
                <g className="market-sector" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="300" cy="120" r="30" fill="url(#sector-glow)" stroke="#ff6b6b" strokeWidth="2" />
                  <text x="300" y="115" textAnchor="middle" className="text-sm fill-red-400 font-mono">ENERGY</text>
                  <text x="300" y="130" textAnchor="middle" className="text-xs fill-white">-1.2%</text>
                </g>
                <g className="market-sector" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="450" cy="90" r="30" fill="url(#sector-glow)" stroke="#00ff8c" strokeWidth="2" />
                  <text x="450" y="85" textAnchor="middle" className="text-sm fill-neon font-mono">FINANCE</text>
                  <text x="450" y="100" textAnchor="middle" className="text-xs fill-white">+1.8%</text>
                </g>
                <g className="market-sector" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <circle cx="600" cy="130" r="30" fill="url(#sector-glow)" stroke="#ffd700" strokeWidth="2" />
                  <text x="600" y="125" textAnchor="middle" className="text-sm fill-yellow-400 font-mono">HEALTH</text>
                  <text x="600" y="140" textAnchor="middle" className="text-xs fill-white">+0.7%</text>
                </g>
              </g>
              
              {/* Trend Lines */}
              <g className="trend-lines">
                <path className="trend-line" d="M150 80 Q250 60, 450 90" stroke="#00ff8c" strokeWidth="3" strokeDasharray="8,4" opacity="0.7" />
                <path className="trend-line" d="M300 120 Q400 140, 600 130" stroke="#ff6b6b" strokeWidth="3" strokeDasharray="8,4" opacity="0.7" />
                <path className="trend-line" d="M150 80 Q300 100, 600 130" stroke="#ffd700" strokeWidth="2" strokeDasharray="4,2" opacity="0.5" />
              </g>
              
              {/* Data Points */}
              <g className="data-points">
                <circle className="data-point" cx="200" cy="70" r="4" fill="#00ff8c" style={{ opacity: 0, transform: 'scale(0)' }} />
                <circle className="data-point" cx="350" cy="135" r="4" fill="#ff6b6b" style={{ opacity: 0, transform: 'scale(0)' }} />
                <circle className="data-point" cx="500" cy="95" r="4" fill="#00ff8c" style={{ opacity: 0, transform: 'scale(0)' }} />
                <circle className="data-point" cx="550" cy="125" r="4" fill="#ffd700" style={{ opacity: 0, transform: 'scale(0)' }} />
              </g>
              
              {/* AI Insight Bubbles */}
              <g className="insight-bubbles">
                <g className="insight-bubble" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="50" y="180" width="140" height="60" fill="#1a1a1a" stroke="#00ff8c" strokeWidth="2" rx="8" />
                  <text x="120" y="200" textAnchor="middle" className="text-xs fill-neon font-mono">AI PREDICTION</text>
                  <text x="120" y="215" textAnchor="middle" className="text-xs fill-white">Tech Rally Expected</text>
                  <text x="120" y="230" textAnchor="middle" className="text-xs fill-neon">Confidence: 87%</text>
                </g>
                <g className="insight-bubble" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="250" y="200" width="140" height="60" fill="#1a1a1a" stroke="#ff6b6b" strokeWidth="2" rx="8" />
                  <text x="320" y="220" textAnchor="middle" className="text-xs fill-red-400 font-mono">RISK ALERT</text>
                  <text x="320" y="235" textAnchor="middle" className="text-xs fill-white">Energy Volatility</text>
                  <text x="320" y="250" textAnchor="middle" className="text-xs fill-red-400">Risk Level: High</text>
                </g>
                <g className="insight-bubble" style={{ opacity: 0, transform: 'scale(0)' }}>
                  <rect x="500" y="190" width="140" height="60" fill="#1a1a1a" stroke="#ffd700" strokeWidth="2" rx="8" />
                  <text x="570" y="210" textAnchor="middle" className="text-xs fill-yellow-400 font-mono">OPPORTUNITY</text>
                  <text x="570" y="225" textAnchor="middle" className="text-xs fill-white">Healthcare Stable</text>
                  <text x="570" y="240" textAnchor="middle" className="text-xs fill-yellow-400">Long-term Hold</text>
                </g>
              </g>
              
              {/* Prediction Arrows */}
              <g className="prediction-arrows">
                <path className="prediction-arrow" d="M150 50 L160 40 L150 30 L140 40 Z" fill="#00ff8c" style={{ transformOrigin: '150px 40px' }} />
                <path className="prediction-arrow" d="M300 150 L310 160 L300 170 L290 160 Z" fill="#ff6b6b" style={{ transformOrigin: '300px 160px' }} />
                <path className="prediction-arrow" d="M600 100 L610 90 L600 80 L590 90 Z" fill="#ffd700" style={{ transformOrigin: '600px 90px' }} />
              </g>
              
              {/* Analysis Metrics */}
              <g className="analysis-metrics">
                <text x="400" y="30" textAnchor="middle" className="text-sm fill-neon font-mono">REAL-TIME MARKET ANALYSIS</text>
                <text x="400" y="290" textAnchor="middle" className="text-xs fill-muted-foreground font-mono">
                  AI-powered insights • Multi-sector tracking • Predictive analytics
                </text>
              </g>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.map((article, index) => (
            <Link to={`/insights/${index + 1}`} key={index} className="group">
              <Card className="h-full border-border hover:border-neon transition-colors duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-neon/20 transition-colors duration-300">
                      {article.icon}
                    </div>
                    <span className="text-xs font-mono px-2 py-1 bg-muted rounded-full">
                      {article.tag}
                    </span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-neon transition-colors duration-300">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold mt-2">
                    {article.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {article.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Ahead of the Market</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our weekly newsletter for exclusive insights on AI-driven 
            trading strategies, market analysis, and technology updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            <Button className="bg-neon hover:bg-neon/80 text-black">
              Subscribe
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Insights;
