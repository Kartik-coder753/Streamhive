
import React, { useState, useEffect } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="animate-pulse-glow">
              <h1 className="text-2xl md:text-3xl font-display font-bold">
                <span className="text-white">STREAM</span>
                <span className="bg-clip-text text-transparent bg-hive-gradient animate-gradient-flow">HIVE</span>
              </h1>
            </div>
          </Link>
          
          <nav className="hidden md:flex ml-10 space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/movies" className="nav-link">Movies</Link>
            <Link to="/tv-shows" className="nav-link">TV Shows</Link>
            <Link to="/new" className="nav-link">New & Popular</Link>
            <Link to="/my-list" className="nav-link">My List</Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative group">
            <Search className="h-5 w-5 text-white/70 hover:text-white cursor-pointer transition-colors duration-200" />
          </div>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <span className="text-white/90 text-sm">John D.</span>
              <div 
                className="h-8 w-8 rounded-full bg-hive-500 flex items-center justify-center cursor-pointer"
                onClick={toggleLogin}
              >
                <User className="h-5 w-5 text-dark-900" />
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                className="text-sm py-1"
                onClick={() => window.location.href = '/login'}
              >
                Sign In
              </Button>
              <Button 
                className="text-sm py-1 bg-hive-600 hover:bg-hive-700 text-black"
                onClick={toggleLogin}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
        
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {showMobileMenu ? 
            <X className="h-6 w-6 text-white" /> : 
            <Menu className="h-6 w-6 text-white" />
          }
        </button>
      </div>
      
      {showMobileMenu && <MobileNav isLoggedIn={isLoggedIn} onClose={toggleMobileMenu} />}
    </header>
  );
};
