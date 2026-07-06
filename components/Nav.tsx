"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#journey", label: "journey" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      const sections = [
        "top",
        "about",
        "journey",
        "projects",
        "skills",
        "contact",
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const top = el.offsetTop - 100;
        const bottom = top + el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(`#${section}`);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-xl border px-6 font-mono text-sm transition-all duration-300 ${
          scrolled
            ? "border-line bg-ink/80 backdrop-blur-xl shadow-lg"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="group text-text transition-colors duration-300"
        >
          <span className="font-semibold group-hover:text-amber">
            Yuvaraj
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative transition-colors duration-300 ${
                  active === link.href
                    ? "text-amber"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-amber transition-all duration-300 ${
                    active === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-md border border-line px-4 py-2 text-xs font-semibold text-text transition-all duration-300 hover:border-amber hover:bg-amber hover:text-ink"
        >
          Say Hi 👋
        </a>
      </nav>
    </header>
  );
}