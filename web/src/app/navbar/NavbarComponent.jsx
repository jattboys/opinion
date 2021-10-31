import React from "react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <nav className="p-5 shadow-md">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
