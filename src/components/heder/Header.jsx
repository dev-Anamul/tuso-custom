import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-y shadow">
      <div className="container flex justify-between text-3xl font-bold uppercase px-5 py-3 ">
        <div>tuso</div>
        <div className="text-base font-semibold capitalize">
          <ul className="flex space-x-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/advance">Advance Search</Link>
            </li>
            <li>
              <Link to="/incident">Incident Form</Link>
            </li>
            <li>
              <Link to="/ticket">Single View</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
