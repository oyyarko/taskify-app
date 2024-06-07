"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";

interface Links {
  id: number;
  label: string;
  value: string | number;
}

interface DropdownProps {
  links: Links[];
  filterLabel: string;
  className?: string;
  type: string;
  checkbox?: boolean;
  filters?: object;
  setSelectedFilter?: (e: any) => void;
}

export function Dropdown({
  className,
  links,
  filterLabel,
  type,
  filters,
  setSelectedFilter,
  ...rest
}: DropdownProps) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left max-sm:w-full">
        <div>
          <MenuButton
            className="inline-flex w-full justify-center gap-x-1.5 border dark:border-slate-800 border-gray-100 rounded-full text-center font-medium bg-white shadow-sm dark:bg-slate-900 px-3 py-2 text-xs text-gray-400  ring-inset ring-gray-900 dark:hover:bg-slate-500 hover:bg-amber-400 hover:text-black items-center text-ellipsis truncate"
            {...rest}
          >
            {links.find(
              (link) => filters && filters[type as keyof typeof filters] === link.value
            )?.label ||
              filterLabel ||
              "Filter"}
            <ChevronDownIcon
              className="-mr-1 h-3 w-3 text-black-400"
              aria-hidden="true"
            />
          </MenuButton>
        </div>

        <Transition
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-300"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-300"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems
            className={clsx(
              "absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-2xl text-slate-900 dark:text-gray-400 dark:bg-slate-900 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none -rounded-tr-2xl",
              className
            )}
          >
            <div className="">
              {links.map((link) => (
                <MenuItem key={link.id}>
                  {({ focus }) => (
                    <div
                      className={clsx(
                        focus
                          ? "bg-amber-400 first-of-type:rounded-tl-2xl first-of-type:rounded-tr-2xl last-of-type:rounded-bl-2xl last-of-type:rounded-br-2xl text-black"
                          : "text-gray-400",
                        "block px-4 py-2 text-sm cursor-pointer max-sm:w-full"
                      )}
                      onClick={() => setSelectedFilter && setSelectedFilter(link.value)}
                    >
                      {link.label}
                    </div>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
}
