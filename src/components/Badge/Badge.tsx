import React from "react";
import { ButtonProps } from "./Badge.types";
import tailwindConfig from "./Badge.config";
import { classNames } from "@/utils";
import Icon from "../Icon/Index";

export default function Button({
  children,
  size,
  icon,
  color,
  className,
}: ButtonProps) {
  const classes = React.useMemo(() => {
    return classNames(
      tailwindConfig({
        size,
        color,
      }),
      className
    );
  }, [size, color, className]);

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
