import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { formateText } from '../../utils/lib'

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 1;
  width: 100%;
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.textColor1};

  & > p {
    font-family: Lato light;
    margin: 0;
  }

  & > p:last-child {
    font-size: 18px;
  }
`

const SectionMe = ({ content }) => {
  return (
    <Block style={content.style}>
      <p>{content.mail && formateText(content.mail)}</p>
      <p>{content.number && formateText(content.number)}</p>
      <p>{content.other && formateText(content.other)}</p>
    </Block>
  )
}

export default SectionMe

SectionMe.defaultProps = {}

SectionMe.propTypes = {}
