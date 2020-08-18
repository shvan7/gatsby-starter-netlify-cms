const _ = require('lodash')
const path = require('path')
const remark = require('remark')
const remarkHTML = require('remark-html')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      sectionTitle : JSON
      sectionText : JSON
      sectionIcon: JSON
      sectionList: JSON
      sectionCarousel: JSON
      elements: JSON
      sectionContact: JSON
      sectionSocial: JSON
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, filter: { frontmatter: { templateKey: { ne: null } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      let customPath = edge.node.fields.slug
      if (customPath === '/index-page/') customPath = '/'
      if (edge.node.frontmatter.templateKey !== 'components') {
        const id = edge.node.id
        createPage({
          path: customPath,
          component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
