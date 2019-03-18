import React from "react"

import { Header } from "../components/header"

export default ({ children }) => (
  <div
    style={{ margin: `0 auto 3rem auto`, maxWidth: 1024, padding: `0 1rem` }}
  >
    <Header />
    <div className="content">{children}</div>
  </div>
)
