'use client';

import { Button } from '@/components/ui/button';

interface Props {
  onSearch: () => void;
  onRandom: () => void;
  onClear: () => void;
}

export default function ActionButtons({ onSearch, onRandom, onClear }: Props) {
  return (
    <div className="flex justify-between items-center py-2 space-x-5">
      <Button variant="secondary" onClick={onSearch}>
        Search
      </Button>
      <Button variant="secondary" onClick={onRandom}>
        Random
      </Button>
      <Button variant="secondary" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
}
