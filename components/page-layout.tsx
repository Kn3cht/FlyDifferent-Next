import React from "react";

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Page Layout</div>
      {children}
    </div>
  );
}
