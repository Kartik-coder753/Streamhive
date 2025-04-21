
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, X, Film, Play } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock search results - in a real app, this would come from an API
  const mockResults = [
    { id: 1, title: 'Inception', year: '2010', type: 'Movie' },
    { id: 2, title: 'Interstellar', year: '2014', type: 'Movie' },
    { id: 3, title: 'The Dark Knight', year: '2008', type: 'Movie' },
    { id: 4, title: 'Stranger Things', year: '2016', type: 'TV Show' },
  ];
  
  const filteredResults = searchQuery.length > 0
    ? mockResults.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-dark-800 border-dark-700">
        <div className="flex items-center mb-4">
          <Search className="h-5 w-5 text-white/70 mr-2" />
          <Input
            placeholder="Search movies, TV shows, actors..."
            className="flex-1 bg-dark-700 border-none focus-visible:ring-hive-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button className="ml-2" onClick={onClose}>
            <X className="h-5 w-5 text-white/70 hover:text-white" />
          </button>
        </div>
        
        {searchQuery.length > 0 && (
          <div className="mt-4 space-y-2">
            {filteredResults.length > 0 ? (
              filteredResults.map(result => (
                <div 
                  key={result.id}
                  className="flex items-center p-2 hover:bg-dark-700 rounded-md transition-colors duration-200 cursor-pointer"
                  onClick={() => window.location.href = `/${result.type.toLowerCase()}/${result.id}`}
                >
                  <div className="w-10 h-10 bg-dark-600 rounded flex items-center justify-center mr-3">
                    <Film className="h-5 w-5 text-white/70" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{result.title}</p>
                    <p className="text-sm text-white/70">{result.year} • {result.type}</p>
                  </div>
                  <button className="bg-hive-600 text-black rounded-full p-1.5 hover:bg-hive-700 transition-colors duration-200 ml-2">
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-white/70">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
