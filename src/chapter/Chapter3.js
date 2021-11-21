import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import ChapterTitle from "../components/layout/ChapterTitle";
import useWindowSize from '../hook/useWindowSize';
import Section from "../components/layout/Section";
import ViewportWrapper from '../components/ViewportWrapper';
import MsgFullScreen from "../components/layout/MsgFullScreen";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import VideoBackground from "../components/videoBackground/VideoBackground";
import ToTop from '../components/motion/ToTop';
import ToLeft from '../components/motion/ToLeft';
import LiveArea from "../components/layout/LiveArea";
import PlasticCirculation from "../chart/title/PlasticCirculation2";

import circle_product from "../assets/illust/title/circle_product.svg";
import circle_waste from "../assets/illust/title/circle_waste.svg";
import circle_part from "../assets/illust/title/circle_part.svg";
import circle_flake from "../assets/illust/title/circle_flake.svg";
import ic_production from "../assets/illust/title/ic_production.svg";
import ic_dispose from "../assets/illust/title/ic_dispose.svg";
import ic_collect from "../assets/illust/title/ic_collect.svg";
import ic_recycling from "../assets/illust/title/ic_recycling.svg";
import color from "../assets/theme/atom/color";
import arrow_down_big from "../assets/img/icon/arrow_down_big.svg";
import ic_marker from "../assets/img/icon/ic_marker.svg";
import illust_flake_green from "../assets/illust/flake_green.svg";
import illust_flake_blue from "../assets/illust/flake_blue.svg";
import illust_flake_orange from "../assets/illust/flake_orange.svg";
import logo_short from "../assets/img/logo/logo_short.svg";
import illust_bottle from "../assets/illust/illust_bottle.svg";
import { isMobile } from 'react-device-detect';
import video_s4 from "../assets/video/video_c3_last.mp4";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
`;

const IllustContainer = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.theme.layout.flexColCenter}
  @media only screen and (max-width: 480px) {
   
  }
`;

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

const TitleCenter = styled.div`
  ${props => props.theme.type.size.h1};
  ${props => props.theme.type.weight.prd.bold};
  margin-bottom: 64px;
  text-align: center;
`;

const Text = styled.div`
  ${props => props.theme.type.size.body1};
  ${props => props.theme.type.weight.prd.regular};
  margin: 48px auto;
  width: 820px;
  word-break: keep-all;
  white-space: pre-line;
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
  width: 108px;
  height: 108px;
  position: absolute;
  top: ${props => `${props.y}px`};
  left: ${props => `${props.x}px`};
  transform-origin: center center;
`;

const Circle = styled.div`
    width: 420px;
    height: 400px;
    overflow: hidden;
    position: absolute;
    top: ${props => `${props.y}px`};
    left: ${props => `${props.x}px`};
    img{
      width: 800px;
      height: 800px;
      position: absolute;
      top: ${props => `-${props.y}px`};
      left: ${props => `-${props.x}px`};
      animation: ${Rotate} 280s linear infinite;
    }
`;

const Cycle = styled.div`
  width: 308px;
  height: 308px;
  border-radius: 50%;
  color: #fff;
  background-color: ${props => props.bgColor};
  ${props => props.theme.layout.flexColCenter};
  ${props => props.theme.type.size.title1};
  ${props => props.theme.type.weight.prd.bold};
  text-align: center;
  word-break: keep-all;
  white-space: pre-line;
  outline: ${props => props.isBorder ? 'solid 24px #D9F0F0' : 'none'};
`;

const Msg = styled.div`
  text-align: center;
  ${props => props.theme.type.size.title}
  ${props => props.theme.type.weight.exp.bold}
  color: ${props => props.theme.color.brand.epGreen};
  width: 100%;
    top: 400px;
    position: absolute;
`;


const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* padding-top: 240px; */
  /* padding-left: 64px; */
  /* opacity: ${props => props.currentSection === props.index ? 1 : 0}; */
  transition: opacity 0.3s ease-out;
  word-break: keep-all;
  white-space: pre-line;
  margin-bottom: 80px;
  h2{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
    margin-bottom: 48px;
    width: 360px;
  }
  p{
    width: calc(100% - 240px - 48px - 120px);
    padding-left: 0;
    ${props => props.theme.type.size.body2}
		${props => props.theme.type.weight.prd.regular}
  }
`;

const ImageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  transition: opacity 0.3s ease-out;
  word-break: keep-all;
  white-space: pre-line;
  margin-top: 48px;
  margin-bottom: 80px;
  h2{
    span{
      ${props => props.theme.type.size.title1}
      ${props => props.theme.type.weight.prd.bold}
      margin-bottom: 24px;
    }
    ${props => props.theme.type.size.title2}
    ${props => props.theme.type.weight.prd.light}
    margin-bottom: 48px;
    width: 280px;
  }
  div{
    display: flex;
    width: calc(100% - 280px - 48px );
    padding-left: 0;
    ${props => props.theme.type.size.body2}
		${props => props.theme.type.weight.prd.regular}
  }
`;

const ReyclingList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const MR = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexColCenter};
  position: relative;
`;

const Arrow = styled.img`

`;

const FlakeTunnel = styled.div`
  display: flex;
  position: absolute;
  z-index: 99;
  width: 100%;
  justify-content: space-around;
  background-image: linear-gradient(to bottom, rgba(8, 22, 36, 1), rgba(18, 34, 41, 1), rgba(8, 22, 36, 1));
  padding: 64px 0px;
  top: 320px;
  left: 0px;
`;

const Flake = styled.div`

`;

const Divider = styled.hr`
  color: ${props => props.theme.color.secondary400};
  height:0.5px;
  margin: 160px 0px;
`;

const ExpBox = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: #D9F0F0;
  padding: 24px;
  padding-left: 48px;
  border: solid 0.5px ${props => props.theme.color.brand.green};
  width: 512px;
  position: absolute;
  top: 100px;
  left: calc((100% - 512px)/2);
  ${props => props.theme.type.size.body2}
  color: ${props => props.theme.color.ui.strong};
`;

const Marker = styled.img`
  position: absolute;
  top: 24px;
  left: 16px;
`;

const Chapter3 = ({
  currentChapter,
  chapterObject,
  currentSection,
}) => {

  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const [isTitleTrigger, setIsTitleTrigger] = useState(false);
  const [isS1Trigger, setIsS1Trigger] = useState(false);
  const [isS2Trigger, setIsS2Trigger] = useState(false);
  const [isS1ProductTrigger, setIsS1ProductTrigger] = useState(false);
  const [isS2ProductTrigger, setIsS2ProductTrigger] = useState(false);
  const [isVideoTrigger, setIsVideoTrigger] = useState(false);
  const [isS3Trigger, setIsS3Trigger] = useState(false);
  const bottleList = [1, 2, 3];

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

  const recycleMethods = [
    {
      id: "cr",
      name: 'Chemical\nRecycling',
      color: color.brand.orange
    },
    {
      id: "mr",
      name: 'Mechanical\nRecycling',
      color: color.brand.emerald
    },
    {
      id: "tr",
      name: 'Thermal\nRecycling',
      color: color.brand.blue
    },
  ];

  return (
    <Container ref={chapterObject.ref}>
      <ViewportWrapper
        onEnterViewport={
          () => {
            setIsTitleTrigger(true);
          }
        }
        onLeaveViewport={
          () => {
            // setIsTitleTrigger(false);
          }
        }
      >
        <ChapterTitle
          numChapter={3}
          title={t("c3-title")}
          subTitle={t("c3-subtitle")}
          bgColor={'dark'}
          exp={t("c3-exp")}
          isTrigger={isTitleTrigger}
        />
      </ViewportWrapper>
      <Section>
        <ViewportWrapper
          onEnterViewport={
            () => {
              setIsS1Trigger(true);
            }
          }
          onLeaveViewport={
            () => {
              // setIsS1Trigger(false);
            }
          }
        >
          <ToTop
            isTrigger={isS1Trigger}
            index={0}
          >
            <LiveArea>
              <TitleCenter>
                {t('c3-s1-title')}
              </TitleCenter>
              <Wrapper>
                <IllustContainer>
                  <Illust>
                    <Msg>
                      CIRCULATION<br />
                      OF PLASTIC
                    </Msg>
                    <PlasticCirculation
                      currentChapter={0}
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
                </IllustContainer>
              </Wrapper>
              <Text>
                {t('c3-s1-exp')}
              </Text>
            </LiveArea>
          </ToTop>
        </ViewportWrapper>
      </Section>
      <Section>
        <ViewportWrapper
          onEnterViewport={
            () => {
              setIsS2Trigger(true);
            }
          }
          onLeaveViewport={
            () => {
              // setIsS2Trigger(false);
            }
          }
        >
          <ToTop
            isTrigger={isS2Trigger}
            index={0}
          >
            <LiveArea>
              <TextContent>
                <h2>
                  {t('c3-s2-title')}
                </h2>
                <p>
                  {t('c3-s2-exp')}
                </p>
              </TextContent>
              <ReyclingList>
                {
                  recycleMethods.map((method) =>
                    <Cycle
                      bgColor={method.color}
                      isBorder={method.id === 'mr'}
                    >
                      {method.name}
                    </Cycle>
                  )
                }
              </ReyclingList>
              <MR>
                <Arrow src={arrow_down_big} alt='' />
                <ExpBox>
                  <Marker src={ic_marker} alt='' />
                  {t('c3-s2-subexp')}
                </ExpBox>
                <FlakeTunnel>
                  <img src={illust_flake_blue} alt='' />
                  <img src={illust_flake_green} alt='' />
                  <img src={illust_flake_orange} alt='' />
                </FlakeTunnel>
              </MR>
              <ImageContent>
                <h2>
                  <span>
                    {t('c3-s3-title')}
                  </span>
                  <br />
                  {t('c3-s3-exp')}
                </h2>
                <ViewportWrapper
                  onEnterViewport={
                    () => {
                      setIsS1ProductTrigger(true);
                    }
                  }
                >
                  {
                    bottleList.map((bottle, i) =>
                      <ToLeft
                        isTrigger={isS1ProductTrigger}
                        index={i}
                      >
                        <img src={illust_bottle} alt='' />
                      </ToLeft>
                    )
                  }
                </ViewportWrapper>
              </ImageContent>
              <Divider />
              <TextContent>
                <h2>
                  {t('c3-s4-title')}
                </h2>
                <p>
                  {t('c3-s4-exp')}
                </p>
              </TextContent>
              <ReyclingList>
                <Cycle
                  bgColor={'#F0FFFA'}
                  isBorder={true}
                  style={{ color: '#009999' }}
                >
                  <img src={logo_short} alt='' />
              Mechanical <br />
              Recycling
            </Cycle>
              </ReyclingList>
              <MR>
                <Arrow src={arrow_down_big} alt='' />
                <ExpBox>
                  <Marker src={ic_marker} alt='' />
                  {t('c3-s4-subexp')}
                </ExpBox>
                <FlakeTunnel>
                  <img src={illust_flake_blue} alt='' />
                  <img src={illust_flake_green} alt='' />
                  <img src={illust_flake_orange} alt='' />
                </FlakeTunnel>
              </MR>
              <ImageContent>
                <h2>
                  <span>
                    {t('c3-s5-title')}
                  </span>
                  <br />
                  {t('c3-s5-exp')}
                </h2>
                <ViewportWrapper
                  onEnterViewport={
                    () => {
                      setIsS2ProductTrigger(true);
                    }
                  }
                >
                  {
                    bottleList.map((bottle, i) =>
                      <ToLeft
                        isTrigger={isS2ProductTrigger}
                        index={i}
                      >
                        <img src={illust_bottle} alt='' />
                      </ToLeft>
                    )
                  }
                </ViewportWrapper>
              </ImageContent>
              <Divider />
              <TextContent>
                <h2>
                  {t('c3-s6-title')}
                </h2>
                <p>
                  {t('c3-s6-exp')}
                </p>
              </TextContent>
            </LiveArea>
          </ToTop>
        </ViewportWrapper>
        <SpaceFullScreen
          numX={0.75}
        />
        <ViewportWrapper
          onEnterViewport={() => {
            setIsVideoTrigger(true);
          }}
          onLeaveViewport={() => {
            setIsVideoTrigger(false);
          }}
        >
          <VideoBackground
            isVideoPlay={isVideoTrigger}
            width={windowSize.width}
            height={windowSize.height}
            isFilter={true}
            videoSrc={video_s4}
            refObject={chapterObject.refSection[5]}
            isTrigger={isVideoTrigger}
          >
            <MsgFullScreen
              title={t('c3-s8-title')}
              exp={t('c3-s8-exp')}
            />
          </VideoBackground>
        </ViewportWrapper>
      </Section>
    </Container>
  )
}

export default Chapter3;