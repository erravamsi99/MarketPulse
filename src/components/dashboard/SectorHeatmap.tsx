
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const sectors = [
  { name: 'Technology', change: 2.4, volume: 'High' },
  { name: 'Healthcare', change: 1.7, volume: 'Medium' },
  { name: 'Financials', change: -0.8, volume: 'High' },
  { name: 'Consumer', change: 0.6, volume: 'Low' },
  { name: 'Energy', change: -1.5, volume: 'Medium' },
  { name: 'Materials', change: 0.3, volume: 'Low' },
  { name: 'Utilities', change: -0.2, volume: 'Low' },
  { name: 'Real Estate', change: -2.1, volume: 'Medium' },
  { name: 'Industrials', change: 1.2, volume: 'High' },
  { name: 'Telecom', change: 0.9, volume: 'Medium' },
];

const getIntensity = (change: number) => {
  const absChange = Math.abs(change);
  if (absChange > 2) return 'bg-opacity-90';
  if (absChange > 1) return 'bg-opacity-70';
  if (absChange > 0.5) return 'bg-opacity-50';
  return 'bg-opacity-30';
};

const SectorHeatmap = () => {
  const heatmapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heatmapRef.current) {
      anime({
        targets: '.sector-cell',
        scale: [0.8, 1],
        opacity: [0, 1],
        delay: anime.stagger(50, {grid: [5, 2], from: 'center'}),
        duration: 800,
        easing: 'easeOutElastic(1, .6)'
      });
    }
  }, []);
  
  return (
    <div ref={heatmapRef} className="grid grid-cols-2 sm:grid-cols-5 gap-4">
      {sectors.map((sector, index) => (
        <div 
          key={sector.name}
          className={`sector-cell p-4 rounded-md border border-muted ${
            sector.change >= 0 
              ? `bg-green-500 ${getIntensity(sector.change)}`
              : `bg-red-500 ${getIntensity(sector.change)}`
          } opacity-0`}
        >
          <h4 className="text-sm font-medium mb-2">{sector.name}</h4>
          <div className="flex justify-between">
            <span className="text-xs font-mono">
              {sector.change >= 0 ? '+' : ''}{sector.change}%
            </span>
            <span className="text-xs opacity-70">{sector.volume}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectorHeatmap;
