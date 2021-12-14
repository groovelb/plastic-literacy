import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitle";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import LiveArea from "../components/layout/LiveArea";
import SankeyLand from "../chart/chaper2/SankeyLand";
import ViewportWrapper from '../components/ViewportWrapper';
import bg_c2 from "../assets/img/bg/title_bg_c2.png";
import SectionContentHorizon from "../components/textContainer/SectionContentHorizon";
import ImageBackground from "../components/videoBackground/ImageBackground";
import useWindowSize from '../hook/useWindowSize';
import VideoBackground from "../components/videoBackground/VideoBackground";
import bg_video_s1 from "../assets/video/video_c2_s1.mp4";
import Report from "../components/report/Report";
import PlasticVerticalStage from "../components/navigation/PlasticVerticalStage";

// report image
import img_s1_s1 from "../assets/img/c2/report/c2-s2-p1-img.PNG";
import img_s1_s2 from "../assets/img/c2/report/c2-s2-p2-img.PNG";
import img_s2_s1 from "../assets/img/c2/report/c2-s3-p1-img.jpg";
import img_s2_s2 from "../assets/img/c2/report/c2-s3-p2-img.PNG";
import img_s3_s1 from "../assets/img/c2/report/c2-s3-p1-img.jpg";
import img_s3_s2 from "../assets/img/c2/report/c2-s3-p2-img.PNG";
import bg_transition from '../assets/img/bg/c2_land_transition.jpg';

const sankeyHeight = 424;

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
  padding-top: 180px;
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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  height: ${window.innerHeight * 2 + 'px'};
`;

const Chapter2 = ({
  chapterObject,
  currentChapter,
}) => {

  const { t } = useTranslation();
  const windowSize = useWindowSize();

  const reportData = [
    {
      title: t('c2-summary1-title'),
      sectionList: [
        {
          title: t('c2-summary1-s1-title'),
          exp: t('c2-summary1-s1-exp'),
          img: img_s1_s1
        },
        {
          title: t('c2-summary1-s2-title'),
          exp: t('c2-summary1-s2-exp'),
          img: img_s1_s2
        },
      ]
    },
    {
      title: t('c2-summary2-title'),
      sectionList: [
        {
          title: t('c2-summary2-s1-title'),
          exp: t('c2-summary2-s1-exp'),
          img: img_s2_s1
        },
        {
          title: t('c2-summary2-s2-title'),
          exp: t('c2-summary2-s2-exp'),
          img: img_s2_s2
        },
      ]
    },
    {
      title: t('c2-summary3-title'),
      sectionList: [
        {
          title: t('c2-summary3-s1-title'),
          exp: t('c2-summary3-s1-exp'),
          img: img_s3_s1
        },
        {
          title: t('c2-summary3-s2-title'),
          exp: t('c2-summary3-s2-exp'),
          img: img_s3_s2
        },
      ]
    },
  ];

  // String
  const contentLand = [
    {
      title: t("c2-s2-title"),
      exp: t("c2-s2-exp"),
    },
    {
      title: t("c2-s3-title"),
      exp: t("c2-s3-exp"),
    },
    {
      title: t("c2-s4-title"),
      exp: t("c2-s4-exp"),
    }
  ];

  const [innerHeight, setInnterHeight] = useState(window.innerHeight);
  const [isTitleTrigger, setIsTitleTrigger] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isChartActive, setIsChartActive] = useState(false);

  //trigger
  const [isTrigger1, setIsTrigger1] = useState(false);

  useEffect(() => {
    setInnterHeight(window.innerHeight);
  }, [window]);

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
          console.log("enter: 0");
          setCurrentSection(0);
          setIsTitleTrigger(true);
        }}
      >
        <ChapterTitle
          img={bg_c2}
          numChapter={2}
          title={t("c2-title")}
          subTitle={t("c2-subtitle")}
          bgColor={'dark'}
          exp={t("c2-exp")}
          isTrigger={isTitleTrigger}
        />
      </ViewportWrapper>
      <SpaceFullScreen
        numX={0.75}
      />
      <ViewportWrapper
        onEnterViewport={() => {
          setCurrentSection(0);
          setIsTrigger1(true);
        }}
        onLeaveViewport={() => {
          setIsTrigger1(false);
        }}
      >
        <VideoBackground
          isTrigger={isTrigger1}
          isVideoPlay={true}
          width={windowSize.width}
          height={windowSize.height}
          isFilter={true}
          videoSrc={'https://firebasestorage.googleapis.com/v0/b/data-driven-design-d2418.appspot.com/o/video_c1_transition2.mp4?alt=media&token=37363232-5063-40bb-a5a4-2247a08ed314'}
        >
          <MsgFullScreen
            title={t('c2-s1-title')}
          />
        </VideoBackground>
      </ViewportWrapper>
      <SpaceFullScreen
        numX={0.75}
      />
      <LiveArea>
        <MsgFullScreen
          title={`

          `}
        />
        <Section>
          {
            currentChapter === 2 &&
            <Chart
              isActive={isChartActive}
            >
              <SankeyLand
                // width={1200}
                // height={sankeyHeight}
                currentStage={currentSection}
                currentChapter={currentChapter}
              />
            </Chart>
          }

          {
            contentLand.map((section, i) =>
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
                  {/* {`enter: ${i}`} */}
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
            <Report reportData={reportData} />
          </ViewportWrapper>
          {
            currentSection === 4 && <>
              <PlasticVerticalStage />
            </>
          }
          <ViewportWrapper
            onEnterViewport={() => {
              setCurrentSection(5);
            }}
          >
            <SpaceFullScreen
              numX={0.5}
            />
            <ImageBackground
              isFilter={true}
              img={bg_transition}
              refObject={chapterObject.refSection[5]}
              isTrigger={currentSection === 5}
            >
              <MsgFullScreen
                title={t('c2-s5-title')}
                exp={t('c2-s5-exp')}
              />
            </ImageBackground>
          </ViewportWrapper>
        </Section>
        <ViewportWrapper
          onEnterViewport={() => {
            setCurrentSection(6);
          }}
        >
          <SpaceFullScreen
            numX={0.5}
          />
        </ViewportWrapper>
      </LiveArea>
    </Container>
  )
}

export default Chapter2;