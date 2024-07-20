import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export default function LinkButton({
  href,
  children,
  block,
  bgColor,
  target,
}: {
  href: string;
  block?: boolean;
  children: ReactNode;
  bgColor?: string;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <a
      href={href}
      target={target}
      className={
        "mt-4 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300" +
        (block ? " w-full" : "") +
        (!bgColor ? " bg-primary hover:bg-accentOrange" : "")
      }
      style={{ backgroundColor: bgColor }}
    >
      {children}
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  );
}
