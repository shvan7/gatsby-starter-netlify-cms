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
import SectionSocial from '../../components/SectionSocial'

const Block = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 100%;
    min-height: 100vh;
    flex-direction: row;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
    }

    & > div {
      /* flex: 1; */
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      min-height: inherit;
      width: 100%;
      flex-direction: column;
    }
  }
`

const BlockColumn = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 100%;
    min-height: ${props => 100 / props.nbChild + 'vh'};
    flex-direction: column;

    & > div {
      /* flex: 1; */
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      min-height: inherit;
      width: 100%;
      flex-direction: column;
    }
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
      case 'sectionSocial':
        return <SectionSocial key={i + element.type} content={element} />
      default:
        return <p>None</p>
    }
  })
}

const BlockChild = ({ content, position, id }) => {
  return position === 'column' ? (
    <BlockColumn id={id} nbChild={content.length}>
      <div>{selectSection(content)}</div>
    </BlockColumn>
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
