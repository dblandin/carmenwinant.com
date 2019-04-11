import React from "react"

import { Header } from "../components/header"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Carmen Winant</title>
    <link rel="canonical" href="https://carmenwinant.com" />
  </Helmet>
  <Header />
  <div className="layout-wrapper">
    <div className="content">{children}</div>
  </div>
  </>
)
