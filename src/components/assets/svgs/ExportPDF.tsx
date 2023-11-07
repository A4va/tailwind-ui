import React from "react";
import { SVGprop } from "./types";

export default function ExportPDF({ size, color, className }: SVGprop) {
  return (
    <svg
      className={className}
      width={size || "35"}
      height={size || "35"}
      stroke={color || "currentColor"}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {/* <rect width="35" height="35" rx="17.5" fill="#F3F4F6" /> */}
      <path
        d="M22.1667 17.5L22.1667 22.375C22.1667 22.806 21.9823 23.2193 21.6541 23.524C21.3259 23.8288 20.8808 24 20.4167 24L12.25 24C11.7859 24 11.3408 23.8288 11.0126 23.524C10.6844 23.2193 10.5 22.806 10.5 22.375L10.5 14.7917C10.5 14.3607 10.6844 13.9474 11.0126 13.6426C11.3408 13.3379 11.7859 13.1667 12.25 13.1667L17.704 13.1667M14 20.75L24.5 11M24.5 11L24.5 14.7917M24.5 11L20.4167 11"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
