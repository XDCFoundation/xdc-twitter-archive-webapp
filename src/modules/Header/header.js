import styled, { css } from "styled-components";
import { Row, Column } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
const Input = styled.input`
  background-color: #3d4270;
  border-radius: 4px;
  font-family: WorkSans-Roman !important;
  color: #ffffff;
  border: none;
  height: 32px;
  width: 40%;
  margin-left: 33px;
  margin-top: 18px;
`;
const Button = styled.button`
  color: #ffffff;
  height: 32px;
  width: 114px;
  padding: 10px;
  margin-top: 18px;
  margin-left: 30px;
  border: none;
  border-radius: 4px;
  background-color: #5760bc;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.28;
  font-family: "IBM Plex Sans", sans-serif !important;
`;
export default function HeaderComponent() {
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <Row>
        <Image src="/images/tweetarchive.svg" />
        <Span>TweetArchive</Span>

        <Input
          type="text"
          readOnly={true}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <CopyToClipboard text={inputValue}>
          <Button>Copy</Button>
        </CopyToClipboard>
      </Row>
    </Container>
  );
}
