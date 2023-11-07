import React from "react";
import { SVGprop } from "./types";

export default function Home({ size, color, className }: SVGprop) {
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
        d="M9 18C9.375 16.5 9 15 12 15C15 15 14.625 16.5 15 18M21 15.9638C21 20.4998 20 20.9998 12 20.9998C4.00003 20.9998 2.99999 19.9998 3.00003 15.9638C3.00006 13.8225 3 14.3184 3 12.4442C3 10.5699 3.57474 9.49977 6.94411 6.78924C8.35369 5.65529 9.57248 4.73851 10.4601 4.09087C11.3925 3.41053 12.6264 3.38424 13.5609 4.06164C14.3853 4.65916 15.544 5.54165 17.0559 6.78924C20.5 9.63135 21 10.4998 21 12.4442C20.9999 16.2043 21 12.8225 21 15.9638Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
