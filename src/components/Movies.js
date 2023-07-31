import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Movies = ({ heading, items }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Section>
        {items.map((item) => (
          <Wrap>
            <NavLink to={`/detail/${item.id}`}>
              <img src={item.cardImg} alt={item.title}></img>
            </NavLink>
          </Wrap>
        ))}
      </Section>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  margin-top: 70px;
  margin: 50px;
`;

const Heading = styled.h4`
  font-weight: bold;
  text-align: left;
`;

const Section = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition-duration: 300ms;
  cursor: pointer;
  & img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 /80%) 0px 26px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 30px -20px;
  }
`;
