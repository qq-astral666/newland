import React from 'react';

// Данные о твоих навыках для удобного рендеринга
const SKILLS = [
  { name: 'JavaScript (ES6+)', level: 'Advanced', color: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5' },
  { name: 'React.js', level: 'Learning', color: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5' },
  { name: 'HTML5 & CSS3', level: 'Expert', color: 'text-orange-400 border-orange-400/20 bg-orange-400/5' },
  { name: 'Python', level: 'Basic', color: 'text-blue-400 border-blue-400/20 bg-blue-400/5' },
  { name: 'Tailwind CSS', level: 'Intermediate', color: 'text-teal-400 border-teal-400/20 bg-teal-400/5' },
  { name: 'Git & GitHub', level: 'Advanced', color: 'text-purple-400 border-purple-400/20 bg-purple-400/5' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

      {/* Левая колонка: Текст о тебе (5 колонок из 12) */}
      <div className="md:col-span-5 space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent, write short messages.">
            Обо мне
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow" />
        </div>

        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          Я создаю веб-интерфейсы, где эстетика сочетается с высокой производительностью. Мой путь начался с чистого любопытства к устройству сайтов, а теперь это переросло в осознанное инженерное развитие.
        </p>

        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          Делаю упор на адаптивность, семантику и скорость загрузки. Постоянно расширяю стек, чтобы решать задачи эффективнее и быстрее.
        </p>

        {/* Карточка с быстрыми фактами */}
        <div className="bg-slate-800/30 border border-slate-800/80 rounded-xl p-4 font-mono text-xs space-y-2">
          <div><span className="text-cyan-400">⚡ Локация:</span> РФ, Удаленно</div>
          <div><span className="text-cyan-400">⚡ Обучение:</span> Профильное IT</div>
          <div><span className="text-cyan-400">⚡ Цель:</span> Middle+ Frontend Developer</div>
        </div>
      </div>

      {/* Правая колонка: Интерактивный стек (7 колонок из 12) */}
      <div className="md:col-span-7 space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-slate-300">
            Мой стек & Технологии
          </h2>
        </div>

        <p className="text-xs font-mono text-slate-500">
          // Навыки, которые я использую для оживления макетов:
        </p>

        {/* Сетка навыков */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-default flex flex-col justify-between h-24 ${skill.color}`}
            >
              <span className="font-semibold text-sm sm:text-base text-white">
                {skill.name}
              </span>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[10px] font-mono tracking-wider uppercase opacity-60">
                  Уровень
                </span>
                <span className="text-xs font-mono font-medium">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}