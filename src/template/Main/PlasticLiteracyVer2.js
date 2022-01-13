import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import PlasticCirculation from "../../chart/title/PlasticCirculationVer2";
import PlasticCirculationC3 from "../../chart/title/PlasticCirculationC3";
import illust_inner_circle from "../../assets/illust/inner_circle_illust.svg";
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import ic_production from "../../assets/illust/title/ic_ep_produce.svg";
import ic_dispose from "../../assets/illust/title/ic_ep_dispose.svg";
import ic_collect from "../../assets/illust/title/ic_ep_collect.svg";
import ic_recycling from "../../assets/illust/title/ic_ep_recycle.svg";

import illust_earth_green from "../../assets/illust/title/illust_earth_green.svg";
import illust_produce from "../../assets/illust/illust_produce.svg";
import illust_dispose from "../../assets/illust/illust_dispose.svg";
import illust_crush from "../../assets/illust/illust_crush.svg";
import illust_synthesis from "../../assets/illust/illust_synthesis.svg";

import ic_scroll from "../../assets/icon/ic_keep_scroll_white.svg";


const circleSize = {
  width: isMobile ? window.innerWidth : window.innerHeight - 200,
  height: isMobile ? window.innerWidth : window.innerHeight - 200,
  margin: isMobile ? 0 : 20
};

const nodeSize = {
  width: isMobile ? 54 : 160,
  height: isMobile ? 54 : 160,
  margin: isMobile ? 0 : 0
};

const rotate = keyframes`
  0%{transform: rotate(0deg); opacity: 0;}
  4%{transform: rotate(14deg); opacity: 1;}
  100%{transform: rotate(360deg); opacity: 1;}
`;

const FadeIn = keyframes`
  0%{opacity: 0}
  100%{opacity: 1}
`;

const Earth = styled.div`
  width: 440px;
  height: 440px;
  position: absolute;
  top: calc((100% - 440px)/2);
  left: calc((100% - 440px)/2);
  overflow: hidden;
  ${props => props.theme.layout.flexColCenter}
  animation: ${FadeIn} 0.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  opacity: 0;
  h1{
    ${props => props.theme.type.weight.prd.black}
    font-size: 60px;
    color: #FFFFFF;
    text-align: center;
    line-height: 60px;
    text-shadow: 0 0 20px rgba(15,30,45,0.34);
    margin-bottom: 16px;
    z-index: 9;
  }
  img{
    position: absolute;
    z-index:-1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  p{
    text-align: center;
    padding: 0 24px;
    ${props => props.theme.type.weight.prd.bold}
    text-shadow: 0 0 20px rgba(15,30,45,0.34);
    z-index: 9;
  }
  :before{
    content: '';
    position: absolute;
    border-radius: 50%;
    transition: all 0.6s ease-in-out;
    background-color: ${props => props.isFilter ? 'rgba(0,0,0,0.36)' : 'rgba(0,0,0,0)'};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const InnerCircle = styled.div`
  width: calc(100% - 260px);
  height: calc(100% - 260px);
  position: absolute;
  top: 130px;
  left: 130px;
  animation: ${rotate} 48s linear infinite;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
  }
`;

const Illust = styled.div`
  position: absolute;
  width: ${`${circleSize.width}px`};
  height: ${`${circleSize.height}px`};
  top: ${`calc((100% - ${circleSize.height}px)/2 + 24px)`};
  left: ${`calc((100% - ${circleSize.width}px)/2)`};
  @media only screen and (max-width: 480px) {
    padding-top: 20px;
    width: 100%;
    height: auto;
    top: ${`${circleSize.margin}px`};
    left: 0%;
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
  animation: ${FadeIn} 0.5s linear;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: ${props => `${props.index * 0.4}s`};
  img{
    width: 64%;
    height: 64%;
  }
`;

const NodeCircle = styled.div`
  width: ${nodeSize.width + 'px'};
  height:  ${nodeSize.height + 'px'};
  background-color: ${props => props.theme.color.brand.epPurple};
  ${props => props.theme.layout.flexColCenter}
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0,0,0,0);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-top: 0px;
  :hover{
    margin-top: -12px;
    box-shadow: 0px 0px 8px 16px rgba(34, 7, 73, 0.5);
  }
  img{
    /* width: 80%;
    height: 80%; */
    height: 64px;
    width: auto;
    margin-bottom: 8px;
    margin-top: 16px;
  }
`;

const nodeList = [
  {
    x: circleSize.width / 2 - nodeSize.width / 2,
    y: nodeSize.margin,
    img: illust_produce,
    title: '순환생산',
    exp: 'GS칼텍스만의 재활용 기술로 기존에 불가능했던 가전.자동차 부품의 순환생산이 가능합니다.'
  },
  {
    x: circleSize.width - nodeSize.width - nodeSize.margin,
    y: circleSize.height / 2 - nodeSize.height / 2,
    img: illust_dispose,
    title: '배출.분해',
    exp: '폐기물들은 플라스틱 생태계의 배출 단계를 거쳐 재활용 공정의 첫단계로 분해에 들어갑니다.'
  },
  {
    x: circleSize.width / 2 - nodeSize.width / 2,
    y: circleSize.height - nodeSize.height - nodeSize.margin,
    img: illust_crush,
    title: '정렬.분쇄',
    exp: '분해된 폐기물들은 재질에 따라 분류후 고순도 플레이크 제작을 위해 분쇄과정을 거칩니다.'
  },
  {
    x: nodeSize.margin,
    y: circleSize.height / 2 - nodeSize.height / 2,
    img: illust_synthesis,
    title: '처리.합성',
    exp: 'GS칼텍스만의 특수 공정이 만들어낸 고순도 플레이크는 고품질 제품의 부품으로 사용됩니다.'
  }
];

const Cycle = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${FadeIn} 0.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 2s;
`;

const Blink = keyframes`
	0% {opacity: 0}
	100% {opacity: 1}
`;

const ButtonScroll = styled.div`
	width: 64px;
	height: 64px;
	position: absolute;
	left: calc(50% - 32px);
	bottom: -64px;
	animation: ${Blink} 2s ease-out 0s infinite;
	cursor: pointer;
	z-index: 99;
  ${props => props.theme.layout.flexColCenter}
  img{
    width: 48px;
  }
`;



const PlasticLiteracy = ({
  currentChapter,
  starChatper,
  id,
  onClick
}) => {

  const { t } = useTranslation();
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <Illust>
      <ButtonScroll onClick={onClick}>
				<img src={ic_scroll} alt='' />
			</ButtonScroll>
      <Cycle>
        <PlasticCirculation
          currentChapter={currentChapter}
          starChatper={starChatper}
          id={id}
        />
      </Cycle>
      <InnerCircle>
        <img src={illust_inner_circle} alt='' />Î
      </InnerCircle>
      <Earth
        isFilter={hoverIndex !== 0}
      >
        <h1>
          PLASTIC <br />
          LITERACY
        </h1>
        <p>
          {
            hoverIndex === 0 && t('title-subtitle')
          }
          {
            hoverIndex !== 0 && nodeList[hoverIndex - 1].exp
          }
        </p>
        <img src={illust_earth_green} alt=' ' />
      </Earth>
      <NodeContainer>
        {
          nodeList.map((node, i) =>
            <Node
              x={node.x}
              y={node.y}
              index={i + 1}
              onMouseOver={
                () => {
                  setHoverIndex(i + 1);
                }
              }
              onMouseLeave={
                () => {
                  setHoverIndex(0);
                }
              }
            >
              <NodeCircle>
                <img src={node.img} />
                <p>
                  {node.title}
                </p>
              </NodeCircle>
            </Node>
          )
        }
      </NodeContainer>
    </Illust>
  )
}

export default PlasticLiteracy;