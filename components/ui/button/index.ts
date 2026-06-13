import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Button } from "./Button.vue"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-navy text-cream shadow-soft hover:bg-navy-light hover:shadow-card",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-navy/20 bg-transparent hover:bg-navy/5 text-navy",
        secondary:
          "bg-cream-dark text-navy shadow-sm hover:bg-cream",
        ghost: "hover:bg-navy/5 text-navy",
        link: "text-navy underline-offset-4 hover:underline",
        light: "bg-cream text-navy shadow-soft hover:bg-cream-dark",
      },
      size: {
        "default": "h-10 px-5 py-2",
        "xs": "h-7 rounded-full px-3",
        "sm": "h-9 rounded-full px-4 text-xs",
        "lg": "h-12 rounded-full px-8 text-base",
        "icon": "h-10 w-10 rounded-full",
        "icon-sm": "size-9 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
