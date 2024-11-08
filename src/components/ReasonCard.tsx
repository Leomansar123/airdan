import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ReasonCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ReasonCard({ icon: Icon, title, description }: ReasonCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-purple-600 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}