
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 pt-16 pb-8 text-white/70">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-medium mb-4">STREAMHIVE</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-hive-500 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-hive-500 transition-colors duration-200">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-hive-500 transition-colors duration-200">Careers</Link></li>
              <li><Link to="/faq" className="hover:text-hive-500 transition-colors duration-200">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/account" className="hover:text-hive-500 transition-colors duration-200">Account</Link></li>
              <li><Link to="/help" className="hover:text-hive-500 transition-colors duration-200">Help Center</Link></li>
              <li><Link to="/devices" className="hover:text-hive-500 transition-colors duration-200">Supported Devices</Link></li>
              <li><Link to="/accessibility" className="hover:text-hive-500 transition-colors duration-200">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-hive-500 transition-colors duration-200">Terms of Use</Link></li>
              <li><Link to="/privacy" className="hover:text-hive-500 transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-hive-500 transition-colors duration-200">Cookie Preferences</Link></li>
              <li><Link to="/legal" className="hover:text-hive-500 transition-colors duration-200">Legal Notices</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-hive-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-hive-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-hive-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-hive-500 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <h5 className="text-white font-medium mb-2">Download Our App</h5>
              <div className="flex space-x-3">
                <a href="#" className="bg-dark-800 hover:bg-dark-700 px-3 py-2 rounded text-xs transition-colors duration-200">App Store</a>
                <a href="#" className="bg-dark-800 hover:bg-dark-700 px-3 py-2 rounded text-xs transition-colors duration-200">Google Play</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-display font-bold">
              <span className="text-white">STREAM</span>
              <span className="bg-clip-text text-transparent bg-hive-gradient">HIVE</span>
            </h1>
          </div>
          
          <div>
            <p className="text-sm">© 2025 STREAMHIVE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
