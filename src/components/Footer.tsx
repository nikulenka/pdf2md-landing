import { Bot, Github, Mail, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mb-8 md:order-2 md:mb-0">
          <div className="flex justify-center space-x-6 md:justify-end">
            <a href="https://github.com/nikulenka/pdf2md" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" title="Source Code">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://t.me/PDF_2_md_bot" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-tg-blue transition-colors" title="Telegram Bot">
              <span className="sr-only">Telegram</span>
              <Bot className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-6 flex flex-col items-center md:items-end space-y-3 text-sm text-zinc-400">
            <p className="font-medium text-zinc-300 mb-1">Contact for access & support:</p>
            <a href="https://t.me/nikulenka" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
              <Send size={14} className="text-tg-blue group-hover:scale-110 transition-transform" />
              <span>@nikulenka</span>
            </a>
            <a href="mailto:vitali@nikulenka.com" className="flex items-center gap-2 hover:text-white transition-colors group">
              <Mail size={14} className="text-zinc-500 group-hover:scale-110 transition-transform" />
              <span>vitali@nikulenka.com</span>
            </a>
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0 flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-tg-blue" />
            <span className="font-display font-medium text-white">pdf2md</span>
          </div>
          <p className="text-xs leading-5 text-zinc-500">
            &copy; {new Date().getFullYear()} pdf2md Project. Designed for Telegram.
          </p>
        </div>
      </div>
    </footer>
  );
}
