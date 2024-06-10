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
          active
            ? active.id === id
              ? "opacity-100"
              : "opacity-70"
            : "opacity-100"
        )}
      >
        {active?.id === id && (
          <DragOverlay
            zIndex={1000}
            dropAnimation={{
              duration: 500,
              easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
            }}
          >
            <div className="rounded-3xl cursor-grabbing">{children}</div>
          </DragOverlay>
        )}
        {children}
      </div>
    </div>
  );
};

export default KanbanContainer;
