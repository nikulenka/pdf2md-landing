import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const testimonials = [
  {
    body: "«Отличный бот! Конвертирует сложные PDF с таблицами в чистый Markdown за пару секунд. Сильно экономит время при написании документации.»",
    author: {
      name: "Алексей К.",
      role: "Разработчик",
    },
  },
  {
    body: "«Пользуюсь каждый день для перевода статей и отчетов в Obsidian. Форматирование сохраняется идеально, теперь весь ресерч собирается в пару кликов.»",
    author: {
      name: "Мария С.",
      role: "Исследователь",
    },
  },
  {
    body: "«Наконец-то нашел удобный инструмент для конвертации прямо в Telegram. Никаких сторонних сайтов, рекламы и регистраций. Закинул файл — получил MD.»",
    author: {
      name: "Игорь В.",
      role: "Технический писатель",
    },
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-tg-blue">Отзывы пользователей</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loved by power users
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-zinc-300 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {testimonials.map((testimonial, columnIdx) => (
            <motion.div 
              key={columnIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: columnIdx * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-sm transition-all hover:bg-zinc-900"
            >
              <MessageCircle className="h-6 w-6 text-zinc-700 mb-4" />
              <blockquote className="text-zinc-300 leading-relaxed">
                {testimonial.body}
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4 border-t border-zinc-800 pt-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-tg-blue/40 to-zinc-800 flex items-center justify-center font-bold text-white shadow-inner">
                  {testimonial.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author.name}</div>
                  <div className="text-zinc-500 text-xs">{testimonial.author.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
