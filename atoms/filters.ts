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

export const taskFiltersAtom = atom({
  key: "taskFilters",
  default: {
    title: "",
    description: "",
    priority: 1,
    assignedTo: [],
    dueDate: new Date(),
  },
});