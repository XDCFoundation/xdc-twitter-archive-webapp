import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin:0 25%;
  border:1px solid gray
`;
const TweetDiv = styled.div`
  border-bottom:1px solid gray;
  height:40px;
  color:black;
  font-size:15px;
`;
export default function TweetDetail(props){
    console.log("props",props.response)
return(
    <Container>
        <TweetDiv>
            Tweet
        </TweetDiv>
         <div>{props?.response?.[0]?.body}</div>
           <h2>{props?.response?.[0]?.date}</h2>
    </Container>
)}