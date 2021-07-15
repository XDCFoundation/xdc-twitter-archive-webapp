import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;
const Container = styled.div`
  justify-content: center;
  display: flex;
`;
const Data = styled.div`
  justify-content: center;
  display: flex;
  height: 179px;
`;
// Xinfin twitter
export default function MainComponent() {
  return (
    <MainContainer>
      <Container>Xinfintwitter</Container>
      <Data></Data>
    </MainContainer>
  );
}
