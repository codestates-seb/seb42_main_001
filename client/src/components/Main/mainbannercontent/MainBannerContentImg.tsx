import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import bowmore from '../../../assets/img/bowmore.jpg'

function MainBannerContentImg() {
    return (
        <MainContainer>
            <MainImg src={bowmore} alt='bowmore' />
        </MainContainer>
    )
}

export default MainBannerContentImg

const MainContainer = styled.div`
    width: 100%;
    display: flex;
`

const MainImg = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;

`