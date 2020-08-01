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

  & div {
    text-align: center;
  }

  & h1 {
    overflow: visible;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    background-color: ${props => props.style.bgTitle};
    font-family: Dancing Script Bold;
    margin: 0.4em;
    line-height: 0.4em;
    padding-bottom: 0.2em;
    font-size: ${props => (props.style.fontSize ? props.style.fontSize : 'auto')};
  }

  & h3 {
    font-family: Lato Regular;
    font-weight: 400;
    margin: 0;
  }

  & span {
    color: ${props => props.style.textColor2};
  }

  & img {
    padding: 0 0.2em;
  }

  & svg {
    padding: 0 0.2em;
    & path:first-child {
      /* fill: ${props => props.style.textColor1}; */
      fill: blue;
    }
    & path:last-child {
      /* fill: ${props => props.style.textColor1}; */
      fill: red;
    }
  }
`

const SectionTitle = ({ content }) => {
  return (
    <Block style={content.style}>
      <div>
        <h1>{content.title && formateText(content.title)}</h1>
        <h3>{content.subTitle && formateText(content.subTitle)}</h3>
      </div>
    </Block>
  )
}

export default SectionTitle

SectionTitle.propTypes = {}
