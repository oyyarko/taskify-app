import React from "react";
import KanbanContainer from "../../Kanban/Container";
import KanbanColumn from "../../Kanban/Column";
import Board from "../../Kanban/Board";

const KanbanList = () => {
  return (
    <>
      <KanbanContainer>
        <Board>
          <KanbanColumn></KanbanColumn>
          <KanbanColumn></KanbanColumn>
          <KanbanColumn></KanbanColumn>
        </Board>
      </KanbanContainer>
    </>
  );
};

export default KanbanList;
