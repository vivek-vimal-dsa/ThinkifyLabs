import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => (props.isDisabled ? "grey" : "#242323")};
  font-size: 20px;
  font-weight: ${(props) => (props.fw ? props.fw : "700")};
  line-height: ${(props) => (props.noLineHeight ? "1" : "24.3px")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0em")};
  padding: 0.65rem 1.5rem;
  border-radius: ${(props) => (props.br ? props.br : "4px")};
  border: ${(props) =>
    props?.isDisabled
      ? "2px solid grey"
      : props?.border
      ? props.border
      : "2px solid #000"};
  cursor: pointer !important;
  pointer-events: ${(props) => (props?.isDisabled ? "none" : "all")};
  width: ${(props) => (props.width ? props.width : "15rem")};
  background: ${(props) =>
    props?.isDisabled ? "rgba(0,0,0,0.05)" : "transparent"};
  margin: ${(props) => (props.m ? props.m : "")};
`;

const Button = (props) => {
  const { onClick = () => {} } = props;

  return (
    <StyledButton onClick={onClick} {...props} type="submit">
      {props?.Text ? props.Text : "button"}
    </StyledButton>
  );
};

export default Button;
