import { cva } from "class-variance-authority";
// `flex w-fit h-fit gap-2 items-center justify-center`
const config = cva(
  ["flex", "items-center", "justify-center", "w-fit", "h-fit", "rounded-full"],
  {
    variants: {
      size: {
        small: ["py-1", "px-2", "text-sm"],
        medium: ["py-2.5", "px-4", "text-base"],
        large: ["py-2.5", "px-6", "text-lg"],
      },
      color: {
        green: ["bg-green-100", "text-green-900"],
        red: ["bg-red-100", "text-red-900"],
      },
    },
    defaultVariants: {
      size: "small",
      color: "green",
    },
  }
);

export default config;
