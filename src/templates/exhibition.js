import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby' 
import Img from "gatsby-image"



export default ({ data }) => {
  const exhibition = data.markdownRemark

  return (
    <Layout>
      <div>{exhibition.frontmatter.title}</div>
      {exhibition.frontmatter.works.map((work, index) => (
        <Img fixed={work.image.childImageSharp.fixed} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        works {
          title
          description
          image {
            childImageSharp {
                fixed(height: 500) {
                  ...GatsbyImageSharpFixed
                }
              }
          }
        }
      }
    }
  }
`;
