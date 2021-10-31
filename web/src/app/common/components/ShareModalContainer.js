import React from "react";

import ShareModalComponent from "./ShareModalComponent";

export default function ShareModalContainer({ showModal, setShowModal }) {
  function copyUrl() {
    navigator.clipboard.writeText(window.location.href);
  }

  return (
    <ShareModalComponent
      showModal={showModal}
      setShowModal={setShowModal}
      copyUrl={copyUrl}
    />
  );
}
