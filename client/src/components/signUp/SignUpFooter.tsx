import styled from "styled-components";

const SignUpFooter = () => {
  return (
    <SignUpFooterContainer>© 2023 With’s Key 001, Inc. </SignUpFooterContainer>
  );
};

export default SignUpFooter;

const SignUpFooterContainer = styled.div`
  color: var(--color-sub-dark-gray);
  font-size: var(--text-small);

  @media only screen and (max-width: 768px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
