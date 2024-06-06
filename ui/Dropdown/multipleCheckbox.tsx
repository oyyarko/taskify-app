import React from "react";
import { Checkbox } from "@headlessui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filtersAtom } from "@/atoms/filters";

interface Options {
  id: number;
  label: string;
  value: string | number;
}

interface CheckboxProps {
  type: string;
  links: Options[];
}

const MultipleCheckbox = ({ type, links }: CheckboxProps) => {
  const filters = useRecoilValue(filtersAtom);
  const [_, setSelectedFilter] = useRecoilState(filtersAtom);

  return (
    <div>
      {links.map((option) => (
        <div key={option.id} className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultipleCheckbox;
