import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "h-10 flex items-center rounded-full bg-amber-400 px-4 text-sm font-semibold text-black transition-colors hover:bg-amber-300 hover:border-dashed hover:text-black",
        className
      )}
    >
      {children}
    </button>
  );
}
