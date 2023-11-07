import { cva } from "class-variance-authority";

const config = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    // "font-medium",
    "cursor-pointer",
    "rounded-full",
  ],
  {
    variants: {
      variant: {
        primary: ["text-white", "bg-red-500", "enabled:hover:bg-red-600"],
        secondary: [
          "text-red-500",
          "bg-white",
          "border",
          "border-red-500",
          "enabled:hover:bg-red-200",
        ],
        transparent: ["text-red-500", "enabled:hover:bg-rose-100"],
      },
      size: {
        small: [
          // "p-1",
          // "px-4",
          // "h-8",
          "text-sm",
        ],
        medium: [
          "py-2.5",
          "px-6",
          "h-10",
          "text-base",
        ],
        large: [
          "py-3",
          "px-9",
          "h-12",
          "text-lg",
        ],
      },
      width: {
        full: "w-full",
        min: "w-min",
        max: "w-max",
        fit: "w-fit",
        initial: "min-w-32",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      width: "initial",
    },
  }
);

export default config;
