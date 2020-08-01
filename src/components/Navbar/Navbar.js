import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Block = styled.div`
  z-index: 9999;
  background-color: rgba(247, 247, 247, 0.5);
  position: fixed;
  display: flex;
  top: 0;
  justify-content: space-between;
  width: 100%;

  & > div {
    flex-direction: row;
    text-align: center;
    line-height: 3em;
    font-size: 16px;
    margin: 0 2em;
  }

  & a {
    color: #121212;
    text-decoration: none;
    padding: 1.4em;
  }

  & a:hover {
    font-weight: 700;
  }
`

const renderLinks = links =>
  links.map(e => (
    <a key={e.target + e.label} href={e.target}>
      {e.label}
    </a>
  ))

const Navbar = ({ links }) => {
  return (
    <Block>
      <div>LOGO</div>
      <div>{renderLinks(links)}</div>
    </Block>
  )
}

export default Navbar

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
}
