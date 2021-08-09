import React, {useState,useEffect} from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Popup from "../popupbox";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useLocation, useParams } from 'react-router-dom';
import '../../assets/styles/custom.css';

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

  const location = useLocation()
  const url = location.search.slice(5)


  // const [count, setCount] = useState({});
  // alert(JSON.stringify(location.state))
  // useEffect(() => {
  //   fetchCount();
  // }, []);
  // const fetchCount = () => {
  //   axios({
  //     url:  "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/xinfin-twitter-gettweetsfromtweeturl?url=https://twitter.com/MichalStein2/status/1404839937908875264",
      // method: "POST",
      // mode: 'no-cors',
      // headers: {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": process.env.REACT_APP_API_URL,
      //   "Access-Control-Request-Headers": 'Content-Type, Authorization',
      //   "Content-Security-Policy": 'frame-ancestors self'
      // }
  //   })

  //     .then((res) => {
  //       console.log("result-------", res)
  //       setCount(res);

  //     })
  //     .catch((err) => {
  //       console.log("err-------", err);
  //     });
  // };

  const [count, setCount] = useState({});
  useEffect(() => {
    fetchCount();
  }, []);
  const fetchCount = () => {
    axios
      .get(
        "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com/xinfin-twitter-gettweetsfromtweeturl?url="+url
        )
      .then((res) => {
        setCount(res.data.responseData.responseData);
        console.log("tweets----", res.data.responseData.responseData)
        console.log('link---',url)
      })
      .catch((err) => {
        console.log("error-----",err);
      });
  };

let value=count?.data
// let handler = value?.length
// console.log('hand---',handler)

  return (
    <>
      <Grid xs={12}>
        <Row>
          <Grid xs={8} className={classes.maingrid}>
            <Container>
            {/* <div className="loader"></div> */}
            <Column>
                <Row>
                  <Heading> ARCHIVE TWEET</Heading>
                  <br /> 
                  <br />
                </Row>

                <Row>
                  <Avatar className={classes.avatar}>H</Avatar>
                  <Name>{value?.name}</Name>
                </Row>

                <Email>@{value?.name}</Email>

                <br />
                <Row>
                  <Tweetdata>
                   {/* {value} */}
                    <br />
                    <br />
                   {value?.text}
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
            {/* <Popup /> */}
          </Grid>
        </Row>
      </Grid>
    </>
  );
}
