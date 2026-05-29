import { motion } from 'motion/react';
import { FileText, ArrowRight, Bot } from 'lucide-react';
import heroImg from '../assets/images/hero_doc_scan_1780083452227.png';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tg-blue/10 via-zinc-950 to-zinc-950 -z-10" />
      
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-tg-blue/30 bg-tg-blue/10 px-3 py-1 text-sm text-tg-blue mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-tg-blue animate-pulse"></span>
          Bot is live on Telegram
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl max-w-3xl mx-auto"
        >
          Convert PDFs to Markdown instantly in Telegram.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto"
        >
          Turn complex PDF documents, reports, and articles into clean, perfectly formatted Markdown files in seconds. No apps, no sign-ups — just a simple Telegram bot.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://t.me/PDF_2_md_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 items-center justify-center gap-2 rounded-full bg-tg-blue px-8 text-sm font-semibold text-white transition-all hover:bg-tg-blue-hover hover:scale-105"
          >
            <Bot size={18} />
            Open in Telegram
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/nikulenka/pdf2md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-col items-center justify-center gap-0.5 rounded-full border border-zinc-700 bg-zinc-900/50 px-8 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
          >
            <div className="flex items-center gap-2">
              <FileText size={16} />
              <span>Source on GitHub</span>
            </div>
            <span className="text-[10px] text-zinc-400 font-normal leading-none tracking-wide">ACCESS ON REQUEST</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 sm:mt-24 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-tg-blue/10 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent pointer-events-none z-10" />
          <img 
            src={heroImg} 
            alt="Futuristic PDF to Markdown conversion process" 
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
