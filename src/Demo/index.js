import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import BaseComponent from "../modules/baseComponent";
import DemoComponent from "./demo";
import FooterComponent from "../modules/Footer/footer";
import Headerconditional from "../modules/Header/Conditionalheader";

export default class Demo extends BaseComponent {
  render() {
    return (
      <div>
        <Headerconditional />

        <DemoComponent />
        <FooterComponent />
      </div>
    );
  }
}
