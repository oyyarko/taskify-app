"use client";

import { ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

type CardProps = {
  card: any;
};

const Card = ({ card }: CardProps) => {
  return (
    <div
      className="relative border-gray-200 dark:border-slate-900 border dark:bg-slate-800 bg-stone-50 text-black min-h-48 max-h-72 dark:text-white !rounded-3xl w-full"
      key={card.id}
    >
      <div className="font-semibold truncate px-10 p-3 w-full rounded-tr-3xl rounded-tl-3xl text-center text-black dark:text-amber-400 dark:bg-slate-900 bg-amber-100">
        {card.label}
      </div>
      <p className="px-3 py-3 line-clamp-2 ">{card.description}</p>
      <div
        className={
          "flex items-center absolute w-full bottom-3 border-t border-gray-200 dark:border-slate-700 pt-3 justify-between"
        }
      >
        <div className="flex justify-between gap-1 items-center">
          <div className="flex items-center">
            <div
              className={clsx(
                "w-3 h-3 border-4 rounded-full ms-3",
                card.priority === 1
                  ? "bg-green-200 border-green-400 text-green-800"
                  : card.priority === 2
                  ? "bg-amber-300 border-amber-400 text-amber-800"
                  : card.priority === 3
                  ? "bg-orange-300 border-orange-400 text-orange-800"
                  : "bg-red-300 border-red-400 text-red-800"
              )}
            ></div>
            <div className="text-xs font-semibold ms-1 dark:text-white text-black">
              {card.priority === 1
                ? "Normal"
                : card.priority === 2
                ? "Medium"
                : card.priority === 3
                ? "High"
                : "Urgent"}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-1 me-3">
          {card?.tags.slice(0, 2)?.map((tag: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "text-xs border-slate-600 border-2 dark:text-white text-black font-medium px-2.5 py-0.5 rounded-full"
              )}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
