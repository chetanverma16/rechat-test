import Link from "next/link";
import React from "react";
import { TODOType } from "../../@types";

type todoProps = {
  title: String;
  description: String;
  badge: TODOType;
};

const Todo = ({ title, description, badge }: todoProps) => {
  return (
    <div className="bg-white m-2 p-4 h-48 rounded-xl border-2 flex flex-col justify-between text-black">
      <h1 className="">{title}</h1>
      <p className="text-sm mt-2 opacity-60 max-h-16 overflow-hidden">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className="px-6 py-2 mt-5 bg-blue-900 text-white rounded-xl">
          {badge}
        </div>
        <Link href={"/edit"}>
          <a className="transition-all duration-200 ease-out hover:scale-105 active:scale-100">
            <img className="h-8 mt-5" src="/edit.svg"></img>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Todo;
