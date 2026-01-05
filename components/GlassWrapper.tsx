import { cn } from '@/lib/utils';

export default function GlassWrapper({
  children,
  className,
}: Readonly<{ className?: string; children: React.ReactNode }>) {
  return (
    <div
      className={cn(
        'bg-white/20 backdrop-blur-sm rounded-lg flex items-center',
        className,
      )}
    >
      {children}
    </div>
  );
}
