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
        pagesYaml(name: { eq: "Info" }) {
          bio
          gallery {
            display
            url
          }
          contact {
            display
            url
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet>
          <title>Carmen Winant - Info</title>
        </Helmet>
        <div className="info-page flexbox-container">
          <div className="left">
            <h2>bio</h2>
            <p className="bio">{data.pagesYaml.bio}</p>

            <h2>contact</h2>
            <ul className="contact">
              <li>
                gallery&nbsp;&ndash;&nbsp;
                <a href={data.pagesYaml.gallery.url}>
                  {data.pagesYaml.gallery.display}
                </a>
              </li>
              <li>
                studio&nbsp;&ndash;&nbsp;
                <a href={data.pagesYaml.contact.url}>
                  {data.pagesYaml.contact.display}
                </a>
              </li>
            </ul>

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
    )}
  />
)
