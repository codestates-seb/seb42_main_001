import { Link } from "react-router-dom";
import styled from "styled-components";
import logoWhite from '../../assets/img/logo/withskey_b.png'
import logoBlack from '../../assets/img/logo/withskey_w.png'

interface LogoTextProps {
  headerColor?: string;
}

function LogoText({ headerColor }: LogoTextProps) {
  return (
    <Link to="/">
      <Logo headerColor={headerColor}>
        {headerColor ? <ImgContainer src={logoBlack} alt={`with's key`} />
          : <ImgContainer src={logoWhite} alt={`with's key`} />
        }
      </Logo>
    </Link>
  );
}

export default LogoText;

const Logo = styled.div<LogoTextProps>`
  display:flex;
  transition: 1s;
`;

const ImgContainer = styled.img`
  width: 55px;
`