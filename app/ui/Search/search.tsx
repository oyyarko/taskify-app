import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

interface SearchProps {}

export function Search({ ...rest }: SearchProps) {
  return (
    <form className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon className="h-3 w-3 text-gray-50" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full px-3 py-2 ps-8 text-xs border border-slate-800 rounded-full text-center font-medium bg-slate-900 focus:ring-amber-400 focus:border  focus:outline-none focus:border-amber-400  text-amber-400 dark:focus:ring-amber-400 dark:focus:border-amber-400"
        placeholder="Search Tasks, Projects, Team members"
        required
      />
    </form>
  );
}
