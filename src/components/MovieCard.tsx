
import React, { useState } from 'react';
import { Play, Plus, Star, Info } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface MovieCardProps {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
  year: string;
  category: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ 
  id, 
  title, 
  posterUrl, 
  rating, 
  year, 
  category 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();
  
  const handleAddToList = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Added to My List",
      description: `${title} has been added to your list`,
      duration: 3000,
    });
  };

  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = `/movie/${id}`}
    >
      <img 
        src={posterUrl} 
        alt={title}
        className="movie-card-image"
      />
      
      <div className={`movie-card-overlay ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-auto mt-2 flex justify-between items-start px-2">
          <div className="flex items-center bg-black/60 rounded-full px-2 py-0.5">
            <Star className="h-3 w-3 text-hive-500 mr-1" />
            <span className="text-xs">{rating}</span>
          </div>
          
          <button 
            onClick={handleAddToList}
            className="bg-black/60 rounded-full p-1.5 hover:bg-hive-600 hover:text-black transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        
        <div className="pt-4">
          <h3 className="text-lg font-medium truncate">{title}</h3>
          <div className="flex justify-between items-center mt-1">
            <div className="text-sm text-white/70">
              {year} • {category}
            </div>
            
            <div className="flex space-x-1">
              <button className="bg-hive-600 text-black rounded-full p-1.5 hover:bg-hive-700 transition-colors duration-200">
                <Play className="h-3.5 w-3.5" />
              </button>
              <button className="bg-dark-700 rounded-full p-1.5 hover:bg-dark-600 transition-colors duration-200">
                <Info className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
