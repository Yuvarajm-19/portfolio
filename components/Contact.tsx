"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code2, Copy, Check } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionLabel } from "./About";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <SectionLabel index="05" title="contact" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-10 rounded-lg border border-line bg-surface/60 p-8 text-center sm:p-12"
      >
        <h2 className="text-2xl font-semibold text-text sm:text-3xl">
          Actively looking for Software Engineer, Full Stack, Backend roles.
        </h2>

        <p className="mt-3 text-muted">
          If you're hiring or want to collaborate — let's talk.
        </p>

        {/* Email */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={copyEmail}
            className="flex items-center gap-3 rounded-md border border-line bg-surface px-5 py-3 transition-colors hover:border-amber"
          >
            <Mail className="h-5 w-5 text-amber" />
            <span className="font-mono text-text">
              {profile.email}
            </span>

            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4 text-muted" />
            )}
          </button>
        </div>

        {copied && (
          <p className="mt-2 text-sm text-teal">
            Email copied to clipboard!
          </p>
        )}

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm text-text transition-colors hover:border-amber hover:text-amber"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm text-text transition-colors hover:border-amber hover:text-amber"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm text-text transition-colors hover:border-amber hover:text-amber"
          >
            <Code2 className="h-4 w-4" />
            LeetCode
          </a>
        </div>
      </motion.div>
    </section>
  );
}