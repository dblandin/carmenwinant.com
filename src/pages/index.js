import React from "react"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

export default ({ data }) => {
  const info = data.info.edges[0].node.frontmatter

  return (
    <Layout>
      <Helmet>
        <meta name="description" content={info.bio} />
      </Helmet>
      <div className="home">
        {data.allMarkdownRemark.edges.map((edge, index) => (
          <div className="home-exhibition-wrapper" key={index}>
            <Link
              key={index}
              activeClassName="active"
              to={edge.node.fields.slug}
            >
              <Img fluid={edge.node.frontmatter.cover.childImageSharp.fluid} />
              <div className="title-wrapper">
                <p>{edge.node.frontmatter.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/exhibitions/" }
        frontmatter: { featured: { eq: true } }
      }
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
                fluid(maxWidth: 640) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    info: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/info.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            bio
          }
        }
      }
    }
  }
`
