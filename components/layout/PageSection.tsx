import { PageSectionI } from "@/components/layout/types";
import React from "react";

export default function PageSection({
  title,
  children,
  bgColor,
  color,
}: PageSectionI) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color,
      }}
      className={"w-screen py-8" + (!bgColor ? " bg-white" : "")}
    >
      {title && <h3 className={"text-4xl text-center mb-8"}>{title}</h3>}

      <div className="w-screen max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
