import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;
const Container = styled.div`
  justify-content: center;
  display: flex;
  width: 550px;
  height: 500px;
  background-color: #6e6e95;
  padding: 0x 11px 33px 11px;
  border-color: grey;
`;
const Headdiv = styled.div`
  justify-content: center;
  display: flex;
  background-color: #6e6e95;
  padding-left: 45px;
  height: 20px;
  color: white;
`;
const Head = styled.text`
  justify-content: center;

  display: flex;
  font-weight: 800;
  color: white;
`;
const Data = styled.text`
  justify-content: center;
  display: flex;
  margin: 78px 0px 0px 15px;
  color: white;
`;
// Xinfin twitter
export default function MainComponent() {
  return (
    <MainContainer>
      <Container>
        <Column>
          <Row>
            <Headdiv>
              <Head>TWEET</Head>
            </Headdiv>
          </Row>
          <Row>
            <Data>
              "I wish i could see my collaborator's as they are designing.
              <br />
              Well now you can. Live Cursors are available in XD 40- with the
              option to hide them, of Course
            </Data>
          </Row>
        </Column>
      </Container>
    </MainContainer>
  );
}
