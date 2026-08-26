"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";

interface CaseStudyProps {
  projectId: string;
  onBack: () => void;
}

export default function CaseStudy({ projectId, onBack }: CaseStudyProps) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-28 pb-20 px-4"
    >
      <div className="mx-auto max-w-5xl">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:bg-white/80 hover:shadow-md dark:bg-slate-800/60 dark:border-white/10 dark:text-slate-300 dark:hover:bg-slate-700/60"
        >
          <ChevronLeft size={16} />
          Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {project.category}
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 grid grid-cols-3 gap-4"
        >
          {[
            { label: "Role", value: project.role },
            { label: "Timeline", value: project.timeline },
            { label: "Tools", value: project.tools.join(", ") },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 p-4 text-center dark:bg-slate-800/60 dark:border-white/10"
            >
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 overflow-hidden rounded-3xl shadow-lg shadow-purple-500/10"
        >
          <div className="relative w-full">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={0}
              className="h-auto w-full"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 p-8 shadow-lg shadow-purple-500/5 dark:bg-slate-800/60 dark:border-white/10"
        >
          <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
            The Challenge
          </h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {project.challenge}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 p-8 shadow-lg shadow-purple-500/5 dark:bg-slate-800/60 dark:border-white/10">
            <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
              The Solution
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {project.solution}
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={800}
                    height={0}
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 p-6 shadow-sm dark:bg-slate-800/60 dark:border-white/10"
                >
                  <div className="mb-3 text-2xl">{feature.icon}</div>
                  <h3 className="mb-2 text-sm font-bold text-slate-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 p-8 shadow-lg shadow-purple-500/5 dark:bg-slate-800/60 dark:border-white/10"
        >
          <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
            The Outcome
          </h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {project.outcome}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <button
            onClick={() => {
              onBack();
              setTimeout(() => {
                const el = document.getElementById("work");
                el?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 active:scale-100"
          >
            View More Projects
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
