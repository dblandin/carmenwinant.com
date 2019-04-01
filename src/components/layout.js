import React from "react"

import { Header } from "../components/header"

export default ({ children }) => (
  <>
  <Header />
  <div className="layout-wrapper">
    <div className="content">{children}</div>
  </div>
  </>
)
