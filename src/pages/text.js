import React from "react";

import { graphql } from "gatsby";
import Layout from "../components/layout"

export default ({ data }) => {
  const TextLink = props => (
    <a href={props.url || "/"}>
      <span>
        {props.title}
      </span>
      <span style={{float: "right"}}>({props.type})</span>
    </a>
  );

  return (
    <>
      <Layout>
      <ul>
        {data.allMarkdownRemark.edges.map((edge, index) => (
          <li>
            <TextLink url={edge.node.frontmatter.file.publicURL} title={edge.node.frontmatter.title} type="pdf" />
          </li>
        ))}
      </ul>
      </Layout>
    </>
  );
};


export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: {regex: "/text/" }}) {
      edges {
        node {
          frontmatter {
            title
            file {
              publicURL
            }
          }
        }
      }
    }
  }
`;