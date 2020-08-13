import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { formateText } from '../../utils/lib'

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

  /* & .content {
    flex-direction: row;
  } */

  & .content-icon {
    flex-direction: column;
    margin: 20%;
  }

  & .content-icon-image {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    & .content {
      flex-direction: row;
    }
  }

  @media (max-width: 1024px) {
    & .content {
      flex-direction: column;
    }
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
`

const UnderLine = styled.p`
  min-height: 0.2em;
  border-radius: 2px;
  margin: 0 2em 2em;
  width: 20%;
  background-color: ${props => props.style.colorText2};
`

const defaultStyle = {
  bgColor: '#F7F7F7',
  colorText1: '#121212',
  colorText2: '#DECCCC',
}

const renderImage = img => {
  return img.map((e, i) => <img key={i + 'image-t'} alt="truc" src={e} />)
}

const renderSubContent = subContent =>
  subContent.map((e, i) => (
    <div className="content-icon" key={i + '-content-icon'}>
      <h4>{e.text}</h4>
      <div className="content-icon-image">{renderImage(e.images)}</div>
    </div>
  ))

const SectionIcon = ({ content }) => {
  return (
    <Block style={content.style ? content.style : defaultStyle}>
      <h2>{content.title && formateText(content.title)}</h2>
      <UnderLine style={content.style ? content.style : defaultStyle} />
      <div className="content">
        {content.content && content.content.length && renderSubContent(content.content)}
      </div>
    </Block>
  )
}

export default SectionIcon

SectionIcon.propTypes = {}
