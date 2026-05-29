import { motion } from 'motion/react';
import { Send, Clock, FileCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    name: 'Send the Document',
    description: 'Upload your PDF directly to the Telegram bot chat. Standard file size limits apply.',
    icon: Send,
  },
  {
    id: 2,
    name: 'Bot Processing',
    description: 'Our engine instantly scans, extracts, and formats the text into Markdown syntax.',
    icon: Clock,
  },
  {
    id: 3,
    name: 'Download Markdown',
    description: 'Receive the converted .md file instantly, ready to use in your vault or project.',
    icon: FileCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-zinc-900/30 border-y border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-tg-blue">Simple Workflow</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How to use pdf2md
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            No installation required. If you have Telegram, you are already set up.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center bg-zinc-950 p-8 rounded-2xl border border-zinc-800/80 text-center"
              >
                <div className="absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full bg-tg-blue text-sm font-bold text-white ring-4 ring-zinc-950">
                  {step.id}
                </div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-tg-blue/10 text-tg-blue">
                  <step.icon size={28} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{step.name}</h3>
                <p className="text-sm text-zinc-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
