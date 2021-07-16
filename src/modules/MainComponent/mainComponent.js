import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;
const Container = styled.div`
  justify-content: center;
  display: flex;
  width: 514px;
  height: 987px;
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
  width: 512px;
`;
const Tweetdata = styled.span`
  justify-content: center;
  display: flex;
  font-family: "Raleway", sans-serif !important;
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
const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: "4%",
    marginLeft: "4%",
  },
}));
export default function MainComponent() {
  const classes = useStyles();
  return (
    <MainContainer>
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
              Well now you can. Live Cursors are available in XD 40- with the
              option to hide them, of Course
              <br />
            </Tweetdata>
          </Row>
        </Column>
      </Container>
    </MainContainer>
  );
}
