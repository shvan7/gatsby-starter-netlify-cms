import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../containers/Layout/Layout'

const NavbarPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return <Layout data={data.link} />
  } else {
    return <div>Loading...</div>
  }
}

NavbarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default NavbarPreview
