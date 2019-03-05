import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby' 



export default ({ data }) => {
  const exhibition = data.markdownRemark

  return (
    <Layout>
      <div>{exhibition.frontmatter.title}</div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
