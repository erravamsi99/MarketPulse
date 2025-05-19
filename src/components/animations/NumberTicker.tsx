import { useState, useEffect } from 'react';

interface NumberTickerProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const NumberTicker = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: NumberTickerProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(percentage);
      
      setCount(easedProgress * end);
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);
  
  const formatNumber = (num: number) => {
    return prefix + num.toFixed(decimals) + suffix;
  };
  
  return <span className={className}>{formatNumber(count)}</span>;
};

export default NumberTicker;
