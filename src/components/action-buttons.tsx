import { Button } from '@/components/ui/button';

export default function ActionButons() {
  return (
    <div className="flex justify-between items-center border-b border-white/10 py-2 space-x-4">
      <Button>Search</Button>
      <Button>Random</Button>
      <Button>Clear</Button>
    </div>
  );
}
