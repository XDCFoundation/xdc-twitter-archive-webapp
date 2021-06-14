import React from "react";
import BaseComponent from "../baseComponent";
import HeaderComponent from "../Header/header";
import MainComponent from "./mainComponent";
import { Row, Column } from "simple-flexbox";

export default class CardComponent extends BaseComponent {
  render() {
    return (
      <>
        <Column>
          <HeaderComponent />

          <MainComponent />
        </Column>
      </>
    );
  }
}
