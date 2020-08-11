import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import { Fonts } from '../../ressources/fonts/fonts'

const SectionIndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <>
        <Fonts />
        <IndexPageTemplate data={[data]} />
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

SectionIndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SectionIndexPagePreview
