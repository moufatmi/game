export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  plays: number;
  rating: number;
  tags: string[];
  featured: boolean;
  trending: boolean;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  gameUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}