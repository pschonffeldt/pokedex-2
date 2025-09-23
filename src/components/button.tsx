'use client';

import Link from 'next/link';
import * as React from 'react';

type ButtonVariant = 'primary' | 'dark' | 'outline';
type ButtonSize = 'sm' | 'xs';

type ButtonProps = {
  children: React.ReactNode;
  href?: string; // if provided -> renders <Link>
  variant?: ButtonVariant; // 'primary' | 'dark' | 'outline'
  size?: ButtonSize; // 'sm' | 'xs'
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'sm',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const base =
    'rounded-full font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 disabled:opacity-60 disabled:cursor-not-allowed';

  const sizeMap: Record<ButtonSize, string> = {
    sm: 'px-5 py-2 text-sm',
    xs: 'px-3 py-1 text-xs',
  };

  const variantMap: Record<ButtonVariant, string> = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    dark: 'bg-gray-900 text-white hover:bg-black',
    outline: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100',
  };

  const classes = [base, sizeMap[size], variantMap[variant], className].join(' ');

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}

// How to implement

// import Button from '@/components/button';

// // 1) Primary (indigo) — matches “See all regions”
// <Button href="/learn/pokemon-regions">See all regions</Button>

// // 2) Outline small — matches your tiny CTA chips
// <Button href={c.cta[1]} variant="outline" size="xs">
//   {c.cta[0]}
// </Button>

// // 3) Dark — same as hero’s dark button
// <Button href="/learn" variant="dark">Start learning</Button>

// // As a real <button>
// <Button onClick={handleClick} variant="primary">Do thing</Button>
