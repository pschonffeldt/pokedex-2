'use client';

import { Button } from '@/components/ui/button';

interface Props {
  onSearch: () => void;
  onRandom: () => void;
  onClear: () => void;
}

export default function ActionButtons({ onSearch, onRandom, onClear }: Props) {
  return (
    <div className="flex justify-between items-center border-b border-white/10 py-2 space-x-4">
      <Button onClick={onSearch}>Search</Button>
      <Button onClick={onRandom}>Random</Button>
      <Button variant="secondary" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
}
