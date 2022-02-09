import React from "react";
import HeaderComponent from "./header";
import BaseComponent from "../baseComponent";
import { withRouter } from "react-router-dom";
import Utils from "../../utility";
import { TweetService } from "../../services/index";

export default class Header extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  render() {
    return <div> {this.state.visible ? <HeaderComponent /> : null}</div>;
  }
}
