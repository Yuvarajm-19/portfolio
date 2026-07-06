"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 scroll-mt-20">
      <SectionLabel index="03" title="projects" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link ?? undefined}
            target={p.link ? "_blank" : undefined}
            rel={p.link ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group flex flex-col rounded-lg border border-line bg-surface/60 p-6 transition-colors hover:border-amber/60 ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-lg font-semibold text-text">
                  <span>{p.emoji}</span>
                  {p.title}
                </div>
                <p className="mt-1 font-mono text-xs text-teal">{p.tagline}</p>
              </div>
              {p.link && (
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-amber" />
              )}
            </div>

            <p className="mt-4 text-sm text-muted">{p.description}</p>

            <ul className="mt-4 space-y-1.5">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-text/85">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-line/70">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
