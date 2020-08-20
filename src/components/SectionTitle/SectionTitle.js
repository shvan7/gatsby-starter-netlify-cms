import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { formateText } from '../../utils/lib'

const Block = styled.div`
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.colorText1};

  & div {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & h1 {
    overflow: visible;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    background-color: ${props => props.style.bgTitle};
    font-family: Dancing Script Bold;
    margin: 0.4em;
    padding-bottom: 0.2em;
  }

  @media (min-width: 1024px) {
    & h1 {
      max-width: 800px;
      font-size: 60px;
      line-height: 1em;
    }
  }

  @media (max-width: 1024px) {
    & h1 {
      line-height: 1em;
    }
  }

  & h3 {
    font-family: Lato Regular;
    font-weight: 400;
    margin: 0;
  }

  & span {
    color: ${props => props.style.colorText2};
  }

  & img {
    padding: 0 0.2em;
  }

  & svg {
    padding: 0 0.2em;
    & path:first-child {
      fill: ${props => props.style.colorText1};
    }
    & path:last-child {
      fill: ${props => props.style.colorText1};
    }
  }
`

const defaultStyle = {
  bgTitle: '#fff',
  bgColor: '#F7F7F7',
  colorText1: '#121212',
  colorText2: '#DECCCC',
}

const SectionTitle = ({ content }) => {
  return (
    <Block style={content.style ? content.style : defaultStyle}>
      <div>
        <h1>{content.title && formateText(content.title)}</h1>
        <h3>{content.subTitle && formateText(content.subTitle)}</h3>
      </div>
    </Block>
  )
}

export default SectionTitle

SectionTitle.propTypes = {}
