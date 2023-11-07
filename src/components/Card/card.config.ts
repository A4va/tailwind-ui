import { cva } from "class-variance-authority";
// flex flex-col w-96 bg-white rounded-lg p-6 font-semibold
const config = cva(
  [
    "flex",
    "flex-col",
    "font-semibold",
    "rounded-xl",
    "bg-white",
  ],
  {
    variants: {
      size: {
        small: [
          "p-6",
        ],
        medium: [
          "p-8",
        ],
        large: [
          "p-10",
        ],
      },
      width: {
        full: "w-full",
        min: "w-min",
        max: "w-max",
        fit: "w-fit",
        initial: "min-w-[14rem] md:min-w-[20rem]",
      },
    },
    defaultVariants: {
      size: "small",
      width: "initial",
    },
  }
);

export default config;
