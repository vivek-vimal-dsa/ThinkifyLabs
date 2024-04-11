import styled from "styled-components";

export const StyledInput = styled.input`
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.075em;
  border: 2px solid #000;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props?.disabled ? "rgba(0,0,0,0.05)" : "#fff"};
  height: ${(props) => (props?.height ? props?.height : "2.75rem")};
  min-width: ${(props) => (props?.width ? props?.width : "12rem")};
  padding: 0 1rem;

  &::placeholder {
    color: ${(props) =>
      props?.placeholderColor ? props?.placeholderColor : "#666666"};
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
`;
