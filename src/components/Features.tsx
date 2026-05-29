import { motion } from 'motion/react';
import { Zap, Layout, Shield, FileDown } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Get your Markdown files in seconds. Optimized processing ensures you spend less time waiting and more time reading.',
    icon: Zap,
  },
  {
    name: 'Preserves Layout',
    description: 'Intelligently extracts headers, bullet points, and paragraphs to keep the structural integrity of your original document.',
    icon: Layout,
  },
  {
    name: 'Private & Secure',
    description: 'Your documents are processed securely and deleted from our servers immediately after conversion. We do not store your data.',
    icon: Shield,
  },
  {
    name: 'Ready to Download',
    description: 'Receive a neat .md file directly in chat. Perfect for importing into Obsidian, Notion, or your favorite note-taking tool.',
    icon: FileDown,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-tg-blue">Powerful Extraction</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need for seamless conversion
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Designed to bridge the gap between static PDFs and dynamic, editable Markdown workspaces.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                  <feature.icon className="h-5 w-5 text-tg-blue" aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-white">
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">Ready for Markdown Workspaces</h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">
                  Whether you're building a massive personal knowledge base in Obsidian, documenting code in Notion, or just need text for a script—transforming documents visually allows you to extract raw structural data cleanly and efficiently.
                </p>
              </div>
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src="/src/assets/images/markdown_nodes_1780083471093.png" 
                  alt="Markdown structure nodes" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-transparent lg:from-zinc-900 lg:to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
