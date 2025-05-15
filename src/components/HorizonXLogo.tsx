
import React from 'react';

export const HorizonXLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center font-bold text-2xl ${className}`}>
      <span className="bg-gradient-to-r from-horizonx-700 to-horizonx-500 bg-clip-text text-transparent">
        HORIZON
      </span>
      <span className="relative ml-1 text-horizonx-700">
        X
        <span className="absolute top-0 -right-3 w-3 h-3 rounded-full bg-horizonx-500 opacity-75 animate-pulse"></span>
      </span>
    </div>
  );
};
