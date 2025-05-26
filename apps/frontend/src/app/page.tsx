import Link from 'next/link';

const POSTS = [
  {
    date: '15. МАР 2024',
    title: 'Введение в Server Components в Next.js 14',
    description:
      'Разбираемся с новой архитектурой React Server Components и их преимуществами для производительности и SEO.',
  },
  {
    date: '10. МАР 2024',
    title: 'TypeScript: Продвинутые типы и утилиты',
    description:
      'Изучаем продвинутые возможности TypeScript: условные типы, маппинг типов и утилиты для более строгой типизации.',
  },
  {
    date: '05. МАР 2024',
    title: 'Микросервисная архитектура: с чего начать',
    description:
      'Практическое руководство по переходу от монолита к микросервисам: основные принципы и лучшие практики.',
  },
  {
    date: '01. МАР 2024',
    title: 'GraphQL vs REST: что выбрать в 2024',
    description:
      'Сравнительный анализ современных подходов к API: когда использовать GraphQL, а когда REST.',
  },
  {
    date: '25. ФЕВ 2024',
    title: 'Docker для разработчиков: основы и практика',
    description:
      'Практическое руководство по контейнеризации приложений: от базовых концепций до продвинутых сценариев.',
  },
];

const PROJECTS = [
  {
    date: '2024',
    title: 'E-commerce платформа',
    description: 'Современный интернет-магазин с использованием Next.js и TypeScript.',
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
      <section aria-label="Главный экран">
        <h1>Frontend & creative coding</h1>
        <p>
          Разработка функциональных пользовательских интерфейсов с применением передовых технологий.
        </p>
      </section>

      <section aria-label="Блог">
        <h2>Блог</h2>
        <div>
          {POSTS.map((post) => (
            <a key={post.title} href="#">
              <div>
                <time>{post.date}</time>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </a>
          ))}
        </div>
        <Link href="/blog">
          <button>Посмотреть все посты</button>
        </Link>
      </section>

      <section aria-label="Проекты">
        <h2>Проекты</h2>
        <div>
          {PROJECTS.map((project) => (
            <a key={project.title} href="#">
              <div>
                <time>{project.date}</time>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
        <Link href="/projects">
          <button>Посмотреть все проекты</button>
        </Link>
      </section>
    </main>
  );
}
