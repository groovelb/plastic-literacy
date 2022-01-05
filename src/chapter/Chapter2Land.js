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
import SectionContentVertical from "../components/textContainer/SectionContentVertical";
import ImageBackground from "../components/videoBackground/ImageBackground";
import useWindowSize from '../hook/useWindowSize';
import VideoBackground from "../components/videoBackground/VideoBackground";
import bg_video_s1 from "../assets/video/video_c2_s1.mp4";
import Report from "../components/report/Report";
import PlasticVerticalStage from "../components/navigation/PlasticVerticalStage";
import TableImage from "../assets/img/illust/table.png";

// report image
import bg_waste_land from "../assets/img/bg/bg_waste_land2.jpg";
import { videoURL } from '../assets/mediaURL';

const sankeyHeight = 368;

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

const Top = styled.div`
   position: fixed;
   z-index: -1;
   top: 0px;
   left: 0px;
   padding-top: 116px;
   padding-bottom: 48px;
   box-sizing: content-box;
   background-size: cover;
   width: 100%;
   height: ${sankeyHeight + 'px'};
   height: 100%;
   background-image: url(${bg_waste_land});
   box-shadow: 0px 40px 80px 60px ${props => props.theme.color.ui.bg.dark};
   opacity: ${props => props.isActive ? 1 : 0};
   :before{
     position: absolute;
     content: '';
     width: 100%;
     height: 100%;
     /* background-color: rgba(0,0,0,0.82); */
     background-image: linear-gradient(rgba(2, 15, 24, 1), rgba(2, 15, 24, 0.75), rgba(2, 15, 24, 1));
     top:0;
     left:0;
     z-index: -1;
   }
`;

const Chart = styled.div`
  position: fixed;
  /* z-index: 999; */
  top: 0px;
  padding-top: 116px;
  box-sizing: content-box;
  width: ${props => props.theme.size.liveArea};
  /* box-shadow: 0px 40px 80px 60px ${props => props.theme.color.ui.bg.dark}; */
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  /* width: ${props => `calc(calc(${props.theme.size.liveArea} - 308px - 48px))`}; */
  /* height: ${sankeyHeight + 'px'}; */
  height: calc(100% - 360px);
  /* background-color: ${props => props.theme.color.ui.bg.dark}; */
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
  height: ${window.innerHeight * 1.2 + 'px'};
  .table{
    margin-left: calc(480px + 48px);
    margin-top: 48px;
    width: calc(100% - 480px - 48px);
    height: auto;
  }
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
  const [currentReportStage, setCurrentReportStage] = useState(0);

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
          src: videoURL.c2.summary.video.s1_s2,
          extra: TableImage,
          extraType: 'image',
          extraCaption: '7가지 플라스틱 세부 분류체계'
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
      '번호', '소재', '재활용 여부', '예시',
    ],
    data: [
      [1, 'PETE', '가능', '생수병, 음료수병'],
      [2, 'HDPE', '가능', '유아용 장난감, 젖병, 세재용기'],
      [3, 'PVC', '일부 가능', '우비, 비닐, 고무호스'],
      [4, 'LDPE', '가능', '휴대폰 필름, 비닐봉지, 위생장갑 등 투명한 제품'],
      [5, 'PP', '가능', '소주 상자, 주방 조리도구, 자동차 내장재'],
      [6, 'PS', '가능', '요구르트병, 과자봉지'],
      [7, 'OTHER', '불가능', '비닐, 건축 외장재, 휴대폰 케이스'],
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
        {
          currentChapter === 2 &&
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
        }
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
            <Top isActive={isChartActive}>
              <Chart
                isActive={isChartActive}
              >
                <SankeyLand
                  currentStage={currentSection}
                  currentChapter={currentChapter}
                />
              </Chart>
            </Top>

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
                  <SectionContentVertical
                    title={section.title}
                    exp={section.exp}
                    index={i}
                  />
                  {/* {
                    i===0&&
                    // <table>
                    //   <tr>
                    //   {
                    //     categoryTableData.header.map((item,index) =>
                    //       <th key={index}>
                    //         {item}
                    //       </th>
                    //     )
                    //   }
                    //   </tr>
                    //   {
                    //     categoryTableData.data.map((row,index) =>
                    //       <tr key={index}>
                    //         {
                    //           row.map((data,index) =>
                    //             <td key={index}>
                    //               {data}
                    //             </td>
                    //           )
                    //         }
                    //       </tr>
                    //     )
                    //   }
                      
                    // </table>
                    // <img className="table" src={TableImage} alt='' />
                  } */}

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