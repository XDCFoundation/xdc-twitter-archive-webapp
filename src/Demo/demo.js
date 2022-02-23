import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Row, Column } from "simple-flexbox";
import MainComponent from "../modules/MainComponent/mainComponent";
import toast, { Toaster } from "react-hot-toast";
import Popup from "../modules/popupbox";
import { useHistory } from "react-router-dom";
import millify from "millify";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    fontFamily: "Raleway, sans-serif !important",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: "6%",
    paddingBottom: "11%",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "none !important",
    outline: "none !important",
  },
  cardMedia: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "56.25%",
    alignItems: "center",
    width: "72%",
    boxShadow: "none",
    cursor: "none",
    marginLeft: "14%",
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center",
    outline: "none !important",
    border: "none !important",
    boxShadow: "none",
  },

  input: {
    border: "none",
    borderRadius: "4px",
    background: "url(/images/search.svg) no-repeat 15px",
    border: "solid 1px #aab1ff",
    width: "545px",
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
    border: "none",
    fontSize: "18px",
    width: "115px",
    padding: "8px",
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
    fontSize: "14px",
    display: "flex",
  },
  no_of_tweets_archived: {
    fontFamily: "Raleway,sans-serif !important",
    marginRight: "4px",
  },
  main: {
    backgroundColor: "#ffffff",
    marginBottom: "11%",
  },
  cardactionarea: {
    display: "grid",
  },
  heading: {
    fontSize: "18px",
    fontFamily: "Raleway,sans-serif !important",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.17",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#09184b",
    marginTop: "5%",
    marginBottom: "4%",
  },
  subheading: {
    fontSize: "14px",
    fontFamily: "Raleway,sans-serif !important",
  },
  enterTweetLink: {
    marginTop: "-25px",
    fontSize: "32px",
    fontFamily: "Raleway,sans-serif !important",
    textAlign: "center",
  },
  maindiv: {
    paddingTop: "8%",
  },
  container: {
    paddingBottom: "4%",
  },
  Container: {
    backgroundColor: "#ffffff",
  },
  main: {
    backgroundColor: "#ffffff",
  },
  allImagesdiv: {
    display: "flex",
    justifyContent: "center",
  },
  stopfakenews: {
    marginTop: "-23px",
    display: "flex",
    justifyContent: "center",
  },
}));
const TextView = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: visible;
  }
`;
const MobileView = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    margin-top: 10%;
  }
`;

export default function Album(props) {
  const classes = useStyles();
  const history = useHistory();
  const [tweet, setTweet] = useState("");

  const errorMessage = () =>
    toast.error('Enter Correct Url', {
      duration: 2000,
      position: 'top-center',
      className: "toast-div-address",
    });

  let archiveTweetCount = Number(props?.archiveCount);

  const redirect = () => {
    var urlRegex = /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/;
    if (
      urlRegex.test(tweet) &&
      tweet.includes("twitter.com/") &&
      tweet.includes("status/")
    ) {
      history.push("/archive?url=" + tweet);
    } else {
      errorMessage()
    }
  };

  return (
    <div>
      <Toaster />
      <React.Fragment>
        <main className={classes.main}>
          <TextView>
            <div className={classes.heroContent}>
              <Container className={classes.Container} maxWidth="sm">
                <Typography className={classes.enterTweetLink}>
                  Enter Tweet Link
                </Typography>

                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
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

                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <div className={classes.span}>
                          <span className={classes.no_of_tweets_archived}>
                            {millify(archiveTweetCount) || ""}
                          </span>
                          tweets have been archived
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </TextView>

          <MobileView>
            <Container className={classes.cardGrid} fixed>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                  <Paper className={classes.paper}>
                    <div className={classes.cardactionarea}>
                      <div className={classes.stopfakenews}>
                        <img src="/images/fakenews.svg" />
                      </div>
                      <div>
                        <CardContent className={classes.cardContent}>
                          <Typography className={classes.heading}>
                            Stop Fake News
                          </Typography>
                          <Typography className={classes.subheading}>
                            Help in making the world better-informed
                          </Typography>
                          <Typography className={classes.subheading}>
                            by stopping fake news
                          </Typography>
                        </CardContent>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Paper className={classes.paper}>
                    <div className={classes.cardactionarea}>
                      <div className={classes.allImagesdiv}>
                        <img src="/images/Group 195.svg" />
                      </div>

                      <CardContent className={classes.cardContent}>
                        <Typography className={classes.heading}>
                          Archive your Tweets
                        </Typography>
                        <Typography className={classes.subheading}>
                          Archive your tweets in our platform so that
                        </Typography>
                        <Typography className={classes.subheading}>
                          it stays forever
                        </Typography>
                      </CardContent>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Paper className={classes.paper}>
                    <div className={classes.cardactionarea}>
                      <div className={classes.allImagesdiv}>
                        <img src="/images/Legalnews.svg" />
                      </div>

                      <CardContent className={classes.cardContent}>
                        <Typography className={classes.heading}>
                          Save links for legal actions
                        </Typography>
                        <Typography className={classes.subheading}>
                          Use your saved links for the future legal
                        </Typography>
                        <Typography className={classes.subheading}>
                          actions
                        </Typography>
                      </CardContent>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </MobileView>
        </main>
      </React.Fragment>
    </div>
  );
}
