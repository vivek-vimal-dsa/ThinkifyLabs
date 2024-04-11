import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) =>
    props.noCenter ? "flex-start" : props?.align ? props?.align : "center"};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.jc ? props.jc : "flex-start")};
  margin: ${(props) => (props.m ? props.m : "")};
  flex-wrap: ${(props) => (props?.wrap ? "wrap" : "nowrap")};
  padding: ${(props) => (props?.p ? props?.p : "")};
  height: ${(props) => (props?.height ? props?.height : "")};
  border-radius: ${(props) => (props.br ? props.br : "")};
  background-color: ${(props) => (props?.color ? props.color : "initial")};
`;

const Flex = ({
  children,
  column,
  scolumn,
  jc,
  m,
  mColumn,
  lColumn,
  noCenter,
  width,
  sM,
  wrap,
  p,
  height,
  position,
  bs,
  overflowY,
  mWidth,
  m14Width,
  hide,
  mjc,
  m10Width,
  mp,
  mCenter,
  align,
  mHeight,
  xsw,
  xjc,
  br,
  color,
}) => {
  return (
    <StyledFlex
      column={column}
      scolumn={scolumn}
      jc={jc}
      m={m}
      mColumn={mColumn}
      lColumn={lColumn}
      noCenter={noCenter}
      width={width}
      sM={sM}
      wrap={wrap}
      p={p}
      height={height}
      position={position}
      bs={bs}
      overflowY={overflowY}
      mWidth={mWidth}
      m14Width={m14Width}
      hide={hide}
      mjc={mjc}
      m10Width={m10Width}
      mp={mp}
      mCenter={mCenter}
      align={align}
      mHeight={mHeight}
      xsw={xsw}
      xjc={xjc}
      br={br}
      color={color}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
