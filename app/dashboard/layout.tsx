import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen p-16 max-sm:p-5 dark:bg-black bg-white flex flex-wrap justify-between items-start">
      {children}
    </div>
  );
}
