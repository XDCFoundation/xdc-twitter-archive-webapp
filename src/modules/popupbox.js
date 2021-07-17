import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
const PopUpcontainer = styled.div``;

const Span = styled.span`
  background-color: #10ca93;
  font-size: 13px;
  font-weight: 500;
  font-family: "Raleway", sans-serif !important;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;
const Image = styled.img`
  width: 25px;
  margin-right: 9px;
`;

const Div = styled.div`
  width: 250px;
  height: 60px;
  border-radius: 4px;
  background-color: #10ca93;
  padding: 16px;
`;
export default function Popup() {
  return (
    <PopUpcontainer>
      <Row>
        <Div>
          <Image src="/images/tickicon.svg" />
          <Span>Your tweet has been archived</Span>
        </Div>
      </Row>
    </PopUpcontainer>
  );
}
