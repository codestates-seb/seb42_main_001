import styled from "styled-components"
import MainBannerContentArrow from "./mainbannercontent/MainBannerContentArrow"
import MainBannerContentImg from "./mainbannercontent/MainBannerContentImg"
import MainBannerContentTitle from "./mainbannercontent/MainBannerContentTitle"

function MainBannerContent() {
    return (
        <>
            <Wrap>
                <BodyWrap>
                    <TextWarp>
                        <MainBannerContentTitle />
                    </TextWarp>
                    <MainBannerContentArrow />
                </BodyWrap>
                <MainBannerContentImg />
            </Wrap>
        </>
    )
}

export default MainBannerContent


const Wrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const BodyWrap = styled.div`
    width: 100%;
    position: absolute;
`

const TextWarp = styled.div`
    width: 100%;
    padding: 160px 320px;
`