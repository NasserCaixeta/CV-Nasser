import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-display text-2xl font-bold text-accent hover:opacity-80 transition-opacity",
        className
      )}
    >
      NC.
    </Link>
  );
}
