import * as React from 'react';

type InfoBoxProps = {
  /** Optional heading above the list */
  title?: React.ReactNode;
  /** Bulleted items; if omitted, render custom children instead */
  items?: React.ReactNode[];
  /** Custom content (renders after items if both provided) */
  children?: React.ReactNode;
  /** Background style */
  variant?: 'tinted' | 'plain'; // tinted = bg-indigo-50/50, plain = bg-white
  /** Extra classes for the inner box */
  className?: string;
};

export default function InfoBox({
  title,
  items,
  children,
  variant = 'tinted',
  className = '',
}: InfoBoxProps) {
  const bg = variant === 'tinted' ? 'bg-indigo-50/50' : 'bg-white';
  const boxClasses = ['w-full rounded-2xl border border-gray-200 p-6', bg, className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 border-gray-100">
      <div className={boxClasses}>
        {title &&
          (typeof title === 'string' ? (
            <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
          ) : (
            <div className="mb-2">{title}</div>
          ))}

        {items?.length ? (
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : null}

        {children}
      </div>
    </section>
  );
}
