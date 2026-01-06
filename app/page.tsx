import Container from '@/components/Container';
import LeaderBoardCard from '@/components/LeaderBoardCard';
import CardTable from '@/components/CardTable';
import { createClient } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = await createClient();
  const [
    { data: mostGamesData },
    { data: mostWinsData },
    { data: highestWinRateData },
    { data: fullRankingData },
  ] = await Promise.all([
    supabase
      .from('player_stats')
      .select('id, nickname, division, games_played')
      .order('games_played', { ascending: false })
      .limit(5),

    supabase
      .from('player_stats')
      .select('id, nickname, division, wins')
      .order('wins', { ascending: false })
      .limit(5),

    supabase
      .from('player_stats')
      .select('id, nickname, division, win_percentage')
      .gte('games_played', 4)
      .order('win_percentage', { ascending: false })
      .limit(5),

    supabase
      .from('player_rankings')
      .select(
        'id, nickname, division, games_played, wins, losses, win_percentage, metric, rank_overall',
      )
      .order('rank_overall', { ascending: true }),
  ]);

  const mostGamesPlayers = (mostGamesData || []).map((p) => ({
    id: p.id,
    nickname: p.nickname,
    division: p.division,
    value: p.games_played,
  }));

  const mostWinsPlayers = (mostWinsData || []).map((p) => ({
    id: p.id,
    nickname: p.nickname,
    division: p.division,
    value: p.wins,
  }));

  const highestWinratePlayers = (highestWinRateData || []).map((p) => ({
    id: p.id,
    nickname: p.nickname,
    division: p.division,
    value: `${p.win_percentage}%`,
  }));

  return (
    <main className="py-6">
      <Container>
        <h4 className="text-center lg:text-left lg:text-xl font-semibold mb-6">
          {' '}
          <span className="bg-linear-to-r from-sky-400 via-skye-500 to-sky-600 bg-clip-text text-transparent font-bold">
            Papawis
          </span>{' '}
          Leaderboards 2026
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
          <LeaderBoardCard
            variant="games"
            title="Iron Man"
            subtitle="Most Games Played"
            players={mostGamesPlayers}
          />
          <LeaderBoardCard
            variant="wins"
            title="Champion"
            subtitle="Most Wins"
            players={mostWinsPlayers}
          />
          <LeaderBoardCard
            variant="winPercentage"
            title="Elite"
            subtitle="Best Win Rate (Min 4 Games)"
            players={highestWinratePlayers}
          />
        </div>
        <div>
          <CardTable players={fullRankingData || []} />
        </div>
      </Container>
    </main>
  );
}
