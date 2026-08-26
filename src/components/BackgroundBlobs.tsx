"use client";

export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-300/30 mix-blend-multiply blur-3xl dark:bg-purple-600/20 animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-300/30 mix-blend-multiply blur-3xl dark:bg-indigo-600/20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-pink-300/30 mix-blend-multiply blur-3xl dark:bg-pink-600/20 animate-blob animation-delay-4000" />
    </div>
  );
}
