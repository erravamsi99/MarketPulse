
import { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { LineChart, TrendingUp, MessageSquare, Activity, ChartLine, Users, Zap } from 'lucide-react';
import anime from 'animejs';
import { ChartContainer } from '@/components/ui/chart';
import TradingChart from '../components/dashboard/TradingChart';
import CounterMetric from '../components/dashboard/CounterMetric';
import PredictionCard from '../components/dashboard/PredictionCard';
import SentimentPanel from '../components/dashboard/SentimentPanel';
import SectorHeatmap from '../components/dashboard/SectorHeatmap';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('predictions');
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate dashboard title and metrics on load
    if (dashboardRef.current) {
      anime({
        targets: '.dashboard-title',
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.9, 1],
        duration: 1200,
        easing: 'easeOutElastic(1, .8)'
      });
      
      anime({
        targets: '.metric-counter',
        opacity: [0, 1],
        translateY: [15, 0],
        delay: anime.stagger(150),
        duration: 800,
        easing: 'easeOutCubic'
      });
    }
  }, []);
  
  useEffect(() => {
    // Animate tab change
    anime({
      targets: `.tab-content-${selectedTab}`,
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 600,
      easing: 'easeOutCubic'
    });
    
    // Animate active tab indicator
    anime({
      targets: `.tab-${selectedTab} .tab-indicator`,
      width: ['0%', '100%'],
      duration: 600,
      easing: 'easeOutCubic'
    });
  }, [selectedTab]);
  
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  
  return (
    <Layout>
      <Section className="py-8">
        <div className="max-w-7xl mx-auto" ref={dashboardRef}>
          {/* Dashboard Header */}
          <div className="flex flex-col mb-8 md:mb-10">
            <h1 className="dashboard-title text-3xl md:text-4xl font-bold mb-2 opacity-0">
              MarketPulse AI Dashboard
            </h1>
            <p className="text-muted-foreground">
              Real-time market predictions and AI-powered trading insights
            </p>
          </div>
          
          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <CounterMetric 
              title="API Requests Today" 
              value={104562} 
              icon={<Activity className="text-neon" />} 
            />
            <CounterMetric 
              title="Avg Model Latency" 
              value={42} 
              unit="ms" 
              icon={<Zap className="text-neon" />} 
            />
            <CounterMetric 
              title="Model Accuracy" 
              value={85} 
              unit="%" 
              icon={<ChartLine className="text-neon" />} 
            />
            <CounterMetric 
              title="Live Signals Delivered" 
              value={12405} 
              icon={<Users className="text-neon" />} 
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-card rounded-lg p-6 border border-muted h-fit">
              <nav className="space-y-1">
                {[
                  { id: 'predictions', name: 'Predictions', icon: <LineChart size={18} className="mr-3" /> },
                  { id: 'trends', name: 'Market Trends', icon: <TrendingUp size={18} className="mr-3" /> },
                  { id: 'chatbot', name: 'TrendBot', icon: <MessageSquare size={18} className="mr-3" /> }
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`tab-${tab.id} flex items-center w-full px-4 py-3 rounded-md transition-colors relative ${
                      selectedTab === tab.id ? 'bg-muted text-neon' : 'hover:bg-muted/50'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                    {selectedTab === tab.id && (
                      <span className="tab-indicator absolute bottom-0 left-0 h-0.5 bg-neon"></span>
                    )}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-muted">
                <h3 className="font-medium mb-3">Quick Stats</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground">API Calls Today</p>
                    <p className="text-lg font-semibold">4,253</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Model Accuracy (7d)</p>
                    <p className="text-lg font-semibold">87.2%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Predictions Tab */}
              <div className={`tab-content-${selectedTab} ${selectedTab === 'predictions' ? 'block' : 'hidden'}`}>
                <div className="bg-card rounded-lg p-6 border border-muted mb-6">
                  <h2 className="text-xl font-bold mb-4">Real-Time Market Chart</h2>
                  <div className="w-full h-80 mb-6">
                    <TradingChart symbol="AAPL" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PredictionCard 
                      symbol="AAPL" 
                      currentPrice={189.75} 
                      predictedPrice={191.20} 
                      direction="up" 
                      accuracy={85} 
                      confidence={0.91}
                    />
                    
                    <div className="bg-muted/20 p-6 rounded-md border border-muted">
                      <h3 className="text-lg font-semibold mb-4">Price Catalysts</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="inline-block mr-2 w-2 h-2 mt-1.5 rounded-full bg-green-500"></span>
                          <span>Strong sales performance in emerging markets</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block mr-2 w-2 h-2 mt-1.5 rounded-full bg-yellow-500"></span>
                          <span>Potential impact from new product announcements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block mr-2 w-2 h-2 mt-1.5 rounded-full bg-blue-500"></span>
                          <span>Market sentiment responding to quarterly earnings</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-muted">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Sector Performance</h2>
                    <Button variant="outline" size="sm" className="text-xs">
                      Refresh Data
                    </Button>
                  </div>
                  <SectorHeatmap />
                </div>
              </div>
              
              {/* Trends Tab */}
              <div className={`tab-content-${selectedTab} ${selectedTab === 'trends' ? 'block' : 'hidden'}`}>
                <div className="bg-card rounded-lg p-6 border border-muted">
                  <h2 className="text-xl font-bold mb-4">Market Trends</h2>
                  <p className="text-muted-foreground mb-8">AI-identified market trends and pattern recognition</p>
                  
                  {/* Placeholder content */}
                  <div className="space-y-6">
                    <div className="bg-muted/20 p-6 rounded-md border border-muted">
                      <h3 className="text-lg font-medium mb-2">Tech Sector Momentum</h3>
                      <div className="flex items-center mb-4">
                        <div className="w-24 bg-muted/40 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <span className="ml-4 text-green-500 font-medium">Strong</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        AI trend analysis indicates continued strong momentum in the tech sector, with 80% of analyzed stocks showing bullish patterns.
                      </p>
                    </div>
                    
                    <div className="bg-muted/20 p-6 rounded-md border border-muted">
                      <h3 className="text-lg font-medium mb-2">Energy Sector Volatility</h3>
                      <div className="flex items-center mb-4">
                        <div className="w-24 bg-muted/40 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="ml-4 text-yellow-500 font-medium">Moderate</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Increased volatility detected in energy stocks, suggesting potential sector rotation or news-driven price action.
                      </p>
                    </div>
                    
                    <div className="bg-muted/20 p-6 rounded-md border border-muted">
                      <h3 className="text-lg font-medium mb-2">Financial Sector Pattern</h3>
                      <div className="flex items-center mb-4">
                        <div className="w-24 bg-muted/40 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <span className="ml-4 text-red-500 font-medium">Weak</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Financial stocks showing early signs of bearish patterns with decreasing volume, possible pullback expected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chatbot Tab */}
              <div className={`tab-content-${selectedTab} ${selectedTab === 'chatbot' ? 'block' : 'hidden'}`}>
                <div className="bg-card rounded-lg p-6 border border-muted">
                  <h2 className="text-xl font-bold mb-4">TrendBot</h2>
                  <p className="text-muted-foreground mb-6">Ask our AI chatbot about market trends, news sentiment, and financial insights</p>
                  
                  <SentimentPanel />
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold mb-4 typewriter-text">Start Trading Smarter Today</h3>
            <Button className="bg-neon text-black hover:bg-neon-hover glow-button">
              Upgrade to Premium
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Access advanced AI-powered predictions and real-time trading signals
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Dashboard;
