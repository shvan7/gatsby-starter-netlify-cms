import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { formateText } from '../../utils/lib'

const Block = styled.div`
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.colorText1};

  & img {
    max-height: 60px;
    margin: 1em 0.5em;
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
      {content.title && <h2>{formateText(content.title)}</h2>}
      <UnderLine style={content.style ? content.style : defaultStyle} />
      <div className="content">
        {content.content && content.content.length && renderSubContent(content.content)}
      </div>
    </Block>
  )
}

export default SectionIcon

SectionIcon.propTypes = {}
