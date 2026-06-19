import * as React from "react";
import type { SVGProps } from "react";
const SvgIconPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.001 4.167v11.667M4.168 10h11.667"
    />
  </svg>
);
export default SvgIconPlus;
