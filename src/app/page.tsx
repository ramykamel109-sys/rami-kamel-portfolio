"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <>
      <BackgroundBlobs />
      <Navbar />

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <CaseStudy
            key="casestudy"
            projectId={selectedProject}
            onBack={() => {
              setSelectedProject(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : (
          <main key="main">
            <HeroSection />
            <WorkSection onSelectProject={setSelectedProject} />
            <AboutSection />
            <ContactSection />
          </main>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
