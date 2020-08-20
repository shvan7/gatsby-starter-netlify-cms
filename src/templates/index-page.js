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

    return { result, position: section.position, name: section.name }
  })
}

export const IndexPageTemplate = ({ data }) => {
  if (!data) return <></>

  const sections = formatData(data)
  const sectionsSorted = sections.map(section => section.result.sort((a, b) => a.index - b.index))

  return sectionsSorted.map((e, i) => (
    <BlockChild
      key={'sections' + i}
      content={e}
      position={sections[i].position}
      id={sections[i].name}
    />
  ))
}

const IndexPage = ({ data }) => {
  if (!data)
    return (
      <Layout>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2>No data ...</h2>
        </div>
      </Layout>
    )

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
  query IndexPageTemplate($templateKey: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: null } }
        fileAbsolutePath: { regex: $templateKey }
      }
      sort: { fields: frontmatter___name }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            position
            sectionTitle
            sectionText
            sectionIcon
            sectionList
            sectionCarousel
            sectionContact
            sectionSocial
          }
        }
      }
    }
  }
`
