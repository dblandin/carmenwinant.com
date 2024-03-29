import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const groupedText = data => {
  const groups = {}

  data.allMarkdownRemark.edges.forEach(edge => {
    const node = edge.node
    const date = new Date(node.frontmatter.date)
    groups[date.getFullYear()] || (groups[date.getFullYear()] = [])
    groups[date.getFullYear()].push(node)
  })

  return groups
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/exhibitions/" }
            frontmatter: { solo: { eq: true } }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                location
                date
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
                gallery {
                  display
                  url
                }
                contact {
                  display
                  url
                }
                cv {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const TextLink = props => (
        <a href={props.url || "/"}>
          <li>
            <p>
              {props.title}
              {props.source && <i>, {props.source}</i>}
            </p>
            <p>({props.type})</p>
          </li>
        </a>
      )

      const info = data.info.edges[0].node.frontmatter

      const Contact = props => {
        const { gallery, contact } = props.info

        const showContact = gallery.url || contact.url

        return (
          <>
            {showContact && (
              <>
                <h2>contact</h2>
                <ul className="contact">
                  {gallery.url && (
                    <li>
                      gallery&nbsp;&ndash;&nbsp;
                      <a href={info.gallery.url}>{info.gallery.display}</a>
                    </li>
                  )}
                  {contact.url && (
                    <li>
                      studio&nbsp;&ndash;&nbsp;
                      <a href={info.contact.url}>{info.contact.display}</a>
                    </li>
                  )}
                </ul>
              </>
            )}
          </>
        )
      }

      return (
        <Layout>
          <Helmet>
            <title>Carmen Winant - Info</title>
            <meta name="description" content={info.bio} />
          </Helmet>
          <div className="page-info flexbox-container">
            <div className="left">
              <h2>bio</h2>
              <p className="bio">{info.bio}</p>

              <ul className="download-cv">
                <TextLink
                  title="Download CV"
                  url={info.cv.publicURL}
                  type="pdf"
                />
              </ul>

              <Contact info={info} />

              <h2>website</h2>
              <ul className="website">
                <li>
                  design&nbsp;&ndash;&nbsp;
                  <a href="http://wax-studios.com">Wax Studios</a>
                </li>
                <li>
                  development&nbsp;&ndash;&nbsp;
                  <a href="https://twitter.com/dblandin">Devon Blandin</a>
                </li>
              </ul>
            </div>

            <div className="right solo-exhibitions">
              <h2>solo exhibitions</h2>

              {Object.entries(groupedText(data))
                .reverse()
                .map((group, index) => {
                  return (
                    <div key={index}>
                      <h3 style={{ textAlign: "center" }}>{group[0]}</h3>
                      <ul>
                        {group[1].map((node, index) => {
                          return (
                            <li key={index}>
                              <i>{node.frontmatter.title}</i>,{" "}
                              {node.frontmatter.location}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
            </div>
          </div>
        </Layout>
      )
    }}
  />
)
