import React from 'react'
import styled from 'styled-components'
import loading from '../../img/loading.gif'

function Loading() {
    return (
        <MainContainer>
            <img src={loading} alt='loading' />
        </MainContainer>
    )
}

export default Loading

const MainContainer = styled.div`
    width: 100vh;
    height: 100vmax;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: var(--3x-large);

    img {
        width: auto;
        height: 50px;
    }
`