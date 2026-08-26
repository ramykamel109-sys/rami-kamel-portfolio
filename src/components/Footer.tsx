"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30 p-6 text-center dark:bg-slate-800/40 dark:border-white/10">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Rami Kamel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
