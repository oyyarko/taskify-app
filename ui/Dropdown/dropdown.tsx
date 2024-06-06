"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";
import { filtersAtom } from "@/atoms/filters";

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
}

export function Dropdown({
  className,
  links,
  filterLabel,
  type,
  ...rest
}: DropdownProps) {
  const filters = useRecoilValue(filtersAtom);
  const [_, setSelectedFilter] = useRecoilState(filtersAtom);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left max-sm:w-full">
        <div>
          <MenuButton
            className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-slate-900 px-3 py-2 text-xs font-medium text-gray-400 shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-slate-500 hover:text-black items-center text-ellipsis truncate"
            {...rest}
          >
            {links.find((link) => filters[type as keyof typeof filters] === link.value)?.label ||
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
              "absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-2xl text-gray-400 bg-slate-900 ring-1 ring-black ring-opacity-5 focus:outline-none -rounded-tr-2xl",
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
                      onClick={() =>
                        setSelectedFilter((prev) => ({
                          ...prev,
                          [type]: link.value,
                        }))
                      }
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
