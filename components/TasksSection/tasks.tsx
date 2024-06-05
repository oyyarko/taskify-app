import clsx from "clsx";
import React from "react";
import KanbanList from "./Kanban/list";

interface TasksProps {}

const dummyTasksData = [
  {
    id: "af3",
    label: "Incoming leads",
    description: "Item 2.1 - Vivamus eget ante tempor",
    color: "#b8b8ff",
    priority: 1, // 1:normal, 2: Medium, 3:High, 4:Urgent
    tags: ["Web", "React", "SCRUM"],
  },
  {
    id: "af1",
    label: "Closing leads",
    description: "Item 2.1 - Vivamus eget ante tempor",
    color: "#C5DEDD",
    priority: 2,
    tags: ["Mobile", "Waterfall"],
  },
  {
    id: "af2",
    label: "On hold",
    description: "Item 2.1 - Vivamus eget ante tempor",
    color: "#BCD4E6",
    priority: 4,
    tags: ["Agile", "HR"],
  },
  {
    id: "af5",
    label: "In Process",
    description: "Lorem Ipsum doler sit amet",
    color: "#e4c1f9",
    priority: 2,
    tags: ["Mobile", "QA Testing"],
  },
  {
    id: "af4",
    label: "Payment Delay",
    description: "Lorem Ipsum doler sit amet",
    color: "#FAD2E1",
    priority: 3,
    tags: ["Testing", "Deploy"],
  },
];

export function TasksSection() {
  return (
    <>
    <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 pointer-events-none">
      {dummyTasksData?.map((dummy, id) => (
        <div
          className="relative col-span-1 bg-slate-800 min-h-48 max-h-72 text-white !rounded-3xl w-full !cursor-move"
          key={id}
        >
          <div className="font-semibold p-3 h-12 w-full rounded-tr-3xl rounded-tl-3xl text-center text-amber-400 bg-slate-900">
            {dummy.label}
          </div>
          <p className="px-3 py-3 line-clamp-2">{dummy.description}</p>
          <div
            className={
              "flex items-center py-1 absolute w-full bottom-3 border-t border-slate-700 pt-3"
            }
          >
            <div className="flex justify-between items-center">
              <div
                className={clsx(
                  "w-3 h-3 border-4 rounded-full ms-3",
                  dummy.priority === 1
                    ? "bg-blue-200 border-blue-400 text-blue-800"
                    : dummy.priority === 2
                    ? "bg-green-300 border-green-400 text-green-800"
                    : dummy.priority === 3
                    ? "bg-orange-300 border-orange-400 text-orange-800"
                    : "bg-red-300 border-red-400 text-red-800"
                )}
              ></div>
              <div className="text-xs font-semibold ms-1 text-white">
                {dummy.priority === 1
                  ? "Normal"
                  : dummy.priority === 2
                  ? "Medium"
                  : dummy.priority === 3
                  ? "High"
                  : "Urgent"}
              </div>
            </div>
            <div className="flex flex-wrap justify-end w-full gap-1 me-3">
              {dummy?.tags.slice(0, 2)?.map((tag, index) => (
                <div
                  key={index}
                  className={clsx(
                    "text-xs border-slate-600 border-2 text-white font-medium px-2.5 py-0.5 rounded-full"
                  )}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* <KanbanList></KanbanList> */}
    </>
  );
}
