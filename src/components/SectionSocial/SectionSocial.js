import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { getBaseName } from '../../utils/lib'

const Block = styled.div`
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.colorText1};

  & img {
    max-height: 60px;
    margin: 0 0.5em;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .content-icon {
    flex-direction: column;
  }

  & .content-icon-image {
    display: inline-flex;
    width: 250px;
  }

  & .content {
    flex-flow: row wrap;
    width: 100%;
  }

  & h2 {
    font-family: Lato Bold;
    margin: 2em 0.4em 0.1em 0.4em;
    padding-bottom: 0.4em;
  }

  & h4 {
    font-family: Lato Light;
    font-weight: 400;
    margin: 0.7em 2em;
  }

  & span {
    color: ${props => props.style.colorText2};
  }

  & svg {
    height: 100px;
  }

  & .content-icon-image svg * {
    fill: ${props => props.style.imgColor};
  }

  & .content-icon-image a:hover * {
    fill: ${props => props.style.imgHoverColor};
  }
`

const defaultStyle = {
  bgColor: '#F7F7F7',
  imgColor: '#fff',
  imgHoverColor: '#DECCCC',
}

const asyncRender = (e, i) => {
  return fetch(e.svg)
    .then(e => e.text())
    .then(svg => {
      const regex = /<svg?.+<\/svg>/gms
      const svgOk = svg.match(regex)[0]

      return (
        <div className="content-icon" key={i + '-content-icon'}>
          <div className="content-icon-image">
            <div>
              <a
                key={i + 'image-social'}
                href={e.link}
                target="_blank"
                dangerouslySetInnerHTML={{ __html: svgOk }}
              />
            </div>
          </div>
        </div>
      )
    })
}

const renderSubContent = async subContent => Promise.all(subContent.map(asyncRender))

const SectionSocial = ({ content }) => {
  const [dataSvg, setDataSvg] = useState([])

  useEffect(() => {
    renderSubContent(content.socials).then(setDataSvg)
  }, [content])

  return (
    <Block style={content.style ? content.style : defaultStyle}>
      <div className="content">{dataSvg}</div>
    </Block>
  )
}

export default SectionSocial

SectionSocial.propTypes = {}
