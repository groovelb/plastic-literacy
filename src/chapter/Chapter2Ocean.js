import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitle";
import LiveArea from "../components/layout/LiveArea";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import SankeyOcean from "../chart/chaper2/SankeyOcean";
import VideoBackground from "../components/videoBackground/VideoBackground";
import useWindowSize from '../hook/useWindowSize';
import ViewportWrapper from '../components/ViewportWrapper';
import SectionContentHorizon from "../components/textContainer/SectionContentHorizon";


// Data
import { plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7 } from '../data/chapter1';
import video_transition from "../assets/video/video_c1_transition.mp4";
import video_transition2 from "../assets/video/video_c2_c3_transition.mp4";

const sankeyHeight = 360;


const Container = styled.div`
  width: 100%;
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Chart = styled.div`
  position: fixed;
  top: 0px;
  padding-top: 80px;
  box-sizing: content-box;
  width: ${props => props.theme.size.liveArea};
  box-shadow: 0px 40px 80px 60px ${props => props.theme.color.ui.bg.dark};
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  /* width: ${props => `calc(calc(${props.theme.size.liveArea} - 308px - 48px))`}; */
  height: ${sankeyHeight + 'px'};
  background-color: ${props => props.theme.color.ui.bg.dark};
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.3s ease-out;
  /* animation: ${FadeIn} 1s linear forwards; */
  @media only screen and (max-width: 480px) {
    width: 100%;
    left: 0%;
  }
`;

const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  /* padding-top: 240px; */
  height: ${window.innerHeight * 2 + 'px'};
  /* opacity: ${props => props.currentSection === props.index ? 1 : 0}; */
  transition: opacity 0.3s ease-out;
  word-break: keep-all;
  white-space: pre-line;

  p{
    width: calc(100% - 424px - 48px);
    /* padding-left: 48px; */
    /* width: 100%; */
    /* padding-right: 120px; */
    ${props => props.theme.type.size.body2}
    ${props => props.theme.type.weight.prd.regular}
    word-break: break-all;
    margin-top: -8px;
  }
  @media only screen and (max-width: 480px) {
    padding-left: 0px;
    flex-direction: column;
    p{
      width: 100%;
      padding:0;
     
    }
  }
`;

const SectionTitle = styled.div`
  width: 424px;
  display: flex;
  margin-bottom: 72px;
  h1{
    ${props => props.theme.type.size.title}
    ${props => props.theme.type.weight.prd.num}
    margin-right: 16px;
    width: 80px;
    height: 80px;
    ${props => props.theme.layout.flexColCenter};
    color: ${props => props.theme.color.brand.epGreen};
    border: 0.5px solid ${props => props.theme.color.brand.epGreen};
    /* background-color: ${props => props.theme.color.brand.epDeepPurple}; */
    /* margin-top: -4px; */
  }
  h2{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
    width: calc(424px - 80px);
    margin-top: -8px;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;


const Space = styled.div`
  height: 240px;
`;

const SectionFull = styled.div`
  height: ${props => props.innerHeight + 'px'};
  width: 100%;
  ${props => props.theme.layout.flexColCenter}
  position: relative;
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  height: 200px;
  overflow: hidden;
  margin-top: 64px;
`;

const Stage = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  left: ${props => `calc(100% * ${(props.index - props.currentSlide)})`};
  transition: left 0.3s ease-in-out;
`;

const StageTitle = styled.div`
  width: 240px;
  margin-right: 48px;
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.title2}
`;

const StageExp = styled.div`
  width: calc(100% - 240px - 240px);
  ${props => props.theme.type.weight.prd.light}
  ${props => props.theme.type.size.body1}
`;

const BttNext = styled.div`
  z-index: 99;
  position: absolute;
  width: 148px;
  top:0;
  right:0;
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.body1}
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  :hover{
    opacity: 1;
  }
`;

const Chapter2 = ({
  chapterObject,
  currentChapter,
}) => {

  const [currentSection, setCurrentSection] = useState(0);
  const [isVideoTrigger, setIsVideoTrigger] = useState(false);
  const [isVideo2Trigger, setIsVideo2Trigger] = useState(false);
  const [isChartActive, setIsChartActive] = useState(false);

  const { t } = useTranslation();
  const windowSize = useWindowSize();

  // String
  const contentOcean = [
    {
      title: t('c2-s6-title'),
      exp: t('c2-s6-exp')
    },
    {
      title: t('c2-s7-title'),
      exp: t('c2-s7-exp')
    },
    {
      title: t('c2-s8-title'),
      exp: t('c2-s8-exp')
    }
  ];

  useEffect(() => {
    if (currentSection === 0) {
      setIsChartActive(false);
    } else if (currentSection === 1) {
      setIsChartActive(true);
    } else if (currentSection === 2) {
      setIsChartActive(true);
    } else if (currentSection === 3) {
      setIsChartActive(true);
    }
    else if (currentSection === 4) {
      setIsChartActive(false);
    }
  }, [currentSection]);

  return (
    <Container ref={chapterObject.ref}>
      <ViewportWrapper
        onEnterViewport={() => {
          setCurrentSection(0);
          setIsVideoTrigger(true);
        }}
        onLeaveViewport={() => {
          setIsVideoTrigger(false);
        }}
      >
        <VideoBackground
          isVideoPlay={true}
          width={windowSize.width}
          height={windowSize.height}
          isFilter={true}
          videoSrc={video_transition}
          refObject={chapterObject.refSection[5]}
          isTrigger={isVideoTrigger}
        >
          <MsgFullScreen
            title={t('c2-s5-title')}
            exp={t('c2-s5-exp')}
          />
        </VideoBackground>
      </ViewportWrapper>
      <SpaceFullScreen
        numX={1.25}
      />
      <Section>
        <LiveArea>
          {
            currentChapter === 3 &&
            <Chart
              isActive={isChartActive}
            >
              <SankeyOcean
                // width={1200}
                // height={sankeyHeight}
                currentStage={currentSection}
                currentChapter={currentChapter}
              />
            </Chart>
          }
          {
            contentOcean.map((section, i) =>
              <ViewportWrapper
                onEnterViewport={() => {
                  console.log("enter: " + (i + 1));
                  setCurrentSection(i + 1);
                }}
              >
                <SectionContentHorizon
                  title={section.title}
                  exp={section.exp}
                  index={i}
                />
              </ViewportWrapper>
            )
          }
          <SpaceFullScreen
            refObject={chapterObject.refSection[4]}
            numX={0.25}
          />
          <ViewportWrapper
            onEnterViewport={() => {
              setCurrentSection(4);
              setIsVideo2Trigger(true);
            }}
            onLeaveViewport={() => {
              setIsVideo2Trigger(false);
            }}
          >
            <VideoBackground
              isVideoPlay={true}
              width={windowSize.width}
              height={windowSize.height}
              isFilter={true}
              videoSrc={video_transition2}
              refObject={chapterObject.refSection[5]}
              isTrigger={isVideo2Trigger}
            >
              <MsgFullScreen
                exp={t('c2-s9-exp')}
              />
            </VideoBackground>
          </ViewportWrapper>
          <SpaceFullScreen
            numX={0.5}
          />
        </LiveArea>
      </Section>
    </Container>
  )
}

export default Chapter2;