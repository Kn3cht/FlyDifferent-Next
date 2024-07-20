import { ReactNode } from "react";

export default function Button({
  disabled,
  onClick,
  children,
  block,
  bgColor,
}: {
  disabled?: boolean;
  onClick: () => void;
  block?: boolean;
  children: ReactNode;
  bgColor?: string;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={
        "mt-4 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300" +
        (block ? " w-full" : "") +
        (disabled
          ? " bg-gray-200 text-gray-600"
          : !bgColor
            ? " text-white hover:text-white bg-primary hover:bg-accentOrange"
            : " text-white hover:text-white")
      }
      style={
        !disabled ? { backgroundColor: bgColor } : { cursor: "not-allowed" }
      }
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  );
}
