import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../containers/Layout'
import BlockChild from '../containers/BlockChild'

const renderBlockChild = sections => {
  sections.map((e, i) => <BlockChild key={e.type + i} content={e} />)
}

export const IndexPageTemplate = ({ content }) => {
  return content ? renderBlockChild(content) : <div></div>
}

IndexPageTemplate.propTypes = {
  style: PropTypes.object,
  sections: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate content={frontmatter.content} />
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
