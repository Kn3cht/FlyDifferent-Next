import { Property } from "csstype";

export default function PageTitle({
  title,
  subtitle,
  bgColor,
  color,
}: {
  title: string;
  subtitle?: string;
  bgColor: string;
  color: Property.Color;
}) {
  return (
    <div
      className={"w-full pt-12 pb-8 px-6 rounded"}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <h1 className={"text-6xl mb-4"}>
        <i>{title}</i>
      </h1>
      <h2 className={"text-3xl "}>{subtitle}</h2>
    </div>
  );
}
