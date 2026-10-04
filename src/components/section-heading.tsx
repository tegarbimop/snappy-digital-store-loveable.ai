import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  note?: ReactNode;
  className?: string;
};

export function SectionHeading({ title, note, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-end justify-between gap-6", className)}>
      <h2 className="font-display text-3xl tracking-tight uppercase md:text-5xl">{title}</h2>
      {note ? <div className="shrink-0 font-mono text-xs text-faint">{note}</div> : null}
    </div>
  );
}
