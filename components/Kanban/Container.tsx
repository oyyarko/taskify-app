"use client"

import React from "react";

const KanbanContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-screen h-screen flex justify-center m-5">
      <div className="w-screen h-screen flex p-8 overflow-scroll">{children}</div>
    </div>
  );
};

export default KanbanContainer;
