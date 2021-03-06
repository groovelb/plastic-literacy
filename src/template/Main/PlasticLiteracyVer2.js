import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import PlasticCirculation from "../../chart/title/PlasticCirculationVer2";
import VideoEarth from "../../components/videoBackground/VideoEarth";
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
import video_earth from "../../assets/video/earth_spin.mp4"

import ic_scroll from "../../assets/icon/ic_keep_scroll_green.svg";


const circleSize = {
  width: isMobile ? window.innerWidth : window.innerHeight - 200,
  height: isMobile ? window.innerWidth : window.innerHeight - 200,
  margin: isMobile ? 0 : 20
};

const Wrapper = styled.div`
  margin-top: -48px;
  width: 100%;
`;

const nodeSize = {
  width: isMobile ? 80 : 144,
  height: isMobile ? 80 : 144,
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
  width: 544px;
  height: 544px;
  position: absolute;
  top: calc((100% - 544px)/2);
  left: calc((100% - 544px)/2);
  overflow: hidden;
  ${props => props.theme.layout.flexColCenter}
  animation: ${FadeIn} 0.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  opacity: 0;
  @media only screen and (max-width: 480px) {
    width: ${`calc(100% - ${nodeSize.width * 2}px)`};
    height: ${`calc(100% - ${nodeSize.width * 2}px)`};
    top: ${nodeSize.height + 10}px;
    left: ${nodeSize.width}px;
  }
  h1{
    ${props => props.theme.type.weight.prd.black}
    font-size: 60px;
    color: #FFFFFF;
    text-align: center;
    line-height: 60px;
    text-shadow: 0 0 20px rgba(15,30,45,0.34);
    margin-bottom: 16px;
    z-index: 9;
    @media only screen and (max-width: 480px) {
      font-size: 28px;
      line-height: 1.2;
    }
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
    padding: 0 64px;
    ${props => props.theme.type.weight.prd.bold}
    text-shadow: 0 0 20px rgba(15,30,45,0.34);
    z-index: 9;
    @media only screen and (max-width: 480px) {
      display: none;
    }
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
  @media only screen and (max-width: 480px) {
    /* z-index: 9; */
    width: ${`calc(100% - ${nodeSize.width * 2}px + 16px)`};
    height: ${`calc(100% - ${nodeSize.width * 2}px + 16px)`};
    top: ${nodeSize.height + 10 - 8}px;
    left: ${nodeSize.width - 8}px;
  }
`;

const Illust = styled.div`
  position: absolute;
  width: ${`${circleSize.width}px`};
  height: ${`${circleSize.height}px`};
  top: ${`calc((100% - ${circleSize.height}px)/2 + 24px)`};
  left: ${`calc((100% - ${circleSize.width}px)/2)`};
  @media only screen and (max-width: 480px) {
    margin-top: -48px;
    padding-top: 20px;
    width: 100%;
    height: auto;
    top: 108px;
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
    @media only screen and (max-width: 480px) {
      height: 32px;
      width: auto;
    }
  }
  @media only screen and (max-width: 480px) {
    p{
      ${props => props.theme.type.size.caption}
      margin-bottom: 12px;
    }
  }
`;

const ExpFloating = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  padding:0 48px;
  bottom: -100px;
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.title3}
  text-align: center;
`;

const nodeList = [
  {
    x: circleSize.width / 2 - nodeSize.width / 2,
    y: nodeSize.margin,
    img: illust_synthesis,
    title: '??????',
    exp: '???????????? ??????????????? ?????? ????????? ?????? ????????? ?????? ???????????? ???????????? ????????? ??????????????? ??????????????????.'
  },
  {
    x: circleSize.width - nodeSize.width - nodeSize.margin,
    y: circleSize.height / 2 - nodeSize.height / 2,
    img: illust_produce,
    title: '??????',
    exp: '????????? ??????????????? ???????????? ???????????? ??????????????? ?????? ????????? ???????????? ???????????? ?????? ?????? ???????????????.'
  },
  {
    x: circleSize.width / 2 - nodeSize.width / 2,
    y: circleSize.height - nodeSize.height - nodeSize.margin,
    img: illust_dispose,
    title: '??????',
    exp: '????????? ????????? ???????????? ???????????? ???????????? ???????????? ????????? ??????????????? ??????????????? ?????? ????????? ???????????????.'
  },
  {
    x: nodeSize.margin,
    y: circleSize.height / 2 - nodeSize.height / 2,
    img: illust_crush,
    title: '??????',
    exp: '??????????????? ????????? ?????????????????? ?????? ????????? ??????????????? ???????????? ??? ????????? ????????? ?????? ??? ???????????????.'
  },
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
  @media only screen and (max-width: 480px) {
    bottom: -200px;
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
    <Wrapper>
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
          <img src={illust_inner_circle} alt='' />??
        </InnerCircle>
        <Earth
          isFilter={hoverIndex !== 0}
        >
          <h1>
            {
              hoverIndex === 0 &&
              <>
                PLASTIC <br />
                LITERACY
              </>
            }
            {
              hoverIndex !== 0 &&
              <>
                {nodeList[hoverIndex - 1].title}
              </>
            }

          </h1>
          <p>
            {
              hoverIndex === 0 && t('title-subtitle')
            }
            {
              hoverIndex !== 0 && nodeList[hoverIndex - 1].exp
            }
          </p>
          {/* <img src={illust_earth_green} alt=' ' /> */}
          <VideoEarth
            isVideoPlay={true}
            width={isMobile?window.innerWidth:924}
            height={isMobile?window.innerWidth:924}
            isFilter={true}
            videoSrc={'https://firebasestorage.googleapis.com/v0/b/data-driven-design-d2418.appspot.com/o/earth_spin.mp4?alt=media&token=7d0b37cd-0a3b-4398-ba2c-692a33a07299'}
            isTrigger={true}
          />
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
                    // setHoverIndex(i + 1);
                  }
                }
                onMouseLeave={
                  () => {
                    // setHoverIndex(0);
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
        {
          isMobile &&
          <ExpFloating>
            {
              hoverIndex === 0 && t('title-subtitle')
            }
            {
              hoverIndex !== 0 && nodeList[hoverIndex - 1].exp
            }
          </ExpFloating>
        }
      </Illust>
    </Wrapper>
  )
}

export default PlasticLiteracy;