const steps = [
  {
    number: 1,
    title: "Complete the onboarding form",
    body: "Fill in your details online — takes around 5 minutes.",
  },
  {
    number: 2,
    title: "Sign your agreement",
    body: "You'll receive a personalised Freelance Services Agreement by email. Sign it electronically.",
  },
  {
    number: 3,
    title: "Join Sling",
    body: "Once signed, you'll receive a Sling invite — our scheduling platform. Join with one click.",
  },
  {
    number: 4,
    title: "Start working",
    body: "Your manager will be in touch to schedule your first assignment.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="mx-auto max-w-[880px]">
        <h2 className="text-3xl font-black text-black text-center mb-12">How It Works</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-3">
              <span className="text-4xl font-black text-blue leading-none">{step.number}</span>
              <h3 className="text-base font-extrabold text-black">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
