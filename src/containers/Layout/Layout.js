import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { Fonts } from '../../ressources/fonts/fonts'
import Navbar from '../../components/Navbar'
import Modal from '../../components/Modal'

export const ModalContext = React.createContext(null)

const Layout = ({ data, children }) => {
  const [processModal, setProcessmodal] = useState({ active: false, categorie: '' })

  const displayModal = categorie => setProcessmodal({ active: true, categorie: categorie })
  const closeModal = () => setProcessmodal({ active: false, categorie: '' })

  return (
    <>
      <Fonts />
      <Navbar links={data} />
      <div>
        <ModalContext.Provider value={displayModal}>
          {processModal.active && (
            <Modal categorieName={processModal.categorie} closeModal={closeModal} />
          )}
          {children}
        </ModalContext.Provider>
      </div>
    </>
  )
}

Layout.propTypes = {
  data: PropTypes.array,
}

export default ({ data, children }) => {
  if (!data)
    return (
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
    )
  else return <Layout data={data} children={children} />
}
