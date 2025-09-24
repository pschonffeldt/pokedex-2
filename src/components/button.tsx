'use client';

import Link from 'next/link';
import * as React from 'react';

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'secondary';
type ButtonSize = 'sm' | 'xs';

type ButtonProps = {
  children: React.ReactNode;
  href?: string; // if provided -> renders <Link>
  variant?: ButtonVariant; // 'primary' | 'dark' | 'outline' | 'secondary'
  size?: ButtonSize; // 'sm' | 'xs'
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  ariaLabel?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
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
  target,
  rel,
}: ButtonProps) {
  const base =
    'rounded-full font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 disabled:opacity-60 disabled:cursor-not-allowed';

  const sizeMap: Record<ButtonSize, string> = {
    sm: 'px-5 py-2 text-sm',
    xs: 'px-3 py-1 text-xs',
  };

  // `secondary` is an alias of your outline style
  const outlineClasses = 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100';

  const variantMap: Record<ButtonVariant, string> = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    dark: 'bg-gray-900 text-white hover:bg-black',
    outline: outlineClasses,
    secondary: outlineClasses,
  };

  const classes = [base, sizeMap[size], variantMap[variant], className].join(' ');

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}

// Secondary + onClick (no href -> <button>)
// <Button variant="secondary" onClick={onSearch}>
//   Search
// </Button>

// // Secondary as a link (still supports onClick)
// <Button href="/pokedex" variant="secondary" onClick={() => console.log('navigating')}>
//   Open Pokédex
// </Button>

// // Tiny outline chip
// <Button href={ctaHref} variant="outline" size="xs">
//   {ctaLabel}
// </Button>

// // Dark hero button
// <Button href="/learn" variant="dark">Start learning</Button>

// // Dark button
// <Button href="URL" variant="dark">BUTTON TEXT</Button>

// // Dark button
// <Button href="URL" variant="dark">BUTTON TEXT</Button>
