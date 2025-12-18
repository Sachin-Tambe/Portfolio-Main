import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  scale?: boolean;
}

export const RevealOnScroll: React.FC<Props> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up',
  scale = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      const scaleStr = scale ? 'scale-95' : '';
      switch (direction) {
        case 'up': return `translate-y-12 ${scaleStr}`;
        case 'left': return `-translate-x-12 ${scaleStr}`;
        case 'right': return `translate-x-12 ${scaleStr}`;
        case 'none': return `${scaleStr}`;
        default: return `translate-y-12 ${scaleStr}`;
      }
    }
    return 'translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};