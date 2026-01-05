import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRankColor(idx: number) {
  switch (idx) {
    case 0: // first place
      return 'bg-yellow-400 text-black'; // gold
    case 1: // second place
      return 'bg-slate-400 text-black'; // silver
    case 2: // third place
      return 'bg-orange-600 text-white'; // bronze
    default:
      return 'bg-white/2 text-white'; // default glass
  }
}

export function getTableRankColor(idx: number) {
  switch (idx) {
    case 0: // first place
      return 'bg-yellow-500/20 text-yellow-500'; // gold
    case 1: // second place
      return 'bg-slate-400/20 text-slate-400'; // silver
    case 2: // third place
      return 'bg-orange-600/20 text-orange-600'; // bronze
    default:
      return 'bg-white/20 text-white'; // default glass
  }
}
