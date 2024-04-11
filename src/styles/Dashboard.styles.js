import styled from "styled-components";

export const StyledLeft = styled.div`
  margin: 3rem 1rem 1rem 3rem;
  overflow-y: auto;
  overflow-x: hidden;
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
