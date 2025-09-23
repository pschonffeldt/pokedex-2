import { cn } from '@/lib/utils';

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn(
        'text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  );
}
