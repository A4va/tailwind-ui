import { cva } from "class-variance-authority";

const config = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "font-medium",
    "cursor-pointer",
    "rounded-md",
  ],
  {
    variants: {
      variant: {
        desktop: ["text-white", "bg-red-500", "enabled:hover:bg-red-600"],
        mobile: [
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
          "py-2.5",
          "px-4",
          "h-8",
          "text-sm",
          "md:rounded-lg",
          "xl:rounded-xl",
        ],
        medium: [
          "py-2.5",
          "px-6",
          "h-10",
          "text-base",
          "md:rounded-lg",
          "xl:rounded-xl",
        ],
        large: [
          "py-3",
          "px-9",
          "h-12",
          "text-lg",
          "md:rounded-xl",
          "xl:rounded-2xl",
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
      variant: "desktop",
      size: "medium",
      width: "initial",
    },
  }
);

export default config;
