
import React, { useEffect, useRef } from 'react';

export const HorizonXLogo = ({ className }: { className?: string }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      
      const { left, top, width, height } = logoRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance from mouse to center of logo
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate the movement factor (smaller number = more movement)
      const moveFactorX = (mouseX - centerX) / 50;
      const moveFactorY = (mouseY - centerY) / 50;
      
      // Apply the 3D rotation effect
      logoRef.current.style.transform = `perspective(500px) rotateY(${moveFactorX}deg) rotateX(${-moveFactorY}deg)`;
    };
    
    const handleScroll = () => {
      if (!logoRef.current || !pulseRef.current) return;
      
      // Parallax effect on scroll
      const scrollPosition = window.scrollY;
      logoRef.current.style.transform = `translateY(${scrollPosition * 0.02}px)`;
      
      // Change pulse size on scroll
      const pulseSize = 3 + Math.min(scrollPosition * 0.005, 2);
      pulseRef.current.style.width = `${pulseSize}px`;
      pulseRef.current.style.height = `${pulseSize}px`;
    };
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      ref={logoRef}
      className={`flex items-center font-bold text-2xl transition-transform duration-200 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <span className="bg-gradient-to-r from-horizonx-700 to-horizonx-500 bg-clip-text text-transparent hover-scale">
        HORIZON
      </span>
      <span className="relative ml-1 text-horizonx-700">
        X
        <span 
          ref={pulseRef}
          className="absolute top-0 -right-3 w-3 h-3 rounded-full bg-horizonx-500 opacity-75 animate-pulse"
        ></span>
      </span>
    </div>
  );
};
