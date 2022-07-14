import React, { useEffect, useState } from "react";
import { TODOType } from "../../@types";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [badge, setBadge] = useState("Todo");

  const getEditValues = (id: string) => {
    fetch("/api/todos/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: parseInt(id) }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setBadge(data.badge);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const edit = () => {
    if (id) {
      fetch("/api/todos/todo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: parseInt(id as string),
          title: title,
          description: description,
          badge: badge,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          router.push("/");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      getEditValues(id);
    }
  }, []);

  const generateOptions = (badge: String) => {
    switch (badge) {
      case "Todo":
        return (
          <>
            <option value={TODOType["INPROGRESS"]}>InProgress</option>
            <option value={TODOType["TODO"]}>Todo</option>
          </>
        );
      case "Blocked":
        return (
          <>
            <option value={TODOType["TODO"]}>Todo</option>
            <option value={TODOType["BLOCKED"]}>Blocked</option>
          </>
        );
      case "InProgress":
        return (
          <>
            <option value={TODOType["BLOCKED"]}>Blocked</option>
            <option value={TODOType["INQA"]}>InQA</option>
            <option value={TODOType["INPROGRESS"]}>InProgress</option>
          </>
        );
      case "InQA":
        return (
          <>
            <option value={TODOType["TODO"]}>Todo</option>
            <option value={TODOType["DONE"]}>Done</option>
            <option value={TODOType["INQA"]}>InQA</option>
          </>
        );
      case "Done":
        return (
          <>
            <option value={TODOType["DEPLOYED"]}>Deployed</option>
            <option value={TODOType["DONE"]}>Done</option>
          </>
        );
      case "Deployed":
        return (
          <>
            <option value={TODOType["DEPLOYED"]}>Deployed</option>
          </>
        );
    }
  };
  useEffect(() => {}, []);
  return (
    <Layout>
      <Header location={"Edit"}></Header>
      <div className="w-5/6 h-full mt-10 flex flex-col items-start justify-between">
        <div>
          <h2 className="text-2xl">Edit Task</h2>
          <input
            type="text"
            className="w-full mt-5 p-4 border-b border-b-slate-600 bg-slate-200"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}></input>
          <textarea
            className="w-full h-96 mt-5 p-4 border-b border-b-slate-600 bg-slate-200"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
          <select
            onChange={(e) => setBadge(e.target.value)}
            value={badge}
            className="w-full h-16 p-4 border-b-2 border-b-slate-600 bg-slate-200 mt-5">
            {generateOptions(badge)}
          </select>
        </div>
        <div className="w-full flex items-center my-10">
          <button
            onClick={edit}
            className="w-full h-12 m-2 rounded-md shadow-md bg-blue-700 text-white font-bold mt-5 transition-all duration-300 ease-out hover:bg-blue-800">
            Done
          </button>
          <Link href="/">
            <a className="w-full h-12 m-2 text-center flex items-center justify-center rounded-md shadow-md bg-blue-100 text-black mt-5 transition-all duration-300 ease-out hover:bg-blue-200">
              Cancel
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
