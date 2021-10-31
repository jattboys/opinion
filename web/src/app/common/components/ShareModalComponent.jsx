import React from "react";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";

import { SolidPlusIcon, LinkIcon } from "../icons";

export default function ShareModalComponent({
  copyUrl,
  showModal,
  setShowModal,
}) {
  return (
    showModal && (
      <section className="fixed inset-0 w-full h-full bg-gray-400 bg-opacity-30">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col p-12 space-y-10 bg-white rounded-lg opacity-100 w-96">
            {/* Header */}
            <div className="flex justify-between">
              <span className="text-xl font-medium">Share this poll</span>
              <SolidPlusIcon
                className="w-6 h-6 transform rotate-45 cursor-pointer"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </div>

            {/* QR Code */}
            <div className="flex justify-center">
              <QRCode value={window.location.href} />
            </div>

            {/* Share link */}
            <button
              onClick={() => {
                copyUrl();
                toast("🦄 Wow link copied!", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
              className="flex justify-between w-full p-3 text-center bg-gray-300 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Copy to clipboard
              <LinkIcon className="w-6 h-6 cursor-pointer" />
            </button>
          </div>
        </div>
      </section>
    )
  );
}
