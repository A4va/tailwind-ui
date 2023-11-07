import { cva } from "class-variance-authority";
//  "flex gap-4 flex-wrap justify-center md:justify-start"
const config = cva(["grid", "gap-4"], {
  variants: {
    size: {
      small: [""],
      medium: [""],
      large: ["grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3"],
    },
    width: {
      full: "w-full",
      min: "w-min",
      max: "w-max",
      fit: "w-fit",
      initial: "",
    },
  },
  defaultVariants: {
    size: "large",
    width: "full",
  },
});

export default config;
