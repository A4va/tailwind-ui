import React from "react";
import { SVGprop } from "./types";

export default function Archive({ size, color, className }: SVGprop) {
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
        d="M15 6V3M9 6V3M7.75 9.25H16.25M21 13C21 19.1111 19 21 12 21C5 21 3 19.1111 3 12.5C3 5.88889 5 4 12 4C19 4 21 5.88889 21 13Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
