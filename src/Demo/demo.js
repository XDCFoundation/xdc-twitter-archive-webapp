import React, { useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import CardActionArea from "@material-ui/core/CardActionArea";
import { shadows } from "@material-ui/system";
import { Row, Column } from "simple-flexbox";
import MainComponent from "../modules/MainComponent/mainComponent";
import { useHistory } from "react-router-dom";

// import Utils from "../utility";
// import TweetService from "../services/index"

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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    outline: "none !important",
  },

  // card: {
  //   height: "100%",
  //   display: "flex",
  //   boxShadow:"none !important",
  //   flexDirection: "column",
  //   boxShadow: 0 ,
  //   outline: "none !important",
  // },
  paper: {
    height: "100%",
    display: "flex",
    boxShadow: "none !important",
    flexDirection: "column",
    boxShadow: "none !important",
    outline: "none !important",
  },
  cardMedia: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "56.25%", // 16:9
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
    paddingLeft: "60px",
    color: "#09184b",
    marginTop: "-9px",
    backgroundSize: "25px",
  },
  button: {
    backgroundColor: " #3366ff",
    borderRadius: "4px",
    color: "#ffffff",
    border: "none",
    fontSize: "15px",
    width: "115px",
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
    position: "absolute",
    fontFamily: "Raleway,sans-serif !important",
    fontSize: "12px",
    right: "426px",
  },
  no_of_tweets_archived: {
    marginTop: "14px",
    fontFamily: "Raleway,sans-serif !important",
    position: "absolute",

    right: "585px",
  },
  main: { backgroundColor: "#ffffff" },
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
    fontSize: "15px",
    fontFamily: "Raleway,sans-serif !important",
  },
  enterTweetLink: {
    marginTop: "-25px",
    fontSize: "28px",
    fontFamily: "Raleway,sans-serif !important",
    textAlign: "center",
  },
  maindiv: {
    paddingTop: "8%",
  },
  container: {
    paddingBottom: "4%",
  },
}));

export default function Album() {
  const classes = useStyles();

  // const [postTweet, setPostTweet] = useState([]);

  // useEffect(async () => {
  //   let urlPath = "?url=";
  //   let [error, Tweet] = await Utils.parseResponse(
  //     TweetService.getTweetByUrl(urlPath, {})
  //   );
  //   if (error || !Tweet) return;
  //   setPostTweet(Tweet);
  // }, []);

  const history = useHistory();
  const redirect = () => {
    history.push("/MainComponent");
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main background="white">
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h4"
              align="center"
              color="textPrimary"
              font-family="Raleway sans-serif !important"
              gutterBottom
            >
              Enter Tweet Link
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Row>
                    <input className={classes.input} type="text" />
                    <button className={classes.button} onClick={redirect}>
                      Archive
                    </button>
                  </Row>
                  <Row>
                    <span className={classes.no_of_tweets_archived}>
                      20,000{" "}
                    </span>
                    <span className={classes.span}>
                      tweets have been archived
                    </span>
                  </Row>
                </Grid>
              </Grid>
            </div>
            {/* </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} fixed>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Paper className={classes.paper}>
                <div>
                  <div>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/new.svg"
                    />
                  </div>
                  <div>
                    <CardContent className={classes.cardContent}>
                      <Typography className={classes.heading}>
                        Stop Fake News
                      </Typography>
                      <Typography className={classes.subheading}>
                        Help in making the world better-informed by stopping
                        fake news
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.cardactionarea}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/Group 195.svg"
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.heading}>
                      Archive your Tweets
                    </Typography>
                    <Typography className={classes.subheading}>
                      Archive your tweets in our platform so that it stays
                      forever
                    </Typography>
                  </CardContent>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.cardactionarea}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="images/Legalnews.svg"
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.heading}>
                      Save links for legal actions
                    </Typography>
                    <Typography className={classes.subheading}>
                      Use your saved links for the future legal actions
                    </Typography>
                  </CardContent>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
