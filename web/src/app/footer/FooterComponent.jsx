import React from "react";
import { Link } from "react-router-dom";

import { PlusIcon } from "../common/icons";

export default function FooterComponent() {
  return (
    <section className="fixed bottom-5 right-5">
      <Link to="/create">
        <p className="flex items-center justify-center p-4 text-white bg-blue-600 rounded-full hover:shadow-lg">
          <PlusIcon className="w-6 h-6" />
        </p>
      </Link>
    </section>
  );
}
