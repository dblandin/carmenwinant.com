import React from "react"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div className="home">
      {data.allMarkdownRemark.edges.map((edge, index) => (
        <Link key={index} activeClassName="active" to={edge.node.fields.slug}>
          <Img fluid={edge.node.frontmatter.cover.childImageSharp.fluid} />
        </Link>
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
