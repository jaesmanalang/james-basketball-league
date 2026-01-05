import Container from '@/components/Container';
import LeaderBoardCard from '@/components/LeaderBoardCard';
import CardTable from '@/components/CardTable';
import { Target } from 'lucide-react';

type Player = {
  name: string;
  games: number;
  wins: number;
  losses: number;
  winPercent: string;
};

const tablePlayers: Player[] = [
  { name: 'James', games: 30, wins: 20, losses: 10, winPercent: '67%' },
  { name: 'Mike', games: 25, wins: 15, losses: 10, winPercent: '60%' },
  { name: 'Alex', games: 20, wins: 12, losses: 8, winPercent: '60%' },
];

const columns = [
  { key: 'name', label: 'Player' },
  { key: 'games', label: 'Games Played' },
  { key: 'wins', label: 'Wins' },
  { key: 'losses', label: 'Losses' },
  { key: 'winPercent', label: 'Win %' },
] as const;

export default function Home() {
  const players = [
    { id: '1', name: 'Alice', value: 15 },
    { id: '2', name: 'Bob', value: 12 },
    { id: '3', name: 'Charlie', value: 10 },
    { id: '4', name: 'David', value: 8 },
    { id: '5', name: 'Eve', value: 5 },
  ];
  return (
    <main className="py-6">
      <Container>
        <h4 className="text-xl font-semibold mb-6">
          {' '}
          <span className="bg-linear-to-r from-sky-400 via-skye-500 to-sky-600 bg-clip-text text-transparent font-bold">
            Papawis
          </span>{' '}
          Leaderboards
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <LeaderBoardCard
            variant="games"
            title="Iron Man"
            subtitle="Most Games Played"
            players={players}
          />
          <LeaderBoardCard
            variant="wins"
            title="Champion"
            subtitle="Most Wins"
            players={players}
          />
          <LeaderBoardCard
            variant="winPercentage"
            title="Elite"
            subtitle="Best Win Rate"
            players={players}
          />
        </div>
        <div>
          <CardTable />
        </div>
      </Container>
    </main>
  );
}
