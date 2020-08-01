import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { formateText } from '../../utils/lib'

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  width: 100%;
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.textColor1};

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > div > div:first-of-type {
    min-height: 0.15em;
    min-width: 20%;
    background-color: ${props => props.style.textColor2};
  }

  & > div > div:last-child {
    display: flex;
    flex: 1;
    text-align: center;
    margin-top: 3em;
  }

  & h2 {
    overflow: visible;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: ${props => props.style.bgTitle};
    font-family: Lato Bold;
    margin: 0.4em;
    line-height: 0.4em;
    padding-bottom: 0.4em;
  }

  & h4 {
    font-family: Lato Light;
    font-weight: 400;
    margin: 0.7em 2em;
  }

  & span {
    color: ${props => props.style.textColor2};
  }
`

// const UnderLine = styled.div`
//   min-height: 0.2em;
//   width: 20%;
//   color: ${props => props.style.textColor2};
// `

// const BlockImg = array => {}

const renderTitles = titles => titles.map(title => <h4>{title}</h4>)

const renderSubContent = subContent => subContent.map(e => <div>{renderTitles(e.titles)}</div>)

const SectionIcon = ({ content }) => {
  return (
    <Block style={content.style}>
      <div>
        <h2>{content.title && formateText(content.title)}</h2>
        <div></div>
        <div>{content.subContent && renderSubContent(content.subContent)}</div>
      </div>
    </Block>
  )
}

export default SectionIcon

SectionIcon.propTypes = {}
