import { links } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="bg-black px-6 pt-16 pb-8">
      <div className="mx-auto max-w-[880px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-extrabold text-base">Empowr Freelancer Network</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Promoting life-long wellbeing through experiential learning activities.
            </p>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest">Legal</p>
            <a
              href={links.terms}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 text-sm hover:text-blue-light transition-colors duration-200"
            >
              Terms and Conditions
            </a>
            <a
              href={links.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 text-sm hover:text-blue-light transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest">Links</p>
            <a
              href={links.learnMore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 text-sm hover:text-blue-light transition-colors duration-200"
            >
              Find Out More
            </a>
            <a
              href={links.contact}
              className="text-white/60 text-sm hover:text-blue-light transition-colors duration-200"
            >
              efn@empowrcic.org
            </a>
          </div>
        </div>

        <p className="text-white/30 text-xs pt-8">© Empowr CIC</p>
      </div>
    </footer>
  );
}
