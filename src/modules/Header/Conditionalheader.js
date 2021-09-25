import styled, { css } from "styled-components";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Grid } from "react-bootstrap";

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

export default function Headerconditional() {
  const classes = useStyles();
  const history = useHistory();
  const [tweet, setTweet] = useState("");

  const redirect = () => {
    var urlRegex = /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/;
    if (
      urlRegex.test(tweet) &&
      tweet.includes("twitter.com/") &&
      tweet.includes("status/")
    ) {
      history.push("/archive?url=" + tweet);
    } else {
      alert("Enter Correct URL");
    }
  };
  return (
    <>
      <DesktopView>
        <Container>
          <Row>
            <a href="/">
              <Image src="/images/archiveLogo.png" />
            </a>
          </Row>
        </Container>
      </DesktopView>

      <MobileView>
        <Container>
          <Grid item xs={12}>
            <Row>
              <a href="/">
                <MobileImage src="/images/archiveLogo.png" />
              </a>
            </Row>
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
                    20,000 tweets have been archived
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
