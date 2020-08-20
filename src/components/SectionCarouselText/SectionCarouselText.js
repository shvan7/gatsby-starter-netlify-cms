import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { formateText, convertMarkdownToHtml } from '../../utils/lib'

const Block = styled.div`
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.colorText1};

  & p {
    display: inline;
    line-height: 1.5em;
    background-color: ${props => props.style.bgText};
  }

  & img {
    margin: 2em 0;
  }

  & > div {
    padding: 15%;
  }

  & .title-text-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  & h1 {
    overflow: visible;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 50%;
    background-color: ${props => props.style.bgTitle};
    font-family: Dancing Script Bold;
    margin: 0.4em;
    line-height: 0.4em;
    padding-bottom: 0.2em;
  }

  & span {
    color: ${props => props.style.colorText2};
  }

  & .signature-div {
    margin-top: 1em;

    & span {
       {
        float: right;
        font-size: 20px;
        font-family: Lato Light;
        color: ${props => props.style.colorText1};
      }
    }
  }
`

const defaultStyle = {
  bgColor: '#F7F7F7',
  bgText: 'black',
  bgTitle: 'red',
  colorText1: '#121212',
  colorText2: '#DECCCC',
}

const SectionCarouselText = ({ content }) => {
  const fromatedHtml = convertMarkdownToHtml(content.htmlMarkdown)
  const html = fromatedHtml.props.children

  return (
    <Block style={content.style ? content.style : defaultStyle}>
      <div>
        <div className="title-text-section">
          {content.title && <h1>{formateText(content.title)}</h1>}
          {content.image && <img alt="title-section-text" src={content.image} />}
        </div>

        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="signature-div">{content.signature && <span>{content.signature}</span>}</div>
      </div>
    </Block>
  )
}

export default SectionCarouselText

SectionCarouselText.defaultProps = {}

SectionCarouselText.propTypes = {}
