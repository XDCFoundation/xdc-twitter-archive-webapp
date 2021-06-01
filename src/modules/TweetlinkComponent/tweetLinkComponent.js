import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Header from "../Header";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;
const Enterlink = styled.span`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;
const Input = styled.input`
  border-radius: 4px;
  margin-left: 23%;
  margin-top: 3%;
  width: 100%;
  border: solid 1px #aab1ff;

  padding-left: 30px;
  justify-content: center;
  flex-flow: row wrap;
`;
const Searchicon = styled.img`
  position: absolute;
  top: 214px;
  margin-left: 298px;
  @media (max-width: 1000px) {
    margin-right: 100px;
    margin-left: 100px;

    margin-top: -20px;
    justify-content: center;
    font-size: 15px;
  }
`;
const Button = styled.button`
  background-color: #3366ff;
  border-radius: 4px;
  height: 41px;
  justify-content: center;
  margin-top: 3%;
  color: #ffffff;
  border: none;
  width: 20%;
  font-size: 15px;
  flex-flow: row wrap;

  margin-left: 10px;
  @media (max-width: 1000px) {
    margin-right: 100px;

    justify-content: center;
  }
`;
const Card = styled.img`
  border: none;
  padding: 90px;
  width: 100%;

  // @media (max-width: 1000px) {
  //   margin-left: -180px;
  //   font-size: 24px;
  // }
`;
const Span = styled.span`
  margin-left: 82%;
  justify-content: center;
  font-size: 14px;
  margin-top: 15px;
  @media (max-width: 1000px) {
    margin-right: 50px;

    margin-left: 100px;
    justify-content: center;
    font-size: 15px;
  }
`;
const Cardcontainer = styled.div``;
const Heading = styled.span`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #09184b;
  aligned-items: center;
  justify-content:center
  margin-bottom: 14px;
  margin-left: 115px;
`;
const SubHeading = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: #09184b;
  align-items: center;
`;
const Container_one = styled.div``;
const Container_two = styled.div`
  margin-top: 20px;
`;
const Container_three = styled.div`
  margin-top: 20px;
`;
const Rowcontainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;
export default function TweetLink() {
  return (
    <>
      <Container>
        <Column>
          <Enterlink>Enter Tweet Link</Enterlink>

          <Row>
            <Searchicon src="/images/search.svg" />
            <Input type="text" />

            <Button>Archive</Button>
          </Row>
          <Row>
            <Span>20,000 tweets have been archived</Span>
          </Row>
          <Cardcontainer>
            <Row>
              <Rowcontainer>
                <Container_one>
                  <Column>
                    <Card src="images/fakenews.svg" />
                    <Heading>Stop Fake News</Heading>
                    <SubHeading>
                      Help in making the world better-informed by stopping fake
                      news
                    </SubHeading>
                  </Column>
                </Container_one>
                <Container_two>
                  <Column>
                    <Card src="/images/archivetweet.svg" />
                    <Heading>Archive your Tweets</Heading>
                    <SubHeading>
                      Archive your tweets in our platform so that it stays
                      forever
                    </SubHeading>
                  </Column>
                </Container_two>
                <Container_three>
                  <Column>
                    <Card src="images/legalactions.svg" />

                    <Heading>Save links for legal actions</Heading>
                    <SubHeading>
                      Use your saved links for the future legal actions
                    </SubHeading>
                  </Column>
                </Container_three>
              </Rowcontainer>
            </Row>
          </Cardcontainer>
        </Column>
      </Container>
    </>
  );
}
