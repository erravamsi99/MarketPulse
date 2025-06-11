
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface PredictionCardProps {
  symbol: string;
  currentPrice: number;
  predictedPrice: number;
  direction: 'up' | 'down';
  accuracy: number;
  confidence: number;
}

const PredictionCard = ({
  symbol,
  currentPrice,
  predictedPrice,
  direction,
  accuracy,
  confidence,
}: PredictionCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const accuracyRef = useRef<HTMLDivElement>(null);
  
  const percentChange = ((predictedPrice - currentPrice) / currentPrice * 100).toFixed(2);
  
  useEffect(() => {
    if (cardRef.current && arrowRef.current && accuracyRef.current) {
      // Animate the card entrance
      anime({
        targets: cardRef.current,
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 800,
        easing: 'easeOutCubic'
      });
      
      // Animate the arrow
      anime({
        targets: arrowRef.current,
        translateY: [0, -5, 0],
        scale: [1, 1.2, 1],
        duration: 1500,
        easing: 'easeInOutQuad',
        loop: true
      });
      
      // Animate the accuracy glow
      anime({
        targets: accuracyRef.current,
        boxShadow: [
          '0 0 0px rgba(0, 255, 140, 0.0)',
          '0 0 10px rgba(0, 255, 140, 0.5)',
          '0 0 0px rgba(0, 255, 140, 0.0)'
        ],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true
      });
    }
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="bg-muted/20 p-6 rounded-md border border-muted opacity-0"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{symbol} Prediction</h3>
          <p className="text-sm text-muted-foreground">24-hour forecast</p>
        </div>
        <div 
          ref={accuracyRef}
          className="px-3 py-1 text-xs font-medium rounded-full bg-neon/10 text-neon"
        >
          Accuracy: {accuracy}%
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Current Price</p>
          <p className="text-2xl font-mono font-bold">${currentPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Predicted Price</p>
          <p className="text-2xl font-mono font-bold">${predictedPrice.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div 
          ref={arrowRef}
          className={`flex items-center ${direction === 'up' ? 'text-green-500' : 'text-red-500'}`}
        >
          {direction === 'up' ? (
            <ArrowUp className="mr-1" />
          ) : (
            <ArrowDown className="mr-1" />
          )}
          <span className="font-bold">{percentChange}%</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-xs text-muted-foreground mr-2">Confidence:</span>
          <div className="w-20 h-2 bg-muted/40 rounded-full">
            <div 
              className={`h-full rounded-full ${
                direction === 'up' ? 'bg-green-500' : 'bg-red-500'
              }`} 
              style={{ width: `${confidence * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;
