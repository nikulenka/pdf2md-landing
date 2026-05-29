import { Bot } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-tg-blue text-white">
            <Bot size={20} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            pdf2md
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400 hidden sm:flex">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
        </div>
        <div>
          <a
            href="https://t.me/PDF_2_md_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Launch Bot
          </a>
        </div>
      </div>
    </nav>
  );
}
