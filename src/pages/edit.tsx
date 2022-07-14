import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Edit = () => {
  return (
    <Layout>
      <Header location={"Edit"}></Header>
      <div className="w-5/6 h-full mt-10 flex flex-col items-start justify-between">
        <div>
          <h2 className="text-2xl">Edit Task</h2>
          <input
            type="text"
            className="w-full mt-5 p-4 border-b border-b-slate-600 bg-slate-200"
            placeholder="Title"></input>
          <textarea
            className="w-full h-96 mt-5 p-4 border-b border-b-slate-600 bg-slate-200"
            placeholder="Description"></textarea>
          <select className="w-full h-16 p-4 border-b-2 border-b-slate-600 bg-slate-200 mt-5">
            <option className="h-16">InQA</option>
          </select>
        </div>
        <div className="w-full flex items-center my-10">
          <button className="w-full h-12 m-2 rounded-md shadow-md bg-blue-700 text-white font-bold mt-5 transition-all duration-300 ease-out hover:bg-blue-800">
            Done
          </button>
          <button className="w-full h-12 m-2 rounded-md shadow-md bg-blue-100 text-black mt-5 transition-all duration-300 ease-out hover:bg-blue-200">
            Cancel
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
