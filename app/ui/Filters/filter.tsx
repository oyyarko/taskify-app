"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Bars3Icon, Squares2X2Icon } from "@heroicons/react/20/solid";

import { DropdownCheckbox } from "../Dropdown/dropdownCheckbox";
import { Search } from "../Search/search";

const filterLinks = [
  { id: 1, label: "John Doe", value: 1 },
  { id: 2, label: "Mary Brian", value: 2 },
  { id: 3, label: "Giltron Lu'Brios", value: 3 },
];

const categoryLinks = [
  { id: 1, label: "Project", value: 1 },
  { id: 2, label: "Tasks", value: 2 },
  { id: 3, label: "Misc", value: 3 },
];

const sortBy = [
  { id: 1, label: "Priority | High to Low", value: 1 },
  { id: 2, label: "Priority | Low to High", value: 2 },
  { id: 3, label: "Latest created", value: 3 },
  { id: 4, label: "By Team Size", value: 4 },
];

export function FilterSection() {
  const [displayView, setDisplayView] = useState<boolean>(true); //1: grid, 0: list
  const [mobileFilterView, setMobileFilterView] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center flex-wrap max-sm:w-full max-sm:gap-3">
      <div className="flex gap-3 transition-all duration-500">
        <Bars3Icon
          className={clsx(
            displayView ? "opacity-30 pointer-events-none" : "cursor-pointer",
            "h-6 w-5 hover:text-amber-400"
          )}
          aria-hidden="true"
          title="List View"
          onClick={() => setDisplayView(!displayView)}
        />
        <Squares2X2Icon
          className={clsx(
            !displayView ? "opacity-30 pointer-events-none" : "cursor-pointer",
            "h-6 w-5 hover:text-amber-400"
          )}
          aria-hidden="true"
          title="Grid View"
          onClick={() => setDisplayView(!displayView)}
        />
      </div>
      <div
        className="max-sm:block cursor-pointer hover:bg-amber-400 hidden rounded-full bg-gray-50 px-3 py-2 font-medium text-xs text-black transition-all duration-300"
        onClick={() => setMobileFilterView(!mobileFilterView)}
      >
        {mobileFilterView ? "Close" : "Filters"}
      </div>
      <div
        className={clsx(
          "flex max-sm:flex-col gap-4 items-center max-sm:w-full max-sm:justify-center transition-all duration-600",
          mobileFilterView
            ? "block transition-all duration-300"
            : "max-sm:hidden"
        )}
      >
        <Search />
        <DropdownCheckbox links={filterLinks} filterLabel={"By Assignees"} />
        <DropdownCheckbox links={categoryLinks} filterLabel="Categories" />
        <DropdownCheckbox
          links={sortBy}
          className="!w-56"
          filterLabel="Sort By"
        />
      </div>
    </div>
  );
}
