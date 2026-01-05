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

export default function CardTable() {
  return (
    <Card className="backdrop-blur-xl bg-zinc-900/50 rounded-2xl shadow-2xl border border-orange-500/20 overflow-hidden gap-0">
      <CardHeader className="flex flex-row items-center gap-2 text-sm border-b border-sky-300/10 pb-4 mb-0">
        <Target className="w-6 h-6 text-orange-400" />
        <div>
          <h3 className="text-white">Player Rankings 2026</h3>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table className="border-sky-300">
          <TableHeader>
            <TableRow className="border-sky-300/10">
              <TableHead className="text-orange-400 py-4 px-5 uppercase text-xs font-bold tracking-tight">
                Rank
              </TableHead>
              <TableHead className="text-orange-400 py-4 px-5 uppercase text-xs font-bold tracking-tigh">
                Player
              </TableHead>
              <TableHead className="text-orange-400 text-center py-4 px-5 uppercase text-xs font-bold tracking-tigh">
                GP
              </TableHead>
              <TableHead className="text-orange-400 text-center py-4 px-5 uppercase text-xs font-bold tracking-tigh">
                Wins
              </TableHead>
              <TableHead className="text-orange-400 text-center py-4 px-5 uppercase text-xs font-bold tracking-tigh">
                Losses
              </TableHead>
              <TableHead className="text-orange-400 text-center py-4 px-5 uppercase text-xs font-bold tracking-tigh">
                Win Percentage
              </TableHead>
              <TableHead className="text-orange-400 text-center py-4 px-5 uppercase text-xs font-bold tracking-tigh">
                Record
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow
                key={i}
                className="border-sky-300/10 hover:bg-orange-400/10"
              >
                <TableCell className="text-white  font-bold py-4 px-5">
                  <GlassWrapper
                    className={cn(
                      'w-6 h-6 justify-center rounded-sm text-xs',
                      getTableRankColor(i),
                    )}
                  >
                    {i + 1}
                  </GlassWrapper>
                </TableCell>
                <TableCell className="text-white py-4 px-5">
                  Player {i + 1}
                </TableCell>
                <TableCell className="text-white text-center py-4 px-5 ">
                  10
                </TableCell>
                <TableCell className="text-white text-center py-4 px-5">
                  8
                </TableCell>
                <TableCell className="text-white text-center py-4 px-5">
                  8
                </TableCell>
                <TableCell className="text-white text-center py-4 px-5">
                  80%
                </TableCell>
                <TableCell className="text-white text-center py-4 px-5">
                  10-2
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
