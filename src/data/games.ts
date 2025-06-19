import { Game, Category } from '../types/Game';

export const categories: Category[] = [
  { id: 'all', name: 'All Games', icon: 'Grid3X3', count: 48, color: 'bg-blue-500' },
  { id: 'action', name: 'Action', icon: 'Zap', count: 12, color: 'bg-red-500' },
  { id: 'puzzle', name: 'Puzzle', icon: 'Puzzle', count: 8, color: 'bg-green-500' },
  { id: 'racing', name: 'Racing', icon: 'Car', count: 6, color: 'bg-yellow-500' },
  { id: 'sports', name: 'Sports', icon: 'Trophy', count: 7, color: 'bg-orange-500' },
  { id: 'adventure', name: 'Adventure', icon: 'Map', count: 9, color: 'bg-purple-500' },
  { id: 'strategy', name: 'Strategy', icon: 'Brain', count: 6, color: 'bg-indigo-500' },
];

export const games: Game[] = [
  {
    id: '1',
    title: 'Cyber Runner 2025',
    description: 'Fast-paced cyberpunk endless runner with stunning visuals',
    thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'action',
    plays: 15420,
    rating: 4.8,
    tags: ['cyberpunk', 'runner', 'futuristic'],
    featured: true,
    trending: true,
    difficulty: 'Medium'
  },
  {
    id: '2',
    title: 'Mystic Puzzle Quest',
    description: 'Enchanting puzzle adventure through magical realms',
    thumbnail: 'https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'puzzle',
    plays: 8930,
    rating: 4.6,
    tags: ['magic', 'adventure', 'fantasy'],
    featured: true,
    trending: false,
    difficulty: 'Easy'
  },
  {
    id: '3',
    title: 'Speed Circuit Pro',
    description: 'Professional racing simulator with realistic physics',
    thumbnail: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'racing',
    plays: 12340,
    rating: 4.7,
    tags: ['racing', 'cars', 'simulation'],
    featured: false,
    trending: true,
    difficulty: 'Hard'
  },
  {
    id: '4',
    title: 'Ocean Explorer',
    description: 'Dive deep into underwater adventures and mysteries',
    thumbnail: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'adventure',
    plays: 6720,
    rating: 4.5,
    tags: ['underwater', 'exploration', 'mystery'],
    featured: false,
    trending: false,
    difficulty: 'Medium'
  },
  {
    id: '5',
    title: 'Championship Soccer',
    description: 'Lead your team to victory in this ultimate soccer experience',
    thumbnail: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'sports',
    plays: 9850,
    rating: 4.4,
    tags: ['soccer', 'team', 'championship'],
    featured: false,
    trending: true,
    difficulty: 'Medium'
  },
  {
    id: '6',
    title: 'Brain Teaser Elite',
    description: 'Challenge your mind with complex logic puzzles',
    thumbnail: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'puzzle',
    plays: 5430,
    rating: 4.9,
    tags: ['brain', 'logic', 'challenge'],
    featured: true,
    trending: false,
    difficulty: 'Hard'
  },
  {
    id: '7',
    title: 'Space Command',
    description: 'Strategic space battles across the galaxy',
    thumbnail: 'https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'strategy',
    plays: 7890,
    rating: 4.6,
    tags: ['space', 'strategy', 'battles'],
    featured: false,
    trending: false,
    difficulty: 'Hard'
  },
  {
    id: '8',
    title: 'Ninja Shadow',
    description: 'Stealth action game with fluid combat mechanics',
    thumbnail: 'https://images.pexels.com/photos/635356/pexels-photo-635356.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'action',
    plays: 11230,
    rating: 4.7,
    tags: ['ninja', 'stealth', 'combat'],
    featured: false,
    trending: true,
    difficulty: 'Medium'
  }
];