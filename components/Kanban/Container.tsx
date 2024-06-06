"use client";

import React from "react";

const KanbanContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full h-[calc(100%-64px)] flex justify-center">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 w-full overflow-auto gap-2">
        {children}
      </div>
    </div>
  );
};

export default KanbanContainer;
