import React from "react";
import QRCode from "react-qr-code";

import { SolidPlusIcon } from "../icons";

export default function ShareModalComponent({ showModal, setShowModal }) {
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

            <div className="flex justify-center">
              <QRCode value={window.location.href} />
            </div>
          </div>
        </div>
      </section>
    )
  );
}
