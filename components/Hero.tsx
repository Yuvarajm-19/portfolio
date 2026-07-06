"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-grid overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />

      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <div className="flex-1">
            <motion.p
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-mono text-sm text-teal mb-4"
            >
              // building fast, reliable, production-ready systems
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-mono text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-3 text-xl sm:text-2xl text-muted max-w-xl"
            >
              {profile.role}, shipping MERN + ML products end to end.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 max-w-md rounded-lg border border-line bg-surface/80 font-mono text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef5350]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f5a623]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#5eead4]/70" />
                <span className="ml-2 text-xs text-muted">status.yml</span>
              </div>

              <div className="px-5 py-4 space-y-1.5">
                <Row k="name" v={`"${profile.name}"`} />
                <Row k="role" v={`"${profile.role}"`} />
                <Row
                  k="status"
                  v={
                    <span className="inline-flex items-center gap-2 text-amber">
                      <span className="relative h-2 w-2 rounded-full bg-amber status-dot" />
                      open to work
                    </span>
                  }
                />
                <Row k="education" v={`"${profile.education}"`} />
                <Row k="location" v={`"${profile.location}"`} />
              </div>
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-md bg-amber px-5 py-2.5 text-sm font-medium text-ink hover:bg-amber/90 transition-colors"
              >
                View projects
              </a>

              <a
                href="#contact"
                className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-text hover:border-teal hover:text-teal transition-colors"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right Profile Image */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex justify-center lg:justify-end flex-shrink-0"
          >
            <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-line bg-surface/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <Image
  src={profile.photo}
  alt={`${profile.name} photo`}
  fill
  priority
  sizes="(max-width: 768px) 280px, 320px"
  className="object-cover"
/>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <span className="text-teal">{k}:</span>
      <span className="text-text">{v}</span>
    </div>
  );
}