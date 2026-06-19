import * as React from "react";
import type { SVGProps } from "react";
const SvgIconArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="IconArrowRight_svg__a"
      width={7}
      height={12}
      x={7}
      y={4}
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.916 15 5-5-5-5"
      />
    </mask>
    <g mask="url(#IconArrowRight_svg__a)">
      <path fill="#000" d="M20 0v20H0V0z" />
    </g>
  </svg>
);
export default SvgIconArrowRight;
