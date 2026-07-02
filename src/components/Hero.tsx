import Image from "next/image";
import { links } from "@/lib/links";

export default function Hero() {
  return (
    <section className="bg-card py-16 md:py-24 px-5 md:px-6">
      <div className="mx-auto max-w-[880px] flex flex-col items-center gap-5 md:gap-6 text-center">
        <Image
          src="/logo.png"
          alt="Empowr"
          width={200}
          height={80}
          priority
          className="h-16 md:h-20 w-auto object-contain"
        />
        <p className="text-blue text-xs md:text-sm font-semibold tracking-widest uppercase">
          Empowr Freelancer Network
        </p>
        <h1 className="text-2xl md:text-5xl font-black text-black leading-tight">
          Do work that matters. On your terms.
        </h1>
        <p className="text-mid max-w-[560px] leading-relaxed text-sm md:text-base">
          The Empowr Freelancer Network is a community of coaches, facilitators, and operations
          professionals delivering Empowr's programmes across the UK. Join on a flexible,
          shift-based basis — we handle the admin so you can focus on the work.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href={links.onboard}
            className="inline-flex items-center justify-center rounded-full bg-blue text-white font-extrabold px-8 py-3 text-base shadow-blue transition-all duration-200 hover:bg-blue-dark"
          >
            Join the Network
          </a>
          <a
            href={links.learnMore}
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-blue text-blue font-extrabold px-8 py-3 text-base transition-all duration-200 hover:bg-blue-soft"
          >
            Learn about EFN
          </a>
        </div>
      </div>
    </section>
  );
}
