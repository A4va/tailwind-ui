import { IconType } from "../Icon/Index";

export type CardProps = {
  heading: string;
  icon?: IconType;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  width?: "full" | "min" | "max" | "fit" | "initial";
  className?: string;
};
