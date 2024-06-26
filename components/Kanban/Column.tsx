"use client";

import { Button } from "@/ui/Button/button";
import Modal from "@/ui/Modal/Modal";
import { useDroppable, UseDroppableArguments } from "@dnd-kit/core";
import clsx from "clsx";
import React, { useState } from "react";
import AddTask from "../TasksSection/AddTask";

type Props = {
  id: number;
  title: string;
  description?: React.ReactNode;
  count?: number;
  data?: UseDroppableArguments["data"];
  onAddClick?: (args: { id: string }) => void;
};

const KanbanColumn = ({
  children,
  id,
  data,
  title,
}: React.PropsWithChildren<Props>) => {
  const { isOver, setNodeRef, active } = useDroppable({
    id,
    data,
  });
  let [addCardModal, setAddCardModal] = useState(false);

  const onAddClickHandler = () => {};

  return (
    <div ref={setNodeRef} className="flex flex-col">
      <div className="w-full gap-3 flex flex-col ">
        <div className="flex gap-2">
          <div className="font-semibold py-3 px-4 h-12 w-full rounded-3xl text-center text-black dark:text-amber-400 bg-white dark:border-slate-900 border-gray-200 border  dark:bg-slate-900 flex justify-between items-center">
            {title}
            <Button
              className="h-5 !px-2 text-xs"
              onClick={() => setAddCardModal(true)}
            >
              Add
            </Button>
          </div>
        </div>
        <div
          className={clsx(
            "bg-transparent max-h-[calc(75vh-70px)] min-h-48 flex-1 border-2 gap-4  rounded-3xl",
            isOver
              ? "border-amber-400 border-dashed min-h-[calc(75vh-70px)]"
              : "border-transparent",
            active ? "overflow-y-hidden" : "overflow-y-auto scrollbar"
          )}
        >
          <div className="flex flex-col gap-3">{children}</div>
        </div>
      </div>
      {addCardModal ? (
        <Modal
          title="Add Task"
          isOpen={addCardModal}
          buttonTitle="Save"
          onClose={() => setAddCardModal(false)}
        >
          <AddTask />
        </Modal>
      ) : null}
    </div>
  );
};

export default KanbanColumn;
