
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { ReactNode } from 'react';

interface CounterMetricProps {
  title: string;
  value: number;
  unit?: string;
  icon?: ReactNode;
}

const CounterMetric = ({ title, value, unit = "", icon }: CounterMetricProps) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const formattedFinalValue = value.toLocaleString();
  
  useEffect(() => {
    if (counterRef.current) {
      const countTarget = { value: 0 };
      const animation = anime({
        targets: countTarget,
        value: value,
        round: 1,
        easing: 'easeOutExpo',
        duration: 2000,
        update: () => {
          if (counterRef.current) {
            counterRef.current.innerText = Math.floor(countTarget.value).toLocaleString() + unit;
          }
        }
      });
      
      return () => {
        animation.pause();
      };
    }
  }, [value, unit]);
  
  return (
    <div className="metric-counter bg-card rounded-lg p-4 border border-muted opacity-0">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground mb-1">{title}</p>
          <span 
            ref={counterRef} 
            className="text-xl md:text-2xl font-bold font-mono"
          >
            0{unit}
          </span>
        </div>
        {icon && (
          <div className="p-2 rounded-full bg-muted/20">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterMetric;
