import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  return (
    <div className="navbar">
      <Link to="/" className={location === "/" ? "border" : "no-border"}>
        All
      </Link>
      <Link
        to="/active"
        className={location === "/active" ? "border" : "no-border"}
      >
        Active
      </Link>
      <Link
        to="/completed"
        className={location === "/completed" ? "border" : "no-border"}
      >
        Completed
      </Link>
    </div>
  );
};

export default Navbar;
