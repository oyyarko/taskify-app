import clsx from "clsx";
import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: string
}

const Text = ({ name, label, className, ...rest }: InputFieldProps) => {
  return (
    <div className="min-w-48 my-2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={name}
        className={clsx("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-400 focus:border-amber-400 block w-full p-2.5 dark:bg-gray-700 dark:border-slate-900 focus:outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-400 dark:focus:border-amber-400", className)}
        {...rest}
      />
    </div>
  );
};

export default Text;
