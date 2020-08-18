import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

const Block = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & h3 {
    margin: 0;
    text-align: center;
  }

  & > div {
    width: 90%;
    height: 90%;
    background-color: white;

    & .content-head {
      position: relative;
    }

    & .content-diapo-project {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      margin: 1.5em 0;
    }

    & .card-diapo {
      position: relative;
      margin: 0 0.5em;
      display: flex;
      justify-content: center;
      align-items: end;

      & p {
        margin: 0;
      }

      & > div {
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 7px;
        padding: 1px 5px;
        color: white;
        margin: 0;
        bottom: 1em;
        position: absolute;
      }
    }
  }

  & img {
    width: 250px;
    height: 200px;
    margin: 10px;
  }

  & .svg-close {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 0.3em;
  }
`

const Cross = ({ onClick }) => (
  <div className="svg-close" onClick={onClick}>
    <svg height="20" width="20" viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg">
      <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
    </svg>
  </div>
)

const renderDiapo = diapos => {
  if (!diapos) return <div>No data</div>
  return diapos.map((e, i) => {
    return (
      <div key={i + 'diapo-carousel'} className="card-diapo">
        <img alt="fake_img" src={e.image} />
        <div>
          <p>{e.name}</p>
        </div>
      </div>
    )
  })
}

export const Modal = ({ content, closeModal, categorieName }) => {
  return (
    <Block>
      <div>
        <div className="content-head">
          <Cross onClick={closeModal} />
          <h3>{categorieName}</h3>
        </div>
        <div className="content-diapo-project">{renderDiapo(content)}</div>
      </div>
    </Block>
  )
}

export default ({ categorieName, closeModal }) => {
  return (
    <StaticQuery
      query={graphql`
        query ModalQuery {
          allMarkdownRemark(filter: { frontmatter: { type: { eq: "modalProject" } } }) {
            edges {
              node {
                id
                frontmatter {
                  categorie
                  elements
                }
              }
            }
          }
        }
      `}
      render={data => {
        const dataFile = data.allMarkdownRemark.edges.find(
          e => e.node.frontmatter.categorie === categorieName,
        )

        if (!dataFile) return <Modal closeModal={closeModal} />
        const { frontmatter: content } = dataFile.node
        return content ? (
          <Modal content={content.elements} closeModal={closeModal} categorieName={categorieName} />
        ) : (
          <></>
        )
      }}
    />
  )
}
