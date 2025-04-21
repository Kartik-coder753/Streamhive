
import React from 'react';
import { Play, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-end">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
          alt="Hero image"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container mx-auto px-4 pb-16 md:pb-20 relative z-10 animate-slide-up">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Dune: Part Two</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-hive-600 text-black px-2 py-0.5 text-sm font-bold rounded">NEW</span>
            <span className="text-white/70">2024</span>
            <span className="text-white/70">PG-13</span>
            <span className="text-white/70">2h 46m</span>
            <span className="hidden md:inline-block text-white/70">Science Fiction</span>
          </div>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            Paul Atreides unites with the Fremen people of Arrakis to wage war against House Harkonnen and fulfill his destiny as the messiah of the desert planet.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-hive-600 hover:bg-hive-700 text-black flex items-center gap-2">
              <Play className="h-5 w-5" /> Play Now
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Plus className="h-5 w-5" /> Add to My List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
