import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

const groupedText = (data) => {
  const groups = {}

  data.allMarkdownRemark.edges.forEach((edge) => {
    const node = edge.node;
    const date = new Date(node.frontmatter.date)
    groups[date.getFullYear()] || (groups[date.getFullYear()] = [])
    groups[date.getFullYear()].push(node)
    
  });

  return groups;
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/exhibitions/" },
            frontmatter: { solo: { eq: true } },
          }
        ) {
          edges {
            node {
              frontmatter {
                title
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
    render={data => 
  <Layout>
    <div className="flexbox-container">
      <div className="left">
        <h2>bio</h2>
        <p>{data.pagesYaml.bio}</p>

        <h2>contact</h2>
        <ul>
          <li>
            gallery&nbsp;&ndash;&nbsp;<a href={data.pagesYaml.gallery.url}>{data.pagesYaml.gallery.display}</a>
          </li>
          <li>
            studio&nbsp;&ndash;&nbsp;<a href={data.pagesYaml.contact.url}>{data.pagesYaml.contact.display}</a>
          </li>
        </ul>

        <h2>website</h2>
        <ul>
          <li>
            design&nbsp;&ndash;&nbsp;<a href="http://wax-studios.com">Wax Studios</a>
          </li>
          <li>
            development&nbsp;&ndash;&nbsp;<a href="https://devon.fyi">Devon Blandin</a>
          </li>
        </ul>
      </div>

      <div className="right">

        <h2>solo exhibitions</h2>

        {Object.entries(groupedText(data)).reverse().map((group) => {
          return (
            <>
            <h3 style={{textAlign: "center"}}>{group[0]}</h3>
            <ul>
            {group[1].map((node) => {
              return <li>{node.frontmatter.title}</li>
            })}
            </ul>
            </>
          )
        })}
      </div>
    </div>
  </Layout>
    }
  />
)