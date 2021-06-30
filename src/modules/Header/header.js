import styled, { css } from "styled-components";
import { Row, Column } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 74px;
  background-color: #191d43;
`;
const Image = styled.img`
  padding: 10px;
  margin-left: 25px;
`;
const Span = styled.span`
  color: #ffffff;
  font-size: 21px;
  margin-top: 25px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
`;
const Input = styled.input`
  background-color: #3d4270;
  border-radius: 4px;
  height: 41px;

  width: 40%;
  margin: 16px;
  color: #ffffff;
  border: none;
`;
const Button = styled.button`
  color: #ffffff;
  height: 41px;
  padding: 10px;
  margin: 15px;
  border: none;
  border-radius: 4px;
  background-color: #5760bc;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.28;
  width: 100px;
`;
export default function HeaderComponent() {
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <Row>
        <Image src="/images/tweetarchive.svg" />
        {/* <Image src="/images/newtweetimage.svg" /> */}
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
