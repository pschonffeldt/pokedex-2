'use client';

import Button from '@/components/button';

interface Props {
  onSearch: () => void;
  onRandom: () => void;
  onClear: () => void;
}

export default function ActionButtons({ onSearch, onRandom, onClear }: Props) {
  return (
    <div className="flex flex-wrap justify-items-start py-2 space-x-4 gap-y-2">
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
