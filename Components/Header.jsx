import React from "react";

export default function Header({ isDark, setIsDark }) {
  if (isDark) {
    document.body.classList.remove("sun");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("sun");
  }

  return (
    <header className="px-5 py-5 shadow-sm shadow-blue-50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <h1 className="cursor-default text-2xl font-bold hover:text-blue-300">
          Todo List{" "}
        </h1>
        <div className="flex gap-3" onClick={() => setIsDark(!isDark)}>
          <i
            className={` ${isDark ? "fa-regular fa-sun" : "fa-regular fa-moon"} cursor-pointer text-2xl`}
          ></i>
          <p className="cursor-pointer">
            {isDark ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </div>
    </header>
  );
}
