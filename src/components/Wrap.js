import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 180px 80px;

  @media screen and (max-width: 1050px) {
    padding: 120px 25px;
  }

  @media screen and (max-width: 799px) {
    font-size: 14px;
    padding: 120px 20px;
  }
`;

export const Wrap = ({ children }) => {
  return <Container>{children}</Container>;
};
