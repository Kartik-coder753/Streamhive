
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MovieRow } from '@/components/MovieRow';
import { Footer } from '@/components/Footer';
import { SearchModal } from '@/components/SearchModal';
import { AuthModals } from '@/components/AuthModals';
import { trendingMovies, newReleases, popularShows } from '@/components/MovieData';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const Index = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'register'>('login');

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const openLoginModal = () => {
    setAuthModalTab('login');
    setAuthModalOpen(true);
  };

  const openRegisterModal = () => {
    setAuthModalTab('register');
    setAuthModalOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Content Sections */}
        <div className="container mx-auto px-4 py-12">
          {/* Search Bar (Mobile) */}
          <div className="md:hidden mb-8">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={openSearchModal}
            >
              <Search className="h-4 w-4" />
              <span>Search movies, TV shows...</span>
            </Button>
          </div>
          
          {/* Movie Rows */}
          <MovieRow title="Trending Now" movies={trendingMovies} />
          <MovieRow title="New Releases" movies={newReleases} />
          <MovieRow title="Popular TV Shows" movies={popularShows} />
          
          {/* Featured Section */}
          <div className="mt-16 mb-12 bg-dark-800 rounded-lg overflow-hidden animate-fade-in">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1500&auto=format&fit=crop" 
                  alt="Premium Plan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-display font-bold mb-4">Upgrade to Premium</h2>
                <p className="text-white/80 mb-6">
                  Enjoy ad-free streaming, exclusive content, and the ability to download your favorite movies and shows for offline viewing.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-hive-500 mr-2">✓</span>
                    <span>Unlimited HD and 4K streaming</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-hive-500 mr-2">✓</span>
                    <span>Watch on any device</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-hive-500 mr-2">✓</span>
                    <span>Download movies and shows</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-hive-500 mr-2">✓</span>
                    <span>Cancel anytime</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-hive-600 hover:bg-hive-700 text-black" onClick={openRegisterModal}>
                    Start Free Trial
                  </Button>
                  <Button variant="outline" onClick={openLoginModal}>
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Download Section */}
          <div className="py-12 text-center animate-fade-in">
            <h2 className="text-3xl font-display font-bold mb-4">Watch Anywhere</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Stream your favorite movies and TV shows on your phone, tablet, laptop, and TV without paying more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                Download for iOS
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                Download for Android
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                Watch on TV
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Modals */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <AuthModals 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialTab={authModalTab}
      />
    </div>
  );
};

export default Index;
