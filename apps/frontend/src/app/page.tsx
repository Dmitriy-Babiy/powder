import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const POSTS = [
  {
    date: '03. ФЕВ 2025',
    title: 'Современные подходы к разработке UI компонентов',
    description:
      'Исследуем лучшие практики создания переиспользуемых компонентов с использованием React и TypeScript.',
  },
  {
    date: '01. ФЕВ 2025',
    title: 'Оптимизация производительности веб-приложений',
    description:
      'Разбираем основные техники оптимизации и инструменты для улучшения производительности React приложений.',
  },
  {
    date: '01. ФЕВ 2025',
    title: 'Оптимизация производительности веб-приложений',
    description:
      'Разбираем основные техники оптимизации и инструменты для улучшения производительности React приложений.',
  },
  {
    date: '01. ФЕВ 2025',
    title: 'Оптимизация производительности веб-приложений',
    description:
      'Разбираем основные техники оптимизации и инструменты для улучшения производительности React приложений.',
  },
  {
    date: '01. ФЕВ 2025',
    title: 'Оптимизация производительности веб-приложений',
    description:
      'Разбираем основные техники оптимизации и инструменты для улучшения производительности React приложений.',
  },
];

const PROJECTS = [
  {
    date: '2024',
    title: 'E-commerce платформа',
    description:
      'Современный интернет-магазин с использованием Next.js, TypeScript и Tailwind CSS.',
  },
  {
    date: '2023',
    title: 'Система управления задачами',
    description:
      'Веб-приложение для управления проектами с drag-and-drop интерфейсом и real-time обновлениями.',
  },
  {
    date: '2023',
    title: 'Платформа для онлайн-обучения',
    description:
      'Интерактивная платформа для проведения онлайн-курсов с видео-контентом и тестами.',
  },
  {
    date: '2022',
    title: 'Мобильное приложение для фитнеса',
    description:
      'React Native приложение для отслеживания тренировок и питания с интеграцией с фитнес-трекерами.',
  },
];

export default function HomePage() {
  return (
    <main>
      <section aria-label="Главный экран" className="container pt-10!">
        <h1 className="max-w-4xl text-8xl font-bold uppercase">
          Frontend & <span className="text-blue-500">creative</span> coding
        </h1>
        <p className="mt-3 max-w-lg text-xl font-light text-balance text-neutral-400 dark:text-neutral-500">
          Разработка функциональных пользовательских интерфейсов с применением передовых технологий.
        </p>
      </section>

      <section aria-label="Блог" className="container pt-16!">
        <h2 className="text-3xl font-bold">Блог</h2>
        <div className="-mx-10 mt-6 grid grid-cols-2">
          {POSTS.slice(0, 3).map((post, index) => (
            <a className={cn(index === 0 && 'col-span-2 mb-10')} key={post.title} href="#">
              <Card>
                <time className="text-sm text-neutral-400 dark:text-neutral-500">{post.date}</time>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-blue-500">
                  {post.title}
                </h3>
                <p className="mt-2 text-neutral-400 dark:text-neutral-500">{post.description}</p>
              </Card>
            </a>
          ))}
        </div>
        <Link href="/blog">
          <Button className="mt-10 mb-24">Посмотреть все посты</Button>
        </Link>
      </section>

      <section aria-label="Проекты" className="container">
        <h2 className="text-3xl font-bold">Проекты</h2>
        <div className="-mx-10 mt-6 grid grid-cols-2">
          {PROJECTS.slice(0, 2).map((project) => (
            <a key={project.title} href="#">
              <Card>
                <time className="text-sm text-neutral-400 dark:text-neutral-500">
                  {project.date}
                </time>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-blue-500">
                  {project.title}
                </h3>
                <p className="mt-2 text-neutral-400 dark:text-neutral-500">{project.description}</p>
              </Card>
            </a>
          ))}
        </div>
        <Link href="/projects">
          <Button className="mt-10 mb-24">Посмотреть все проекты</Button>
        </Link>
      </section>
    </main>
  );
}
