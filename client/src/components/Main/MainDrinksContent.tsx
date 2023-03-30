import styled from "styled-components"
import MainDrinksContentDrinks from "./maindrinkscontent/MainDrinksContentDrinks"
import MainDrinksContentTitle from "./maindrinkscontent/MainDrinksContentTitle"

function MainDrinksContent() {
    return (
        <MainContainer>
            <MainDrinksContentDrinks />
            <MainDrinksContentTitle />
        </MainContainer>
    )
}

export default MainDrinksContent

const MainContainer = styled.div`
    width: 100%;
    height: 50vh;
    padding: 0 320px;
    display: flex;
    justify-content: center;
    align-items: center;
`