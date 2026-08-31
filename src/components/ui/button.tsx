import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display font-semibold tracking-tight text-balance select-none transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky",
  {
    variants: {
      variant: {
        primary:
          "bg-sky text-cream shadow-[0_4px_0_0_var(--color-sky-deep)] hover:bg-sky-deep",
        gold: "bg-gold text-ink shadow-[0_4px_0_0_var(--color-gold-deep)] hover:brightness-105",
        cream:
          "bg-paper text-ink border border-line shadow-[0_3px_0_0_var(--color-line)] hover:bg-cream",
        ghost: "bg-transparent text-cream hover:bg-sky-deep/40",
        coral: "bg-coral text-cream shadow-[0_4px_0_0_color-mix(in_oklab,var(--color-coral)_70%,black)]",
      },
      size: {
        sm: "h-11 px-4 text-sm rounded-xl",
        md: "h-12 px-5 text-base rounded-2xl",
        lg: "min-h-14 px-6 py-3 text-lg rounded-2xl",
        xl: "min-h-16 px-7 py-4 text-xl rounded-3xl",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
