import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { formateText } from '../../utils/lib'
import FormGenerator from '../../utils/FormGenerator'

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.textColor1};

  & > div:first-child {
    position: relative;
    display: flex;
    align-items: center;

    & > div {
      position: absolute;
      z-index: 0;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 90%;
      height: 1em;
      background-color: ${props => props.style.bgTitle};
    }
  }

  & h1 {
    overflow: visible;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
    font-family: Dancing Script Bold;
    margin: 0;
    padding-bottom: 0.3em;
  }
`

const SectionContact = ({ content }) => {
  return (
    <Block style={content.style}>
      <div>
        <div></div>
        <h1>{content.title && formateText(content.title)}</h1>
      </div>
      {FormGenerator(content)}
    </Block>
  )
}

export default SectionContact

SectionContact.propTypes = {}
