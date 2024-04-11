import styled from "styled-components";

const StyledProgressBar = styled.div`
  border: 2px solid #000;
  width: 35rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Fill = styled.div`
  background-color: #000;
  width: ${(props) => (props?.fillVal ? props?.fillVal : "25%")};
  height: 20px;
  border-radius: 0 0.25rem 0.25rem 0;
  transition: width 0.5s ease-in-out;
`;

export const ProgressBar = (props) => {
  const { length } = props;
  const fillVal = length * 20 + "%";
  return (
    <>
      <StyledProgressBar>
        <Fill {...props} fillVal={fillVal} />
      </StyledProgressBar>
    </>
  );
};
