import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { Fonts } from '../../ressources/fonts/fonts'
import Navbar from '../../components/Navbar/Navbar'

const Layout = ({ data, children }) => {
  return (
    <>
      <Navbar links={data} />
      <div>{children}</div>
    </>
  )
}

Layout.propTypes = {
  data: PropTypes.array,
}

export default ({ data, children }) => {
  if (!data)
    return (
      <>
        <Fonts />
        <StaticQuery
          query={graphql`
            query LayoutQuery {
              markdownRemark(frontmatter: { type: { eq: "nav-link" } }) {
                id
                frontmatter {
                  link {
                    label
                    target
                  }
                }
              }
            }
          `}
          render={data => {
            const { markdownRemark: post } = data
            const { frontmatter: array } = post
            return <Layout data={array.link} children={children} />
          }}
        />
      </>
    )
  else
    return (
      <>
        <Fonts />
        <Layout data={data} children={children} />
      </>
    )
}
