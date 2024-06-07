"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Bars3Icon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { Search } from "@/ui/Search/search";
import { Dropdown } from "@/ui/Dropdown/dropdown";
import { useRecoilState, useRecoilValue } from "recoil";
import { filtersAtom } from "@/atoms/filters";
import { categoryLinks, filterLinks, sortBy } from "@/config";

export function FilterSection() {
  const [displayView, setDisplayView] = useState<boolean>(true); //1: grid, 0: list
  const [mobileFilterView, setMobileFilterView] = useState<boolean>(false);

  const filters = useRecoilValue(filtersAtom);
  const [_, setSelectedFilter] = useRecoilState(filtersAtom);

  const handleSetSelectedFilter = (e: any, key: string) => {
    setSelectedFilter((prev) => ({
      ...prev,
      [key]: e,
    }));
  };

  return (
    <div className="flex justify-between items-center flex-wrap max-sm:w-full max-sm:gap-3">
      <div className="flex gap-3 transition-all duration-500">
        <Bars3Icon
          className={clsx(
            displayView ? "opacity-30 pointer-events-none" : "cursor-pointer",
            "h-6 w-5 hover:text-amber-400 dark:hover:text-amber-400 text-slate-900 dark:text-gray-50"
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
          filters={filters}
          setSelectedFilter={(e) => handleSetSelectedFilter(e, "assignee")}
          links={filterLinks}
          filterLabel={"By Assignees"}
          type={"assignee"}
        />
        <Dropdown
          filters={filters}
          setSelectedFilter={(e) => handleSetSelectedFilter(e, "category")}
          links={categoryLinks}
          filterLabel="Categories"
          type={"category"}
        />
        <Dropdown
          filters={filters}
          setSelectedFilter={(e) => handleSetSelectedFilter(e, "sortby")}
          links={sortBy}
          className="!w-56"
          filterLabel="Sort By"
          type={"sortby"}
        />
      </div>
    </div>
  );
}
