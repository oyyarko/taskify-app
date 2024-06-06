'use client'

import clsx from "clsx";
import React from "react";

type CardProps = {
  card: any;
};

const Card = ({ card }: CardProps) => {
  return (
    <div
      className="relative bg-slate-800 min-h-48 max-h-72 text-white !rounded-3xl w-full"
      key={card.id}
    >
      <div className="font-semibold p-3 h-12 w-full rounded-tr-3xl rounded-tl-3xl text-center text-amber-400 bg-slate-900">
        {card.label}
      </div>
      <p className="px-3 py-3 line-clamp-2">{card.description}</p>
      <div
        className={
          "flex items-center py-1 absolute w-full bottom-3 border-t border-slate-700 pt-3"
        }
      >
        <div className="flex justify-between items-center">
          <div
            className={clsx(
              "w-3 h-3 border-4 rounded-full ms-3",
              card.priority === 1
                ? "bg-blue-200 border-blue-400 text-blue-800"
                : card.priority === 2
                ? "bg-green-300 border-green-400 text-green-800"
                : card.priority === 3
                ? "bg-orange-300 border-orange-400 text-orange-800"
                : "bg-red-300 border-red-400 text-red-800"
            )}
          ></div>
          <div className="text-xs font-semibold ms-1 text-white">
            {card.priority === 1
              ? "Normal"
              : card.priority === 2
              ? "Medium"
              : card.priority === 3
              ? "High"
              : "Urgent"}
          </div>
        </div>
        <div className="flex flex-wrap justify-end w-full gap-1 me-3">
          {card?.tags.slice(0, 2)?.map((tag: any, index: number) => (
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
  );
};

export default Card;
