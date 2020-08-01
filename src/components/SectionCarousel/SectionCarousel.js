import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { formateText } from '../../utils/lib'
import FakeImg from '../../ressources/img/fake.png'

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  background-color: ${props => props.style.bgColor};
  color: ${props => props.style.textColor1};

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

  & .react-multi-carousel-list {
    width: 85vw;
    height: 50%;
    text-align: center;
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

const SectionCarousel = ({ content }) => {
  return (
    <Block style={content.style}>
      <div>
        <div></div>
        <h1>{content.title && formateText(content.title)}</h1>
      </div>
      <Carousel
        swipeable={true}
        // draggable={false}
        showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={3000}
        // containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={content.deviceType}
        // dotListClass="custom-dot-list-style"
      >
        <div>
          <img alt="fake_img" src={FakeImg} />
        </div>
        <div>
          <img alt="fake_img" src={FakeImg} />
        </div>
        <div>
          <img alt="fake_img" src={FakeImg} />
        </div>
        <div>
          <img alt="fake_img" src={FakeImg} />
        </div>
        <div>
          <img alt="fake_img" src={FakeImg} />
        </div>
      </Carousel>
    </Block>
  )
}

export default SectionCarousel

SectionCarousel.propTypes = {}
