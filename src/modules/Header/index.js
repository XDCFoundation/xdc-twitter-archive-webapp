import React from "react";
import HeaderComponent from "./header";
import BaseComponent from "../baseComponent";
import { withRouter } from "react-router-dom";

export default class Header extends BaseComponent {
  state = { visible: true };
  render() {
    return <div> {this.state.visible ? <HeaderComponent /> : null}</div>;
  }
}
