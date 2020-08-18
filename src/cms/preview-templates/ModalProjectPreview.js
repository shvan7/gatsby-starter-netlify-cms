import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../../components/Modal/Modal'

const ModalProjectPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log('ok')
  if (data) {
    return <Modal content={data.elements} />
  } else {
    return <div>Loading...</div>
  }
}

ModalProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ModalProjectPreview
