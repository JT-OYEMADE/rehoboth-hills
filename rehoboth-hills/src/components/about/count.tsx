import React, { useState, useEffect } from 'react';

interface CountUpAnimationProps {
  targetValue: number;
  animationDuration: number;
  className?: string;
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
  targetValue,
  animationDuration,
  className,
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animateCountUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const percentageComplete = Math.min(progress / animationDuration, 1);
      const currentValue = Math.floor(percentageComplete * targetValue);

      setCount(currentValue);

      if (percentageComplete < 1) {
        requestAnimationFrame(animateCountUp);
      }
    };

    requestAnimationFrame(animateCountUp);

    // Clean up the interval when the component is unmounted
    return () => {
      startTime = null;
    };
  }, [targetValue, animationDuration]);

  return (
    <div className={className}>
      {count}+
    </div>
  );
};

export default CountUpAnimation;
