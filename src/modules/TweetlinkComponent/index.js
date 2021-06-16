import React from "react";
import BaseComponent from "../baseComponent";
import Header from "../Header";
import TweetLink from "./tweetLinkComponent";
import Popup from "../popupbox";
import { Row, Column } from "simple-flexbox";
import Utils from "../../utility";
import Headerconditional from "../Header/Conditionalheader";

export default class Link extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <div>
        <Column>
          <Headerconditional />
          {/* <Popup /> */}
        </Column>

        <TweetLink />
      </div>
    );
  }
}
