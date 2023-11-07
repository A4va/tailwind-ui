import React from "react";
import { SVGprop } from "./types";

export default function Logout({ size, color, className }: SVGprop) {
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
        d="M10 20C4.5 20 4 19 4 12C4 5 4.5 4 9.99999 4M9 12H20M20 12L16 16M20 12L16 8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
