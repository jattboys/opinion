import React from "react";

import { DownVotesIcon, UpVoteIcon } from "./HomeComponent.assets";
import { ShareIcon } from "../common/icons";
import ShareModalContainer from "../common/components/ShareModalContainer";

export default function HomeComponent({
  title,
  upVotes,
  downVotes,
  doUpVote,
  doDownVote,
  isShareModalVisible,
  setIsShareModalVisible,
}) {
  return (
    <div
      className="flex flex-row items-center justify-center w-auto mx-3 md:mx-12"
      style={{ height: "70vh" }}
    >
      <div
        className="flex flex-col p-4 border border-gray-800 rounded-md shadow-lg"
        style={{ maxWidth: "40rem", width: "100%" }}
      >
        <div className="flex items-start justify-between">
          <label
            className="flex-1 pb-4 text-2xl font-bold text-left"
            htmlFor="title"
          >
            {title}
          </label>
          <ShareIcon
            onClick={() => {
              setIsShareModalVisible(true);
            }}
            className="w-6 h-6 cursor-pointer hover:text-blue-600"
          />
        </div>

        <div className="flex w-full gap-2">
          <button
            type="button"
            onClick={() => {
              doUpVote();
            }}
            className="flex items-center justify-center flex-1 gap-3 p-2 mt-10 text-white bg-gray-700 rounded-sm hover:bg-green-600 hover:shadow-md"
          >
            <UpVoteIcon /> <span>{upVotes}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              doDownVote();
            }}
            className="flex items-center justify-center flex-1 gap-3 p-2 mt-10 text-white bg-gray-700 rounded-sm hover:bg-red-600 hover:shadow-md"
          >
            <DownVotesIcon /> <span>{downVotes}</span>
          </button>
        </div>
      </div>
      <ShareModalContainer
        showModal={isShareModalVisible}
        setShowModal={setIsShareModalVisible}
      />
    </div>
  );
}
