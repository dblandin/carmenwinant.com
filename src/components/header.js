import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"

export const Header = () => (
  <Headroom>
    <div className="header">
      <Link to="/">carmen winant</Link>
      <nav>
        <Link activeClassName="active" to="/text">
          text
        </Link>
        &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
        <Link activeClassName="active" to="/info">
          info
        </Link>
      </nav>
    </div>
  </Headroom>
)
