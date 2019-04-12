import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"

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

export default ({ data }) => {
  const TextLink = props => (
    <a href={props.url || "/"}>
      <li>
        <p>{props.title}{props.source && <i>, {props.source}</i>}</p>
        <p>({props.type})</p>
      </li>
    </a>
  )

  return (
    <Layout>
      <Helmet>
        <title>Carmen Winant - Text</title>
      </Helmet>
      <div className="page-text">
        {Object.entries(groupedText(data)).reverse().map((group, index) => {
          return (
            <div key={index}>
            <h2 style={{textAlign: "center"}}>{group[0]}</h2>
            <ul>
            {group[1].map((node, index) => {
              return <TextLink
                url={node.frontmatter.url || node.frontmatter.file.publicURL}
                title={node.frontmatter.title}
                source={node.frontmatter.source}
                type={node.frontmatter.url ? "url" : "pdf"}
                key={index}
              /> 
            })}
            </ul>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/text/" } }) {
      edges {
        node {
          frontmatter {
            title
            source
            file {
              publicURL
            }
            url
            date
          }
        }
      }
    }
  }
`
