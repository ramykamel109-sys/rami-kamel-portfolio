"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";

interface WorkSectionProps {
  onSelectProject: (id: string) => void;
}

export default function WorkSection({ onSelectProject }: WorkSectionProps) {
  return (
    <section id="work" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            A selection of projects showcasing my approach to solving design
            challenges across different platforms and industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onSelectProject(project.id)}
            >
              <div className="overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg shadow-purple-500/5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-[1.02] dark:bg-slate-800/60 dark:border-white/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    {project.category}
                  </p>
                  <h3 className="mb-2 text-xl font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700/50 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-purple-600 transition-colors group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300">
                    View Case Study
                    <ChevronRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
