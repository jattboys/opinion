import React from "react";

import ShareModalComponent from "./ShareModalComponent";

export default function ShareModalContainer({ showModal, setShowModal }) {
  return (
    <ShareModalComponent showModal={showModal} setShowModal={setShowModal} />
  );
}
