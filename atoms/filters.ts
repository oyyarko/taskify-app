"use client";

import { atom } from "recoil";

export const filtersAtom = atom({
  key: "filtersState",
  default: {
    category: null,
    taskSearch: null,
    assignee: null,
    sortby: null,
  },
});
