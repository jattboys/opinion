import React from "react";
import { Link } from "react-router-dom";

import { ScaleIcon } from "../common/icons";

export default function NavbarComponent() {
  return (
    <nav className="p-5 shadow-md">
      <ul>
        <li>
          <Link to="/" className="flex hover:text-blue-600">
            <ScaleIcon className="w-6 h-6" />
            &nbsp;
            <span className="font-medium">Opinion</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
