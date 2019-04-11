// gatsby-node.js
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/exhibitions/" },
          frontmatter: { featured: { eq: true } },
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
      const previousEdge = result.data.allMarkdownRemark.edges[index - 1]
      const nextEdge = result.data.allMarkdownRemark.edges[index + 1]

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/exhibition.js`),
        context: {
          previous: previousEdge && {
            title: previousEdge.node.frontmatter.title,
            slug: previousEdge.node.fields.slug,
          },
          slug: node.fields.slug,
          next: nextEdge && {
            title: nextEdge.node.frontmatter.title,
            slug: nextEdge.node.fields.slug,
          },
        },
      })
    })
  })
}
