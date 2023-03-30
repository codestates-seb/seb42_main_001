import styled from 'styled-components';
import jackdaniels from '../../../assets/img/jackdaniels(low).jpg';

function MainTagsContentImg() {
  return (
    <div>
      <ImgWrap src={jackdaniels} alt='irish' />
    </div>
  );
}

export default MainTagsContentImg;

const ImgWrap = styled.img`
  height: 40vh;
  border-radius: var(--2x-small);
  box-shadow: 1px 1px 30px rgba(59, 30, 30, 0.7);
  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;
