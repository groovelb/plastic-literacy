import React from 'react';
import styled, {keyframes} from "styled-components";

import ic_product from "../../assets/img/icon/PL/produce.svg";
import ic_dispose from "../../assets/img/icon/PL/dispose.svg";
import ic_collect from "../../assets/img/icon/PL/collect.svg";
import ic_select from "../../assets/img/icon/PL/select.svg";
import ic_recycle from "../../assets/img/icon/PL/recycle.svg";

const stageList = [
  {
    title: '생산',
    img: ic_product
  },
  {
    title: '배출',
    img: ic_dispose
  },
  {
    title: '수거',
    img: ic_collect
  },
  {
    title: '선별',
    img: ic_select
  },
  {
    title: '처리',
    img: ic_recycle
  },
];

const Container = styled.div`
  position: fixed;
  top: 160px;
  left: ${props => `calc((100% - ${props.theme.size.liveArea}px)/2)`}; 
`;

const Stage = styled.div`
  width: 180px;
  height: 56px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.brand.epGreen};
  img{
    width: 56px;
    height: 56px;
    margin-right: 16px;
  }
  p{
    ${props => props.theme.type.size.caption}
    ${props => props.theme.type.weight.prd.bold}
    margin: 0px;
  }
`;

const verticalMove = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 0% 100%; }
`;

const Link = styled.div`
  animation: ${verticalMove} 2s linear infinite;
  background-image: linear-gradient(0deg,#020F18, #04384A);
  background-size: 100% 400%;
  width: 24px;
  height: 120px;
  margin-left: 72px;
`;

const PlsaticVerticalStage = ({}) => {
  return (
    <Container>
      {
        stageList.map((stage, index, arr) =>
          <>
            <Stage key={index}>
              <img src={stage.img} alt='' />
              <p>
                {stage.title}
              </p>
            </Stage>
            {
              (arr.length-1)!==index&& <Link />
            }
          </>
        )
      }
    </Container>
  )
}

export default PlsaticVerticalStage;