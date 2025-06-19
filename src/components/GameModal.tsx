import React from 'react';
import { X, Star, Play, Share2, Heart } from 'lucide-react';
import { Game } from '../types/Game';

interface GameModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, isOpen, onClose }) => {
  if (!isOpen || !game) return null;

  const formatPlays = (plays: number) => {
    if (plays >= 1000000) return `${(plays / 1000000).toFixed(1)}M`;
    if (plays >= 1000) return `${(plays / 1000).toFixed(1)}K`;
    return plays.toString();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">{game.title}</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Game Image */}
              <div className="relative">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-64 lg:h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <Play className="w-12 h-12 text-blue-600 fill-current" />
                  </div>
                </button>
              </div>

              {/* Game Info */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{game.rating}</span>
                  </div>
                  <div className="text-gray-600">
                    {formatPlays(game.plays)} plays
                  </div>
                  <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {game.category}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {game.description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                    Play Now
                  </button>
                  <button className="p-3 border border-gray-200 text-gray-600 hover:text-red-500 hover:border-red-200 rounded-xl transition-colors duration-200">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-3 border border-gray-200 text-gray-600 hover:text-blue-500 hover:border-blue-200 rounded-xl transition-colors duration-200">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;