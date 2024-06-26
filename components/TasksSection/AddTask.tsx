import { taskFiltersAtom } from "@/atoms/filters";
import { taskPriority } from "@/config";
import axiosClient from "@/lib/api";
import { Dropdown } from "@/ui/Dropdown/dropdown";
import DatePicker from "@/ui/Input/DatePicker";
import Text from "@/ui/Input/Text";
import { useAuth } from "@clerk/nextjs";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const AddTask = () => {
  const filters = useRecoilValue(taskFiltersAtom);
  const [_, setSelectedFilter] = useRecoilState(taskFiltersAtom);
  const auth = useAuth();

  const handleSetSelectedFilter = (e: any, key: string) => {
    setSelectedFilter((prev) => ({
      ...prev,
      [key]: e,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axiosClient.post("tasks/createTask", filters);
      if(res) {
        console.log('res :>> ', res);
      }
    } catch (err) {
      console.log("err :>> ", err);
    }
  };

  return (
    <div>
      <Text
        name="title"
        label="Title"
        placeholder="Title"
        onChange={(e) => handleSetSelectedFilter(e.target.value, "title")}
      />
      <Text
        multiple
        name="description"
        label="Description"
        placeholder="Description"
        onChange={(e) => handleSetSelectedFilter(e.target.value, "description")}
      />
      <DatePicker
        name="dueDate"
        label="Due Date"
        onChange={(e: any) =>
          handleSetSelectedFilter(e.target.value, "dueDate")
        }
      />
      <div className="flex items-center gap-3">
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-0">
          Priority
        </label>
        <Dropdown
          filters={filters}
          setSelectedFilter={(e: any) => handleSetSelectedFilter(e, "priority")}
          links={taskPriority}
          filterLabel={"Task Priority"}
          type={"priority"}
        />
      </div>
    </div>
  );
};

export default AddTask;
