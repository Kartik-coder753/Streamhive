
import React, { useRef } from 'react';
import { MovieCard } from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
  year: string;
  category: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -800, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 800, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="mb-12 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="category-title">{title}</h2>
        <Button variant="outline" size="sm" className="text-xs">
          View All
        </Button>
      </div>
      
      <div className="relative group">
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll gap-4 pb-4 scrollbar-none scroll-smooth"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-[200px]">
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="bg-dark-800/80 hover:bg-dark-700 rounded-full p-2"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="bg-dark-800/80 hover:bg-dark-700 rounded-full p-2"
            onClick={scrollRight}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
