import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Popup from "../popupbox";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import "../../assets/styles/custom.css";
import Toast from "./Toast";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { nullLiteralTypeAnnotation } from "@babel/types";
import moment from "moment";
import Loader from "./loader";
import Utils from "../../utility";

const Container = styled.div`
  // justify-content: center;
  // display: flex;
  width: 500px;
  height: 100%;
  background-color: #ffffff;
  border: solid 0.5px #d3d3d3;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    padding-left: 20px;
  }
`;

const Heading = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 15px;
  padding-top: 3%;
  padding-left: 4%;
  // box-sizing: border-box;
  // width: 100%;
  // border: solid #5B6DCD 1px;
  // padding: 5px;
  // border-top: none;
  // border-right: none;
  // border-bottom: visible;
  // border-left: none;
`;

const BackArrow = styled.span`
  color: #1e90ff;
  font-size: 15px;
  padding-top: 3%;
  padding-left: 2%;
`;
const Tweetdata = styled.span`
  font-family: "Raleway", sans-serif !important;
  box-sizing: border-box;
  width: 100%;
  border: solid #5b6dcd 1px;
  border: none;
  padding: 3%;
`;
const Imagedata = styled.span`
  font-family: "Raleway", sans-serif !important;
  box-sizing: border-box;
  width: 100%;
  border: solid #5b6dcd 1px;
  border-radius: 15px;
  border: Visible;
  // padding: 1%;
`;
const Name = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 15px;
  margin-left: 1%;
`;
const Email = styled.span`
  font-family: "Raleway", sans-serif !important;
  font-size: 11px;
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
  border: none;
`;

const Mainbox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    /* padding-left: 10%;
    padding-right: 10%; */
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  mainColumn: {
    width: "100%",
  },

  first_row: {
    padding: "2%",
  },
  second_row: {
    paddingTop: "2%",
  },
  third_row: {
    paddingBottom: "3%",
  },

  avatar: {
    marginLeft: "2%",
  },
  span_tweet: {
    fontWeight: "bold",
    fontSize: "20",
  },
  popupgrid: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px",
  },
  hr_page: {
    width: "100%",
    color: "red",
    marginLeft: "auto",
    marginRight: "auto",
  },
  mainRow:{
    display: 'flex',
    flexFlow: 'row-nowrap',
  },
  "@media (min-width: 0px) and (max-width: 767px)": {
    mainRow:{
      display: 'flex',
      flexFlow: 'row-nowrap',  
      width: '300px'
    },
  },
}));
export default function MainComponent(props) {
  const classes = useStyles();
  const location = useLocation();
  const url = location.search.slice(5);

  let value = props?.count?.name;
  let words = props?.count?.text;
  let time = moment(props?.count?.createdAt).format("LT");
  let date = moment(props?.count?.createdAt).format("LL");
  let icon = value
    ?.split(" ")
    .map((x) => x.charAt(0))
    .join("")
    .substr(0, 1)
    .toUpperCase();
  let dummyHandle = value
    ?.slice(0, value?.length)
    .replace(/\s/g, "")
    .toLowerCase();

  return (
    <>
      <br />
      {props?.load ? (
        <Grid xs={12}>
          <Mainbox>
            <Row className={classes.mainRow}>
              <Container>
                <Column className={classes.mainColumn}>
                  <Row>
                    <BackArrow>
                      <a href="/">
                        <ArrowBackIcon />
                      </a>
                    </BackArrow>
                    <Heading className={classes.span_tweet}>
                      <span className={classes.span_tweet}>Tweet</span>
                    </Heading>
                  </Row>
                  <hr className={classes.hr_page} />
                  <Row>
                    <Avatar className={classes.avatar}>-</Avatar>
                    <Name>
                      <Row className={classes.span_tweet}>{""}</Row>
                      <Row>
                        <Email>{""}</Email>
                      </Row>
                    </Name>
                  </Row>
                  <br />
                  <Row>
                    <Tweetdata>
                      {""}
                      <Loader />
                      {""}
                    </Tweetdata>
                  </Row>
                  <hr className={classes.hr_page} />
                  <Row className={classes.second_row}>
                    <Details>
                      <Time>
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {""}
                        &emsp;
                      </Time>
                      <Date>
                        &nbsp;
                        {""}
                        &emsp;
                      </Date>
                    </Details>
                  </Row>
                  <br />
                </Column>
              </Container>
            </Row>
          </Mainbox>
        </Grid>
      ) : (
        <Grid xs={12}>
          <Mainbox>
            <Row>
              <Container>
                <Column className={classes.mainColumn}>
                  <Row>
                    <BackArrow>
                      <a href="/">
                        <ArrowBackIcon />
                      </a>
                    </BackArrow>
                    <Heading className={classes.span_tweet}>
                      <span className={classes.span_tweet}>Tweet</span>
                    </Heading>
                  </Row>
                  <hr className={classes.hr_page} />
                  <Row>
                    <Avatar className={classes.avatar}>{icon}</Avatar>
                    <Name>
                      <Row className={classes.span_tweet}>{value}</Row>
                      <Row>
                        <Email>
                          {dummyHandle ? "@" + dummyHandle : ""}
                        </Email>
                      </Row>
                    </Name>
                  </Row>
                  <br />
                  <Row>
                    <Tweetdata>
                      <span className={classes.span_tweet}>{words}</span>
                    </Tweetdata>
                  </Row>
                  <hr className={classes.hr_page} />
                  <Row className={classes.second_row}>
                    <Details>
                      <Time>
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {time ? time : "-"}
                        &emsp;
                      </Time>
                      <Date>
                        &nbsp;
                        {date ? date : "-"}
                        &emsp;
                      </Date>
                    </Details>
                  </Row>
                  <br />
                </Column>
              </Container>
            </Row>
          </Mainbox>
        </Grid>
      )}
    </>
  );
}
