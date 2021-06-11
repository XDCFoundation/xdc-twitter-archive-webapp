import React from "react";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  //   flex-flow: row wrap;
`;
const EnterURL = styled.span`
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: normal;
`;
const Urldiv = styled.div`
  padding: 30px;
`;
const Image = styled.img``;
const InputBox = styled.div`
  border: solid 1px #aab1ff;
  border-radius: 4px;
`;
const Input = styled.input``;

export default function Demo() {
  return (
    <Container>
      <Column>
        <Urldiv>
          <EnterURL>Enter Tweet Link</EnterURL>
        </Urldiv>
        <Row>
          <Image src="/images/search.svg" />
          <InputBox type="text" />
        </Row>
      </Column>
    </Container>
  );
}
