import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/photos/slider-badging.jpg" alt="slider-img"></img>
      </Wrap>
      <Wrap>
        <img src="/images/photos/slider-badag.jpg" alt="slider-img"></img>
      </Wrap>
      <Wrap>
        <img src="/images/photos/slider-scale.jpg" alt="slider-img"></img>
      </Wrap>
      <Wrap>
        <img src="/images/photos/slider-scales.jpg" alt="slider-img"></img>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  width: 95%;
  margin: 0px auto;
  margin-top: 80px;
  @media (max-width: 786px) {
    & {
      width: 90%;
    }
  }

  ul li button {
    &::before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
