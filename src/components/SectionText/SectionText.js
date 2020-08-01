import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { formateText } from '../../utils/lib'

const Block = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  flex: 1;
  width: 100%;
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.textColor1};

  & p {
    display: inline;
    line-height: 1.5em;
    background-color: ${props => props.style.bgText};
  }

  & > div {
    text-align: center;
    padding: 15%;
  }

  & h1 {
    overflow: visible;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: ${props => props.style.bgTitle};
    font-family: Dancing Script Bold;
    margin: 0.4em;
    line-height: 0.4em;
    padding-bottom: 0.2em;
  }

  & span {
    color: ${props => props.style.textColor2};
  }

  & .signature-div {
    margin-top: 1em;

    & span {
       {
        float: right;
        font-size: 20px;
        font-family: Lato Light;
        color: ${props => props.style.textColor1};
      }
    }
  }
`

const renderText = arrayText => arrayText.map(text => <p>{formateText(text)}</p>)

const SectionText = ({ content }) => {
  return (
    <Block style={content.style}>
      <div>
        <h1>{content.title && formateText(content.title)}</h1>
        {content.text && renderText(content.text)}
        <div className="signature-div">{content.signature && <span>{content.signature}</span>}</div>
      </div>
    </Block>
  )
}

export default SectionText

SectionText.defaultProps = {}

SectionText.propTypes = {}
