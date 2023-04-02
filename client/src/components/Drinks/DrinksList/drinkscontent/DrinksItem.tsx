import DrinksItemBox from "./drinksitem/DrinksItemBox";
import DrinksItemBody from "./drinksitem/DrinksItemBody";
import DrinksItemLevel from "./drinksitem/DrinksItemLevel";
import Card from "../../../UI/Card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IDrinksProps } from "../../../../util/interfaces/drinks.inerface";

function DrinksItem({ drinksData, likesData }: IDrinksProps) {
  return (
    <Margin>
      <Card>
        <Link to={`/drinks/${drinksData.drinkId}`} >
          <ItemContainer>
            <DrinksItemBox drinksData={drinksData} likesData={likesData} />
            <SubContainer>
              <DrinksItemBody drinksData={drinksData} />
              <DrinksItemLevel drinksData={drinksData} />
            </SubContainer>
          </ItemContainer>
        </Link>
      </Card>
    </Margin>
  );
}

export default DrinksItem;

const Margin = styled.div`
  margin: 0 calc(var(--large) / 2) calc(var(--4x-large) / 2) calc(var(--large) / 2);

  @media only screen and (max-width: 479px) {
    margin: 0 0 calc(var(--4x-large) / 2) 0;
  }
`;

const ItemContainer = styled.div`
  width: auto;
  min-width: 320px;
  min-height: 490px;
  display: flex;
  flex-direction: column;
  transition: .4s;

    &:hover {
      transition: .4s;
      border-radius: 10px;
      box-shadow: 0px 0px 20px #473f3f73;
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 240px;
    }

    @media only screen and (max-width: 479px) {
      max-width: 300px;
      min-height: 0;
    }
`;

const SubContainer = styled.div`
  height: 100%;
`