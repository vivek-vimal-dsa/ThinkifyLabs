import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => (props.fs ? props.fs : "18px")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  text-align: ${(props) =>
    props.center ? "center" : props?.align ? props?.align : "left"};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0em")};
  line-height: ${(props) => (props.lh ? props.lh : "16px")};
  font-weight: ${(props) => (props.fw ? props.fw : "400")};
  cursor: ${(props) => (props?.cursor ? props?.cursor : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  text-transform: ${(props) => (props?.transform ? props?.transform : "")};
`;

const Text = (props) => {
  return <StyledText {...props}>{props.Text ? props.Text : ""}</StyledText>;
};

export default Text;
