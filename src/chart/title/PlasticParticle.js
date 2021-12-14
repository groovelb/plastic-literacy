import React, { useEffect, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import useWindowSize from '../../hook/useWindowSize';

// img
import illust_p1 from "../../assets/img/icon/particle/p1.svg";
import illust_p2 from "../../assets/img/icon/particle/p2.svg";
import illust_p3 from "../../assets/img/icon/particle/p3.svg";
import illust_p4 from "../../assets/img/icon/particle/p4.svg";
import illust_p5 from "../../assets/img/icon/particle/p5.svg";
import illust_p6 from "../../assets/img/icon/particle/p6.svg";
import illust_p7 from "../../assets/img/icon/particle/p7.svg";
import illust_p8 from "../../assets/img/icon/particle/p8.svg";
import illust_p9 from "../../assets/img/icon/particle/p9.svg";

const particleNum = { x: 8, y: 8 };
const particleSize = 40;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
`;

const Rotae = keyframes`
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
`;

const Particle = styled.div`
  position: absolute;
  top: ${props => props.y};
  left: ${props => props.x};
  width: ${`${particleSize}px`};
  height: ${`${particleSize}px`};
  ${props => props.theme.layout.flexColCenter};
  opacity: ${props => props.triggerStage===2?0:0.25};
  animation: ${props => props.triggerStage===2?'none':Rotae} 15s linear;
  animation-iteration-count: infinite;
  transition: all 1s ease-out;
  img{
    width: 40px;
    height: auto;
    transform: ${props => `rotate(${props.deg}deg)`};
  }
  :before{
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: ${props => props.theme.color.brand.secondary900};
    /* background-color: #f0f0f0; */
    position: absolute;
    top: calc(50% - 2px);
    left: calc(50% - 2px);
  }
`;

const imgList = [
  illust_p1,
  illust_p2,
  illust_p3,
  illust_p4,
  illust_p5,
  illust_p6,
  illust_p7,
  illust_p8,
  illust_p9
];






const PlasticParticle = ({
  triggerStage
}) => {

  const windowSize = useWindowSize();
  const [particleData, setParticleData] = useState([]);

  // 1st Setting
  useEffect(() => {
    let isMounted = true;

    if (isMounted){
      let particleList = [];

      for (let i = 0; i < particleNum.y; i++) {
        for (let j = 0; j < particleNum.x; j++) {
          let num = parseInt(Math.random() * 6);
          let deg = Math.random()*360
          let data = {
            x: `calc((${(j + 0.5) / particleNum.x} * 100%) - ${particleSize/2}px)`,
            y: `calc((${(i + 0.5) / particleNum.y} * 100%) - ${particleSize/2}px)`,
            x2: `calc(${(j + 1 - particleNum.x/2)}*50% - ${particleSize/2}px)`,
            y2: `calc(${(i + 1 - particleNum.x/2)}*50% - ${particleSize/2}px)`,
            img: imgList[num],
            deg: deg
          };
          particleList.push(data);
        }
      }
      setParticleData(particleList);  
    }
    
    return () => {
      console.log('unmounted');
      isMounted = false;
    }
  },[]);

  // Trigger
  useEffect(() => {

  },[triggerStage]);


  return (
    <Container>
      {
        particleData.map((particle,i) => 
          <Particle
            x={triggerStage===2?particle.x2:particle.x}
            y={triggerStage===2?particle.y2:particle.y}
            deg={particle.deg}
            triggerStage={triggerStage}
          >
            <img src={particle.img} alt={''} />
          </Particle>
        )
      }
    </Container>
  )
}

export default PlasticParticle;