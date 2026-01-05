export type LeaderBoardVariant = 'games' | 'wins' | 'winPercentage';

export type LeaderBoardPlayer = {
  id: string;
  name: string;
  value: number; // games played, wins, etc.
};
