import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import ReactPageScroller from 'react-page-scroller';
import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitleVer2";
import MsgFullScreen from "../components/layout/MsgFullScreenVer2";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import LiveArea from "../components/layout/LiveArea";
import SankeyLand from "../chart/chaper2/SankeyLandVer2";
import ViewportWrapper from '../components/ViewportWrapper';
// import bg_c2 from "../assets/img/bg/title_bg_c2.png";
import bg_c2 from "../assets/img/bg/img_bg_c2.jpg";
import SectionContentHorizon from "../components/textContainer/SectionContentHorizon";
import SectionContentVertical from "../components/textContainer/SectionContentVertical";
import ImageBackground from "../components/videoBackground/ImageBackgroundVer2";
import useWindowSize from '../hook/useWindowSize';
import VideoBackground from "../components/videoBackground/VideoBackground";
import bg_video_s1 from "../assets/video/video_c2_s1.mp4";
import Report from "../components/report/ReportVer2";
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
   /* background-image: url(${bg_waste_land}); */
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
  padding-top: 160px;
  box-sizing: content-box;
  width: ${props => props.theme.size.liveArea};
  /* box-shadow: 0px 40px 80px 60px ${props => props.theme.color.ui.bg.dark}; */
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  /* width: ${props => `calc(calc(${props.theme.size.liveArea} - 308px - 48px))`}; */
  /* height: ${sankeyHeight + 'px'}; */
  height: calc(100% - 520px);
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
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 64px;
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
  const [currentPage, setCurrentPage] = useState(0);

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

  const handlePageChange = (number) => {
    console.log(number);
    setCurrentPage(number);
  }

  return (
    <Container>
      {
        0 < currentPage && currentPage < 7 &&
        <Top isActive={1 < currentPage && currentPage < 6}>
          <Chart
            isActive={1 < currentPage && currentPage < 6}
          >
            <SankeyLand
              currentStage={currentPage - 2}
              currentChapter={2}
            />
          </Chart>
        </Top>
      }
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={
          (number) => {
            console.log(`going to ${number}`);
          }
        }
        animationTimerBuffer={200}
        animationTimer={1000}
      >
        <ChapterTitle
          src={videoURL.c2.bg}
          numChapter={2}
          title={t("c2-title")}
          subTitle={t("c2-subtitle")}
          bgColor={'dark'}
          exp={t("c2-exp")}
          isTrigger={true}
          isFilter={currentPage === 0}
        />
        <ImageBackground
          isFilter={true}
          img={bg_c2}
          isTrigger={currentPage === 1}
        >
          <MsgFullScreen
            title={t('c2-s1-title')}
          />
        </ImageBackground>
        <MsgFullScreen
          isFilter={true}
          title={t('지상 플라스틱 폐기물의 5단계 여정속에 재활용을 방해하는 문제점들이 존재합니다.')}
        />
        {
          contentLand.map((section, i) =>
            <Wrapper>
              <SectionContentVertical
                title={section.title}
                exp={section.exp}
                index={i}
              />
            </Wrapper>
          )
        }
        <ImageBackground
          isFilter={true}
          img={videoURL.c2.s5.bg}
          isTrigger={currentPage === 6}
        >
          <MsgFullScreen
            title={t('c2-s5-title')}
            exp={t('c2-s5-exp')}
          />
        </ImageBackground>
      </ReactPageScroller>
    </Container>
  )
}

export default Chapter2;