import React from "react";
import { Button } from "../Button/button";
import { PlusIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="font-bold text-4xl text-amber-400 tracking-wide">
          Taskify
        </div>
        <Button className="gap-1 items-center">
          <span className="max-sm:hidden">Create new Task</span>{" "}
          <PlusIcon className="ml-auto h-5 w-5" />
        </Button>
      </div>
    </>
  );
};

export default Header;
