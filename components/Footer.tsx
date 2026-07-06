export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Yuvaraj M</span>
        <span>built with Next.js &amp; Tailwind</span>
      </div>
    </footer>
  );
}
