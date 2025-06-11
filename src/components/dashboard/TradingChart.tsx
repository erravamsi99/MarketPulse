
import { useEffect, useRef, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import anime from 'animejs';

interface TradingChartProps {
  symbol: string;
}

// Mock data for the trading chart
const generateMockData = () => {
  const data = [];
  let price = 185;
  
  for (let i = 0; i < 24; i++) {
    const change = (Math.random() - 0.5) * 4;
    price += change;
    data.push({
      time: `${i}:00`,
      price: parseFloat(price.toFixed(2)),
    });
  }
  
  return data;
};

const TradingChart = ({ symbol }: TradingChartProps) => {
  const [data, setData] = useState(() => generateMockData());
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (chartRef.current) {
      anime({
        targets: chartRef.current,
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 1000,
        easing: 'easeOutCubic'
      });
    }
    
    // Update data every 5 seconds to simulate real-time updates
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData];
        // Remove first point
        newData.shift();
        
        // Add new point at the end
        const lastPrice = newData[newData.length - 1].price;
        const change = (Math.random() - 0.5) * 2;
        const newPrice = parseFloat((lastPrice + change).toFixed(2));
        const hour = parseInt(newData[newData.length - 1].time.split(':')[0]);
        const newHour = (hour + 1) % 24;
        
        newData.push({
          time: `${newHour}:00`,
          price: newPrice
        });
        
        return newData;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div ref={chartRef} className="w-full h-full opacity-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00ff8c" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00ff8c" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="time" tick={{ fill: '#888' }} />
          <YAxis domain={['dataMin - 5', 'dataMax + 5']} tick={{ fill: '#888' }} />
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              borderColor: 'hsl(var(--border))',
              color: 'hsl(var(--foreground))'
            }}
            itemStyle={{ color: 'hsl(var(--foreground))' }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke="#00ff8c" 
            fillOpacity={1} 
            fill="url(#colorPrice)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TradingChart;
