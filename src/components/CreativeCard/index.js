import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { Heading } from "../Heading";

const Box = styled.div`
  width: 22rem;
  margin: 1rem 0;
  border-radius: 0.75rem;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => (props?.bg ? props?.bg : "grey")};
  padding: 1rem 2rem;
  @media only screen and (max-width: 768px) {
    width: 98%;
  }
`;

const CreativeCard = (props) => {
  const { title, subTitle } = props;
  return (
    <Box {...props}>
      <Heading Text={title} fs="1.35rem" lh="0" />
      <Text Text={subTitle} lh="0" />
    </Box>
  );
};

export default CreativeCard;
