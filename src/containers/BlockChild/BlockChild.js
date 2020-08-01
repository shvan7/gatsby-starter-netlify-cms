import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionTitle from '../../components/SectionTitle'
import SectionText from '../../components/SectionText'
import SectionIcon from '../../components/SectionIcon'
import SectionCarousel from '../../components/SectionCarousel'
import SectionContact from '../../components/SectionContact'
import SectionMe from '../../components/SectionMe'

const Block = styled.div`
  background-color: red;
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex: 1;
    height: 100vh;
    flex-flow: column;
    background-color: silver;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const selectSection = content => {
  switch (content.type) {
    case 'sectionTitle':
      return <SectionTitle content={content} />
    case 'sectionText':
      return <SectionText content={content} />
    case 'sectionIcon':
      return <SectionIcon content={content} />
    case 'sectionCarousel':
      return <SectionCarousel content={content} />
    case 'sectionContact':
      return <SectionContact content={content} />
    case 'sectionMe':
      return <SectionMe content={content} />
    default:
      return <p>None</p>
  }
}

const renderContent = content =>
  content.multi ? (
    content.multi.map((e, i) => <div key={i + 'part-section'}>{selectSection(e)}</div>)
  ) : (
    <div>{selectSection(content)}</div>
  )

const BlockChild = ({ content }) => <Block>{renderContent(content)}</Block>

export default BlockChild

BlockChild.defaultProps = {}

BlockChild.propTypes = {
  content: PropTypes.shape({}),
}
