"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Bars3Icon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { Search } from "@/ui/Search/search";
import { Dropdown } from "@/ui/Dropdown/dropdown";

const filterLinks = [
  { id: 1, label: "John Doe", value: 1 },
  { id: 2, label: "Mary Brian", value: 2 },
  { id: 3, label: "Giltron Lu'Brios", value: 3 },
];

const categoryLinks = [
  { id: 1, label: "Mobile", value: 1 },
  { id: 2, label: "Waterfall", value: 2 },
  { id: 3, label: "Testing", value: 3 },
  { id: 4, label: "Deploy", value: 4 },
  { id: 5, label: "Agile", value: 5 },
  { id: 6, label: "HR", value: 6 },
  { id: 7, label: "Web", value: 7 },
  { id: 8, label: "React", value: 8 },
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
            "h-6 w-5 hover:text-amber-400 dark:hover:text-amber-400 text-slate-900 dark:text-gray-50",
          )}
          aria-hidden="true"
          title="List View"
          onClick={() => setDisplayView(!displayView)}
        />
        <Squares2X2Icon
          className={clsx(
            !displayView ? "opacity-30 pointer-events-none" : "cursor-pointer",
            "h-6 w-5 hover:text-amber-400 dark:hover:text-amber-400 text-slate-900 dark:text-gray-50"
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
        <Search type="taskSearch" />
        <Dropdown
          links={filterLinks}
          filterLabel={"By Assignees"}
          type={"assignee"}
        />
        <Dropdown
          links={categoryLinks}
          filterLabel="Categories"
          type={"cateogory"}
        />
        <Dropdown
          links={sortBy}
          className="!w-56"
          filterLabel="Sort By"
          type={"sortby"}
        />
      </div>
    </div>
  );
}
