
import { Cpu, Layers, Database, Zap } from 'lucide-react';
import Section from '../ui/Section';

const TechOverview = () => {
  return (
    <Section className="bg-card">
      <div className="text-center mb-16">
        <p className="section-heading">Technology</p>
        <h2 className="section-title">Powered by Advanced AI</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="numbered-item" data-number="01">
          <h3 className="text-xl font-bold mb-2">Real-Time Prediction Engine</h3>
          <p className="text-muted-foreground mb-4">
            Built on TensorFlow with LSTM neural networks, our prediction engine processes market data in real-time with industry-leading latency.
          </p>
          <div className="flex items-center space-x-6 mt-6">
            <div className="text-center">
              <Cpu className="mx-auto text-neon mb-2" size={24} />
              <p className="text-xs text-muted-foreground">TensorFlow</p>
            </div>
            <div className="text-center">
              <Layers className="mx-auto text-neon mb-2" size={24} />
              <p className="text-xs text-muted-foreground">LSTM Networks</p>
            </div>
            <div className="text-center">
              <Zap className="mx-auto text-neon mb-2" size={24} />
              <p className="text-xs text-muted-foreground">&lt;50ms Latency</p>
            </div>
          </div>
        </div>
        
        <div className="numbered-item" data-number="02">
          <h3 className="text-xl font-bold mb-2">NLP Sentiment Analysis</h3>
          <p className="text-muted-foreground mb-4">
            GPT-4 powered sentiment analysis scans thousands of news sources and social media channels to detect market-moving trends.
          </p>
          <div className="bg-muted/30 p-3 rounded-md border border-muted text-sm">
            <code className="text-neon">
              analyzing: "Federal Reserve announces unexpected rate cut" → Bullish (0.87)
            </code>
          </div>
        </div>
        
        <div className="numbered-item" data-number="03">
          <h3 className="text-xl font-bold mb-2">Vector Search Database</h3>
          <p className="text-muted-foreground mb-4">
            Our Pinecone-powered vector database enables semantic search across millions of financial documents and reports.
          </p>
          <div className="flex items-center space-x-6 mt-6">
            <div className="text-center">
              <Database className="mx-auto text-neon mb-2" size={24} />
              <p className="text-xs text-muted-foreground">Vector DB</p>
            </div>
          </div>
        </div>
        
        <div className="numbered-item" data-number="04">
          <h3 className="text-xl font-bold mb-2">Low-Latency Architecture</h3>
          <p className="text-muted-foreground mb-4">
            Edge-optimized infrastructure ensures minimal latency between prediction and execution, crucial for high-frequency trading.
          </p>
          <div className="relative h-2 w-full bg-muted/30 rounded-full overflow-hidden mt-6">
            <div className="absolute top-0 left-0 h-full w-3/4 bg-neon rounded-full animate-pulse-neon"></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground">Signal</span>
            <span className="text-xs text-muted-foreground">Execution</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechOverview;
