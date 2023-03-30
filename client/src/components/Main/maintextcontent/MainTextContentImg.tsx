import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bar from '../../../assets/img/bar.jpg'

function MainTextContentImg() {
    return (
        <MainContainer>
            <Link to={`/article`}>
                <ImgWrap src={bar} alt='bar' />
            </Link>
        </MainContainer>
    )
}

export default MainTextContentImg

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
`

const ImgWrap = styled.img`
    width: calc(var(--4x-large) * 8);
    border-radius: var(--2x-small);
    box-shadow: 1px 1px 30px rgba(59, 30, 30, 0.7);
`