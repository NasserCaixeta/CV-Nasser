import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
