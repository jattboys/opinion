import React from "react";

export default function PollComponent({ handleSubmit }) {
  return (
    <div className="flex flex-row justify-center items-center w-auto mx-3 md:mx-12" style={{height: "70vh"}}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.elements.title.value.length > 0) {
            handleSubmit(e.target.elements.title.value);
          } else {
            alert("Please enter what you want to ask!");
          }
        }}
        className="border border-gray-800 rounded-md shadow-lg flex flex-col p-4"
        style={{ maxWidth: "40rem", width: "100%" }}
      >
        <label className="text-left font-bold text-2xl pb-4" htmlFor="title">
          What do you feel confused about?
        </label>
        <textarea
          placeholder="Type something which needs other opinions here"
          type="text"
          name="title"
          id="title"
          className="rounded-sm"
          autoFocus
        ></textarea>
        <button
          type="submit"
          className="p-2 mt-10 bg-gray-700 rounded-sm text-white hover:bg-blue-600  hover:shadow-md"
        >
          Ask
        </button>
      </form>
    </div>
  );
}
