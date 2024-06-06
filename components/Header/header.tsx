"use client";
import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Button } from "@/ui/Button/button";

const Header = () => {
  const updateThemeHandler = () => {
    if (localStorage.getItem("taskify-theme")) {
      if (localStorage.getItem("taskify-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("taskify-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("taskify-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("taskify-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("taskify-theme", "dark");
      }
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="font-bold text-4xl text-amber-400 tracking-wide">
          Taskify
        </div>
        <div className="flex gap-3 items-center">
          <div onClick={() => updateThemeHandler()}>
            <input
              type="checkbox"
              name="light-switch"
              v-model="isDark"
              className="light-switch sr-only"
            />
            <label
              className="flex items-center justify-center cursor-pointer w-8 h-8 hover:bg-amber-400 dark:hover:bg-amber-400 dark:bg-slate-800 bg-white border dark:border-slate-900 shadow-lg rounded-full"
              htmlFor="light-switch"
            >
              <svg
                className="w-4 h-4 dark:hidden"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-slate-900 dark:text-white"
                  d="M7 0h2v2H7V0Zm5.88 1.637 1.414 1.415-1.415 1.413-1.414-1.414 1.415-1.414ZM14 7h2v2h-2V7Zm-1.05 7.433-1.415-1.414 1.414-1.414 1.415 1.413-1.414 1.415ZM7 14h2v2H7v-2Zm-4.02.363L1.566 12.95l1.415-1.414 1.414 1.415-1.415 1.413ZM0 7h2v2H0V7Zm3.05-5.293L4.465 3.12 3.05 4.535 1.636 3.121 3.05 1.707Z"
                />
                <path
                  className="fill-current text-slate-900 dark:text-white"
                  d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                />
              </svg>
              <svg
                className="w-4 h-4 hidden dark:block"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-slate-900 dark:text-white"
                  d="M6.2 2C3.2 2.8 1 5.6 1 8.9 1 12.8 4.2 16 8.1 16c3.3 0 6-2.2 6.9-5.2C9.7 12.2 4.8 7.3 6.2 2Z"
                />
                <path
                  className="fill-current text-slate-900 dark:text-white"
                  d="M12.5 6a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 6Z"
                />
              </svg>
              <span className="sr-only">Switch to light / dark version</span>
            </label>
          </div>
          <Button className="gap-1 items-center">
            <span className="max-sm:hidden">Create new Task</span>{" "}
            <PlusIcon className="ml-auto h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
