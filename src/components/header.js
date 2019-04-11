import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"

export const Header = () => (
  <Headroom>
    <div className="header">
        <Link className="home" style={{ display: "inline-block", textAlign: "center", width: "300px"}} to="/">carmen winant</Link>
      <nav>
        <Link style={{ display: "inline-block", textAlign: "center", width: "80px"}} activeClassName="active" to="/text">
          text
        </Link>
        <span>&mdash;</span>
        <Link style={{ display: "inline-block", textAlign: "center", width: "80px"}} activeClassName="active" to="/info">
          info
        </Link>
      </nav>
    </div>
  </Headroom>
)
