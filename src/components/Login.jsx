import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg"></CTALogoOne>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);

  &:before {
    background-position: top;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: "";
    background-image: url("/images/login-background.jpg");
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: 600;
  padding: 17px 0;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.5px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  line-height: 1.5;
  letter-spacing: 1.5px;
  font-size: 11px;
  text-align: center;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
