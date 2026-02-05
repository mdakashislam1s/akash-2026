'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from './Button'

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-200
      ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'}
    `}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-lg font-medium text-gray-900 hover:text-accent-600 transition-colors"
          >
            Md.<span className="text-accent-600">Akash</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
  )
}

export default Navigation
