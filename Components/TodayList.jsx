import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export default function TodayList({ todayTarget, handleDelete }) {
  const [completedId, setCompletedId] = useState(() => {
    const savedData = localStorage.getItem("completedID");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("completedID", JSON.stringify(completedId));
  }, [completedId]);

  const toggleComplete = (id) => {
    setCompletedId((prevState) =>
      completedId.includes(id)
        ? completedId.filter((el) => el !== id)
        : [...prevState, id],
    );
  };

  return (
    <>
      {todayTarget.map(({ id, task }) => {
        return (
          <div
            id={id}
            key={id}
            className="flex min-w-73.5 items-center justify-between rounded-3xl bg-white px-3 py-1 shadow-xl"
          >
            <p
              className={`${completedId.includes(id) ? "text-gray-500 line-through" : "text-black"} `}
            >
              {task}
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`h-6 w-6 cursor-pointer rounded-full text-center ${completedId.includes(id) ? "bg-green-500" : "bg-gray-500"}`}
                onClick={() => toggleComplete(id)}
              >
                <i className="fa-solid fa-check"></i>
              </div>
              <MdDeleteForever
                className="cursor-pointer text-2xl text-red-600"
                onClick={() => handleDelete(id)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
