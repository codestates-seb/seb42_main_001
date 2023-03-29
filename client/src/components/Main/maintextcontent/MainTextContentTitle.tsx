import { Link } from "react-router-dom"
import styled from "styled-components"

import WithsKey from '../../../assets/img/WithsKey.png'

function MainTextContentTitle() {
    return (
        <MainContainer>
            <span>
                양주 입문자를 위한 술기로운 입문백서
            </span>
            <Link to={`/article`}>
                <img src={WithsKey} alt='WithsKey' />
            </Link>
        </MainContainer>
    )
}

export default MainTextContentTitle

const MainContainer = styled.div`
    color: var(--color-main);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    span {
        margin-bottom: var(--2x-large);
        border: 1px solid var(--color-main);
        padding: 10px 15px;
    }
`