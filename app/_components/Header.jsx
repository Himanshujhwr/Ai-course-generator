"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { ExternalLink, Menu, X, Search, ChevronDown } from 'lucide-react';

function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'} transition-all duration-300`}>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
        {/* Logo */}
        <Link href={'/dashboard'} className="flex-shrink-0">
          <Image 
            src={'/logo.png'} 
            className='h-auto transition-transform hover:scale-105' 
            width={150} 
            height={50} 
            alt="AI Course Generator" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href={'/dashboard'} className={`text-sm font-medium ${path === '/dashboard' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'} transition-colors`}>
            Dashboard
          </Link>
          <Link href={'/dashboard'} className={`text-sm font-medium ${path === '/features' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'} transition-colors`}>
            Features
          </Link>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-600 hover:text-primary">
              Resources <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
              <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Templates</Link>
              <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tutorials</Link>
              <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentation</Link>
            </div>
          </div>
        </nav>
        
        {/* Right Side Items */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Legacy Version Button with Tooltip */}
          <div className="relative group">
            <Link href="https://course-maker-nu.vercel.app/courses">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white border border-dashed border-primary text-gray-700 hover:bg-gray-50 transition">
                <ExternalLink className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Legacy Version</span>
              </div>
            </Link>
            <div className="absolute top-full right-0 mt-2 w-48 p-3 rounded-md bg-black text-white text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <div className="absolute -top-1 right-4 w-2 h-2 bg-black transform rotate-45"></div>
              Access the legacy version of our course generation platform
            </div>
          </div>

          <Link href={'/dashboard'}>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-primary focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2">
          <nav className="flex flex-col space-y-3 py-3">
            <Link href={'/dashboard'} className={`text-sm py-2 ${path === '/dashboard' ? 'text-primary font-medium' : 'text-gray-600'}`}>
              Dashboard
            </Link>
            <Link href={'/dashboard'} className={`text-sm py-2 ${path === '/features' ? 'text-primary font-medium' : 'text-gray-600'}`}>
              Features
            </Link>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between py-2 text-sm text-gray-600">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </summary>
              <nav className="ml-4 mt-2 flex flex-col space-y-2">
                <Link href="/templates" className="text-sm text-gray-500 hover:text-primary">Templates</Link>
                <Link href="/tutorials" className="text-sm text-gray-500 hover:text-primary">Tutorials</Link>
                <Link href="/docs" className="text-sm text-gray-500 hover:text-primary">Documentation</Link>
              </nav>
            </details>
            <div className="border-t border-gray-100 pt-3">
              <Link href="https://course-maker-nu.vercel.app/courses" className="flex items-center gap-2 py-2 text-sm text-primary">
                <ExternalLink className="h-4 w-4" />
                <span>Legacy Version</span>
              </Link>
              <Link href='/dashboard' className="w-full">
                <button className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Get Started
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;