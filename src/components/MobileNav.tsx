
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isLoggedIn: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isLoggedIn, onClose }) => {
  return (
    <div className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-md pt-20 pb-6 px-4 animate-fade-in">
      <div className="flex flex-col h-full">
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block py-2 text-lg font-medium" onClick={onClose}>Home</Link>
            </li>
            <li>
              <Link to="/movies" className="block py-2 text-lg font-medium" onClick={onClose}>Movies</Link>
            </li>
            <li>
              <Link to="/tv-shows" className="block py-2 text-lg font-medium" onClick={onClose}>TV Shows</Link>
            </li>
            <li>
              <Link to="/new" className="block py-2 text-lg font-medium" onClick={onClose}>New & Popular</Link>
            </li>
            <li>
              <Link to="/my-list" className="block py-2 text-lg font-medium" onClick={onClose}>My List</Link>
            </li>
            <li>
              <div className="flex items-center py-2">
                <Search className="h-5 w-5 mr-2" />
                <span className="text-lg font-medium">Search</span>
              </div>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto pt-4 border-t border-white/10">
          {isLoggedIn ? (
            <div className="flex items-center space-x-3 py-2">
              <div className="h-10 w-10 rounded-full bg-hive-500 flex items-center justify-center">
                <User className="h-6 w-6 text-dark-900" />
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-white/70">Premium Plan</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-center"
                onClick={() => window.location.href = '/login'}
              >
                Sign In
              </Button>
              <Button 
                className="w-full justify-center bg-hive-600 hover:bg-hive-700 text-black"
                onClick={() => window.location.href = '/register'}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
