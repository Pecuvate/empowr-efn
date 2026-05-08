const pillars = [
  {
    title: "Flexible shifts",
    body: "Take on assignments that fit your schedule — no fixed hours or minimum commitment.",
  },
  {
    title: "Simple pay",
    body: "Once your timesheet is approved, we handle invoicing on your behalf. No chasing, no paperwork — you just get paid.",
  },
  {
    title: "Real impact",
    body: "Contribute to programmes promoting life-long wellbeing through experiential learning activities to communities across the UK.",
  },
];

export default function ValuePillars() {
  return (
    <section className="bg-blue-pale py-20 px-6">
      <div className="mx-auto max-w-[880px]">
        <h2 className="text-3xl font-black text-black text-center mb-12">What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card rounded-[14px] border-[1.5px] border-border p-8 flex flex-col gap-3"
            >
              <h3 className="text-base font-extrabold text-black">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
