import styled, { css } from "styled-components";
import { Row, Column } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #191d43;
`;
const Image = styled.img`
  padding: 10px;
  width: 200px;
  height: 50px;
  margin-left: 45px;
  margin-top: 3px;
`;
const MobileImage = styled.img`
  padding: 10px;
  width: 200px;
  height: 50px;
  margin-left: 12px;
  margin-top: 3px;
`;
const Span = styled.span`
  color: #ffffff;
  font-size: 21px;
  margin-top: 21px;
  font-weight: 600;
  font-family: "Raleway", sans-serif !important;
  margin-left: -11px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
`;
const Input = styled.input`
  background-color: #3d4270;
  border-radius: 4px;
  color: #ffffff;
  font-family: WorkSans-Roman !important;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  border: none;
  height: 32px;
  width: 43%;
  margin-left: 25px;
  margin-top: 11px;
`;
const Button = styled.button`
  color: #ffffff;
  height: 32px;
  width: 96px;
  padding: 10px;
  margin-top: 11px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #5760bc;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.28;
  font-family: "IBM Plex Sans", sans-serif !important;
  &:hover {
    color: black;
  }
`;
const DesktopView = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: visible;
  }
`;

const MobileView = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: visible;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export default function HeaderComponent(props) {
  const [inputValue, setInputValue] = useState("");
  // console.log('pr---',props?.headerLink)

  return (
    <>
      <DesktopView>
        <Container>
          <Row>
            <a href="/">
              <Image src="/images/archiveLogo.png" />
            </a>

            <Input
              type="text"
              readOnly={true}
              value={props?.headerLink || ""}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <CopyToClipboard
              text={props?.headerLink}
            >
              <Button>Copy</Button>
            </CopyToClipboard>
          </Row>
        </Container>
      </DesktopView>

      <MobileView>
        <Container>
          <Row>
            <a href="/">
              <MobileImage src="/images/archiveLogo.png" />
            </a>
          </Row>
          <Column style={{ paddingBottom: "20px" }}>
            <Row>
              <Input
                type="text"
                readOnly={true}
                value={props?.headerLink || ""}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <CopyToClipboard
                text={props?.headerLink}
              >
                <Button>Copy</Button>
              </CopyToClipboard>
            </Row>
          </Column>
        </Container>
      </MobileView>
    </>
  );
}
