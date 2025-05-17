'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { cn } from '../../lib/utils';
import { Moon, Search, Sun } from 'lucide-react';

const NAVIGATION_ITEMS = [
  { href: '/blog', label: 'Блог' },
  { href: '/projects', label: 'Проекты' },
  { href: '/about-me', label: 'Обо мне' },
];

export const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="py-6">
      <div className="container flex items-center">
        <Link href="/" className="mr-auto flex items-center justify-between text-2xl">
          <span className="text-blue-500">#</span> Мастерская разработки
        </Link>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="hover:before:border-primary relative mr-3 flex cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-200 before:absolute before:inset-0 before:scale-0 before:rounded-full before:border before:border-transparent before:transition-all before:duration-300 hover:before:scale-100">
          {mounted && (theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />)}
        </button>

        <nav className="flex items-center gap-2">
          {NAVIGATION_ITEMS.map((item) => (
            <React.Fragment key={item.href}>
              <Link href={item.href} className={cn('font-main animated-underline', isActive(item.href) && 'after:!w-full')}>
                {item.label}
              </Link>
              <span className="text-neutral-300 dark:text-neutral-500">/</span>
            </React.Fragment>
          ))}
          <button className="font-main animated-underline flex cursor-pointer items-center gap-1">
            Поиск <Search className="mt-0.5 h-4 w-4" />
          </button>
        </nav>
      </div>
    </header>
  );
};
