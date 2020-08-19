import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Block = styled.div`
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.colorText1};

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .content-column {
    flex-direction: column;
    margin: 1em;
  }

  @media (min-width: 900px) {
    & .content {
      flex-direction: row;
    }
  }
  @media (max-width: 900px) {
    & .content {
      flex-direction: column;
    }
  }

  & p {
    font-size: 20px;
    margin: 0.5rem;
  }

  & h2 {
    font-family: Lato Bold;
    margin: 2em 0.4em 0.1em 0.4em;
    padding-bottom: 0.4em;
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

const renderText = arrayText => {
  return arrayText.map((e, i) => {
    const spaceRemoved = e.charAt(0) === ' ' ? e.substr(1) : e
    return <p key={i + 'content-text-list'}>{spaceRemoved}</p>
  })
}

const renderColumn = arrayColumn =>
  arrayColumn.map((e, i) => {
    const strSplit = e.split(',')
    return (
      <div className="content-column" key={i + '-content-column'}>
        {renderText(strSplit)}
      </div>
    )
  })

const SectionList = ({ content }) => {
  return (
    <Block style={content.style ? content.style : defaultStyle}>
      <h2>{content.title && content.title}</h2>
      <UnderLine style={content.style ? content.style : defaultStyle} />
      <div className="content">
        {content.columnText && content.columnText.length && renderColumn(content.columnText)}
      </div>
    </Block>
  )
}

export default SectionList

SectionList.propTypes = {}
