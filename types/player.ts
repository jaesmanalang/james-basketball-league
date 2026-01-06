export type LeaderBoardVariant = 'games' | 'wins' | 'winPercentage';

export type LeaderBoardPlayer = {
  id: string;
  nickname: string;
  division: string;
  value: string; // games played, wins, etc.
};

export type RankingPlayer = {
  id: string;
  nickname: string;
  division: string;
  games_played: number;
  wins: number;
  losses: number;
  win_percentage: number;
};
