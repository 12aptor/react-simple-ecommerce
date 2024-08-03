import { SVGProps } from "react";

export function LineMdClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray="12"
        strokeDashoffset="12"
        strokeLinecap="round"
        strokeWidth="2"
        d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.4s"
          values="12;0"
        />
      </path>
    </svg>
  );
}
