import { filtersAtom } from "@/atoms/filters";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useRecoilState } from "recoil";

interface SearchProps {
  type: string;
}

export function Search({ type, ...rest }: SearchProps) {
  const [_, setSelectedFilter] = useRecoilState(filtersAtom);

  return (
    <form className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon className="h-3 w-3 dark:text-gray-50 text-slate-900" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full px-3 py-2 ps-8 text-xs border dark:border-slate-800 border-gray-100 rounded-full text-center font-medium bg-white shadow-sm dark:bg-slate-900 focus:ring-amber-400 focus:border  focus:outline-none focus:border-amber-400  text-amber-400 dark:focus:ring-amber-400 dark:focus:border-amber-400"
        placeholder="Search Tasks, Projects, Team members"
        required
        onChange={(e) =>
          setSelectedFilter((prev) => ({ ...prev, [type]: e.target.value }))
        }
      />
    </form>
  );
}
