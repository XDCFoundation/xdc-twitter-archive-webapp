import React from "react";
import BaseComponent from "../baseComponent";
import Header from "../Header";
import TweetLink from "./tweetLinkComponent";

export default class Link extends BaseComponent {
  render() {
    return (
      <div>
        <Header />
        <TweetLink />
      </div>
    );
  }
}
