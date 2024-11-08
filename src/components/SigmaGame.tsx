import React, { useState, useEffect } from 'react';
import { Sigma, Skull } from 'lucide-react';

interface Adrian {
  id: number;
  x: number;
  y: number;
}

interface SigmaGameProps {
  adrianImageUrl?: string;
}

export function SigmaGame({ 
  adrianImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
}: SigmaGameProps) {
  const [score, setScore] = useState(0);
  const [adrians, setAdrians] = useState<Adrian[]>([]);
  const [showEffect, setShowEffect] = useState<{x: number; y: number} | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (adrians.length < 5) {
        const newAdrian = {
          id: Date.now(),
          x: Math.random() * 90,
          y: Math.random() * 90,
        };
        setAdrians(prev => [...prev, newAdrian]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [adrians]);

  const handleClick = (adrian: Adrian, event: React.MouseEvent) => {
    setScore(prev => prev + 100);
    setAdrians(prev => prev.filter(a => a.id !== adrian.id));
    
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setShowEffect({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    setTimeout(() => setShowEffect(null), 500);
  };

  return (
    <div className="relative w-full h-[300px] bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm">
      <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
        <Sigma className="w-5 h-5" />
        <span className="font-bold">{score}</span>
      </div>
      
      {adrians.map(adrian => (
        <button
          key={adrian.id}
          onClick={(e) => handleClick(adrian, e)}
          className="absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
          style={{ left: `${adrian.x}%`, top: `${adrian.y}%` }}
        >
          <img
            src={adrianImageUrl}
            alt="Adrian"
            className="w-full h-full rounded-full object-cover border-2 border-purple-500"
          />
        </button>
      ))}

      {showEffect && (
        <div
          className="absolute pointer-events-none"
          style={{ left: showEffect.x, top: showEffect.y }}
        >
          <Skull className="w-6 h-6 text-red-500 animate-bounce" />
        </div>
      )}

      <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
        Click the Adrians to earn sigma points!
      </div>
    </div>
  );
}