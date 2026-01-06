import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Target } from 'lucide-react';
import { cn, getTableRankColor } from '@/lib/utils';
import GlassWrapper from './GlassWrapper';
import type { RankingPlayer } from '@/types/player';

export default function CardTable({ players }: { players: RankingPlayer[] }) {
  return (
    <Card className="backdrop-blur-xl bg-zinc-900/50 rounded-2xl shadow-2xl border border-orange-500/20 overflow-hidden gap-0">
      <CardHeader className="flex flex-row items-center gap-2 text-sm border-b border-sky-300/10 pb-4 mb-0">
        <Target className="w-6 h-6 text-orange-400" />
        <div>
          <h3 className="text-white">Player Rankings</h3>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table className="border-sky-300">
          <TableHeader>
            <TableRow className="border-sky-300/10 hover:bg-transparent">
              <TableHead className="text-orange-400 py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm uppercase text-xs font-bold tracking-tight">
                Rank
              </TableHead>
              <TableHead className="text-orange-400 py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm uppercase text-xs font-bold tracking-tigh">
                Player
              </TableHead>
              <TableHead className="text-orange-400 text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm uppercase text-xs font-bold tracking-tigh">
                GP
              </TableHead>
              <TableHead className="text-orange-400 text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm uppercase text-xs font-bold tracking-tigh">
                Wins
              </TableHead>
              <TableHead className="text-orange-400 text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm uppercase text-xs font-bold tracking-tigh">
                Losses
              </TableHead>
              <TableHead className="text-orange-400 text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm uppercase text-xs font-bold tracking-tigh">
                Win %
              </TableHead>
              <TableHead className="text-orange-400 text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm uppercase text-xs font-bold tracking-tigh">
                Record
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player, i) => (
              <TableRow
                key={i}
                className="border-sky-300/10 hover:bg-orange-400/10"
              >
                <TableCell className="text-white  font-bold py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm">
                  <GlassWrapper
                    className={cn(
                      'w-6 h-6 justify-center rounded-sm text-xs',
                      getTableRankColor(i),
                    )}
                  >
                    {i + 1}
                  </GlassWrapper>
                </TableCell>
                <TableCell className="text-white py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm">
                  {player.nickname}
                </TableCell>
                <TableCell className="text-white text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm ">
                  {player.games_played}
                </TableCell>
                <TableCell className="text-white text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm">
                  <div className="flex justify-center">
                    <GlassWrapper className="px-2 py-1 bg-green-600/30 border-green-800 justify-center border rounded-md w-6 h-6 text-green-300 text-xs font-light">
                      {player.wins}
                    </GlassWrapper>
                  </div>
                </TableCell>
                <TableCell className="text-white text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm">
                  <div className="flex justify-center">
                    <GlassWrapper className="px-2 py-1 bg-red-600/30 rounded-md w-6 h-6 border border-red-800 justify-center text-red-300 text-xs font-light">
                      {player.losses}
                    </GlassWrapper>
                  </div>
                </TableCell>
                <TableCell className="text-white text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm">
                  {player.win_percentage}%
                </TableCell>
                <TableCell className="text-white text-center py-2 px-3 lg:py-4 lg:px-5 text-xs lg:text-sm">
                  {player.wins}-{player.losses}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
