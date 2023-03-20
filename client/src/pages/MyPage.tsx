import React from 'react'
import styled from 'styled-components'
import MyPageContent from '../components/MyPage/MyPageContent'
import MyPageInfo from '../components/MyPage/MyPageInfo'

function MyPage() {
  return (
    <MainContainer>
      <MyPageInfo />
      <MyPageContent />
    </MainContainer>
  )
}

export default MyPage

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  background-color: var(--color-main);
`


// import { useState } from "react";
// import styled from "styled-components";

// import MyContent from "../components/Mypage2/MyContent";
// import MyPageEdit from "../components/Mypage2/MyPageEdit";
// import MyPageInfo from "../components/Mypage2/MyPageInfo";

// function Mypage() {
//   const [isEdit, setEdit] = useState(false);

//   const handleMyPageEdit = () => {
//     setEdit(!isEdit);
//   };

//   return (
//     <MypageContainer>
//       {isEdit ? (
//         <MarginWarpper>
//           <MyPageEdit isEdit={isEdit} onClick={handleMyPageEdit} />
//         </MarginWarpper>
//       ) : (
//         <MarginWarpper>
//           <MyPageInfo isEdit={isEdit} onClick={handleMyPageEdit} />
//         </MarginWarpper>
//       )}
//       <MyContent />
//     </MypageContainer>
//   );
// }

// export default Mypage;

// const MypageContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 130px 0;
//   background-color: var(--color-main);
//   display: flex;
//   justify-content: space-between;

//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     height: auto;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// const MarginWarpper = styled.div`
//   width: 100%;
//   max-width: 500px;
//   margin-right: var(--medium);
//   display: flex;
//   justify-content: center;
//   align-items: top;

//   @media only screen and (max-width: 768px) {
//     margin: 0;
//   }
// `;
