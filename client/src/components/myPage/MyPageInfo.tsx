import { useState } from 'react';
import styled from 'styled-components';

import Card from '../ui/Card';
import MyPageInfoContent from './MyPageInfoContent';
import MyPageInfoItem from './MyPageInfoItem';

function MyPageInfo() {
  const [editMode, setEditMode] = useState(false);

  return (
    <MarginContainer>
      <Card>
        <MainContainer>
          <MyPageInfoContent editMode={editMode} />
          <MyPageInfoItem editMode={editMode} setEditMode={setEditMode} />
        </MainContainer>
      </Card>
    </MarginContainer>
  );
}

export default MyPageInfo;

const MarginContainer = styled.div`
  margin-top: var(--5x-large);
  margin-bottom: var(--large);
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: var(--x-large);
`;
