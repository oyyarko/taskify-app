'use client'

import { dummyTasksData } from "@/config/data";
import { atom } from "recoil";

export const tasksListsAtom = atom({
  key: "tasksListState",
  default: dummyTasksData,
});
