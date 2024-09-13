import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "border",
    "border-bright-turquoise-600",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-bright-turquoise-500", "text-white", "hover:enabled:bg-bright-turquoise-900"],
        secondary: [
          "bg-transparent",
          "text-bright-turquoise-600",
          "hover:enabled:bg-bright-turquoise-400",
          "hover:enabled:text-white",
        ],
        nav: [
          "bg-white",
          "text-black",
          "hover:bg-gray-00",
          "border-none",
          "shadow-md",
          "shadow-gray-200",
          "hover:rotate-2",
          "transition",
          "duration-300",
          "ease-in-out",
        ],
        back: [
          "text-white",
          "bg-black",
          "hover:bg-gray-900",
          "border",
          "border-gray-700",
          "shadow-sm",
          "shadow-gray-200",
        ],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        md: ["min-w-28", "h-full", "w-full", "min-h-10", "text-md", "py-2", "px-2"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
      odd: { true: ["hover:-rotate-2"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  underline?: boolean
  href: string
  odd?: boolean
}

export function Button({ className, intent, size, underline, odd, ...props }: ButtonProps) {
  return (
    <a className={twMerge(button({ intent, size, className, underline, odd }))} {...props}>
      {props.children}
    </a>
  )
}
