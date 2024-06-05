"use client"

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React from "react";

type Props = {
  onDragEnd: (event: DragEndEvent) => void;
};

const Board = ({ children, onDragEnd }: React.PropsWithChildren<Props>) => {
  return <DndContext onDragEnd={onDragEnd}>{children}</DndContext>;
};

export default Board;
