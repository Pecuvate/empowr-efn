import { links } from "@/lib/links";

export default function CTAStrip() {
  return (
    <section className="bg-blue py-16 px-6">
      <div className="mx-auto max-w-[720px] flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-black text-white leading-tight">
          Ready to join the network?
        </h2>
        <p className="text-white/80 max-w-[480px] leading-relaxed">
          Fill in the onboarding form and you&apos;ll be set up and ready to work in minutes.
        </p>
        <a
          href={links.onboard}
          className="inline-flex items-center justify-center rounded-full bg-white text-blue font-extrabold px-8 py-3 text-base transition-all duration-200 hover:bg-blue-pale"
        >
          Join the Network
        </a>
      </div>
    </section>
  );
}
