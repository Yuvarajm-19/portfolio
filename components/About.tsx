"use client";

import { motion } from "framer-motion";
import { profile, focusAreas } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 scroll-mt-20">
      <SectionLabel index="01" title="about" />
      <div className="mt-8 grid gap-12 sm:grid-cols-5">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="sm:col-span-3 text-lg leading-relaxed text-text/90"
        >
          {profile.bio}
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="sm:col-span-2 space-y-3"
        >
          {focusAreas.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-muted">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              {f}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm text-muted">
      <span className="text-amber">{index}</span>
      <span className="uppercase tracking-widest">{title}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
