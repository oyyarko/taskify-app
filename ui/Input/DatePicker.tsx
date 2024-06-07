import React, { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  datepicker?: boolean;
}

const DatePicker = ({ name, label, ...rest }: CustomInputProps) => {
  return (
    <div className="relative max-w-sm my-2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={name}
        datepicker
        type="date"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-400 focus:border-amber-400 block w-full p-2.5 dark:bg-gray-700 dark:border-slate-900 focus:outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-400 dark:focus:border-amber-400 "
        placeholder="Select date"
        {...rest}
      />
    </div>
  );
};

export default DatePicker;
