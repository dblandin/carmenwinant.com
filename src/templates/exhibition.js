import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ data, pageContext }) => {
  const exhibition = data.markdownRemark
  const works = exhibition.frontmatter.works.filter(work => work.image) // a band-aid to only show images if the image field is present. For some reason forestry is returning null every once in a while

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

  const info = data.info.edges[0].node.frontmatter

  return (
    <Layout subtitle={exhibition.frontmatter.title}>
      <Helmet>
        <title>Carmen Winant - {exhibition.frontmatter.title}</title>
        <meta name="description" content={info.bio} />
      </Helmet>
      <div className="exhibition">
        {works.map((work, index) => (
          <NonStretchedImage
            className="exhibition-image"
            key={index}
            fluid={work.image.childImageSharp.fluid}
          />
        ))}
      </div>
      <div className="exhibition-nav">
        {pageContext.previous && (
          <Link to={pageContext.previous.slug}>prev</Link>
        )}
        {pageContext.next && (
          <Link style={{ float: "right" }} to={pageContext.next.slug}>
            next
          </Link>
        )}
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
          image {
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
                presentationWidth
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
