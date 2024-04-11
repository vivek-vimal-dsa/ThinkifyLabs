import React from "react";
import styled from "styled-components";

const StyledWidth = styled.section`
  width: 100%;
  padding: 0 0 0 5%;
  height: ${(props) => (props.height ? props.height : "auto")};
  display: flex;
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.jc ? props.jc : "space-between")};
  flex-direction: ${(props) => (props?.direction ? props?.direction : "row")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const PageWidth = ({
  children,
  align,
  full,
  padding,
  margin,
  sp,
  width,
  bg,
  height,
  boxShadow,
  direction,
  jc,
  key,
  sColumn,
  mjc,
}) => {
  return (
    <StyledWidth
      align={align}
      full={full}
      padding={padding}
      margin={margin}
      sp={sp}
      width={width}
      bg={bg}
      height={height}
      boxShadow={boxShadow}
      direction={direction}
      jc={jc}
      key={key}
      sColumn={sColumn}
      mjc={mjc}
    >
      {children}
    </StyledWidth>
  );
};

export default PageWidth;
