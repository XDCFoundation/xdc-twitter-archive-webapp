import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import React, { useState } from "react";
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
  font-family: "Raleway", sans-serif !important;

  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #09184b;
`;
const Input = styled.input`
  border-radius: 4px;
  margin-left: 23%;
  margin-top: 3%;

  background: url(/images/search.svg) no-repeat left center;
  border: solid 1px #aab1ff;
  padding-left: 50px;
  justify-content: center;
  flex-flow: row wrap;
  width: 50%;
`;
const Searchicon = styled.img`
  position: absolute;
  top: 46%;
  left: 27%;
  //  @media (max-width: 767px) {
  //   position: absolute;
  //   top: 203px;

  //   margin-left: 186px;
  // }

  // @media (max-width: 980px) {
  //   margin-left: 24%;
  // }
`;

const Button = styled.button`
  background-color: #3366ff;
  border-radius: 4px;
  height: 41px;
  justify-content: center;
  margin-top: 3%;
  color: #ffffff;
  border: none;
  width: 92px;

  font-size: 15px;
  flex-flow: row wrap;

  margin-left: 10px;
  @media (max-width: 767px) {
    margin-right: 100px;

    justify-content: center;
  }
`;
const Card = styled.img`
  border: none;
  padding: 90px;
  width: 100%;
`;
const Span = styled.span`
  font-size: 14px;
  margin-right: 144px;

  // @media (max-width: 767px) {
  //   margin-left: 58%;
  // }
  @media (max-width: 980px) {
    font-size: 14px;
    margin-right: 2px;
  }
`;
const Cardcontainer = styled.div``;
const Heading = styled.span`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
 line-height: 1.17;
 text-align: left;
  color: #09184b;
 justify-content:center
  margin-bottom: 14px;
  
  margin-top: -50px;
  margin-left: 90px;
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
  justify-content: center;
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
  // flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
`;

export default function TweetLink() {
  return (
    <>
      <Container>
        <Column>
          <Enterlink>Enter Tweet Link</Enterlink>

          <Row>
            <Input type="text" />

            <Button
              onClick={() => {
                this.setState({ visible: false });
              }}
            >
              Archive
            </Button>
          </Row>

          <Row>
            <Tweetdiv>
              <Span>20,000 tweets have been archived</Span>
            </Tweetdiv>
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
          <Footer>
            <Row>
              <Column>
                <Row>
                  <Poweredheading>Powered By &nbsp; </Poweredheading>
                  <Xinfin>Xinfin</Xinfin>
                </Row>

                <Year> &copy; 2021</Year>
              </Column>
            </Row>
          </Footer>
        </Column>
      </Container>
    </>
  );
}
const Footer = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 20%;
`;
const Poweredheading = styled.span`
  font-size: 13px;
  color: #09184b;
`;
const Xinfin = styled.span`
  color: #4d84fb;
  font-size: 13px;
`;
const Year = styled.span`
  color: #09184b;
  font-size: 13px;
  justify-content: center;
  display: flex;
`;
const Tweetdiv = styled.div`
  right: 162px;
  position: absolute;

  @media (max-width: 767px) {
    right: 104px;
    position: absolute;
  }
`;

// Mobile screen sizes 767 pixels and below i.e. max-width: 767px
// 	Tablet screen sizes between 980 pixels and 768 pixels i.e. min-width:768px and max-width: 980px
// 	Desktop screen sizes of 981 pixels and above i.e. min-width: 981px
