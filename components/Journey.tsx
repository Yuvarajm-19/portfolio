"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { goals2026, profile } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-5xl px-6 py-16 scroll-mt-20">
      <SectionLabel index="02" title="journey" />
      <div className="mt-10 grid gap-10 sm:grid-cols-[220px_1fr]">
        <div>
          <p className="font-mono text-sm text-muted">currently</p>
          <p className="mt-2 text-lg text-text">{profile.education}</p>
          <p className="mt-1 text-sm text-muted">{profile.location}</p>
        </div>

        <div>
          <p className="font-mono text-sm text-muted mb-4">2026 goals</p>
          <ol className="space-y-3">
            {goals2026.map((g, i) => (
              <motion.li
                key={g.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-md border border-line bg-surface/60 px-4 py-3"
              >
                {g.done ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                ) : (
                  <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                )}
                <span
                  className={`text-sm ${
                    g.done ? "text-text" : "text-muted"
                  }`}
                >
                  {g.label}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
