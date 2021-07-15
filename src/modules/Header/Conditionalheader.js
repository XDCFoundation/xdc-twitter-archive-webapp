import styled, { css } from "styled-components";
import { Row, Column } from "simple-flexbox";

import React, { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 66px;
  background-color: #191d43;
`;
const Image = styled.img`
  padding: 10px;
  margin-left: 45px;
  width: 57px;
  margin-top: 3px;
`;
const Span = styled.span`
  color: #ffffff;
  font-size: 19px;
  margin-top: 21px;
  font-weight: 600;
  font-family: "Raleway", sans-serif !important;
  margin-left: -11px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
`;

export default function Headerconditional() {
  return (
    <Container>
      <Row>
        <Image src="/images/tweetarchive.svg" />
        <Span>TweetArchive</Span>
      </Row>
    </Container>
  );
}
