import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SlArrowLeft } from "react-icons/sl";

function ArticleDetailBack() {
    return (
        <MainContainer>
            <Link to='/article'>
                <SlArrowLeft />
            </Link>
        </MainContainer>
    )
}

export default ArticleDetailBack

const MainContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    opacity: 0.6;
    transition: .4s;

    &:hover {
        opacity: 1;
        transition: .4s;
    }
    &:active {
        opacity: 1;
        transition: .4s;
    }

    svg {
        font-size: var(--large);
        color: var(--color-white);
    }
`
