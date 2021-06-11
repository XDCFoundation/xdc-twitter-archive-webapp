import BaseComponent from "../baseComponent";
import Demo from "./demo";
import React from "react";
import { Row, Column } from "simple-flexbox";
import HeaderComponent from "../Header/header";

export default class Mydemo extends BaseComponent {
  render() {
    return (
      <div>
        <HeaderComponent />
        <Demo />
      </div>
    );
  }
}
