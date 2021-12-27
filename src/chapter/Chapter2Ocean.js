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
import ImageBackground from "../components/videoBackground/ImageBackground";
import useWindowSize from '../hook/useWindowSize';
import ViewportWrapper from '../components/ViewportWrapper';
import SectionContentHorizon from "../components/textContainer/SectionContentHorizon";
import Report from "../components/report/Report";
import PlasticVerticalStage from "../components/navigation/PlasticVerticalStage";
import bg_transition from '../assets/img/bg/bg_c2_ocean_transition.jpg';


// report image
import { videoURL } from '../assets/mediaURL';
import img_s1_s1 from "../assets/img/c2/report/c2-s2-p1-img.PNG";
import img_s1_s2 from "../assets/img/c2/report/c2-s2-p2-img.PNG";
import img_s2_s1 from "../assets/img/c2/report/c2-s3-p1-img.jpg";
import img_s2_s2 from "../assets/img/c2/report/c2-s3-p2-img.PNG";


// Data
import { plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7 } from '../data/chapter1';
import video_transition from "../assets/video/video_c1_transition.mp4";
import video_transition2 from "../assets/video/video_c2_c3_transition.mp4";

const sankeyHeight = 324;


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
  z-index: 9;
  top: 0px;
  padding-top: 116px;
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
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  height: ${window.innerHeight * 1.2 + 'px'};
`;

const Chapter2 = ({
  chapterObject,
  currentChapter,
}) => {

  const [currentSection, setCurrentSection] = useState(0);
  const [isVideoTrigger, setIsVideoTrigger] = useState(false);
  const [isVideo2Trigger, setIsVideo2Trigger] = useState(false);
  const [isChartActive, setIsChartActive] = useState(false);
  const [currentReportStage,setCurrentReportStage] = useState(0);

  const { t } = useTranslation();
  const windowSize = useWindowSize();

  const reportData = [
    {
      title: t('c2-summary4-title'),
      sectionList: [
        {
          title: t('c2-summary4-s1-title'),
          exp: t('c2-summary4-s1-exp'),
          type: 'image',
          src: videoURL.c2.summary.img.s4_s1
        },
        {
          title: t('c2-summary4-s2-title'),
          exp: t('c2-summary4-s2-exp'),
          type: 'video',
          src: videoURL.c2.summary.video.s4_s2
        },
      ]
    },
    {
      title: t('c2-summary5-title'),
      sectionList: [
        {
          title: t('c2-summary5-s1-title'),
          exp: t('c2-summary5-s1-exp'),
          type: 'video',
          src: videoURL.c2.summary.video.s5_s1
        },
        {
          title: t('c2-summary5-s2-title'),
          exp: t('c2-summary5-s2-exp'),
          type: 'video',
          src: videoURL.c2.summary.video.s5_s2
        },
      ]
    },
    {
      title: t('c2-summary6-title'),
      sectionList: [
        {
          title: t('c2-summary6-s1-title'),
          exp: t('c2-summary6-s1-exp'),
          type: 'video',
          src: videoURL.c2.summary.video.s6_s1
        },
        {
          title: t('c2-summary6-s2-title'),
          exp: t('c2-summary6-s2-exp'),
          type: 'video',
          src: videoURL.c2.summary.video.s6_s2
        },
      ]
    },
  ];

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
              <Wrapper>
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
              </Wrapper>
            )
          }
          <ViewportWrapper
            onEnterViewport={() => {
              setCurrentSection(4);
            }}
          >
            <SpaceFullScreen
              numX={0.25}
            />
            <Report
              reportData={reportData}
              currentStage={currentReportStage}
              setCurrentStage={setCurrentReportStage}
            />
          </ViewportWrapper>
          {
            currentSection === 4 && <>
              <PlasticVerticalStage currentStage={currentReportStage} />
            </>
          }
          <SpaceFullScreen
            refObject={chapterObject.refSection[4]}
            numX={0.25}
          />
          <ViewportWrapper
            onEnterViewport={() => {
              setCurrentSection(5);
              setIsVideo2Trigger(true);
            }}
            onLeaveViewport={() => {
              setIsVideo2Trigger(false);
            }}
          >
            <ImageBackground
              isFilter={true}
              img={videoURL.c2.s9.bg}
              refObject={chapterObject.refSection[5]}
              isTrigger={currentSection === 5}
              isTrigger={isVideo2Trigger}
            >
              <MsgFullScreen
                title={t('c2-s9-title')}
                exp={t('c2-s9-exp')}
              />
            </ImageBackground>
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