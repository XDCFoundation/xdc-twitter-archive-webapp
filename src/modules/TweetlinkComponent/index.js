import React from "react";
import BaseComponent from "../baseComponent";
import Header from "../Header";
import TweetLink from "./tweetLinkComponent";
import Popup from "../popupbox";
import { Row, Column } from "simple-flexbox";
export default class Link extends BaseComponent {
  render() {
    return (
      <div>
        <Column>
          <Header />
          {/* <Popup /> */}
        </Column>

        <TweetLink />
      </div>
    );
  }
}
