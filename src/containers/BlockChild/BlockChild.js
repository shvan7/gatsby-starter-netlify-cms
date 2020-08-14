import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionTitle from '../../components/SectionTitle'
import SectionText from '../../components/SectionText'
import SectionIcon from '../../components/SectionIcon'
import SectionList from '../../components/SectionList'
import SectionCarousel from '../../components/SectionCarousel'
import SectionContact from '../../components/SectionContact'
import SectionMe from '../../components/SectionMe'

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex: 1;
    flex-flow: column;
    background-color: silver;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
`

const BlockHorizontal = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex: 1;
    flex-flow: column;
    background-color: silver;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const selectSection = content => {
  return content.map((element, i) => {
    switch (element.type) {
      case 'sectionTitle':
        return <SectionTitle key={i + element.type} content={element} />
      case 'sectionText':
        return <SectionText key={i + element.type} content={element} />
      case 'sectionIcon':
        return <SectionIcon key={i + element.type} content={element} />
      case 'sectionList':
        return <SectionList key={i + element.type} content={element} />
      case 'sectionCarousel':
        return <SectionCarousel key={i + element.type} content={element} />
      case 'sectionContact':
        return <SectionContact key={i + element.type} content={element} />
      case 'sectionMe':
        return <SectionMe key={i + element.type} content={element} />
      default:
        return <p>None</p>
    }
  })
}

const BlockChild = ({ content, position, id }) => {
  console.log('POSITION ========> ', position)
  return position === 'column' ? (
    <BlockHorizontal id={id}>
      <div>{selectSection(content)}</div>
    </BlockHorizontal>
  ) : (
    <Block id={id}>
      <div>{selectSection(content)}</div>
    </Block>
  )
}

export default BlockChild

BlockChild.defaultProps = {}

BlockChild.propTypes = {
  content: PropTypes.array,
}
