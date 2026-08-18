import React, { useState } from 'react';

export default function Contact() {
  // Состояние для полей формы
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  // Обработчик изменения полей
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Обработчик отправки
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('❌ Пожалуйста, заполните все поля.');
      return;
    }
    setStatus('⚡ Сообщение отправлено! (Имитация)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Связаться со мной
        </h2>
        <div className="h-[1px] bg-slate-700 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Левая сторона: Соцсети */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-200">Обсудим проект?</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Я открыт для предложений по работе, фрилансу и коллаборациям. Пишите в любое время.
          </p>

          <div className="space-y-4 font-mono text-sm">
            <a href="mailto:vlad@example.com" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
              <span>📧</span> email@example.com
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
              <span>✈️</span> @telegram_username
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
              <span>💻</span> GitHub Profile
            </a>
          </div>
        </div>

        {/* Правая сторона: Форма */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">ИМЯ</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Иван"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">СООБЩЕНИЕ</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              placeholder="Привет! Есть проект для тебя..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-colors font-medium text-sm text-white shadow-lg shadow-cyan-600/10"
          >
            Отправить сообщение
          </button>

          {status && (
            <p className="text-xs font-mono text-center mt-2 text-slate-300">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}