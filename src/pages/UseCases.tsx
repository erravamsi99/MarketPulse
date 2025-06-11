
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Building2, TrendingUp, Users, Newspaper } from 'lucide-react';
import NumberTicker from '../components/animations/NumberTicker';

const UseCases = () => {
  const useCases = [
    {
      icon: <Building2 className="text-neon" size={36} />,
      title: "Algorithmic Traders",
      description: "Use LSTM-driven predictions and TrendBot to build dynamic strategies that adapt to changing market conditions in real-time.",
      features: [
        "Integrate our REST API directly into trading platforms",
        "Access pre-trained models or upload custom frameworks",
        "Real-time alerts and signals via WebSocket connections"
      ],
      kpis: [
        { label: "API Latency", value: 35, suffix: "ms" },
        { label: "Prediction Accuracy", value: 87, suffix: "%" },
        { label: "Daily API Calls", value: 125000, suffix: "+" }
      ]
    },
    {
      icon: <TrendingUp className="text-neon" size={36} />,
      title: "Hedge Funds",
      description: "Run predictive modeling at scale with vector search + retraining pipelines designed for institutional-grade requirements.",
      features: [
        "Enterprise-grade infrastructure with dedicated support",
        "Custom model deployment with CI/CD pipelines",
        "Multi-asset class coverage with deep market data"
      ],
      kpis: [
        { label: "Data Processing", value: 12, suffix: "TB/day" },
        { label: "Model Retraining", value: 4, suffix: "hr cycle" },
        { label: "Market Coverage", value: 15000, suffix: "+ assets" }
      ]
    },
    {
      icon: <Users className="text-neon" size={36} />,
      title: "Retail Quants",
      description: "Access API endpoints for real-time signals and deploy backtested strategies with enterprise-grade technology at retail prices.",
      features: [
        "Affordable API pricing tiers starting at $99/month",
        "Pre-built integrations with popular trading platforms",
        "Community forum and strategy sharing marketplace"
      ],
      kpis: [
        { label: "Strategy Templates", value: 75, suffix: "+" },
        { label: "Backtest Speed", value: 10000, suffix: "x real-time" },
        { label: "New Users", value: 750, suffix: "/month" }
      ]
    },
    {
      icon: <Newspaper className="text-neon" size={36} />,
      title: "Financial Research Analysts",
      description: "Query GPT-4 based TrendBot to summarize news and identify macro trends before they impact the broader market.",
      features: [
        "Natural language querying of financial data",
        "Auto-generated reports and market summaries",
        "Sentiment analysis across news, social media, and filings"
      ],
      kpis: [
        { label: "Sources Analyzed", value: 9500, suffix: "/day" },
        { label: "Query Response", value: 2.5, suffix: "sec" },
        { label: "Sentiment Accuracy", value: 92, suffix: "%" }
      ]
    }
  ];

  return (
    <Layout>
      <Section>
        <div className="text-center mb-16">
          <p className="section-heading">Use Cases</p>
          <h1 className="section-title">Tailored for Every Trading Strategy</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            MarketPulse adapts to your specific trading needs, whether you're an individual quant trader
            or managing billions in assets at an institutional level.
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
              <div className="w-full md:w-1/2">
                <Card className="border-border bg-card overflow-hidden h-full">
                  <CardHeader className="bg-muted/10">
                    <div className="flex gap-4 items-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-muted/30 flex items-center justify-center">
                        {useCase.icon}
                      </div>
                      <CardTitle className="text-3xl">{useCase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-6 text-lg">
                      {useCase.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-neon">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                      {useCase.kpis.map((kpi, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold flex justify-center">
                            <NumberTicker 
                              end={kpi.value} 
                              suffix={kpi.suffix} 
                              className="text-neon" 
                              duration={2000 + (idx * 500)}
                            />
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">{kpi.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="w-full md:w-1/2">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">
                    {useCase.title} <span className="text-neon">Solution</span>
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    MarketPulse delivers customized solutions for {useCase.title.toLowerCase()}, 
                    combining our core AI technology with specialized features designed for your specific needs.
                  </p>
                  <div className="numbered-item" data-number="1">
                    <h4 className="text-xl font-semibold mb-2">Tailored Integration</h4>
                    <p className="text-muted-foreground">
                      Custom API endpoints and integration support to fit directly into your existing workflow.
                    </p>
                  </div>
                  <div className="numbered-item" data-number="2">
                    <h4 className="text-xl font-semibold mb-2">Custom Modeling</h4>
                    <p className="text-muted-foreground">
                      Specialized models and data pipelines designed specifically for your trading strategy.
                    </p>
                  </div>
                  <div className="numbered-item" data-number="3">
                    <h4 className="text-xl font-semibold mb-2">Ongoing Support</h4>
                    <p className="text-muted-foreground">
                      Dedicated customer success team to ensure you get maximum value from the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default UseCases;
