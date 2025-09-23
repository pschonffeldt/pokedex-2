'use client';

import Link from 'next/link';

type HeroAction = {
  href: string;
  label: string;
  variant?: 'primary' | 'dark' | 'outline';
};

export type HeroSectionProps = {
  /** Title can be a string or your own <H1/> */
  title: React.ReactNode;
  /** Paragraph under the title (rich or plain) */
  description?: React.ReactNode;
  /** CTA buttons under the copy */
  actions?: HeroAction[];
  /** Override background (defaults to bg-indigo-50/50) */
  bgClassName?: string;
  /** Extra classes for the <section> */
  className?: string;
  /** Extra classes for the inner container */
  containerClassName?: string;
  /** Anything you want to render after CTAs */
  children?: React.ReactNode;
};

function actionClass(variant: HeroAction['variant'] = 'primary') {
  const base =
    'rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    dark: 'bg-gray-900 text-white hover:bg-black',
    outline: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100',
  } as const;
  return `${base} ${variants[variant]}`;
}

export default function HeroSection({
  title,
  description,
  actions = [],
  bgClassName = 'bg-indigo-50/50',
  className = '',
  containerClassName = '',
  children,
}: HeroSectionProps) {
  return (
    <section className={`border-b border-gray-100 ${bgClassName} ${className}`}>
      <div
        className={`mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 ${containerClassName}`}
      >
        <div className="flex items-start gap-3">
          <div>
            {/* Title: render as-is if a node; fallback to default h1 if string */}
            {typeof title === 'string' ? (
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                {title}
              </h1>
            ) : (
              title
            )}

            {description ? (
              <div className="lg:h-20 h-30">
                <p className="mt-3 max-w-prose text-gray-600 sm:text-lg">{description}</p>
              </div>
            ) : null}
          </div>
        </div>

        {actions.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map(({ href, label, variant }, i) => (
              <Link key={`${href}-${i}`} href={href} className={actionClass(variant)}>
                {label}
              </Link>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
