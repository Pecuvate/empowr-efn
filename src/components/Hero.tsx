import Image from "next/image";
import { links } from "@/lib/links";

export default function Hero() {
  return (
    <section className="bg-card py-24 px-6">
      <div className="mx-auto max-w-[880px] flex flex-col items-center gap-6 text-center">
        <Image
          src="https://empowr-cic.s3.us-east-1.amazonaws.com/empowr_logo.png"
          alt="Empowr"
          width={200}
          height={80}
          priority
          className="h-20 w-auto object-contain"
        />
        <p className="text-blue text-sm font-semibold tracking-widest uppercase">
          Empowr Freelancer Network
        </p>
        <h1 className="text-5xl font-black text-black leading-tight">
          Do work that matters. On your terms.
        </h1>
        <p className="text-mid max-w-[560px] leading-relaxed">
          The Empowr Freelancer Network is a community of coaches, facilitators, and operations
          professionals delivering Empowr's programmes across the UK. Join on a flexible,
          shift-based basis — we handle the admin so you can focus on the work.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={links.onboard}
            className="inline-flex items-center justify-center rounded-full bg-blue text-white font-extrabold px-8 py-3 text-base shadow-blue transition-all duration-200 hover:bg-blue-dark"
          >
            Join the Network
          </a>
          <a
            href={links.learnMore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-blue text-blue font-extrabold px-8 py-3 text-base transition-all duration-200 hover:bg-blue-soft"
          >
            Learn about EFN
          </a>
        </div>
      </div>
    </section>
  );
}
