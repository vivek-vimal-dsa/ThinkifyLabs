import React from "react";
import styled from "styled-components";

const ColorCode = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: ${(props) => (props?.bg ? props?.bg : "#FFF")};
  cursor: pointer;
  margin: ${(props) => (props?.isActive === props?.bg ? 0 : "1rem 1rem 0 0")};
`;

const Border = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 2.5px solid #000;
  display: grid;
  place-items: center;
  margin: 1rem 1rem 0 0;
`;

const Selector = (props) => {
  const { isActive, bg } = props;
  return (
    <>
      {isActive === bg ? (
        <Border>
          <ColorCode {...props} />
        </Border>
      ) : (
        <ColorCode {...props} />
      )}
    </>
  );
};

export default Selector;
