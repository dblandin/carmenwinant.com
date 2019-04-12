import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"

export const Header = ({ subtitle }) => (
  <Headroom>
    <div className="header">
      <div className="box">
        <Link className="home" style={{ display: "inline-block", textAlign: "center", width: "300px"}} to="/">carmen winant</Link>
      </div>
      <div className="box">
        <nav>
          <Link className="text" style={{ display: "inline-block", textAlign: "center", width: "80px"}} activeClassName="active" to="/text">
            text
          </Link>
          <span>&mdash;</span>
          <Link className="info" style={{ display: "inline-block", textAlign: "center", width: "80px"}} activeClassName="active" to="/info">
            info
          </Link>
        </nav>
      </div>
    </div>
    <div></div>
    {subtitle && (
      <div className="header-subtitle">
        <h1>{subtitle}</h1>
      </div>
    )}
  </Headroom>
)
