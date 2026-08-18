import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Эффект свечения на бэкграунде */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl text-center z-10">
        <p className="text-cyan-400 font-mono text-sm mb-3 tracking-widest uppercase">
          Привет, меня зовут
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Владислав.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          Создаю чистый и эффективный код.
        </h2>
        <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-8 balanced">
          Специализируюсь на современной верстке, создании удобных интерфейсов и реактивных веб-приложений. Цель — Middle+ Frontend Developer.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-all font-medium text-white shadow-lg shadow-cyan-600/20"
          >
            Посмотреть работы
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 transition-all font-medium text-slate-300"
          >
            Связаться
          </a>
        </div>
      </div>
    </section>
  );
}