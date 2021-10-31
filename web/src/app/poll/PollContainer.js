import { addDoc, collection } from "@firebase/firestore";
import React from "react";
import { useHistory } from "react-router";
import { db } from "../../config/firebase";

import PollComponent from "./PollComponent";

export default function PollContainer() {
  const history = useHistory();
  const createNewPoll = async (title) => {
    const newPollRef = await addDoc(collection(db, "polls"), {
      title: title,
      upVotes: 0,
      downVotes: 0,
    });
    console.log("Document written with ID: ", newPollRef.id);
    history.push(`/${newPollRef.id}`);
  };
  return <PollComponent handleSubmit={createNewPoll} />;
}
