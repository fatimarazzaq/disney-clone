import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const { id } = useParams();
  const result_dict = {};
  const movieSelector = useSelector((state) => state.movie.movies);
  for (let key in movieSelector) {
    for (var i = 0; i < movieSelector[key].length; i++) {
      if (movieSelector[key][i].id === id) {
        result_dict["result"] = movieSelector[key][i];
      }
    }
  }
  const item = result_dict.result;

  return (
    <Container bgImg={item.backgroundImg}>
      <ImgContainer>
        <Image src={item.titleImg}></Image>
      </ImgContainer>
      <TextAndButton>
        <Buttons>
          <PlayBtn>
            <span>
              <img
                src="/images/photos/play-icon-black.png"
                alt="play-black"
              ></img>
            </span>
            PLAY
          </PlayBtn>
          <Trailer>
            <span>
              <img
                src="/images/photos/play-icon-white.png"
                alt="play-white"
              ></img>
            </span>
            TRAILER
          </Trailer>
          <Plus>
            <span></span>
            <span></span>
          </Plus>
          <Group>
            <img src="/images/photos/group-icon.png" alt="group-icon"></img>
          </Group>
        </Buttons>
        <SmallText>{item.subTitle}</SmallText>
        <LargeText>{item.description}</LargeText>
      </TextAndButton>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  height: calc(100vh-70px);
  position: relative;
  top: 72px;
  padding: 0px calc(3.5vw + 5px);
  overflow-x: hidden;
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: ${(props) => `url(${props.bgImg})`};
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 0.8;
    z-index: -1;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px auto;
  width: 100%;
  min-height: 170px;
  padding-bottom: 24px;
  padding-top: 120px;
  @media (max-width: 786px) {
    padding-top: 90px;
    padding-bottom: 15px;
    min-height: 150px;
  }
`;

const Image = styled.img`
  min-height: 100px;
  max-height: 500px;
  width: 35vw;
`;

const TextAndButton = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const Buttons = styled.div`
  display: flex;
  min-height: 56px;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  @media (max-width: 786px) {
    min-height: 30px;
  }
`;

const PlayBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  height: 56px;
  padding: 0px 23px;
  margin-right: 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  opacity: 0.97;
  font-size: 15px;
  letter-spacing: 1px;
  min-height: 40px;
  @media (max-width: 786px) {
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
  }
`;
const Trailer = styled(PlayBtn)`
  background-color: rgb(0, 0, 0, 0.2);
  color: white;
  border: 1px solid;
`;
const Plus = styled.div`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: rgb(0, 0, 0, 0.6);
  color: white;
  border: 2px solid;
  & span:first-child {
    height: 2px;
    transform: translate(1px, 0px) rotate(0deg);
    width: 16px;
    background-color: white;
  }
  & span:nth-child(2) {
    height: 16px;
    transform: translate(-8px, 0px) rotate(0deg);
    width: 2px;
    background-color: white;
  }
`;
const Group = styled(Plus)`
  background-color: rgb(0, 0, 0, 1);
`;

const SmallText = styled.div`
  text-align: left;
  color: white;
  font-size: 14px;
  min-height: 20px;
`;
const LargeText = styled.div`
  text-align: left;
  padding: 14px 0px;
  line-height: 1.4;
  width: 70%;
  color: white;
  font-size: 20px;
  min-height: 20px;
  @media (max-width: 786px) {
    font-size: 14px;
  }
`;
