import { links } from "@/lib/links";

const criteria = [
  "Self-employed (or willing to register)",
  "Eligible to work in the UK",
  "Available for shift-based assignments",
];

export default function EligibilityStrip() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="mx-auto max-w-[880px] flex flex-col items-center gap-8 text-center">
        <h2 className="text-3xl font-black text-black">Eligibility Requirements</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          {criteria.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 border border-border rounded-full px-5 py-2"
            >
              <span className="text-blue font-black text-sm leading-none">✓</span>
              <span className="text-sm font-semibold text-black">{item}</span>
            </div>
          ))}
        </div>
        <a
          href={links.onboard}
          className="inline-flex items-center justify-center rounded-full bg-blue text-white font-extrabold px-8 py-3 text-base shadow-blue transition-all duration-200 hover:bg-blue-dark"
        >
          Join the Network
        </a>
      </div>
    </section>
  );
}
