import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Row, Column } from "simple-flexbox";
import MainComponent from "../modules/MainComponent/mainComponent";
import { useHistory } from "react-router-dom";
import TransitionAlerts from "../modules/popupbox.js";

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
    fontFamily: "Raleway,sans-serif !important",
    fontSize: "12px",
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
    fontSize: "15px",
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
    fontSize: "13px",
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

export default function Album() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const history = useHistory();
  const redirect = () => {
    history.push("/MainComponent");
  };

  return (
    <div>
      <React.Fragment>
        <main className={classes.main}>
          <div className={classes.heroContent}>
            <Container className={classes.Container} maxWidth="sm">
              <Typography className={classes.enterTweetLink}>
                Enter Tweet Link
              </Typography>

              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Row>
                      <input className={classes.input} type="text" />
                      <button
                        className={classes.button}
                        onClick={redirect}
                        // onClick={() => {
                        //   setOpen(true);
                        //   console.log("clicked");
                        // }}
                      >
                        Archive
                      </button>
                    </Row>

                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <div className={classes.span}>
                        <span className={classes.no_of_tweets_archived}>
                          20,000
                        </span>
                        tweets have been archived
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} fixed>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.cardactionarea}>
                    <div className={classes.stopfakenews}>
                      <img src="/images/new.svg" />
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
                    <div className={classes.allImagesdiv}>
                      <img src="/images/Group 195.svg" />
                    </div>

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
                    <div className={classes.allImagesdiv}>
                      <img src="/images/Legalnews.svg" />
                    </div>

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
    </div>
  );
}
