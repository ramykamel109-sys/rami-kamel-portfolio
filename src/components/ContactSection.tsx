"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 p-8 text-center shadow-lg shadow-purple-500/5 dark:bg-slate-800/60 dark:border-white/10 sm:p-12"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            I&apos;m always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ramykamel109@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 active:scale-100"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href="tel:+201273250592"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-purple-200 bg-white/80 px-6 py-3 text-sm font-semibold text-purple-700 shadow-sm transition-all hover:bg-purple-50 hover:scale-105 active:scale-100 dark:border-purple-500/30 dark:bg-slate-800/80 dark:text-purple-400 dark:hover:bg-slate-700/80"
            >
              <Phone size={18} />
              Call Me
            </a>
            <a
              href="https://wa.me/201273250592"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-green-200 bg-white/80 px-6 py-3 text-sm font-semibold text-green-700 shadow-sm transition-all hover:bg-green-50 hover:scale-105 active:scale-100 dark:border-green-500/30 dark:bg-slate-800/80 dark:text-green-400 dark:hover:bg-slate-700/80"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <div className="mb-8 space-y-2">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              ramykamel109@gmail.com
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              +20 127 325 0592
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-purple-100 hover:text-purple-600 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-purple-400"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-purple-100 hover:text-purple-600 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-purple-400"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-purple-100 hover:text-purple-600 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-purple-400"
            >
              <GithubIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
