interface GuideSectionProps {
  id: string;
  bg?: "card" | "blue-pale";
  children: React.ReactNode;
}

export default function GuideSection({ id, bg = "card", children }: GuideSectionProps) {
  return (
    <section
      id={id}
      className={`${bg === "blue-pale" ? "bg-blue-pale" : "bg-card"} py-16 px-6 scroll-mt-14`}
    >
      <div className="mx-auto max-w-[720px]">{children}</div>
    </section>
  );
}
