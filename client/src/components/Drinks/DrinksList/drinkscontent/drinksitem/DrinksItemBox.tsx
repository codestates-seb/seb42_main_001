import DrinksLikes from "./drinksitembox/DrinksItemLikes";
import DrinksItemTags from "./drinksitembox/DrinksItemTags";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IDrinksProps } from "../../../../../util/interfaces/drinks.inerface";

function DrinksItemBox({ drinksData }: IDrinksProps) {

  return (
    <InfoContainer>
      <DrinksLikes drinksData={drinksData} />
      <TagContainer>
        {drinksData?.tags.map(el => {
          return (
            <Link key={el.tagId} to={`/tags/${el.tagId}`}>
              <DrinksItemTags drinksData={el} />
            </Link>
          )
        })}
      </TagContainer>
    </InfoContainer>
  );
}

export default DrinksItemBox;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--large) var(--large) 0 var(--large);

    @media only screen and (max-width: 450px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
`;

const TagContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-end;
  overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    @media only screen and (max-width: 450px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: var(--small);
    }
`