import React from "react"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div className="home">
      {data.allMarkdownRemark.edges.map((edge, index) => (
        <div className="home-exhibition-wrapper">
        <Link key={index} activeClassName="active" to={edge.node.fields.slug}>
          <Img fluid={edge.node.frontmatter.cover.childImageSharp.fluid} />
          <p style={{ margin: 0, width: "100%", height: "20px", textAlign: "center"}}>{edge.node.frontmatter.title}</p>
        </Link>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/exhibitions/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 650) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
