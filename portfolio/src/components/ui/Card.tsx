import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6",
        hover &&
          "transition-all duration-300 hover:border-accent/50 hover:glow-accent hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </div>
  );
}
