"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 p-8 shadow-lg shadow-purple-500/5 dark:bg-slate-800/60 dark:border-white/10">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl">
                About Me
              </h2>

              <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                <p>
                  I&apos;m a product-focused UI/UX designer with 2 years of
                  experience creating digital products that drive measurable
                  business value while delighting users. My approach bridges
                  design and business strategy, ensuring every design decision
                  is backed by data, user research, and clear ROI metrics.
                </p>
                <p>
                  I believe great design solves business problems while creating
                  exceptional user experiences. Whether optimizing conversion
                  funnels that increase revenue by 156%, reducing operational
                  costs by 70% through workflow automation, or improving user
                  satisfaction scores by 73%, I focus on creating solutions that
                  benefit both organizations and their users through strategic,
                  data-driven design.
                </p>
                <p>
                  My work spans product strategy, user research, conversion
                  optimization, and stakeholder alignment – combining UX
                  expertise with business acumen to deliver products that
                  achieve measurable outcomes. I measure success in both user
                  satisfaction metrics and bottom-line business impact.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[400px] overflow-hidden rounded-3xl shadow-lg shadow-purple-500/10 lg:mx-0">
              <Image
                src="/images/hero-profile.jpg"
                alt="Rami Kamel - About"
                fill
                className="object-cover"
              />
            </div>

            <div className="rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 p-6 shadow-lg shadow-purple-500/5 dark:bg-slate-800/60 dark:border-white/10">
              <h3 className="mb-4 text-lg font-bold text-slate-800 dark:text-white">
                Skills &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 px-4 py-2 text-sm font-medium text-slate-700 border border-purple-200/50 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 dark:text-slate-300 dark:border-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
