import React from "react";
import { GridProps } from "./grid.types";
import tailwindConfig from "./grid.config";
import { classNames } from "@/utils";

export default function Grid({ children, width, size, className }: GridProps) {
  const classes = React.useMemo(() => {
    return classNames(
      tailwindConfig({
        width,
        size,
      }),
      className
    );
  }, [width, size, className]);
  return <div className={classes}>{children}</div>;
}
