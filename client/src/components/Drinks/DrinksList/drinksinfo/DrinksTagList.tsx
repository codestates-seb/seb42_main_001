import styled from "styled-components";
// import Button from "../../../UI/Button";
import DrinksTags from "./DrinksTags";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

interface TagProps {
  tagData: { tagId: number; tagName?: string; }[]
}

function DrinksTagList({ tagData }: TagProps) {

  return (
    <>
      <DisplayContainer>
        <Swiper
          className="swiper-container"
          spaceBetween={60}
          slidesPerView={11}
          navigation
          scrollbar={{ draggable: true }}
        >
          <TagListContainer>
            {tagData.map(el => {
              return (
                <SwiperSlide className='swiper-slide'>
                  <DrinksTags key={el.tagId} tagId={el.tagId} tagName={el.tagName} />
                </SwiperSlide>);
            })}
          </TagListContainer>
        </Swiper>
      </DisplayContainer>
    </>

  );
}

export default DrinksTagList;

const DisplayContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  padding-left: var(--small);

  /* -webkit-mask-image: linear-gradient(to left, transparent 0%, #e4e4e4 100%); */
  mask-image: linear-gradient(to left, transparent 0%, #e4e4e4 1%);

	.swiper-button-next {
    width: 40px;
    height: 40px;
    background-color: var(--color-white);
    border-radius: 50px;
    color: var(--color-main);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	}

	.swiper-button-prev {
    width: 40px;
    height: 40px;
    background-color: var(--color-white);
    border-radius: 50px;
    color: var(--color-main);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	}

  .swiper-button-next::after,
	.swiper-button-prev::after {
    font-size: 15px;
    transition: 0.3s;
	}

  .swiper-button-next:hover,
	.swiper-button-prev:hover {
    transition: 0.3s;
    background-color: var(--color-main);
    color: var(--color-white);
	}



    @media only screen and (max-width: 768px) {
      display: none;
    }
`

const TagListContainer = styled.div`
  display: flex;
  width: 90%;
  overflow: overlay;
  
    &::-webkit-scrollbar {
      display: none;
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      width: 100%;
      align-items: center;
    }
`;