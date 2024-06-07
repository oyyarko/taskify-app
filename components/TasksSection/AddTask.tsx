import { taskFiltersAtom } from "@/atoms/filters";
import { taskPriority } from "@/config";
import { Dropdown } from "@/ui/Dropdown/dropdown";
import DatePicker from "@/ui/Input/DatePicker";
import Text from "@/ui/Input/Text";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const AddTask = () => {
  const filters = useRecoilValue(taskFiltersAtom);
  const [_, setSelectedFilter] = useRecoilState(taskFiltersAtom);

  const handleSetSelectedFilter = (e: any, key: string) => {
    setSelectedFilter((prev) => ({
      ...prev,
      [key]: e,
    }));
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
