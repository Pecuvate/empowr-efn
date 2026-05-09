import Callout from "./Callout";

interface Step {
  title: string;
  body: string;
  callout?: {
    variant: "info" | "warning";
    text: string;
  };
}

interface StepListProps {
  steps: Step[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <ol className="flex flex-col gap-6">
      {steps.map((step, index) => (
        <li key={index} className="flex gap-5">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center text-sm font-extrabold mt-0.5">
            {index + 1}
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <div>
              <p className="font-bold text-foreground">{step.title}</p>
              <p className="text-mid leading-relaxed mt-1">{step.body}</p>
            </div>
            {step.callout && (
              <Callout variant={step.callout.variant}>{step.callout.text}</Callout>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
