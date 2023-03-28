import styled from "styled-components";

import SiteMap from "./SiteMap";
import TopButton from "./TopButton";

function Footer() {
  return (
    <FooterBackground>
      <FooterContainer>
        <SiteMap />
        <TopButton />
      </FooterContainer>
    </FooterBackground>
  );
}

export default Footer;

const FooterBackground = styled.div`
  background-color: var(--color-main);
  margin-top: auto;
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: center;
  z-index: 999;
`;

const FooterContainer = styled.div`
  color: var(--color-white);
  background-color: var(--color-main);
  width: 85%;
  max-width: 1420px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 280px) {
    display: flex;
    justify-content: center;
  }
`;
