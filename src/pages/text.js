import React from "react";

import { graphql } from "gatsby";
import Layout from "../components/layout"

export default ({ data }) => {
  const TextLink = props => (
    <a href={props.url || "/"}>
      <span>
        {props.title}, <em>{props.source}</em>
      </span>
      <span>({props.type})</span>
    </a>
  );

  return (
    <>
      <Layout>
      2016
      <ul>
        {data.allMarkdownRemark.edges.map((edge, index) => (
          <TextLink url={edge.node.frontmatter.file.publicURL} title={edge.node.frontmatter.title} source="Aperture Magazine" type="pdf" />
        ))}
        <li>
          <TextLink title="Our Bodies" source="Aperture Magazine" type="pdf" />
        </li>
        <li>
          <TextLink
            title="The Sun Places in the Abyss"
            source="Artforum.com"
            type="pdf"
          />
        </li>
        <li>
          <TextLink title="The Art of Birth" source="CARLA" type="pdf" />
        </li>
        <li>
          <TextLink title="Mother Mother" source="Mother Mother" type="url" />
        </li>
        <li>
          <TextLink
            title="Yto Barrada: Dinosaur Road"
            source="Aperture Magazine"
            type="url"
          />
        </li>
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