import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import ReactPageScroller from 'react-page-scroller';

import Page from '../components/layout/Page';
import ChapterSummary from '../components/layout/ChapterSummary';
import CardChapterSection from '../components/card/CardChapterSection';
import CardTimeline from '../components/card/CardTimeline';
import Grid from '../components/layout/Grid';
import ChapterTitleLink from '../components/layout/ChapterTitleLink';


import bg_c2 from '../assets/img/bg/chapter/bg_chapter2_ver2.png';
import img_timeline1 from '../assets/img/c1/timeline1.jpg';
import img_timeline2 from '../assets/img/c1/timeline2.jpg';
import img_timeline3 from '../assets/img/c1/timeline3.jpg';
import img_timeline4 from '../assets/img/c1/timeline4.jpg';
import img_timeline5 from '../assets/img/c1/timeline5.jpg';


import Section from "../components/layout/Section";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import MsgFullScreen from "../components/layout/MsgFullScreenVer2";
import ChapterTitle from "../components/layout/ChapterTitleVer3";
import LiveArea from "../components/layout/LiveArea";
import TimelineChartC1S1 from "../components/chart/TimeChart";
import BarChart from "../components/chart/BarChart";
import ImageBackground from "../components/videoBackground/ImageBackgroundVer2";
import useWindowSize from '../hook/useWindowSize';
import ViewportWrapper from '../components/ViewportWrapper';
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import ImagePreview from "../components/media/ImagePreview";
import VideoList from '../components/media/VideoListFull';
import img_kodak from "../assets/img/image/c1/kodak.jpg";
import img_container from "../assets/img/image/c1/container.jpg";
import img_bomb from "../assets/img/image/c1/bomb.jpg";
import img_vynil from "../assets/img/image/c1/vynil.jpg";
import img_astronaut from "../assets/img/image/c1/astronaut.jpg";
import img_c1_s4_1 from "../assets/img/image/c1/c1-s4_1.jpg";
import img_c1_s4_2 from "../assets/img/image/c1/c1-s4_2.jpg";
import img_c1_s4_3 from "../assets/img/image/c1/c1-s4_3.jpg";
import img_c1_s4_4 from "../assets/img/image/c1/c1-s4_4.jpg";
import img_c1_s4_5 from "../assets/img/image/c1/c1-s4_5.jpg";
import img_c1_s5_1 from "../assets/img/image/c1/c1-s5_1.png";
import img_c1_s5_3 from "../assets/img/image/c1/c1-s5_3.jpg";
import illust_comparing_volume from "../assets/img/illust/c1/compare_volume.png";
import illust_daily_consume from "../assets/img/illust/c1/daily_consume.png";
import bg_c1_transition from "../assets/img/bg/c1_transition.jpg";
import ToTop from "../components/motion/ToTop";

import SectionTitle from '../components/textContainer/SectionTitle';
import SectionTitleFloating from '../components/textContainer/SectionTitleFloating';
import bg_c1 from '../assets/img/bg/chapter/bg_chapter1_ver2.png';

// Data
import { plastic_industry_timeline_1_1, plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7, plastic_accumulated_waste_1_8 } from '../data/chapter1';
import { videoURL } from '../assets/mediaURL';

const chartWidth = 720;
const Container = styled.div`
  width: 100%;
`;

const FadeIn = keyframes`
  from {
    margin-top: 160px;
    opacity: 0;
  }
  to {
    margin-top: 0px;
    opacity: 1;
  }
`;

const PageAlignTop = styled(Page)`
  justify-content: flex-start !important;
  padding-top: 156px;
  .content{
    height: 100%;
  }
`;

const Row3 = styled.div`
  margin-top: 48px;
  width: 948px;
  height: calc(100%/4);
`;

// const chartHeight = 560;
const Test = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 100px;
  color: #fff;
  display: none;
`;
const TimeChart = styled.div`
  /* display: none; */
  position: fixed;
  top: 0px;
  padding-top: 180px;
  /* background-color: ${props => props.theme.color.ui.bg.dark}; */
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  /* width: ${props => props.theme.size.liveArea}; */
  width: ${`${chartWidth}px`};
  height: calc(100% - 160px);
  max-height: 680px;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.15s ease-out, transform 0.15s ease-out;
  transform: ${props => props.isActive ? `translateY(00px)` : `translateY(120px)`};
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 55%;
    left: 0;
    top: 0px;
    padding-top: 48px;
    background-color: ${props => props.theme.color.ui.bg.dark};
  }
`;
const Chart = styled(LiveArea)`
  /* display: none; */
  position: fixed;
  pointer-events: none;
  z-index: 0;
  top:200px;
  /* background-color: ${props => props.theme.color.ui.bg.dark}; */
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  /* width: ${props => props.theme.size.liveArea}; */
  /* width: ${`${chartWidth}px`}; */
  height: calc(100% - 440px);
  /* max-height: 920px; */
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.15s ease-out, transform 0.15s ease-out;
  transform: ${props => props.isActive ? `translateY(00px)` : `translateY(120px)`};
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 55%;
    left: 0;
    top: 0px;
    padding-top: 48px;
    background-color: ${props => props.theme.color.ui.bg.dark};
  }
`;


const ChartSpacing = styled.div`
  width: 100%;
  height: ${props => props.height};
`

const ChartTitle = styled.p`
  padding-left: 44px;
  margin-bottom: 12px;
  ${props => props.theme.type.size.title3};
  ${props => props.theme.type.weight.prd.regular};
  @media only screen and (max-width: 480px) {
    padding-left: 24px;
  }
`;

const ChartTitlePadding = styled.p`
  /* padding-left: 80px; */
  margin-top: -16px;
  margin-bottom: 8px;
  ${props => props.theme.type.size.title3}
  ${props => props.theme.type.weight.prd.bold};
  text-align: center;
  @media only screen and (max-width: 480px) {
    padding-left: 24px;
  }
`;
const ChartUnit = styled.p`
  /* padding-left: 80px; */
  margin-bottom: 12px;
  ${props => props.theme.type.size.caption};
  ${props => props.theme.type.weight.prd.regular};
  text-align: center;
  @media only screen and (max-width: 480px) {
    padding-left: 24px;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  /* background-color: ${props => props.theme.color.brand.darkNavy}; */
  padding-bottom: 24px;
  p{
    margin-bottom: 48px;
  }
  img.content{
    width: 100%;
    height: auto;
  }
  article{
    margin: 48px 0px;
  }
  video.video-react-video{
    width: 100%;
  }
`;

const TextContent = styled(LiveArea)`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* padding-top: 240px; */
  padding-left: ${`calc(${chartWidth}px + 24px)`};
  height: ${window.innerHeight * 1 + 'px'};
  /* justify-content: center; */
  transition: opacity 0.3s ease-out;
  word-break: keep-all;
  white-space: pre-line;
  position: relative;
  padding-top: 240px;
  p{
    /* width: calc(100% - 360px - 80px - 24px); */
    /* padding-left: 48px; */
    width: 100%;
    /* padding-right: 120px; */
    ${props => props.theme.type.size.body2}
    ${props => props.theme.type.weight.prd.regular}
    word-break: break-all;
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

const SectionTitle2 = styled.div`
  width: 100%;
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
    width: 360px;
    margin-top: -8px;
  }
`;

const ChartMsg = styled.div`
  position: absolute;
  top: 286px;
  left: 124px;
  text-shadow: 0px 0px 16px rgba(15,30,45,0.48);
  ${props => props.theme.color.ui.white700};
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.h1}
  opacity: 0;
  animation-name: ${FadeIn};
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`;

const LegendList = styled.div`
  position: absolute;
  left: 80px;
  bottom: -112px;
  width: 100%;
  display: flex;
  ${props => props.theme.type.weight.prd.bold}
`;

const Legend = styled.div`
  padding-right: 32px;
  display: flex;
  align-items: center;
  p{
    ${props => props.theme.type.size.caption}
  }
  color: #fff;
`;

const Red = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.color.brand.epPurple};
  margin-right: 12px;
`

const Green = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.color.brand.epGreen};
  margin-right: 12px;
`

const Space = styled.div`
  height: 240px;
`;

const Timeline = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 114px;
  /* position: relative; */
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 172px;
  padding-bottom: 120px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.24);
`;

const Exp = styled.div`
  width: 100%;
  padding-left: calc(100% - 800px);
  ${props => props.theme.type.size.body1};
  ${props => props.theme.type.weight.prd.bold};
`;

const ExpFloating = styled.div`
  width: 100%;
  padding-left: calc(100% - 800px);
  margin-top: 48px;
  /* padding: 24px; */
  /* background-color: rgba(15,30,45,0.80); */
  ${props => props.theme.type.size.body1}
  ${props => props.theme.type.weight.prd.bold}
  z-index: 9;
  position: absolute;
  bottom: 148px;
`;

const Chapter1 = ({
  currentChapter,
  chapterObject,
  setThemeType
}) => {

  const { t } = useTranslation();
  const windowSize = useWindowSize();

  // Image Preview
  const [currentImageIndexS1, setCurrentImageIndexS1] = useState(0);
  const imgListS1 = [
    {
      src: img_kodak,
      caption: 'Eastman Company에서 출시된 플라스틱 투명 롤 필름',
    },
    {
      src: img_bomb,
      caption: '제2차 세계 대전 당시, 대량 생산할 수 있는 장점으로 개발된 플라스틱 수류탄 British No. 69',
    },
    {
      src: img_container,
      caption: 'Tupperware에서 최초로 출시한 밀폐 플라스틱 용기',
    },
    {
      src: img_vynil,
      caption: '미국 레코드사에서 플라스틱(PVC)을 활용해 개발한 LP판',
    },
    {
      src: img_astronaut,
      caption: '아폴로 계획에서 닐 암스트롱이 착용한 우주 헬멧에 적용된 플라스틱',
    },
  ];

  const [currentVideoIndexS1, setCurrentVideoIndexS1] = useState(0);
  const videoList = [
    {
      src: videoURL.c1.s1.history1,
      caption: "당구공의 원료로 사용되던 코끼리 상아를 대체하기 위해 John Wesley Hyatt이 셀룰로이드를 최초로 개발하면서, 동물 소재로 만들던 빗, 단추 등 제품에 플라스틱을 활용했고 그 결과 수많은 동물들을 보호할 수 있었습니다.",
      ref: useRef(null)
    },
    {
      src: videoURL.c1.s1.history2,
      caption: "George Eastman이 개발한 투명 셀룰로이드 롤필름은 영사기 사용이 어려웠던 약한 기존 종이 필름을 대체해, 오늘날 우리가 언제든 즐길 수 있는 영화 상영을 가능하게 했습니다.",
      ref: useRef(null)
    },
    {
      src: videoURL.c1.s1.history3,
      caption: "Tupperware에서 개발된 가볍고 단단한 플라스틱 용기 덕분에, 우리는 외부 환경으로부터 음식물을 안전하고 오랫동안 보관할 수 있게 되었습니다.",
      ref: useRef(null)
    },
    {
      src: videoURL.c1.s1.history4,
      caption: "미국 콜롬비아사에서 플라스틱으로 만들어진 비닐 LP판을 공개하며 기존 동물성수지로만 극소량 제작되던 레코딩이 대량생산될 수 있었고, 누구나 쉽게 음악을 즐길 수 있게 되었습니다.",
      ref: useRef(null)
    },
    {
      src: videoURL.c1.s1.history5,
      caption: "높은 온도와 압력을 극복할 수 있도록 개발된 플라스틱 덕분에 닐 암스트롱은 아폴로 계획당시 달에 갈 수 있었고 우주 환경에서도 안전할 수 있었습니다.",
      ref: useRef(null)
    }
  ];

  const [currentImageIndexS4, setCurrentImageIndexS4] = useState(0);
  const imgListS4 = [
    {
      src: img_c1_s4_1,
      caption: '부리에 플라스틱 어망이 감긴 채 죽은 바다새 가넷(Gannet)',
    },
    {
      src: img_c1_s4_2,
      caption: '플라스틱 병 안에서 갇혀 죽은 문어',
    },
    {
      src: img_c1_s4_3,
      caption: '플라스틱 원반이 목에 박혀 죽은 물개',
    },
    {
      src: img_c1_s4_4,
      caption: '플라스틱 쓰레기를 먹이 인줄 알고 먹고 있는 소',
    },
    {
      src: img_c1_s4_5,
      caption: '플라스틱 봉지를 먹이로 착각해 먹고 있는 낙타',
    },
  ];

  const [currentImageIndexS5, setCurrentImageIndexS5] = useState(0);
  const imgListS5 = [
    {
      src: img_c1_s5_1,
      caption: `반구대암각화* 앞 모래톱에서 27년간 썩지 않고 남아있다가 발견된 플라스틱 비닐 포장지

      국보 제 285호로, 세계에서 가장 오래된 고래사냥 암각화. ‘ㄱ’자 모양으로 꺾인 절벽암반에 육지동물과 사냥하는 장면 등 총 200여점의 그림이 새겨져 있는 신석기시대의 문화재. [출처: 문화재청]`,
    },
    {
      src: img_c1_s5_3,
      caption: `하와이 근처 쓰레기 지대*에서 20년 된 한국 쓰레기 발견

      쓰레기 지대, 즉 GPGP(The Great Pacific Garbage Patch)는 북태평양에 위치한 거대한 쓰레기 섬. 바람과 해류의 영향으로 북아메리카, 아시아에서 흘러온 쓰레기가 모여 있는 지역 [출처: National Geographic]`,
    }
  ];

  // String
  const content = [
    {
      title: t("c1-s1-title"),
      exp: t("c1-s1-exp"),
      data: plastic_industry_timeline_1_1,
      chartTitle: '인류 발전에 기여한 플라스틱',
      unit: '',
      page:2,
    },
    {
      title: t("c1-s2-title"),
      exp: t("c1-s2-exp"),
      data: plastic_production_1_3,
      chartTitle: '전세계 연도별 플라스틱 생산량',
      unit: '(단위: million metric tons)',
      page:3,
    },
    {
      title: t("c1-s3-title"),
      exp: t("c1-s3-exp"),
      data: plastic_consumption_1_6,
      chartTitle: '국내 1인당 연간 플라스틱 소비량',
      unit: '(단위: kilogram)',
      page:4,
    },
    {
      title: t("c1-s4-title"),
      exp: t("c1-s4-exp"),
      data: plastic_waste_1_7,
      chartTitle: '연도별 플라스틱 폐기물량',
      unit: '(단위: 1000 ton)',
      page:5,
    },
    {
      title: t("c1-s5-title"),
      exp: t("c1-s5-exp"),
      data: plastic_accumulated_waste_1_8,
      chartTitle: '연도별 플라스틱 누적 폐기물량',
      unit: '(단위: 1000 ton)',
      page:6,
    }
  ];

  const [innerHeight, setInnterHeight] = useState(window.innerHeight);
  const [data, setData] = useState(content[0].data);
  const [isTitleTrigger, setIsTitleTrigger] = useState(false);
  const [isChart1Active, setIsChart1Active] = useState(false);
  const [isChart2Active, setIsChart2Active] = useState(false);
  const [currentSection, setCurrentSection] = useState(-1);
  const [isVideoTrigger, setIsVideoTrigger] = useState(false);

  // motion trigger
  const [isTrigger1, setIsTrigger1] = useState(false);
  const [isTrigger2, setIsTrigger2] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setInnterHeight(window.innerHeight);
  }, [window]);

  useEffect(() => {
    console.log(currentSection);
    if (currentSection === 0) {
      setIsChart1Active(false);
      setIsChart2Active(false);
    }
    else if (currentSection === 1) {
      setData(content[0].data);
      setIsChart1Active(true);
      setIsChart2Active(false);
    }
    else if (currentSection === 2) {
      setIsChart1Active(false);
      setIsChart2Active(true);
      setData(content[1].data);
    } else if (currentSection === 3) {
      setIsChart1Active(false);
      setIsChart2Active(true);
      setData(content[2].data);
    } else if (currentSection === 4) {
      setIsChart1Active(false);
      setIsChart2Active(true);
      setData(content[3].data);
    } else if (currentSection === 5) {
      setIsChart1Active(false);
      setIsChart2Active(true);
      setData(content[4].data);
    } else if (currentSection === 6) {
      setIsChart2Active(false);
      setIsChart1Active(false);
    }
  }, [currentSection]);

  const handlePageChange = (number) => {
    console.log(number);
    if (number === 0) {
      setThemeType('dark');
    }
    setCurrentPage(number);
    if (2 < number && number < 7) {
      setData(content[number - 2].data);
    }
  }

  const handleDataIndex = (number) => {

  }

  const timelineData = [
    {
      title: '1860s',
      exp: `동물을 보호한 최초의 플라스틱 셀룰로이드`,
      img: img_timeline1,
    },
    {
      title: '1880s',
      exp: `영화의 대중화에 중요한 역할을 한 플라스틱 롤 필름`,
      img: img_timeline2,
    },
    {
      title: '1940s',
      exp: `외부 환경으로부터 식품 오염을 막을 수 있도록 도와준 플라스틱 식품용기`,
      img: img_timeline3,
    },
    {
      title: '1940s',
      exp: `대량생산이 가능해지면서 대중화에 큰 도움을 주었던 플라스틱(PVC) LP판`,
      img: img_timeline4,

    },
    {
      title: '1960s',
      exp: `우주의 높은 온도와 압력을 극복한 플라스틱 소재로 발전한 우주산업`,
      img: img_timeline5,
    }
  ];

  const [isVideo, setIsVideo] = useState(false);

  return (
    <>
      <Chart
        isActive={2 < currentPage && currentPage < 7}
      >
        <BarChart
          data={data}
          stage={currentPage - 1}
        />
        <ChartTitlePadding>
          {content[currentPage - 2] && content[currentPage - 2].chartTitle}
        </ChartTitlePadding>
        <ChartUnit>
          {content[currentPage - 2] && content[currentPage - 2].unit}
        </ChartUnit>
      </Chart>

      {
        isVideo &&
        <VideoContainer>
          <VideoList
            videoList={videoList}
            currentIndex={currentVideoIndexS1}
            closeVideo={() => { setIsVideo(false) }}
            onNext={() => { setCurrentVideoIndexS1(currentVideoIndexS1 + 1) }}
            onPrev={() => { setCurrentVideoIndexS1(currentVideoIndexS1 - 1) }}
          />
        </VideoContainer>
      }
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={
          (number) => {
            console.log(`going to ${number}`);
          }
        }
        animationTimer={800}
        customPageNumber={currentPage}
      >
        <Page>
          <ChapterTitle
            title={'플라스틱 딜레마'}
            num={1}
            img={bg_c1}
            onClick={() => {
              setCurrentPage(1);
            }}
          />
        </Page>
        <Page>
          <ChapterSummary
            title={t("c1-subtitle")}
            exp={t("c1-exp")}
            sectionList={content}
            setCurrentPage={setCurrentPage}
          />
        </Page>
        {
          content.map((section, i) =>
            <Page>
              <LiveArea className={i !== 0 ? 'content' : ''}>
                {
                  i === 0 && <SectionTitle
                    title={`${i + 1}\n${section.title}`}
                  />
                }
                {
                  i !== 0 && <SectionTitleFloating
                    top={'48px'}
                    title={`${i + 1}\n${section.title}`}
                  />
                }

                {
                  i === 0 &&
                  <Timeline>
                    {
                      timelineData.map((time, index) => (
                        <Grid
                          colPC={5}
                          colMb={1}
                          index={index}
                          length={5}
                          spacing={24}
                        >
                          <ToTop
                            isTrigger={currentPage === 2}
                            distance={'short'}
                            index={index}
                          >
                            <CardTimeline
                              title={time.title}
                              exp={time.exp}
                              key={index}
                              index={index}
                              img={time.img}
                              onClick={
                                (e) => {
                                  console.log('click');
                                  e.stopPropagation();
                                  setIsVideo(true);
                                  setCurrentVideoIndexS1(index)
                                }
                              }
                              setIsVideo={setIsVideo}
                            />
                          </ToTop>
                        </Grid>
                      ))
                    }
                  </Timeline>
                }
                {
                  i !== 0 &&
                  <ChartSpacing height={windowSize.height - 268 - 120 - 120 + 'px'}>
                  </ChartSpacing>
                }
                {
                  i === 0 && <Exp>
                    {section.exp}
                  </Exp>
                }
                {
                  i !== 0 && <ExpFloating>
                    {section.exp}
                  </ExpFloating>
                }


              </LiveArea>
            </Page>
          )
        }
        {/* <ImageBackground
          isFilter={false}
          // img={bg_c1_transition}
          isTrigger={currentPage === 6}
        > */}
        <MsgFullScreen
          title={t('c1-s6-title')}
          exp={t('c1-s6-exp')}
        >
          <Row3>
            <ChapterTitleLink
              title={'플라스틱의 여정'}
              num={2}
              img={bg_c2}
              to={'/chapter2'}
              exp={t('c2-subtitle')}
            />
          </Row3>
        </MsgFullScreen>
        {/* </ImageBackground> */}
      </ReactPageScroller>
    </>
  )
}

export default Chapter1;