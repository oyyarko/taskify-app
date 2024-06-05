import React from "react";
import Header from "../ui/Header/header";
import { FilterSection } from "../ui/Filters/filter";
import { TasksSection } from "../ui/TasksSection/tasks";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-6">
        <Header />
        <FilterSection />
        <TasksSection />
      </div>
     
    </>
  );
};

export default Dashboard;
