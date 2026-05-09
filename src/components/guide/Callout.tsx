interface CalloutProps {
  variant?: "info" | "warning";
  children: React.ReactNode;
}

export default function Callout({ variant = "info", children }: CalloutProps) {
  return (
    <div
      className={`rounded-[14px] px-5 py-4 text-sm leading-relaxed italic ${
        variant === "warning"
          ? "bg-warning/10 border-l-4 border-warning text-foreground"
          : "bg-blue-pale border-l-4 border-blue text-foreground"
      }`}
    >
      {children}
    </div>
  );
}
