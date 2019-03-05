import React from "react";
import { Link } from "gatsby";

export const Header = () => (
  <div className="header">
    <Link activeClassName="active" to="/">
      carmen winant
    </Link>
    <nav>
      <Link activeClassName="active" to="/text">
        text
      </Link>
      &nbsp;&ndash;&nbsp;
      <Link activeClassName="active" to="/info">
        info
      </Link>
    </nav>
  </div>
);
