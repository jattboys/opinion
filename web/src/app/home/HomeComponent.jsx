import React from "react";
import { DownVotesIcon, UpVoteIcon } from "./HomeComponent.assets";
export default function HomeComponent({ title, upVotes, downVotes, doUpVote, doDownVote }) {
  return (
    <div
      className="flex flex-row justify-center items-center w-auto mx-3 md:mx-12"
      style={{ height: "70vh" }}
    >
      <div
        className="border border-gray-800 rounded-md shadow-lg flex flex-col p-4"
        style={{ maxWidth: "40rem", width: "100%" }}
      >
        <label className="text-left font-bold text-2xl pb-4" htmlFor="title">
          {title}
        </label>
        <div className="flex w-full gap-2">
          <button
            type="button"
            onClick={() => {
              doUpVote();
            }}
            className="p-2 flex-1 flex items-center justify-center gap-3 mt-10 bg-gray-700 rounded-sm text-white hover:bg-green-600  hover:shadow-md"
          >
            <UpVoteIcon /> <span>{upVotes}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              doDownVote();
            }}
            className="p-2 flex-1 flex items-center justify-center gap-3 mt-10 bg-gray-700 rounded-sm text-white hover:bg-red-600  hover:shadow-md"
          >
            <DownVotesIcon /> <span>{downVotes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
