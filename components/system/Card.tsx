'use client';

import React, { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  metrics?: { label: string; value: string }[];
  interactive?: boolean;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  metrics,
  interactive = false,
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border border-gray-200 bg-white p-5 transition-all ${
        interactive ? 'hover:border-accent-400 cursor-pointer' : ''
      }`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'none',
        transition: 'transform 150ms ease, border-color 150ms ease'
      }}
    >
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {metrics && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-medium text-accent-600">
                {metric.value}
              </div>
              <div className="text-sm text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
      
      {children}
      
      {interactive && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-accent-600 flex items-center">
            View case study
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
