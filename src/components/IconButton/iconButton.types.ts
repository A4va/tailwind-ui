import { IconType } from "../Icon/Index";

export type IconButtonProps = {
  icon: IconType;
  variant?: "primary" | "secondary" | "transparent";
  size?: "small" | "medium" | "large";
  width?: "full" | "min" | "max" | "fit" | "initial";
  onClick?: (event: React.ChangeEvent<any>) => void;
  disabled?: boolean;
  id?: string;
  type?: "reset" | "submit" | "button";
  className?: string;
};
