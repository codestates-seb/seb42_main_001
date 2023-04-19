import styled from 'styled-components'

function SiteMap() {
  const handleClick = () => {
    alert('준비 중입니다')
  }
  return (
    <SiteContainer>
      <MenuContainer onClick={handleClick}>서비스 소개  |  이용약관  |  디렉토리 </MenuContainer>
      <ItemContainer>(주)with’s key | 서울특별시 송파구 올림픽로 486 롯데월드타워 486층 | 통신판매번호 : 2020-서울송파-3147 <br />
        유료직업소개사업등록번호 : (국내) 제2023-1234567-12-3-45678호 | 사업자등록번호 : 123-45-67890 | 02-123-4567</ItemContainer>
      <ItemContainer>© 2023 001, Inc. </ItemContainer>
    </SiteContainer>
  )
}

export default SiteMap

const SiteContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--text-small);
  color: var(--color-sub-dark-gray);

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (max-width: 320px) {
    display: none;
  }
`

const MenuContainer = styled.div`
  cursor: pointer;
`

const ItemContainer = styled.div`
  margin-top: var(--x-large);
  font-size: var(--text-x-small);
  line-height: var(--small);
`