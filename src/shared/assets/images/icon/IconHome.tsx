import * as React from "react";
import type { SVGProps } from "react";
const SvgIconHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 21v-5.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437c.214-.11.494-.11 1.054-.11h2.8c.56 0 .84 0 1.054.11a1 1 0 0 1 .437.437C15 14.76 15 15.04 15 15.6V21M11.018 2.764 4.235 8.039c-.453.353-.68.529-.843.75a2 2 0 0 0-.318.65C3 9.703 3 9.99 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.575 0-.862-.074-1.126a2 2 0 0 0-.318-.65c-.163-.221-.39-.397-.843-.75l-6.783-5.275c-.351-.273-.527-.41-.72-.463a1 1 0 0 0-.523 0c-.194.053-.37.19-.721.463"
    />
  </svg>
);
export default SvgIconHome;
