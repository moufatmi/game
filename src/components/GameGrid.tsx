import React from 'react';
import { Game } from '../types/Game';
import GameCard from './GameCard';

interface GameGridProps {
  games: Game[];
  onPlay: (game: Game) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ games, onPlay }) => {
  if (games.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No games found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria to find more games.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">All Games</h2>
          <p className="text-gray-600">{games.length} games available</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onPlay={onPlay} />
        ))}
      </div>
    </section>
  );
};

export default GameGrid;