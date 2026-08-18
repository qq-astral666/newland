import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900 transition-colors duration-300'}>

      {/* Навигация */}
      <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md border-b border-slate-800/50 bg-slate-900/60 flex justify-between items-center px-6 py-4">
        <div className="font-mono font-bold text-lg text-cyan-400">
          V.Dev
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">Обо мне</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Проекты</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Контакты</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all text-xs"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>
      </header>

      {/* Контент */}
      <main className="pt-16 min-h-screen font-sans antialiased selection:bg-cyan-500 selection:text-white">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Подвал */}
      <footer className="py-8 border-t border-slate-800/40 text-center text-xs font-mono text-slate-500">
        &copy; {new Date().getFullYear()} Владислав. Собрано на React & Tailwind.
      </footer>
    </div>
  );
}

export default App;