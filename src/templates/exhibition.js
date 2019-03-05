import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby' 
import Img from "gatsby-image"



export default ({ data }) => {
  const exhibition = data.markdownRemark

  const NonStretchedImage = props => {
    let normalizedProps = props
    if (props.fluid && props.fluid.presentationWidth) {
      normalizedProps = {
        ...props,
        style: {
          ...(props.style || {}),
          maxWidth: props.fluid.presentationWidth,
          margin: "0 auto", // Used to center the image
        },
      }
    }
  
    return <Img {...normalizedProps} />
  }

  return (
    <Layout>
      <div>{exhibition.frontmatter.title}</div>
      {exhibition.frontmatter.works.map((work, index) => (
        <NonStretchedImage fluid={work.image.childImageSharp.fluid} />
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
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
          }
        }
      }
    }
  }
`;
