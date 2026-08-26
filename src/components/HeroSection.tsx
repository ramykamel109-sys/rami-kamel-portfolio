"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-8 h-[132px] w-[132px] overflow-hidden rounded-full border-4 border-white/50 shadow-xl shadow-purple-500/20 dark:border-white/10"
        >
          <Image
            src="/images/hero-profile.jpg"
            alt="Rami Kamel"
            width={132}
            height={132}
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4 text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m Rami Kamel
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6 text-xl font-medium bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-2xl"
        >
          UI/UX Designer &amp; Figma Expert
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 shadow-sm border border-green-200/50 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for Projects
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm border border-blue-200/50 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
            Remote &amp; Contract Work
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
        >
          Crafting intuitive and beautiful interfaces for mobile apps, web
          applications, and enterprise systems. Specializing in user-centered
          design that transforms complex problems into elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 active:scale-100"
          >
            View My Work
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
