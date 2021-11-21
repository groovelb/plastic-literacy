import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import Section from "../components/layout/Section";
import illust_title from "../assets/illust/illust_title.svg";
import circle_product from "../assets/illust/title/circle_product.svg";
import circle_waste from "../assets/illust/title/circle_waste.svg";
import circle_part from "../assets/illust/title/circle_part.svg";
import circle_flake from "../assets/illust/title/circle_flake.svg";
import ic_production from "../assets/illust/title/ic_production.svg";
import ic_dispose from "../assets/illust/title/ic_dispose.svg";
import ic_collect from "../assets/illust/title/ic_collect.svg";
import ic_recycling from "../assets/illust/title/ic_recycling.svg";
import logo_gs from "../assets/img/logo/logo_gscaltex.png";
import PlasticCirculation from "../chart/title/PlasticCirculation";
import { isMobile } from 'react-device-detect';

const circleSize = {
  width: isMobile ? window.innerWidth : 900,
  height: isMobile ? window.innerWidth : 900,
  margin: isMobile ? 0 : 20
};

const nodeSize = {
  width: isMobile ? 54 : 108,
  height: isMobile ? 54 : 108,
  margin: isMobile ? 0 : 20
};

const Container = styled(Section)`
  height: ${props => props.innerHeight + 'px'};
  width: 100%;
  ${props => props.theme.layout.flexColCenter}
  position: relative;
  @media only screen and (max-width: 480px) {
  
  }
`;

const TitleMsg = styled.p`
  ${props => props.theme.type.weight.exp.bold};
  ${props => props.theme.type.size.title};
  margin-bottom: 24px;
  text-align: center;
  color: #fff;
  margin: 92px 0 24px;
  @media only screen and (max-width: 480px) {
    position: absolute;
    margin:0;
    top:${`calc(${window.innerWidth / 2}px - 52px)`}
  }
`;

const SubTitleMsg = styled.p`
  width: 560px;
  text-align: center;
  word-break: keep-all;
  ${props => props.theme.type.weight.prd.light};
  ${props => props.theme.type.size.title2};
  color: #fff;
  margin-bottom: 64px;
  @media only screen and (max-width: 480px) {
    position: absolute;
    left:0;
    bottom: 120px;
    width: 100%;
    margin:0;
    padding:0 16px;
  }
`;

const IllustContainer = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.theme.layout.flexColCenter}
  @media only screen and (max-width: 480px) {
   
  }
`;

const Illust = styled.div`
  position: absolute;
  width: ${`${circleSize.width}px`};
  height: ${`${circleSize.height}px`};
  top: ${`calc((100% - ${circleSize.height}px)/2)`};
  left: ${`calc((100% - ${circleSize.width}px)/2)`};
  @media only screen and (max-width: 480px) {
    padding-top: 20px;
    width: 100%;
    height: auto;
    top: ${`${circleSize.margin}px`};
    left: 0%;
  }
`;

const Rotate = keyframes`
  from {
    transform: rotate( 0deg );
  }
  to {
    transform: rotate( 360deg );
  }
`;

const NodeContainer = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 480px) {
    position: absolute;
    top: 20px;
    left: 0;
    padding-top: 20px;
    height: auto;
  }
`;

const Node = styled.div`
  width: ${nodeSize.width + 'px'};
  height:  ${nodeSize.height + 'px'};
  position: absolute;
  top: ${props => `${props.y}px`};
  left: ${props => `${props.x}px`};
  transform-origin: center center;
  img{
    width: 100%;
    height: 100%;
  }
`;

const Logo = styled.div`
  ${props => props.theme.type.weight.prd.light};
  ${props => props.theme.type.size.caption};
  ${props => props.theme.layout.flexColCenter}
  color: #fff;
  img{
    width: 148px;
    height: auto;
  }
  @media only screen and (max-width: 480px) {
    position: absolute;
    top:${`calc(${window.innerWidth / 2}px + 54px)`};
    left: calc(50 - 40px);
    img{
    width: 80px;
    height: auto;
  }
  }
`;



const Title = ({
  refObject,
  currentChapter
}) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  const circleList = [
    {
      x: 1,
      y: 0,
      img: circle_product
    },
    {
      x: 1,
      y: 1,
      img: circle_waste
    },
    {
      x: 0,
      y: 1,
      img: circle_part
    },
    {
      x: 0,
      y: 0,
      img: circle_flake
    },
  ];

  const nodeList = [
    {
      x: circleSize.width / 2 - nodeSize.width / 2,
      y: nodeSize.margin,
      img: ic_production
    },
    {
      x: circleSize.width - nodeSize.width - nodeSize.margin,
      y: circleSize.height / 2 - nodeSize.height / 2,
      img: ic_dispose
    },
    {
      x: circleSize.width / 2 - nodeSize.width / 2,
      y: circleSize.height - nodeSize.height - nodeSize.margin,
      img: ic_collect
    },
    {
      x: nodeSize.margin,
      y: circleSize.height / 2 - nodeSize.height / 2,
      img: ic_recycling
    }
  ];

  useEffect(() => {
    console.log(window.innerHeight);
    setInnerHeight(window.innerHeight);
  }, [window]);

  return (
    <Container
      refObject={refObject}
      innerHeight={isMobile?360:innerHeight}
    >
      <IllustContainer>
        <Illust>
          <PlasticCirculation
            currentChapter={currentChapter}
          />
          <NodeContainer>
            {
              nodeList.map((node) =>
                <Node
                  x={node.x}
                  y={node.y}
                >
                  <img src={node.img} />
                </Node>
              )
            }
          </NodeContainer>

        </Illust>
        <TitleMsg>
          Plastic
          {isMobile&&<br />}
          Literacy
      </TitleMsg>
      <SubTitleMsg>
          플라스틱의 올바른 수거와 재활용에 대한 이해가 필요한 시대, GS칼텍스가 먼저 묻고 답하다.
      </SubTitleMsg>
        <Logo>
          {/* with <br /> */}
          <img src={logo_gs} alt='' />
        </Logo>
      </IllustContainer>
    </Container>
  )
}

export default Title;