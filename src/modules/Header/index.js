import React from "react";
import HeaderComponent from "./header";
import BaseComponent from "../baseComponent";
import { withRouter } from "react-router-dom";

export default class Header extends BaseComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <div><HeaderComponent visible={this.props.visible} link={this.props.link}/></div>;
  }
}
