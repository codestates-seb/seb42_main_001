import styled from "styled-components";
import DrinksTags from "./DrinksTags";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

interface TagProps {
  tagData: { tagId: number; tagName?: string; }[]
  setPage: (state: number) => void;
}

function DrinksTagList({ tagData, setPage }: TagProps) {

  return (
    <>
      <DisplayContainer>
        <MySwiper
          className="swiper-container"
          spaceBetween={60}
          slidesPerView={11}
          navigation
          scrollbar={{ draggable: true }}
        >
          <TagListContainer>
            {tagData.map(el => {
              return (
                <SwiperSlide>
                  <DrinksTags key={el.tagId} tagId={el.tagId} tagName={el.tagName} setPage={setPage} />
                </SwiperSlide>
              );
            })}
          </TagListContainer>
        </MySwiper>
      </DisplayContainer>
    </>
  );
}

export default DrinksTagList;

const DisplayContainer = styled.div`
  width: 93%;

  -webkit-mask-image: linear-gradient(to left, transparent 0%, #e4e4e4 2%);
  mask-image: linear-gradient(to left, transparent 0%, #e4e4e4 2%);

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

const MySwiper = styled(Swiper)`
  display: flex;
`

const TagListContainer = styled.div`
  display: flex;
  width: 100%;
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