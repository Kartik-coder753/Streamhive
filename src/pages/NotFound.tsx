
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-20">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">
            <span className="text-white">4</span>
            <span className="bg-clip-text text-transparent bg-hive-gradient">0</span>
            <span className="text-white">4</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Oops! This stream doesn't exist
          </p>
          <p className="text-white/60 max-w-md mx-auto mb-8">
            The page you're looking for might have been moved, deleted, or never existed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-hive-600 hover:bg-hive-700 text-black" asChild>
              <Link to="/">Go Back Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/movies">Browse Movies</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
