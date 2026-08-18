import React from 'react';

// 1. Выносим данные о проектах в чистый массив объектов (Best Practice)
const PROJECTS_DATA = [
  {
    id: 'apex',
    title: 'APEX shield',
    description: 'Адаптивный лендинг для компании зимней экипировки. Реализовал удобную навигацию, блоки с технологиями и космический дизайн.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    github: 'https://github.com', // Замени на реальные ссылки
    demo: 'https://github.io'
  },
  {
    id: 'automaster',
    title: 'AutoMaster',
    description: 'Адаптивный лендинг для автосервиса. Сделал упор на чистоту кода, скорость загрузки и удобную форму записи.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    github: 'https://github.com',
    demo: 'https://github.io'
  },
  {
    id: 'digitalgo',
    title: 'DigitalGo',
    description: 'Корпоративный многостраничный сайт. Реализовал живую фильтрацию кейсов, Lightbox для деталей, динамический счетчик и аккордеон.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    github: 'https://github.com',
    demo: 'https://github.io'
  },
  {
    id: 'medcenter',
    title: 'МедЦентр Плюс',
    description: 'Многостраничный сайт клиники. Сверстал интерактивные прайс-листы с кастомизированными таблицами и плавными FAQ-аккордеонами.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    github: 'https://github.com',
    demo: 'https://github.io'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Заголовок секции */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Мои проекты
        </h2>
        <div className="h-[1px] bg-slate-700 flex-grow" />
      </div>

      {/* Сетка проектов (Bento / Grid 2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="group relative bg-slate-800/40 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              {/* Заголовок и ссылки */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-sm font-mono">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    [ Code ]
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    [ Live ]
                  </a>
                </div>
              </div>

              {/* Описание */}
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Теги технологий */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}