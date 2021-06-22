import React from "react";
import BaseComponent from "../baseComponent";
import Header from "../Header";
import TweetLink from "./tweetLinkComponent";
import Popup from "../popupbox";
import { Row, Column } from "simple-flexbox";
import Utils from "../../utility";
import Headerconditional from "../Header/Conditionalheader";
import HeaderComponent from "../Header/header"
import TweetService from "../../services/tweetLinkService";
import TweetDetail from "./tweetLinkDetail"

export default class Link extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      tweetLink: '',
      response: []
    };
  }
  getTweetLinkDetail = async () => {
    let [error, response] = await Utils.parseResponse(TweetService.tweetLink(this.state.tweetLink));
    if (error) {
      Utils.apiFailureToast("unable to fetch")
      return;
    }
    else {
      Utils.apiSuccessToast("Your Tweet has been Archived")
      this.setState({ response: response?.responseData })
    }
    console.log("response", response, error)
  }
  tweetLinkHandler = (e) => {
    const { value } = e.target;
    this.setState({ tweetLink: value });
    console.log("this.setState", this.state.tweetLink)
  }
  onSaveTweetClicked = async () => {
    this.setState({ visible: true })
    this.getTweetLinkDetail()
  }
  render() {
    return (
      <div>
        <Column>
          <HeaderComponent
            visible={this.state.visible}
            link={this.state.tweetLink} />
          {/* <Popup /> */}
        </Column>

        {!this.state.visible ? <TweetLink
          state={this.state}
          tweetLinkHandler={this.tweetLinkHandler}
          onSaveTweetClicked={this.onSaveTweetClicked} />
          : <TweetDetail response={this.state.response} />}
      </div>
    );
  }
}
