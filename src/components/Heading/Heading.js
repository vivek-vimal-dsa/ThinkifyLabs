import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: ${(props) => (props.fs ? props.fs : "28px")};
  font-weight: ${(props) => (props.fw ? props.fw : "700")};
  line-height: ${(props) => (props.lh ? props.lh : 0)};
  color: ${(props) => (props.color ? props.color : "#000000")};
  margin: ${(props) => (props.m ? props.m : "")};
  text-align: ${(props) => (props.center ? "center" : "left")} !important;
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  text-transform: ${(props) => (props.capital ? "upper-case" : "lower-case")};
  width: ${(props) => (props.width ? props.width : "initial")};
  font-style: ${(props) => (props?.italic ? "italic" : "normal")};

  @media only screen and (max-width: 1200px) {
    font-size: ${(props) =>
      props.xm ? props.xm : props.fs ? props.fs : "25px"};
    line-height: ${(props) => (props.lhXm ? props.lhXm : "")};
    text-align: ${(props) =>
      props.center ? "center" : props.mcenter ? "center" : "left"} !important;
  }
`;

const Heading = (props) => {
  const { Text } = props;
  return <StyledHeading {...props}>{Text ? Text : ""}</StyledHeading>;
};

export default Heading;
