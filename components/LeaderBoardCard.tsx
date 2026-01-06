import { Card, CardContent, CardHeader } from './ui/card';
import { leaderBoardConfig } from './leaderboard/config';
import { cn, getRankColor } from '@/lib/utils';
import type { LeaderBoardPlayer, LeaderBoardVariant } from '@/types/player';
import GlassWrapper from './GlassWrapper';

type LeaderBoardCardProps = {
  title: string;
  subtitle: string;
  variant: LeaderBoardVariant;
  players: LeaderBoardPlayer[];
};

export default function LeaderBoardCard({
  title,
  subtitle,
  variant,
  players,
}: LeaderBoardCardProps) {
  const { bgClass, icon, hoverBorder } = leaderBoardConfig[variant];

  return (
    <Card
      className={cn(
        'relative rounded-2xl shadow-2xl border overflow-hidden bg-linear-to-br gap-0 transition-all duration-300 ease-out',
        hoverBorder,
        bgClass,
      )}
    >
      <CardHeader className="flex flex-row items-center gap-2 text-sm">
        <GlassWrapper className="w-12 h-12 justify-center">{icon}</GlassWrapper>
        <div>
          <h3 className="text-white uppercase">{title}</h3>
          <p className="text-xs text-white/80">{subtitle}</p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2 mt-3">
          {players.map((player, idx) => (
            <li key={player.id}>
              <GlassWrapper className="bg-white/10 hover:bg-black/10 transition ease-in-out duration-150 cursor-pointer">
                <div className="flex justify-between text-sm items-center py-3 px-3 w-full">
                  <div className="flex items-center gap-2">
                    <GlassWrapper
                      className={cn(
                        'w-6 h-6 justify-center rounded-sm text-xs',
                        getRankColor(idx),
                      )}
                    >
                      {idx + 1}
                    </GlassWrapper>
                    <span className="text-white">{player.nickname}</span>
                  </div>
                  <span className="font-bold text-white">{player.value}</span>
                </div>
              </GlassWrapper>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
