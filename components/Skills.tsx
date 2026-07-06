"use client";

import { motion } from "framer-motion";
import { skillGroups, achievements } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 scroll-mt-20">
      <SectionLabel index="04" title="skills" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-lg border border-line bg-surface/50 p-5"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-amber">
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-3 py-1 text-xs text-text/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <p className="font-mono text-sm text-muted mb-4">
          achievements &amp; consistency
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-md border border-line bg-surface/40 px-4 py-3"
            >
              <p className="text-sm font-medium text-teal">{a.title}</p>
              <p className="mt-1 text-xs text-muted">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
