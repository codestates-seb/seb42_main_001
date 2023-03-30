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
    width: 1420px;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`