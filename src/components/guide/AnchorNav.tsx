"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About the EFN", anchor: "about" },
  { label: "Joining the Network", anchor: "joining" },
  { label: "Getting Paid", anchor: "getting-paid" },
  { label: "FAQs", anchor: "faqs" },
] as const;

export default function AnchorNav() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observers = navItems.map(({ anchor }) => {
      const el = document.getElementById(anchor);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(anchor);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <nav className="sticky top-0 z-10 bg-card border-b border-border">
      <div className="mx-auto max-w-[720px] px-6 py-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {navItems.map(({ label, anchor }) => (
          <a
            key={anchor}
            href={`#${anchor}`}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
              active === anchor
                ? "bg-blue text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
