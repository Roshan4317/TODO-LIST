import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Todo from "../Components/Todo";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedValue = localStorage.getItem("theme");
    return savedValue ? JSON.parse(savedValue) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Todo />
    </>
  );
}
