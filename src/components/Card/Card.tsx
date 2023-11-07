import React from "react";
import Icon from "../Icon/Index";
import Button from "../Button";
import { CardProps } from "./card.types";
import tailwindConfig from "./card.config";
import { classNames } from "@/utils";
import Badge from "../Badge";
import IconButton from "../IconButton";

export default function Card({
  heading,
  icon,
  children,
  width,
  size,
  className,
}: CardProps) {
  const classes = React.useMemo(() => {
    return classNames(
      tailwindConfig({
        size,
        width,
      }),
      className
    );
  }, [size, width, className]);

  return (
    <div className={classes}>
      <div className="flex justify-between gap-6">
        <div className="flex items-center gap-2">
          <Icon name="currency" />
          <h4 className="lg:text-2xl md:lg:text-xl sm:lg:text-lg">{heading}</h4>
        </div>

        {/* <Button
          className="p-1 enabled:hover:bg-[#e9eaec] bg-[#F3F4F6]"
          variant="transparent"
          size="small">
          {icon && <Icon className="text-[#A8A8A8]" name={icon} />}
        </Button> */}
        <IconButton size="small" className="enabled:hover:bg-[#e9eaec] bg-[#F3F4F6]" icon={"export-pdf"}/>
      </div>

      <div className="flex justify-between items-end gap-4 md:text-4xl text-2xl text-violet-500 pt-8">
        {children}
      </div>
    </div>
  );
}
