import React from "react";
import styled from "styled-components";

const StyledPageLayout = styled.section`
  width: 100%;
  min-height: ${(props) => (props.height ? props.height : "100vh")};
  display: flex;
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  overflow-x: hidden;
  margin: ${(props) => (props?.m ? props?.m : "")};
  background: ${(props) => (props.bg ? props.bg : "")};

  @media only screen and (max-width: 1600px) {
    background-size: auto 100%;
  }
`;

const PageLayout = ({
  children,
  bg,
  jc,
  padding,
  img,
  height,
  m,
  direction,
  align,
}) => {
  return (
    <StyledPageLayout
      bg={bg}
      padding={padding}
      jc={jc}
      img={img}
      height={height}
      m={m}
      direction={direction}
      align={align}
    >
      {children}
    </StyledPageLayout>
  );
};

export default PageLayout;
