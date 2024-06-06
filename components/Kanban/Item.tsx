"use client";

import {
  DragOverlay,
  UseDraggableArguments,
  useDraggable,
} from "@dnd-kit/core";
import clsx from "clsx";
import React from "react";

interface Props {
  id: string;
  data?: UseDraggableArguments["data"];
}

const KanbanContainer = ({
  children,
  id,
  data,
}: React.PropsWithChildren<Props>) => {
  const { attributes, listeners, setNodeRef, active } = useDraggable({
    id,
    data,
  });

  return (
    <div className="relative">
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className={clsx(
          "rounded-3xl relative cursor-grab",
          active ? (active.id === id ? 1 : 0.5) : 1
        )}
      >
        {active?.id === id && (
          <DragOverlay zIndex={1000}>
            <div className="rounded-3xl cursor-grabbing">{children}</div>
          </DragOverlay>
        )}
        {children}
      </div>
    </div>
  );
};

export default KanbanContainer;
