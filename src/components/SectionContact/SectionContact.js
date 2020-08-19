import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { formateText } from '../../utils/lib'
import FormGenerator from '../../utils/FormGenerator'

const Block = styled.div`
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.textColor1};

  & > div:first-child {
    position: relative;
    display: flex;
    justify-content: center;
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

const defaultStyle = {
  bgColor: '#F7F7F7',
  colorText1: '#121212',
  colorText2: '#DECCCC',
  bgTitle: '#DECCCC',
}

const SectionContact = ({ content }) => {
  const style = content.style ? content.style : defaultStyle
  return (
    <Block style={style}>
      <div>
        <div></div>
        {content.title && <h1>{formateText(content.title)}</h1>}
      </div>
      <FormGenerator content={{ ...content, style }} />
    </Block>
  )
}

export default SectionContact

SectionContact.propTypes = {}
