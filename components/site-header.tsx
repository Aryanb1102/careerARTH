'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navigationLinks } from '@/lib/site-content';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 bg-graphite backdrop-blur-md border-b',
        isScrolled ? 'shadow-sm border-sand' : 'border-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-trimmed.png"
            alt="CareerArth"
            width={1924}
            height={468}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-pearl font-work-sans">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </Link>
          ))}
          <Link
            href="https://forms.gle/XujesuyJ23NeHufK6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gold text-charcoal font-semibold rounded hover:bg-gold/80 transition-colors btn-primary"
          >
            Start the Career Audit
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden text-forest"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen ? (
        <div className="md:hidden border-t border-sand/20 bg-graphite/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm font-medium text-pearl font-work-sans">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="https://forms.gle/XujesuyJ23NeHufK6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 bg-gold text-charcoal font-semibold rounded text-center btn-primary"
            >
              Start the Career Audit
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
