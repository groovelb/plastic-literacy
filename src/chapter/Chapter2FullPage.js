import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import ReactPageScroller from 'react-page-scroller';
import Page from '../components/layout/Page';
import ChapterSummary from '../components/layout/ChapterSummary';
import ChapterIndicator from '../components/layout/ChapterIndicator';
import SectionTitle from '../components/textContainer/SectionTitle';
import DynamicImageGrid from '../components/dynamicGrid/DynamicImageGrid';
import DynamicImageGrid2 from '../components/dynamicGrid/DynamicImageGrid2';
import ChapterTitleLink from '../components/layout/ChapterTitleLink';

import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitleVer3";
import MsgFullScreen from "../components/layout/MsgFullScreenVer2";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import LiveArea from "../components/layout/LiveArea";
import SankeyLand from "../chart/chaper2/SankeyLandVer2";
import SankeyOcean from '../chart/chaper2/SankeyOceanVer2';
import ViewportWrapper from '../components/ViewportWrapper';

import { gridDataLand, gridDataLand1, gridDataLand1Mobile, gridDataOcean, gridDataOcean1, gridDataOcean1Mobile, gridDataCategory, gridDataCategoryMobile } from '../data/dynamicGridData';
import SectionContentHorizon from "../components/textContainer/SectionContentHorizonVer2";
import SectionContentVertical from "../components/textContainer/SectionContentVertical";
import ImageBackground from "../components/videoBackground/ImageBackgroundVer2";
import useWindowSize from '../hook/useWindowSize';
import TableImage from "../assets/img/illust/table.png";
// import bg_c3 from '../assets/img/bg/chapter/bg_chapter3_ver2.png';
import bg_c3 from '../assets/img/bg/img_bg_c3.jpg';

// import bg_c2 from '../assets/img/bg/chapter/bg_chapter2_ver2.png';
import bg_c2 from '../assets/img/bg/img_bg_c2.jpg';

// report image
import bg_waste_land from "../assets/img/bg/bg_waste_land2.jpg";
import { videoURL } from '../assets/mediaURL';

const sankeyHeight = 368;

const Container = styled.div`
  width: 100%;
`;

const Row3 = styled.div`
  margin-top: 48px;
  width: 900px;
  height: calc(100%/4);
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Top = styled(LiveArea)`
   position: fixed;
   z-index: -1;
   top: 0px;
   left: 0px;
   padding-top: 108px;
   padding-bottom: 48px;
   box-sizing: content-box;
   background-size: cover;
   display: flex;
   flex-direction: column;
   width: 100%;
   height: ${sankeyHeight + 'px'};
   height: calc(100% - 386px);
   /* background-image: url(${bg_waste_land}); */
   box-shadow: 0px 40px 80px 60px ${props => props.theme.color.ui.bg.dark};
   opacity: ${props => props.isActive ? 1 : 0};
   :before{
     position: absolute;
     content: '';
     width: 100%;
     height: 100%;
     /* background-color: rgba(0,0,0,0.82); */
     /* background-image: linear-gradient(rgba(2, 15, 24, 1), rgba(2, 15, 24, 0.75), rgba(2, 15, 24, 1)); */
     top:0;
     left:0;
     z-index: -1;
   }
   @media only screen and (max-width: 480px) {
      height: calc(100% - 386px);
   }
`;

const Chart = styled.div`
  position: fixed;
  /* z-index: 999; */
  top: 348px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left:10px;
  box-sizing: content-box;
  width: ${props => props.theme.size.liveArea};
  /* box-shadow: 0px 40px 80px 60px ${props => props.theme.color.ui.bg.dark}; */
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  /* width: ${props => `calc(calc(${props.theme.size.liveArea} - 308px - 48px))`}; */
  /* height: ${sankeyHeight + 'px'}; */
  height: calc(100% - 486px);
  /* background-color: ${props => props.theme.color.ui.bg.dark}; */
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.3s ease-out;
  /* animation: ${FadeIn} 1s linear forwards; */
  /* filter: ${props => props.isFilter ? 'blur(2px)' : 'blur(0px)'}; */
  transition: filter 0.3s;
  @media only screen and (max-width: 480px) {
    top: 32px;
    padding-top: 108px;
    width: calc(200% - 128px);
    height: calc(100% - 348px);
    padding-left:0px;
    left: ${props => `calc(${-props.step} * (100% - 100px) + 24px)`};
    transition: all 0.2s ease-in-out;
  }
`;

const Source = styled.p`
  position: absolute;
  /* right: calc(50% - 600px); */
  left: calc(50% - 600px + 8px);
  bottom: -124px;
  ${props => props.theme.type.size.caption}
  ${props => props.theme.type.weight.prd.regular}
  opacity: 0.96;
  color: ${props => props.theme.color.ui.low};
  span{
    ${props => props.theme.type.weight.prd.bold}
    color: ${props => props.theme.color.brand.epPurple};
  }
  @media only screen and (max-width: 480px) {
    bottom: -88px;
    right: unset;
    left: 24px;
    width: 320px;
  }
`;

const Wrapper = styled(LiveArea)`
  /* width: 100%; */
  height: 100%;
  padding-bottom: 24px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: end;
  /* padding-bottom: 64px; */
`;

const Wrapper2 = styled(LiveArea)`
  /* width: 100%; */
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  padding-left:240px;
  justify-content: end;
  /* padding-bottom: 64px; */
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding-left: 0px;
  }
`;

const FloatingLeft = styled.div`
  width: 224px;
  position: absolute;
  top: 0px;
  left: 0;
  ${props => props.theme.type.size.title2}
  ${props => props.theme.type.weight.prd.black}
  color: ${props => props.theme.color.brand.epGreen};
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    left: 24px;
  }
  
`;

const Chapter2FullPage = ({
  chapterObject,
  currentChapter,
  setThemeType,
  themeType,
  triggerFull,
  isFull
}) => {

  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const [currentReportStage, setCurrentReportStage] = useState(0);


  // String
  const content = [
    {
      title: '지상 플라스틱 폐기물의 여정',
      exp: t("c2-s1-exp"),
      pageList: [1, 2, 3, 4],
      page: 1,
    },
    {
      title: '지상 플라스틱 폐기물 여정속 실태',
      exp: t("c2-s2-exp"),
      pageList: [5],
      page: 5,
    },
    {
      title: '플라스틱 분류체계의 실태',
      exp: t("c2-s2-exp"),
      pageList: [6],
      page: 6,
    },
    {
      title: t("c2-s5-title"),
      exp: t("c2-s3-exp"),
      pageList: [7, 8, 9, 10],
      page: 7
    },
    {
      title: '해양 플라스틱 폐기물 여정속 실태',
      exp: t("c2-s4-exp"),
      pageList: [11],
      page: 11
    }
  ];

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
    if (number === 0) {
      setThemeType('dark');
    }
  }

  return (
    <Container>
      <ChapterIndicator
        sectionList={content}
        isTrigger={0 < currentPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        themeType={themeType}
      />
      {
        0 < currentPage && currentPage < 7 &&
        <Top isActive={1 < currentPage && currentPage < 5}>
          <Chart
            step={
              currentPage === 1 || currentPage === 2 ? 0 :
                1
            }
            isFilter={currentPage === 2}
            isActive={1 < currentPage && currentPage < 5}
          >
            <SankeyLand
              currentStage={currentPage - 1}
              currentChapter={2}
            />
            <p className="caption">
              
            </p>
          </Chart>
          <Source>
            출처: 환경부 ‘2019년도 전국 폐기물 발생 및 처리현황’, 단위: 톤 <br/>
            환경부는 공공 선별장에 반입되는 양을 기준으로 집계하여, 재활용률이 높아 보이나, <span>실제 재활용률은 40%</span>에 미치지 못합니다
          </Source>
        </Top>
      }
      {
        6 < currentPage && currentPage < 12 &&
        <Top isActive={7 < currentPage && currentPage < 11}>
          <Chart
            isActive={7 < currentPage && currentPage < 11}
            step={
              currentPage === 7|| currentPage === 8 ? 0 :
                1
            }
          >
            <SankeyOcean
              currentStage={currentPage - 7}
              currentChapter={3}
            />
          </Chart>
          <Source>
          출처 : 해양수산부 (2020) 「2018~2020 국가 해안쓰레기 모니터링 및 해양쓰레기 수거량」
          </Source>
        </Top>
      }
      <ReactPageScroller
        pageOnChange={handlePageChange}
        animationTimerBuffer={0}
        animationTimer={1000}
        customPageNumber={currentPage}
        renderAllPagesOnFirstRender={true}
        // blockScrollDown={isMobile&&!isFull}
      >
        <Page isTop={true}>
          <ChapterTitle
            title={'플라스틱의 여정'}
            subTitle={t("c2-subtitle")}
            exp={t("c2-exp")}
            num={2}
            img={bg_c2}
            onClick={() => {
              setCurrentPage(1);
              // setTimeout(() => {
              //   isMobile && triggerFull();
              // }, 1200);
            }}
          />
        </Page>
        {/* <Page>
          <ChapterSummary
            title={t("c2-subtitle")}
            exp={t("c2-exp")}
            sectionList={content}
            setCurrentPage={setCurrentPage}
          />
        </Page> */}
        <ImageBackground
          isFilter={true}
          img={videoURL.c2.t1}
          isTrigger={true}
        >
          <MsgFullScreen
            title={t('c2-s1-title')}
          />
        </ImageBackground>
        {
          contentLand.map((section, i) =>
            <Wrapper>
              {/* <SectionTitle
                  title={`${i + 1}\n${section.title}`}
                /> */}
              <SectionContentHorizon
                title={section.title}
                exp={section.exp}
                isLeft={true}
                index={i}
              />
            </Wrapper>
          )
        }
        <Page>
          <Wrapper2>
            <FloatingLeft>
              {t('c2-summary1-title')}
            </FloatingLeft>
            <DynamicImageGrid gridData={isMobile?gridDataLand1Mobile:gridDataLand1} />
          </Wrapper2>
        </Page>
        <Page>
          <Wrapper2>
            <FloatingLeft>
              {t('c2-summary2-title')}
            </FloatingLeft>
            <DynamicImageGrid2 gridData={isMobile?gridDataCategoryMobile:gridDataCategory} />
          </Wrapper2>
        </Page>
        <ImageBackground
          isFilter={true}
          img={videoURL.c2.t2}
          isTrigger={true}
        >
          <MsgFullScreen
            title={t('c2-s5-title')}
            exp={t('c2-s5-exp')}
          />
        </ImageBackground>
        {
          contentOcean.map((section, i) =>
            <Wrapper>
              {/* <SectionTitle
                  title={`${i + 1}\n${section.title}`}
                /> */}
              <SectionContentHorizon
                title={section.title}
                exp={section.exp}
                isLeft={true}
                index={i}
              />
            </Wrapper>
          )
        }
        <Page>
          <Wrapper2>
            <FloatingLeft>
              {t('c2-summary3-question1')}
            </FloatingLeft>
            <DynamicImageGrid gridData={isMobile?gridDataOcean1Mobile:gridDataOcean1} />
          </Wrapper2>
        </Page>
        {/* <ImageBackground
          isFilter={true}
          img={videoURL.c2.s9.bg}
          isTrigger={currentPage === 12}
        > */}
        <MsgFullScreen
          title={t('c2-s9-title')}
          exp={t('c2-s9-exp')}
        >
          <Row3>
            <ChapterTitleLink
              title={'플라스틱의 순환'}
              num={3}
              img={bg_c3}
              to={'/chapter3'}
            />
          </Row3>
        </MsgFullScreen>
        {/* </ImageBackground> */}
      </ReactPageScroller>
    </Container>
  )
}

export default Chapter2FullPage;