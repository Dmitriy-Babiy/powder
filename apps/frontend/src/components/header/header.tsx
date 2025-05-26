'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Moon, Search, Sun } from 'lucide-react';
import styles from './header.module.scss';
import { useTheme } from '@/lib/theme/theme-context';

const NAVIGATION_ITEMS = [
  { href: '/blog', label: 'Блог' },
  { href: '/projects', label: 'Проекты' },
  { href: '/about-me', label: 'Обо мне' },
];

export function Header() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoHighlight}>#</span> Мастерская разработки
        </Link>

        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className={styles.themeSwitch}>
          {mounted && (theme === 'light' ? <Sun /> : <Moon />)}
        </button>

        <nav className={styles.nav}>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              <span>/</span>
            </li>
          ))}
          <button className={styles.navLink}>
            Поиск <Search />
          </button>
        </nav>
      </div>
    </header>
  );
}
