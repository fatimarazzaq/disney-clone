import React from "react";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <Container>
      <ContentBox>
        <CTABtnOne src="images/photos/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTABtnTwo src="images/photos/cta-logo-two.png"></CTABtnTwo>
      </ContentBox>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  position: relative;
  height: calc(110.5vh - 70px);
  display: flex;

  justify-content: center;
  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    content: "";
    background-image: url("images/photos/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.7;
  }
`;

const ContentBox = styled.div`
  z-index: 100;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;

const CTABtnOne = styled.img``;
const CTABtnTwo = styled.img`
  margin-top: 12px;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  text-align: center;
  padding: 15px 0px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.5px;
  transition: all 250ms;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  ling-height: 1.5px;
`;
