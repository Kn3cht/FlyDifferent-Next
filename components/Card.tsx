import { ReactNode } from "react";

export default function Card({
  children,
  image,
  title,
}: {
  image?: ReactNode;
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
      {title && (
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
          {title}
        </h5>
      )}
      {image}
      {children}
    </div>
  );
}
