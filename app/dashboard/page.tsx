import { FilterSection } from "@/components/Filters/filter";
import Header from "@/components/Header/header";
import { TasksSection } from "@/components/TasksSection/tasks";
import React from "react";

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
