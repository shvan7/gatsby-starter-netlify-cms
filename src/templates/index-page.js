import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../containers/Layout'
import BlockChild from '../containers/BlockChild'

const formatData = data => {
  return data.map(section => {
    const arrayOfTemplateName = Object.keys(section)
    let result = []

    for (const key of arrayOfTemplateName)
      if (typeof section[key] === 'object') {
        const res = section[key] ? section[key].flatMap(e => ({ ...e, type: key })) : []
        result = [...result, ...res]
      }

    return result
  })
}

export const IndexPageTemplate = ({ data }) => {
  if (!data) return <></>

  const sections = formatData(data)
  const sectionsSorted = sections.map(section => section.sort((a, b) => a.index - b.index))

  return sectionsSorted.map((e, i) => <BlockChild key={'sections' + i} content={e} />)
}

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const arrayContent = edges.map(e => e.node.frontmatter)
  const flatArray = arrayContent.flat()

  return (
    <Layout>
      <IndexPageTemplate data={flatArray} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: null } } }
      sort: { fields: frontmatter___name }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            sectionTitle
            sectionText
            sectionIcon
          }
        }
      }
    }
  }
`
