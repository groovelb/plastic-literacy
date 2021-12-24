import React, {useEffect, useState} from 'react';
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
  opacity: ${props => props.depthList.includes(props.index)?'1':'0.25'};
  transition: opacity 0.3s ease-in;
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
  0% { background-position: 0% 0%; opacity: 0.2}
  100% { background-position: 0% 100%;  opacity: 0.75}
`;

const Link = styled.div`
  animation: ${verticalMove} 2s linear infinite;
  animation-delay: ${props => `${props.delay*0.5}s`};
  background-image: linear-gradient(0deg,#020F18, #04384A);
  background-size: 100% 400%;
  width: 24px;
  height: 120px;
  margin-left: 72px;
  opacity: ${props => props.depthList.includes(props.index)?'0.25':'0.1'};
  transition: opacity 0.3s ease-in;
`;

const PlsaticVerticalStage = ({currentStage}) => {
  const [depthList,setDepthList] = useState([0,1]);

  useEffect(() => {
    if(currentStage===0) setDepthList([0,1]);
    if(currentStage===1) setDepthList([2]);
    if(currentStage===2) setDepthList([3,4]);
  },[currentStage])

  return (
    <Container>
      {
        stageList.map((stage, index, arr) =>
          <>
            <Stage
              key={index}
              index={index}
              depthList={depthList}
            >
              <img src={stage.img} alt='' />
              <p>
                {stage.title}
              </p>
            </Stage>
            {
              (arr.length-1)!==index&& <Link
                key={index}
                index={index}
                depthList={depthList}
                delay={index} />
            }
          </>
        )
      }
    </Container>
  )
}

export default PlsaticVerticalStage;