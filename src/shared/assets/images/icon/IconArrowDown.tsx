import * as React from "react";
import type { SVGProps } from "react";
const SvgIconArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 7.917 5 5 5-5"
    />
  </svg>
);
export default SvgIconArrowDown;
