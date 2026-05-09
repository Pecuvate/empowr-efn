export default function GuideHeader() {
  return (
    <section className="bg-card py-16 px-6 border-b border-border">
      <div className="mx-auto max-w-[720px] flex flex-col gap-6">
        <a
          href="/"
          className="text-sm text-muted-foreground hover:text-blue transition-colors duration-200 font-semibold self-start"
        >
          ← Back to EFN
        </a>
        <p className="text-blue text-xs font-semibold tracking-widest uppercase text-center w-full">
          Freelancer Guide
        </p>
      </div>
    </section>
  );
}
