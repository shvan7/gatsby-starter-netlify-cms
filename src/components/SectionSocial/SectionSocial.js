import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { getBaseName } from '../../utils/lib'

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  width: 100%;
  min-height: 50vh;
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

  & .content-icon-image * {
    fill: #fff !important;
  }
`

const defaultStyle = {
  bgColor: '#F7F7F7',
  colorText1: '#121212',
  colorText2: '#DECCCC',
}

const renderSubContent = subContent =>
  subContent.map((e, i) => (
    <div className="content-icon" key={i + '-content-icon'}>
      <div className="content-icon-image">
        <a key={i + 'image-social'} href={e.link} target="_blank">
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
            <rect width="100%" height="100%" fill="green" />
            <image
              style={{ backgroundColor: 'red', color: 'white' }}
              fill="white"
              xlinkHref={e.svg}
              src={getBaseName(e.svg, '.svg') + '.png'}
              width="100"
              height="100"
            />
          </svg>
        </a>
      </div>
    </div>
  ))

const SectionSocial = ({ content }) => {
  return (
    <Block style={content.style ? content.style : defaultStyle}>
      <div className="content">
        {content.socials && content.socials.length && renderSubContent(content.socials)}
      </div>
    </Block>
  )
}

export default SectionSocial

SectionSocial.propTypes = {}
