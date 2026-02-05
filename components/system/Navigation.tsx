'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['home', 'work', 'insights', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Insights', href: '#insights' },
    { label: 'System', href: '/system' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
      }`}
      style={{
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-lg font-medium text-gray-900 hover:text-accent-600 transition-colors"
          >
            AKASH<span className="text-accent-600">.</span>IO
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  activeSection === item.label.toLowerCase()
                    ? 'text-accent-600 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <Button variant="primary" size="sm">
            Start Project
          </Button>
        </div>
      </div>
    </nav>
  );
};
