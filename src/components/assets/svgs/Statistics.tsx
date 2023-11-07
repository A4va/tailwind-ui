import React from "react";
import { SVGprop } from "./types";

export default function Statistics({ size, color, className }: SVGprop) {
  return (
    <svg
      className={className}
      width={size || "24"}
      height={size || "24"}
      stroke={color || "currentColor"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 13V16M12 11V16M16 8V16M21 12.5294C21 19 19 21 12 21C5 21 3 19 3 12C3 5 5 3 12 3C19 3 21 5 21 12.5294Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
