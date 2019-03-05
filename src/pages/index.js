import React from "react";

import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";


export default ({ data }) => (
  <>
    <Layout>
      <h2>Home</h2>
      {data.allMarkdownRemark.edges.map((edge, index) => (
        <Link key={index} activeClassName="active" to={edge.node.fields.slug}>
          <Img fixed={edge.node.frontmatter.cover.childImageSharp.fixed} />
          {edge.node.frontmatter.title}
        </Link>
      ))}
    </Layout>
  </>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
