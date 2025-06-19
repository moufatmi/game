import React from 'react';
import { Game } from '../types/Game';
import { Play, Star, TrendingUp } from 'lucide-react';

interface FeaturedGamesProps {
  games: Game[];
  onPlay: (game: Game) => void;
}

const FeaturedGames: React.FC<FeaturedGamesProps> = ({ games, onPlay }) => {
  const featuredGames = games.filter(game => game.featured).slice(0, 3);

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Games</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of the most exciting and popular games
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredGames.map((game, index) => (
          <div
            key={game.id}
            className={`relative group overflow-hidden rounded-3xl ${
              index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}
          >
            <div className={`relative ${index === 0 ? 'h-96' : 'h-48'}`}>
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-center space-x-3 mb-4">
                  {game.trending && (
                    <div className="flex items-center space-x-1 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      <span>Trending</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{game.rating}</span>
                  </div>
                </div>

                <h3 className={`font-bold text-white mb-2 ${
                  index === 0 ? 'text-2xl' : 'text-xl'
                }`}>
                  {game.title}
                </h3>
                
                <p className="text-white/90 mb-6 line-clamp-2">
                  {game.description}
                </p>

                <button
                  onClick={() => onPlay(game)}
                  className="self-start flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-200"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Play Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;