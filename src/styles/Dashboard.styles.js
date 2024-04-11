import styled from "styled-components";

export const StyledLeft = styled.div`
  margin: 3rem 0 1rem 0;
  overflow-y: auto;
  height: calc(100vh - 4rem);
  width: 100%;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
    border: 1px solid #000;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 20px;
  }
`;
