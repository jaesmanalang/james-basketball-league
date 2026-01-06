import { Flame, Trophy, Zap } from 'lucide-react';
import type { LeaderBoardVariant } from '@/types/player';

export const leaderBoardConfig: Record<
  LeaderBoardVariant,
  {
    bgClass: string;
    icon: React.ReactNode;
    hoverBorder?: string;
  }
> = {
  games: {
    bgClass: 'from-orange-500/90 to-orange-600/90 border-orange-400/30',
    icon: <Flame className="w-6 h-6 text-white" />,
    hoverBorder: 'hover:border-orange-400/70',
  },
  wins: {
    bgClass:
      'from-indigo-600/90 via-blue-500/80 to-cyan-400/90 border-blue-400/30',
    icon: <Trophy className="w-6 h-6 text-white" />,
    hoverBorder: 'hover:border-blue-400/70',
  },
  winPercentage: {
    bgClass:
      'from-purple-500/90 via-pink-500/80 to-pink-600/90 border-pink-400/30',
    icon: <Zap className="w-6 h-6 text-white" />,
    hoverBorder: 'hover:border-pink-400/70',
  },
};
