import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Viewers = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <Container>
      <Wrap>
        <div>
          <img
            src="/images/photos/viewers-disney.png"
            alt="viewers-disney"
          ></img>
        </div>
        <video autoPlay={"autoplay"} preLoad="auto" loop ref={vidRef} muted>
          <source
            src="/images/videos/1564674844-disney.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>
      <Wrap>
        <div>
          <img src="/images/photos/viewers-pixar.png" alt="viewers-pixar"></img>
        </div>
        <video autoPlay={"autoplay"} preLoad="auto" loop ref={vidRef} muted>
          <source
            src="/images/videos/1564676714-pixar.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>
      <Wrap>
        <div>
          <img
            src="/images/photos/viewers-marvel.png"
            alt="viewers-marvel"
          ></img>
        </div>
        <video autoPlay={"autoplay"} preLoad="auto" loop ref={vidRef} muted>
          <source
            src="/images/videos/1564676115-marvel.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>

      <Wrap>
        <div>
          <img
            src="/images/photos/viewers-starwars.png"
            alt="viewers-starwars"
          ></img>
        </div>
        <video autoPlay={"autoplay"} preLoad="auto" loop ref={vidRef} muted>
          <source
            src="/images/videos/1608229455-star-wars.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>
      <Wrap>
        <div>
          <img
            src="/images/photos/viewers-national.png"
            alt="viewers-national"
          ></img>
        </div>
        <video autoPlay={"autoplay"} preLoad="auto" loop ref={vidRef} muted>
          <source
            src="/images/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin: 50px;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  @media (max-width: 786px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Wrap = styled.div`
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition-duration: 300ms;
  position: relative;
  z-index: 2;
  & div {
    width: 100%;
    height: 100%;
    & img {
      width: 100%;
      height: 100%;
      background-color: transparent;
    }
  }
  & video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -5;
    display: none;
  }
  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 26px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 30px -20px;
   /
    transform: scale(1.05);
    & div {
      background-color: transparent;
    }
    & video {
      display: block;
    }
  }
`;
