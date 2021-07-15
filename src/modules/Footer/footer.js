import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";

const Footer = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 15%;
  background-color: #ffffff;
`;
const Poweredheading = styled.span`
  font-size: 13px;
  color: #09184b;
  margin-bottom: 7%;
`;
const Xinfin = styled.span`
  color: #4d84fb;
  font-size: 13px;
`;
const Year = styled.span`
  color: #09184b;
  font-size: 13px;
  justify-content: center;
  display: flex;
  margin-bottom: 106%;
`;
const Tweetdiv = styled.div`
  right: 162px;
  position: absolute;

  @media (max-width: 767px) {
    right: 104px;
    position: absolute;
  }
`;

export default function FooterComponent() {
  return (
    <Footer>
      <Row>
        <Column>
          <Row>
            <Poweredheading>Powered By &nbsp; </Poweredheading>
            <Xinfin>Xinfin</Xinfin>
          </Row>

          <Year> &copy; 2021</Year>
        </Column>
      </Row>
    </Footer>
  );
}
