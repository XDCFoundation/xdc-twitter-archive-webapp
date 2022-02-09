import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import BaseComponent from "../modules/baseComponent";
import DemoComponent from "./demo";
import FooterComponent from "../modules/Footer/footer";
import Headerconditional from "../modules/Header/Conditionalheader";
import Utils from "../utility";
import { TweetService } from "../services/index";

export default class Demo extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      archiveCount: [],
    };
  }

  async componentDidMount() {
    this.archiveTweetsCount();
  }

  archiveTweetsCount = async () => {
    const [err, res] = await Utils.parseResponse(
      TweetService.getArchivedTweetCount()
    );
    if (err) {
      console.log("hello");
    } else {
      this.setState({ archiveCount: res?.response[1]?.blockchainTweetCount });
      console.log("res", res?.response[1]?.blockchainTweetCount);
    }
  };

  render() {
    return (
      <div>
        <Headerconditional />
        <DemoComponent archiveCount={this.state?.archiveCount}/>
        <FooterComponent />
      </div>
    );
  }
}
