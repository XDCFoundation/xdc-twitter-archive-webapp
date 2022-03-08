import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Grid } from "react-bootstrap";
import millify from "millify";
import Utils from "../../utility";
import { TweetService } from "../../services/index";
import toast, { Toaster } from "react-hot-toast";
import {
  socialMediaLinks
} from "../../constants";

const useStyles = makeStyles((theme) => ({
  input: {
    border: "none",
    borderRadius: "4px",
    // background: "url(/images/search.svg) no-repeat 15px",
    border: "solid 1px #aab1ff",
    width: "100%",
    height: "40px",
    marginRight: "7px",
    color: "#09184b",
    marginTop: "-9px",
    backgroundSize: "25px",
    paddingLeft: "8%",
  },
  // "@media (min-width: 400px) and (max-width: 1080px)": {
  //   input: {
  //     display: "flex !important",
  //     width: "201px",
  //     height: "33px",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  // },
  button: {
    backgroundColor: " #3366ff",
    borderRadius: "4px",
    color: "#ffffff",
    paddingLeft: "15px",
    paddingRight: "15px",
    border: "none",
    fontSize: "15px",
    marginTop: "-9px",
    fontFamily: "Raleway,sans-serif !important",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "center",
  },
  span: {
    marginTop: "16px",
    fontFamily: "Raleway,sans-serif !important",
    fontSize: "16px",
    display: "flex",
  },
  no_of_tweets_archived: {
    fontFamily: "Raleway,sans-serif !important",
    marginLeft: "-4px",
    color: "white",
    fontSize: "15px",
    whiteSpace: "normal",
  },
}));

const DesktopView = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: visible;
  }
`;

const MobileView = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: visible;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #191d43;
`;
const Image = styled.img`
  padding: 10px;
  margin-left: 45px;
  width: 200px;
  height: 50px;
  margin-top: 3px;
`;
const MobileImage = styled.img`
  padding: 10px;
  height: 50px;
  margin-left: -10px;
  width: 200px;
  margin-top: 3px;
  @media (max-width: 380px) {
    width: 160px;
  }
`;

const ButtonContainer = styled.div`
display: flex;
`;
const ImageContainer = styled.div`
flex : 1;
`;
const SpeedButtonContainer = styled.div`
padding: 9px 0px 5px 0;
`;
const Span = styled.span`
  color: #ffffff;
  font-size: 21px;
  margin-top: 21px;
  font-weight: 600;
  font-family: "Raleway", sans-serif !important;
  margin-left: -11px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
`;
const SpeedButton = styled.button`
  color: white;
  background-color: transparent;
  border: 0.5px solid #ffffff;
  overflow: hidden;
  padding: 4px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;

const MobileSpeedButton = styled.button`
color: white;
  background-color: transparent;
  border: 0.5px solid #ffffff;
  overflow: hidden;
  padding: 4px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }

  @media (max-width: 380px) {
    padding: revert;
    margin-top: 5px;
  }
`;

export default function Headerconditional(props) {
  const classes = useStyles();
  const history = useHistory();
  const [tweet, setTweet] = useState("");
  const [archiveTweetCount, setArchiveTweetCount] = useState("");

  const errorMessage = () =>
    toast.error("Enter Correct Url", {
      duration: 2000,
      position: "top-center",
      className: "toast-div-address",
    });

  useEffect(() => {
    totalArchiveTweets();
  }, []);

  const totalArchiveTweets = async () => {
    const [err, res] = await Utils.parseResponse(
      TweetService.getArchivedTweetCount()
    );
    if (err) {
      console.log("hello");
    } else {
      setArchiveTweetCount(res?.response[1]?.blockchainTweetCount);
      // console.log("res", res?.response[1]?.blockchainTweetCount);
    }
  };
  let archiveCount = Number(archiveTweetCount);

  const redirect = () => {
    var urlRegex = /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/;
    if (
      urlRegex.test(tweet) &&
      tweet.includes("twitter.com/") &&
      tweet.includes("status/")
    ) {
      history.push("/archive?url=" + tweet);
    } else {
      errorMessage();
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <DesktopView>
        <Container>
          <Row>
            <a href="/">
              <Image src="/images/archiveLogo.png" />
            </a>
          </Row>
          <Row className="button-row">
            <a href={socialMediaLinks.XDC_SPEED_TEST_LINK} target="_blank">
              <SpeedButton>XDC Speed Test</SpeedButton>
            </a>
          </Row>
        </Container>
      </DesktopView>

      <MobileView>
        <Container>
          <Grid item xs={12}>
            <ButtonContainer>
              <ImageContainer>
                <a href="/">
                  <MobileImage src="/images/archiveLogo.png" />
                </a>
              </ImageContainer>
              <SpeedButtonContainer>
                <a href={socialMediaLinks.XDC_SPEED_TEST_LINK} target="_blank">
                  <MobileSpeedButton>XDC Speed Test</MobileSpeedButton>
                </a>
              </SpeedButtonContainer>
            </ButtonContainer>
            <Column style={{ color: "white" }}></Column>
            <Column style={{ color: "white", marginTop: "15px" }}>
              <Row>
                <input
                  className={classes.input}
                  type="text"
                  onChange={(e) => setTweet(e.target.value)}
                />
                <button className={classes.button} onClick={redirect}>
                  Archive
                </button>
              </Row>
            </Column>

            <Column>
              <Row>
                <div className={classes.span}>
                  <span className={classes.no_of_tweets_archived}>
                    {millify(archiveCount + " " + "") || ""} tweets have been
                    archived
                  </span>
                </div>
              </Row>
            </Column>
          </Grid>
        </Container>
      </MobileView>
    </>
  );
}
