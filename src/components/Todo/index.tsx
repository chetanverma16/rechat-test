import React from "react";
import { TODOType } from "../../@types";

type todoProps = {
  title: String;
  description: String;
  badge: TODOType;
};

const Todo = ({ title, description, badge }: todoProps) => {
  return (
    <div className="bg-white m-2 p-4 h-48 rounded-xl border-2 flex flex-col text-black">
      <h1 className="">{title}</h1>
      <p className="text-sm mt-2 opacity-60 max-h-16 overflow-hidden">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <button className="px-6 py-2 mt-5 bg-blue-900 text-white rounded-xl">
          {badge}
        </button>
        <button className="hover:scale-105">
          <img className="h-8 mt-5" src="/edit.svg"></img>
        </button>
      </div>
    </div>
  );
};

export default Todo;
