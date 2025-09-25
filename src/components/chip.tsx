'use client';

import * as React from 'react';
import clsx from 'clsx';

type ChipProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

export default function Chip({ children, className = '', title }: ChipProps) {
  return (
    <span
      title={title}
      className={clsx(
        // No fixed width, no truncate, no overflow hidden
        'inline-flex items-center gap-1 ring-1',
        'px-2 py-2 text-xs leading-5 rounded-xl',
        // keep it neutral; color will come from the caller
        'bg-white text-gray-800 ring-gray-200',
        className
      )}
    >
      {children}
    </span>
  );
}
