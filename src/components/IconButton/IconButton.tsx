import React from "react";
import { IconButtonProps } from "./iconButton.types";
import tailwindConfig from "./iconButton.config";
import { classNames } from "@/utils";
import Icon from "../Icon/Index";

const resolveDisabledButton = (variant: IconButtonProps["variant"]) => {
  const disabledStyles = {
    primary: ["bg-slate-500"],
    secondary: [
      "bg-slate-100",
      "text-slate-400",
      "cursor-not-allowed",
      "border-slate-200",
    ],
    transparent: ["bg-slate-100", "text-slate-600", "cursor-not-allowed"],
  };
  return disabledStyles[variant || "primary"];
};

export default function Button({
  icon,
  width,
  size,
  variant,
  onClick,
  disabled,
  className,
  id,
  type,
}: IconButtonProps) {
  const classes = React.useMemo(() => {
    return classNames(
      tailwindConfig({
        variant,
        size,
        width,
      }),
      [disabled && resolveDisabledButton(variant)],
      className
    );
  }, [disabled, size, variant, width, className]);

  return (
    <button
      id={id}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {/* <div className="flex w-full h-full gap-2 items-center justify-center"> */}
      <Icon className="text-[#A8A8A8]" name={icon || "export-pdf"} />
    </button>
  );
}
