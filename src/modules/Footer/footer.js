import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";

const Footer = styled.div`
  justify-content: center;
  display: flex;
  background-color: #ffffff;
`;
const Poweredheading = styled.span`
  font-size: 13px;
  color: #09184b;
  margin-bottom: 8%;
  // font-family: "Raleway", sans-serif !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #09184b;
`;
const Xinfin = styled.span`
  color: #4d84fb;
  font-size: 13px;
  margin-top: -3px;
`;
const Year = styled.span`
  color: #09184b;
  font-size: 13px;
  justify-content: center;
  display: flex;
  margin-bottom: 70%;
  // font-family: "Raleway", sans-serif !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: center;
  color: #09184b;
`;

export default function FooterComponent() {
  return (
    <Footer>
      <Row>
        <Column>
          <Row>
            <Poweredheading>Powered By &nbsp; </Poweredheading>
            <Xinfin>XDC Speed Test</Xinfin>
          </Row>

          <Year> &copy; 2022</Year>
        </Column>
      </Row>
    </Footer>
  );
}
