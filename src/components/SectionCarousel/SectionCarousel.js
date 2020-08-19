import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import Carousel from 'react-multi-carousel'
import { ModalContext } from '../../containers/Layout/Layout'
import 'react-multi-carousel/lib/styles.css'

const Block = styled.div`
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.colorText1};

  & > div:first-child {
    position: relative;
    display: flex;
    align-items: center;

    & > div {
      position: absolute;
      z-index: 0;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 90%;
      height: 1em;
      background-color: ${props => props.style.bgTitle};
    }
  }

  & h1 {
    overflow: visible;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
    font-family: Dancing Script Bold;
    margin: 0;
    padding-bottom: 0.3em;
  }

  & .diapo-carousel {
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 95%;
      width: 85%;
      color: transparent;
      margin: 0;
      position: absolute;
      transition: all 5s ease 0;
    }

    & > div:hover {
      cursor: pointer;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 1s linear;
    }
  }

  & .react-multi-carousel-list {
    width: 85vw;
    height: 50%;
    text-align: center;
    margin-bottom: 50px;
  }

  & .react-multi-carousel-list img {
    width: 88%;
  }

  & .react-multi-carousel-dot button {
    border: 1px solid silver;
    height: 20px;
    width: 20px;
  }

  & .react-multiple-carousel__arrow {
    border: none;
    min-width: 0;
    background-color: transparent;
    padding: 0;
  }

  & .react-multiple-carousel__arrow::before {
    color: black;
    font-size: 2em;
    font-weight: bold;
  }

  & .react-multiple-carousel__arrow--left {
    left: 0;
  }

  & .react-multiple-carousel__arrow--right {
    right: 0;
  }
`

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 664 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 664, min: 0 },
    items: 1,
  },
}

const defaultStyle = {
  bgColor: '#F7F7F7',
  bgTitle: 'red',
  colorText1: '#121212',
}

const renderDiapo = (diapos, displayModal) => {
  return diapos.map((e, i) => {
    return (
      <div
        onClick={() => displayModal(e.text)}
        key={i + 'diapo-carousel'}
        className="diapo-carousel"
      >
        <div>
          <p>{e.text}</p>
        </div>
        <img alt="fake_img" src={e.image} />
      </div>
    )
  })
}

const SectionCarousel = ({ content }) => {
  const displayModal = React.useContext(ModalContext)

  return (
    <Block style={content.style ? content.style : defaultStyle}>
      <div>
        {content.title && <h1>{content.title}</h1>}
        <div></div>
      </div>
      <Carousel
        swipeable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {renderDiapo(content.categories, displayModal)}
      </Carousel>
    </Block>
  )
}

export default SectionCarousel

SectionCarousel.propTypes = {}
