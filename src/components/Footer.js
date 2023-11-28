import styled from "styled-components";

const FooterWrap = styled.footer`
  width: 100%;
  height: 13vh;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }

  @media screen and (max-width: 799px) {
    font-size: 14px;
  }
`;

export const Footer = () => {
  return (
    <FooterWrap>
      <p>COPYRIGHT © Seo chi Yeong, chi-0</p>
    </FooterWrap>
  );
};
