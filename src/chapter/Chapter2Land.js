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
import { videoURL } from '../assets/mediaURL';

const sankeyHeight = 348;

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
  pointer-events: none;
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
  table{
    margin-left: calc(480px + 48px);
    margin-top: 48px;
    width: calc(100% - 480px - 48px);
  }
  td,th{
    height: 48px;
  }
  th{
    opacity: 0.5;
  }
  td{
    padding-left: 16px;
    padding-right: 16px;
    color: ${props => props.theme.color.brand.epGreen};
  }
  table,th,td{
    border:1px solid ${props => props.theme.color.brand.epNavy};
    border-spacing: 0;
  }
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
          type: 'video',
          src: videoURL.c2.summary.video.s1_s1
        },
        {
          title: t('c2-summary1-s2-title'),
          exp: t('c2-summary1-s2-exp'),
          type: 'video',
          src: videoURL.c2.summary.video.s1_s2
        },
      ]
    },
    {
      title: t('c2-summary2-title'),
      sectionList: [
        {
          title: t('c2-summary2-s1-title'),
          exp: t('c2-summary2-s1-exp'),
          type: 'image',
          src: videoURL.c2.summary.img.s2_s1
        },
        {
          title: t('c2-summary2-s2-title'),
          exp: t('c2-summary2-s2-exp'),
          type: 'video',
          src: videoURL.c2.summary.video.s2_s2
        },
      ]
    },
    {
      title: t('c2-summary3-title'),
      sectionList: [
        {
          title: t('c2-summary3-s1-title'),
          exp: t('c2-summary3-s1-exp'),
          type: 'video',
          src: videoURL.c2.summary.video.s3_s1
        },
        {
          title: t('c2-summary3-s2-title'),
          exp: t('c2-summary3-s2-exp'),
          type: 'video',
          src: videoURL.c2.summary.video.s3_s2
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

  const categoryTableData = {
    header: [
      '번호','소재','재활용 여부','예시',
    ],
    data: [
      [1,'PETE','가능','생수병, 음료수병'],
      [2,'HDPE','가능','유아용 장난감, 젖병, 세재용기'],
      [3,'PVC','일부 가능','우비, 비닐, 고무호스'],
      [4,'LDPE','가능','휴대폰 필름, 비닐봉지, 위생장갑 등 투명한 제품'],
      [5,'PP','가능', '소주 상자, 주방 조리도구, 자동차 내장재'],
      [6,'PS','가능', '요구르트병, 과자봉지'],
      [7,'OTHER','불가능','비닐, 건축 외장재, 휴대폰 케이스'],
    ]
  }

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
          src={videoURL.c2.bg}
          numChapter={2}
          title={t("c2-title")}
          subTitle={t("c2-subtitle")}
          bgColor={'dark'}
          exp={t("c2-exp")}
          isTrigger={isTitleTrigger}
          isFilter={true}
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
        <ImageBackground
              isFilter={true}
              img={videoURL.c2.s1.bg}
              refObject={chapterObject.refSection[5]}
              isTrigger={isTrigger1}
            >
              <MsgFullScreen
                title={t('c2-s1-title')}
              />
            </ImageBackground>
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
                  {
                    i===0&&
                    <table>
                      <tr>
                      {
                        categoryTableData.header.map((item,index) =>
                          <th key={index}>
                            {item}
                          </th>
                        )
                      }
                      </tr>
                      {
                        categoryTableData.data.map((row,index) =>
                          <tr key={index}>
                            {
                              row.map((data,index) =>
                                <td key={index}>
                                  {data}
                                </td>
                              )
                            }
                          </tr>
                        )
                      }
                      
                    </table>
                  }
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
              img={videoURL.c2.s5.bg}
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