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
      <div className="exhibition">
      <h1>{exhibition.frontmatter.title}</h1>
      {exhibition.frontmatter.works.map((work, index) => (
        <NonStretchedImage className="exhibition-image"  key={index} fluid={work.image.childImageSharp.fluid} />
      ))}
      </div>
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
                fluid(maxWidth: 400) {
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
