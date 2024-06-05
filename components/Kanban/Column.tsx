"use client";

import { Button } from "@/ui/Button/button";
import { useDroppable, UseDroppableArguments } from "@dnd-kit/core";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";

type Props = {
  id: string;
  title: string;
  description?: React.ReactNode;
  count: number;
  data?: UseDroppableArguments["data"];
  onAddClick?: (args: { id: string }) => void;
};

const KanbanColumn = ({
  children,
  id,
  data,
}: React.PropsWithChildren<Props>) => {
  const { isOver, setNodeRef, active } = useDroppable({
    id,
    data,
  });

  const onAddClickHandler = () => {};

  return (
    <div ref={setNodeRef} className="flex flex-col py-4">
      <div className="p-4">
        <div className="w-full flex gap-2 justify-between">
          <h3 className="text-ellipsis text-xs font-semibold whitespace-nowrap">
            Title todo
          </h3>
          <PlusCircleIcon className="h-4 w-4" />
        </div>

        <div
          className={clsx(
            "flex border-2 gap-4 border-dashed rounded-xl h-72",
            isOver ? "border-amber-400" : "border-transparent",
            active ? "overflow-y-scroll" : "overflow-y-auto"
          )}
        >
          <div className="mt-3 flex flex-col gap-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default KanbanColumn;
