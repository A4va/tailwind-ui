import { IconType } from "../Icon/Index";

export type ButtonProps = {
  children: React.ReactNode;
  icon?: IconType;
  color?: "red" | "green";
  size?: "small" | "medium" | "large";
  className?: string;
};
