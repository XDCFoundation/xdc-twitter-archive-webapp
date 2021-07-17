import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Popup from "../popupbox";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const Container = styled.div`
  justify-content: center;
  display: flex;
  width: 514px;
  height: 578px;
  background-color: #ffffff;
  border: solid 1px #aab1ff;
  border-radius: 5px;
`;

const Heading = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 15px;
  border: solid 0.5px #e8e8e8;
  padding-top: 2%;
  padding-left: 7%;
  width: 514px;
`;
const Tweetdata = styled.span`
  justify-content: center;
  display: flex;
  font-family: "Raleway", sans-serif !important;
  padding: 7%;
  height: 400px;
`;
const Name = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 15px;
  margin-top: 4%;
  margin-left: 1%;
`;
const Email = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 10px;
  margin-top: -4%;
  margin-left: 13%;
`;
const Time = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const QuoteTweet = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const QuoteTweetcount = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Likes = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Date = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Twitterwebapp = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Retweets = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Retweetscount = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Likescount = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 13px;
`;
const Like = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 10px;
`;
const Details = styled.div`
  border: solid 0.5px #e8e8e8;
  width: 514px;
`;

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: "4%",
    marginLeft: "4%",
  },
  maingrid: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "12%",
  },
  popupgrid: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px",
  },
}));
export default function MainComponent() {
  const classes = useStyles();

  return (
    <>
      <Grid xs={12}>
        <Row>
          <Grid xs={8} className={classes.maingrid}>
            <Container>
              <Column>
                <Row>
                  <Heading> ARCHIVE TWEET</Heading>
                  <br />
                  <br />
                </Row>

                <Row>
                  <Avatar className={classes.avatar}>H</Avatar>
                  <Name>Howards Pinsky</Name>
                </Row>

                <Email>@Pinsky</Email>

                <br />
                <Row>
                  <Tweetdata>
                    "I wish i could see my collaborator's as they are designing"
                    <br />
                    <br />
                    Well now you can. Live Cursors are available in XD 40- with
                    the option to hide them, of Course
                    <br />
                    <br />
                  </Tweetdata>
                </Row>
                <Row>
                  <Details>
                    <Time> &nbsp;&nbsp;&nbsp;&nbsp;12:28 AM&emsp;.</Time>
                    <Date>&nbsp;May 12,2021&emsp;.</Date>
                    <Twitterwebapp>&nbsp;Twitter Web App&nbsp;.</Twitterwebapp>
                  </Details>
                </Row>
                <Row>
                  <Retweetscount>
                    {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp; 13&emsp;
                  </Retweetscount>
                  <Retweets>Retweets&emsp;</Retweets>
                  <QuoteTweetcount> &nbsp; 3&nbsp;</QuoteTweetcount>
                  <QuoteTweet>Quote Tweets&emsp;</QuoteTweet>
                  <Likescount> &nbsp; 139 &nbsp;</Likescount>
                  <Likes>Likes&emsp;</Likes>
                </Row>
              </Column>
            </Container>
          </Grid>
          <Grid xs={4} className={classes.popupgrid}>
            <Popup />
          </Grid>
        </Row>
      </Grid>
    </>
  );
}
