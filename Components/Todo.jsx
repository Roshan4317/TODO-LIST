import React, { useEffect, useMemo, useState } from "react";
import TodayList from "./TodayList";

export default function Todo() {
  const [todayTarget, setTodayTarget] = useState("");
  const [error, setError] = useState("");
  const [passingValue, setPassingValue] = useState(() => {
    const savedData = localStorage.getItem("list");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(passingValue));
  }, [passingValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todayTarget != "") {
      setPassingValue((prevState) => [
        ...prevState,
        { id: crypto.randomUUID(), task: todayTarget },
      ]);
      setTodayTarget("");
      setError("");
    } else {
      setError("Please enter in Valid Format");
    }
  };

  const handleDelete = (id) => {
    setPassingValue((prevState) => prevState.filter((el) => el.id != id));
  };

  return (
    <main className="mt-30 flex flex-col items-center gap-9">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Your Goal"
            className="overflow-hidden rounded-l-3xl border-none bg-white px-3 py-1 text-black shadow-xl outline-none"
            onChange={(e) => {
              setTodayTarget(e.target.value);
              setError("");
            }}
            value={todayTarget}
          />
          <button className="cursor-pointer rounded-r-3xl bg-blue-500 px-3 py-1 text-white hover:bg-blue-400">
            Add Task
          </button>
        </div>
        <h1 className="mt-3 text-center"> {error}</h1>
      </form>

      <div className="flex flex-col gap-5">
        {useMemo(() => {
          return (
            <TodayList todayTarget={passingValue} handleDelete={handleDelete} />
          );
        }, [passingValue])}
      </div>
    </main>
  );
}
