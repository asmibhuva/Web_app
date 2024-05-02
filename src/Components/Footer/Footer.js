import React from "react";
// import {
//   Box,
//   Container,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./FooterStyles";
import footer from "../../images/footer.jpg";
import logo from "../../images/logo.png";
import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;

  background-size: cover;
  position: relative;

  bottom: 0;
  width: 100%;
  padding-top: 80px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-column-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: red;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: black;
  margin-bottom: 40px;
  font-weight: bold;
`;


const Footer = () => {
  return (
    <Box style={{ backgroundImage: `url(${footer})` }}>
      {/* <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>
              <img src={logo} alt="appgambit"></img>
            </Heading>
            <FooterLink style={{ fontSize: "15px" }}>
              We provide all-around services to help you convert your idea into
              a successful product. Our business strategy is quite simple,
              whether you are boostraping or already a successful business.
            </FooterLink>
          </Column>
          <Column>
            <Heading>Appgambit</Heading>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Contact us</FooterLink>
          </Column>
          <Column>
            <Heading>Connect</Heading>
            <FooterLink>
              408,SNS Platina, Someshwara Enclave, Vesu, Surat, Gujarat 395007
            </FooterLink>
            <FooterLink>hello@appgambit.com</FooterLink>
            <FooterLink>(+91) 99252 00545</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
