import {
  doc,
  increment,
  onSnapshot,
  updateDoc,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { db } from "../../config/firebase";

import HomeComponent from "./HomeComponent";

export default function HomeContainer() {
  let { id } = useParams();
  const [title, setTitle] = useState(null);
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (id) {
      return onSnapshot(doc(db, "polls", id), (doc) => {
        if (doc.exists()) {
          setTitle(doc.data().title);
          setUpVotes(doc.data().upVotes);
          setDownVotes(doc.data().downVotes);
        } else {
          history.push("/");
        }
      });
    }
  }, [id, history]);

  const doUpVote = async () => {
    const pollRef = doc(db, "polls", id);
    await updateDoc(pollRef, {
      upVotes: increment(1),
    });
  };

  const doDownVote = async () => {
    const pollRef = doc(db, "polls", id);
    await updateDoc(pollRef, {
      downVotes: increment(1),
    });
  };

  return id ? (
    <HomeComponent
      title={title}
      upVotes={upVotes}
      downVotes={downVotes}
      doDownVote={doDownVote}
      doUpVote={doUpVote}
    />
  ) : (
    <p>Click on the plus icon below to create opinions!</p>
  );
}
