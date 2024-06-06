"use client";

import React from "react";
import KanbanContainer from "../Kanban/Container";
import KanbanColumn from "../Kanban/Column";
import Board from "../Kanban/Board";
import KanbanItem from "../Kanban/Item";
import KanbanCard from "../Kanban/Card";
import { taskStages } from "@/config";
import { useRecoilState, useRecoilValue } from "recoil";
import { tasksListsAtom } from "@/atoms/tasks";

export function TasksSection() {
  const taskList = useRecoilValue(tasksListsAtom);
  const [_, setTaskList] = useRecoilState(tasksListsAtom);

  const updateTaskCards = (taskId: any, stageId: number) => {
    setTaskList((prev) =>
      taskList.reduce((acc: any, curr, index) => {
        if (curr.id === taskId) {
          acc.push({ ...curr, type: stageId });
        } else {
          acc.push(curr);
        }
        return acc;
      }, [])
    );
  };

  const handleOnDragEnd = (event: any) => {
    let stageId = event.over.id;
    const taskId = event.active.id;
    const taskStageId = event.active.data.current.type;

    if (taskStageId === stageId) return;

    updateTaskCards(taskId, stageId);
  };

  return (
    <>
      <KanbanContainer>
        <Board onDragEnd={handleOnDragEnd}>
          {taskStages?.map((stage, index) => (
            <KanbanColumn id={stage.id} title={stage.label} key={index}>
              {taskList
                .filter((data) => data.type === stage?.id)
                .map((dummy, id) => (
                  <KanbanItem key={dummy.id} id={dummy.id} data={dummy}>
                    <KanbanCard card={dummy} />
                  </KanbanItem>
                ))}
            </KanbanColumn>
          ))}
        </Board>
      </KanbanContainer>
    </>
  );
}
