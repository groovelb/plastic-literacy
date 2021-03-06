import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import ReactPageScroller from 'react-page-scroller';
import { isMobile, isTablet } from 'react-device-detect';
import useFullscreen from '../hook/useFullScreen';

import Page from '../components/layout/Page';
import ChapterSummary from '../components/layout/ChapterSummary';
import ChapterIndicator from '../components/layout/ChapterIndicator';
import CardChapterSection from '../components/card/CardChapterSection';

import CardTimeline from '../components/card/CardTimeline';
import Grid from '../components/layout/Grid';
import ChapterTitleLink from '../components/layout/ChapterTitleLink';
import CardComparingInfoRow from '../components/card/CardComparingInfoRow';
import CardComparingInfoCol from '../components/card/CardComparingInfoCol';

import FlagChart from '../template/chapter1/FlagChart';

import img_timeline1 from '../assets/img/c1/timeline1.jpg';
import img_timeline2 from '../assets/img/c1/timeline2.jpg';
import img_timeline3 from '../assets/img/c1/timeline3.jpg';
import img_timeline4 from '../assets/img/c1/timeline4.jpg';
import img_timeline5 from '../assets/img/c1/timeline5.jpg';

import img_lotte_tower from '../assets/illust/c1/lotte_tower.svg';
import img_man from '../assets/illust/c1/man.svg';
import img_ktx from '../assets/illust/c1/ktx.svg';
import ToRight from '../components/motion/ToRight';

import Section from "../components/layout/Section";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import MsgFullScreen from "../components/layout/MsgFullScreenVer2";
import ChapterTitle from "../components/layout/ChapterTitleVer3";
import LiveArea from "../components/layout/LiveArea";
import TimelineChartC1S1 from "../components/chart/TimeChart";
import BarChart from "../components/chart/BarChart";
import ImageBackground from "../components/videoBackground/ImageBackgroundVer2";
import VideoBackground from '../components/videoBackground/VideoBackground3';
import useWindowSize from '../hook/useWindowSize';
import ViewportWrapper from '../components/ViewportWrapper';
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import ImagePreview from "../components/media/ImagePreview";
import ImagePreviewFull from "../components/media/ImagePreviewFull";
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
import img_c1_s5_1 from "../assets/img/image/c1/c1-s5_1.jpg";
import img_c1_s5_2 from "../assets/img/image/c1/c1-s5_2.jpg";
import illust_comparing_volume from "../assets/img/illust/c1/compare_volume.png";
import illust_daily_consume from "../assets/img/illust/c1/daily_consume.png";
import bg_c1_transition from "../assets/img/bg/c1_transition.jpg";
import ToTop from "../components/motion/ToTop";

import SectionTitle from '../components/textContainer/SectionTitle';
import SectionTitleFloating from '../components/textContainer/SectionTitleFloating';
import bg_c1 from '../assets/img/bg/img_bg_c1.jpg';
import bg_c2 from '../assets/img/bg/img_bg_c2.jpg';
import flag_kr from "../assets/img/c1/flag_korea.jpg";
import flag_us from "../assets/img/c1/flag_usa.jpg";
import flag_cn from "../assets/img/c1/flag_china.jpg";
import flag_jp from "../assets/img/c1/flag_japan.jpg";
import flag_uk from "../assets/img/c1/flag_uk.jpg";
import flag_rs from "../assets/img/c1/flag_russia.jpg";

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
  width: 900px;
  height: calc(100%/4);
  @media only screen and (max-width: 825px) {
    width: 100%;
  }
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
  @media only screen and (max-width: 825px) {
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
  /* pointer-events: none; */
  z-index: 0;
  top:200px;
  /* background-color: ${props => props.theme.color.ui.bg.dark}; */
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  /* width: ${props => props.theme.size.liveArea}; */
  /* width: ${`${chartWidth}px`}; */
  height: calc(100% - 400px);
  /* max-height: 920px; */
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.3s ease-out, transform 0.2s ease-out;
  transform: ${props => props.isActive ? `translateY(00px)` : `translateY(120px)`};
  :before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${props => props.isFilter ? 'rgba(15, 30, 45,1)' : 'rgba(15, 30, 45,0)'};
    transition: background-color 0.1s ease-out;
    z-index: 9;
  }
  @media only screen and (max-width: 825px) {
    width: calc(100% + 32px);
    height: 55%;
    left: -16px;
    top: 96px;
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
  @media only screen and (max-width: 825px) {
    padding-left: 24px;
  }
`;

const ChartTitlePadding = styled.div`
  position: relative;
  /* padding-left: 80px; */
  z-index: 99;
  margin-top: -16px;
  margin-bottom: 8px;
  ${props => props.theme.type.size.title3}
  ${props => props.theme.type.weight.prd.bold};
  text-align: center;
  p.caption{
    position: absolute;
    top:72px;
    left:0;
    width: fit-content;
    text-align: left;
    span{
      ${props => props.theme.type.size.title3}
      ${props => props.theme.type.weight.prd.bold};
    }
    @media only screen and (max-width: 825px) {
      position: static;
      margin-top: 24px;
      top:48px;
      left: 0px;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (max-width: 825px) {
    padding-left: 0px;
  }
`;
const ChartUnit = styled.p`
  /* padding-left: 80px; */
  margin-bottom: 12px;
  ${props => props.theme.type.size.caption};
  ${props => props.theme.type.weight.prd.regular};
  text-align: center;
  @media only screen and (max-width: 825px) {
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
    width: 100%;
    ${props => props.theme.type.size.body2}
    ${props => props.theme.type.weight.prd.regular}
    word-break: break-all;
  }
  @media only screen and (max-width: 825px) {
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
  margin-bottom: 70px;
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

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 156px;
  margin-bottom: ${props => props.isFull ? '128px' : 'auto'};
  /* height:  ${props => props.isFull ? 'calc(100% - 156px - 128px)' : 'auto'}; */
  height: calc(100% - 440px);
  /* position: relative; */
  /* background-color: ${props => props.isFilter ? 'rgba(15, 30, 45,0.95)' : ''}; */
  @media only screen and (max-width: 825px) {
		margin-top: 90px;
	}
`;

const RowBig = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 156px;
  margin-bottom: ${props => props.isFull ? '128px' : 'auto'};
  /* height:  ${props => props.isFull ? 'calc(100% - 156px - 128px)' : 'auto'}; */
  height: calc(100% - 280px);
  /* position: relative; */
  /* background-color: ${props => props.isFilter ? 'rgba(15, 30, 45,0.95)' : ''}; */
  @media only screen and (max-width: 825px) {
		margin-top: 120px;
	}
`;


const RowAuto = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 156px;
  margin-bottom: ${props => props.isFull ? '128px' : 'auto'};
  height:  ${props => props.isFull ? 'calc(100% - 156px - 128px)' : 'auto'};
  /* position: relative; */
  /* background-color: ${props => props.isFilter ? 'rgba(15, 30, 45,0.95)' : ''}; */
  @media only screen and (max-width: 825px) {
		margin-top: 96px;
    height: auto;
	}
`;

const RowAutoBG = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 156px;
  /* background-color: ${props => props.theme.color.darkNavy}; */
  margin-bottom: ${props => props.isFull ? '128px' : 'auto'};
  height:  ${props => props.isFull ? 'calc(100% - 156px - 128px)' : 'auto'};
  /* position: relative; */
  /* background-color: ${props => props.isFilter ? 'rgba(15, 30, 45,0.95)' : ''}; */
  @media only screen and (max-width: 825px) {
		margin-top: 120px;
    height: auto;
	}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  padding-top: 100px;
  position: fixed;
  z-index: 999;
  background-color: ${props => props.theme.color.ui.bg.dark};
`;

const Exp = styled.div`
  width: 100%;
  padding-left: calc(100% - 712px);
  ${props => props.theme.type.size.body1};
  ${props => props.theme.type.weight.prd.bold};
  white-space: break-spaces;
  @media only screen and (max-width: 825px) {
    white-space: normal;
    padding:0 24px;
  }
`;

const ExpFloating = styled.div`
  width: 100%;
  padding-left: calc(100% - 720px);
  white-space: break-spaces;
  margin-top: 48px;
  /* padding: 24px; */
  /* background-color: rgba(15,30,45,0.80); */
  ${props => props.theme.type.size.body1}
  ${props => props.theme.type.weight.prd.bold}
  z-index: 9;
  left: 0;
  position: absolute;
  /* bottom: 124px; */
  top: calc(100% - 400px + 120px + 24px);
  @media only screen and (max-width: 825px) {
    white-space: normal;
    padding:0 24px;
    top: unset;
    bottom: 24px !important;
  }
`;

const consumptionList = [
  {
    title: '??????',
    img: flag_kr,
    value: 145.9
  },
  {
    title: '??????',
    img: flag_us,
    value: 145.9
  },
  {
    title: '??????',
    img: flag_cn,
    value: 72.6
  },
  {
    title: '??????',
    img: flag_jp,
    value: 71.5
  },
  {
    title: '??????',
    img: flag_uk,
    value: 50.4
  },
  {
    title: '?????????',
    img: flag_kr,
    value: 44.3
  }
];

const Chapter1 = ({
  currentChapter,
  chapterObject,
  setThemeType,
  triggerFull,
  isFull
}) => {

  const { t } = useTranslation();
  const windowSize = useWindowSize();

  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };

  // const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  // Image Preview
  const [currentImageIndexS1, setCurrentImageIndexS1] = useState(0);
  const imgListS1 = [
    {
      src: img_kodak,
      caption: 'Eastman Company?????? ????????? ???????????? ?????? ??? ??????',
    },
    {
      src: img_bomb,
      caption: '???2??? ?????? ?????? ??????, ?????? ????????? ??? ?????? ???????????? ????????? ???????????? ????????? British No. 69',
    },
    {
      src: img_container,
      caption: 'Tupperware?????? ????????? ????????? ?????? ???????????? ??????',
    },
    {
      src: img_vynil,
      caption: '?????? ?????????????????? ????????????(PVC)??? ????????? ????????? LP???',
    },
    {
      src: img_astronaut,
      caption: '????????? ???????????? ??? ??????????????? ????????? ?????? ????????? ????????? ????????????',
    },
  ];

  const [currentVideoIndexS1, setCurrentVideoIndexS1] = useState(0);
  const videoList = [
    {
      src: videoURL.c1.s1.history1,
      caption: "???????????? ????????? ???????????? ????????? ????????? ???????????? ?????? John Wesley Hyatt??? ?????????????????? ????????? ???????????????, ?????? ????????? ????????? ???, ?????? ??? ????????? ??????????????? ???????????? ??? ?????? ????????? ???????????? ????????? ??? ???????????????.",
      ref: useRef(null)
    },
    {
      src: videoURL.c1.s1.history2,
      caption: "George Eastman??? ????????? ?????? ??????????????? ???????????? ????????? ????????? ???????????? ?????? ?????? ?????? ????????? ?????????, ????????? ????????? ????????? ?????? ??? ?????? ?????? ????????? ???????????? ????????????.",
      ref: useRef(null)
    },
    {
      src: videoURL.c1.s1.history3,
      caption: "Tupperware?????? ????????? ????????? ????????? ???????????? ?????? ?????????, ????????? ?????? ?????????????????? ???????????? ???????????? ???????????? ????????? ??? ?????? ???????????????.",
      ref: useRef(null)
    },
    {
      src: videoURL.c1.s1.history4,
      caption: "?????? ????????????????????? ?????????????????? ???????????? ?????? LP?????? ???????????? ?????? ????????????????????? ????????? ???????????? ???????????? ??????????????? ??? ?????????, ????????? ?????? ????????? ?????? ??? ?????? ???????????????.",
      ref: useRef(null)
    },
    {
      src: videoURL.c1.s1.history5,
      caption: "?????? ????????? ????????? ????????? ??? ????????? ????????? ???????????? ????????? ??? ??????????????? ????????? ???????????? ?????? ??? ??? ????????? ?????? ??????????????? ????????? ??? ???????????????.",
      ref: useRef(null)
    }
  ];

  const [currentImageIndexS4, setCurrentImageIndexS4] = useState(0);
  const imgListS4 = [
    {
      src: img_c1_s4_1,
      caption: t('c1-s5-exp1'),
    },
    {
      src: img_c1_s4_2,
      caption: t('c1-s5-exp2'),
    },
    {
      src: img_c1_s4_3,
      caption: t('c1-s5-exp3'),
    },
    {
      src: img_c1_s4_4,
      caption: t('c1-s5-exp4'),
    },
    {
      src: img_c1_s4_5,
      caption: t('c1-s5-exp5'),
    },
  ];

  const [currentImageIndexS5, setCurrentImageIndexS5] = useState(0);
  const imgListS5 = [
    {
      src: img_c1_s5_1,
      caption: t('c1-s6-exp1'),
    },
    {
      src: img_c1_s5_2,
      caption: t('c1-s6-exp2'),
    }
  ];

  // String
  const content = [
    {
      title: t("c1-s1-title"),
      exp: t("c1-s1-exp"),
      data: plastic_industry_timeline_1_1,
      chartTitle: '?????? ????????? ????????? ????????????',
      unit: '',
      from: '',
      page: 2,
    },
    {
      title: t("c1-s2-title"),
      exp: t("c1-s2-exp"),
      data: plastic_production_1_3,
      chartTitle: '????????? ????????? ???????????? ?????????',
      unit: '(??????: million metric tons)',
      from: '??????: ??????????????????????????????(Plastics Europe)',
      page: 3,
    },
    {
      title: t("c1-s2-1-title"),
      exp: t("c1-s2-1-exp"),
      data: plastic_production_1_3,
      // chartTitle: '????????? ????????? ???????????? ?????????',
      unit: '(??????: million metric tons)',
      from: '',
      page: 4,
    },
    {
      title: t("c1-s3-title"),
      exp: t("c1-s3-exp"),
      data: plastic_consumption_1_6,
      chartTitle: '2020??? ????????? 1?????? ???????????? ?????????',
      unit: '(??????: kilogram)',
      from: '??????: ?????????????????????????????????(EUROMAP)',
      page: 5,
    },
    // {
    //   title: '1?????? ????????????\n?????? ?????? ??????????',
    //   exp: '',
    //   data: plastic_consumption_1_6,
    //   chartTitle: '?????? 1?????? ?????? ???????????? ?????????',
    //   unit: '(??????: kilogram)',
    //   from: '',
    //   page: 6,
    // },
    {
      title: t("c1-s4-title"),
      exp: t("c1-s4-exp"),
      data: plastic_waste_1_7,
      chartTitle: '?????? ????????? ???????????? ????????????',
      unit: '(??????: 1000 ton)',
      from: '??????: ?????????',
      page: 6,
    },
    {
      title: t('c1-s5-title'),
      exp: '',
      data: plastic_waste_1_7,
      chartTitle: '?????? ????????? ???????????? ????????????',
      unit: '(??????: 1000 ton)',
      from: '',
      page: 7,
    },
    // {
    //   title: t("c1-s5-title"),
    //   exp: t("c1-s5-exp"),
    //   data: plastic_accumulated_waste_1_8,
    //   chartTitle: '?????? ????????? ???????????? ?????? ????????????',
    //   unit: '(??????: 1000 ton)',
    //   from: '??????: ?????????',
    //   page: 8,
    // },
    {
      title: t('c1-s6-title'),
      exp: '',
      data: plastic_accumulated_waste_1_8,
      chartTitle: '?????? ????????? ???????????? ?????? ????????????',
      unit: '(??????: 1000 ton)',
      from: '',
      page: 10,
    }
  ];

  const summary = [
    {
      title: t("c1-s1-title"),
      exp: t("c1-s1-exp"),
      pageList: [1],
      page: 1,
    },
    {
      title: t("c1-s2-title"),
      exp: t("c1-s2-exp"),
      pageList: [2, 3],
      page: 2,
    },
    {
      title: t("c1-s3-title"),
      exp: t("c1-s3-exp"),
      pageList: [4],
      page: 4,
    },
    {
      title: t("c1-s4-title"),
      exp: t("c1-s4-exp"),
      pageList: [5],
      page: 5,
    },
    {
      title: t("c1-s5-title"),
      exp: t("c1-s5-exp"),
      pageList: [6, 7],
      page: 7,
    }
  ];

  const buildingList = [
    {
      num: '500???',
      title: '??????????????????',
      unit: '74???t',
      img: img_lotte_tower
    },
    {
      num: '524,000???',
      title: 'KTX',
      unit: '700t',
      img: img_ktx
    },
    {
      num: '4,893,333???',
      title: '????????????',
      unit: '75kg',
      img: img_man
    },
  ]

  const [innerHeight, setInnterHeight] = useState(window.innerHeight);
  const [data, setData] = useState(content[0].data);
  const [isTitleTrigger, setIsTitleTrigger] = useState(false);
  const [isChart1Active, setIsChart1Active] = useState(false);
  const [isChart2Active, setIsChart2Active] = useState(false);
  const [isVideoTrigger, setIsVideoTrigger] = useState(false);

  // motion trigger
  const [isTrigger1, setIsTrigger1] = useState(false);
  const [isTrigger2, setIsTrigger2] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    setThemeType('dark');
    setInnterHeight(window.innerHeight);
  }, [window]);

  const handlePageChange = (number) => {
    console.log(number);
    let num = number;
    if (num < 0) {
      console.log(`it's minus! set number 0!`);
      num = 0;
    }
    if (8 < num) {
      console.log(`it's overflow! set number 8!`);
      num = 8;
    }
    if (num === 0) {
      setThemeType('dark');
    }
    setCurrentPage(num);
    if (1 < num && num < 11) {
      // setData(content[number - 2].data);
      if (num === 2) setData(content[1].data);
      // if (number === 5 || number === 6) setData(content[3].data);
      if (num === 5) setData(content[5].data);
      // if (number === 7) setData(content[6].data);
      // if (number === 8) setData(content[7].data);
    }
  }

  const handleDataIndex = (number) => {

  }

  const timelineData = [
    {
      title: t('c1-s1-subtitle1'),
      exp: t('c1-s1-subexp1'),
      expMobile: `??? ??????`,
      year: `1860's`,
      img: img_timeline1,
    },
    {
      title: t('c1-s1-subtitle2'),
      exp: t('c1-s1-subexp2'),
      expMobile: `????????????`,
      year: `1880's`,
      img: img_timeline2,
    },
    {
      title: t('c1-s1-subtitle3'),
      exp: t('c1-s1-subexp3'),
      expMobile: `????????????`,
      year: `1940's`,
      img: img_timeline3,
    },
    {
      title: t('c1-s1-subtitle4'),
      exp: t('c1-s1-subexp4'),
      expMobile: `????????????`,
      year: `1940's`,
      img: img_timeline4,

    },
    {
      title: t('c1-s1-subtitle5'),
      exp: t('c1-s1-subexp5'),
      expMobile: `????????????`,
       year: `1960's`,
      img: img_timeline5,
    }
  ];

  const [isVideo, setIsVideo] = useState(false);

  return (
    <Container>
      <ChapterIndicator
        sectionList={summary}
        isTrigger={0 < currentPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Chart
        isActive={1 < currentPage && currentPage < 6}
        isFilter={currentPage === 3 || currentPage === 4 || currentPage === 8 || currentPage === 10}
      >
        <BarChart
          data={data}
          stage={currentPage - 1}
        />
        <ChartTitlePadding>
          <p className="caption">
            <span>{content[currentPage - 1] && content[currentPage - 1].chartTitle}</span><br />
            {content[currentPage - 1] && content[currentPage - 1].from}
          </p>
        </ChartTitlePadding>
        {/* <ChartUnit>
          {content[currentPage - 2] && content[currentPage - 2].unit}
        </ChartUnit> */}
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
        renderAllPagesOnFirstRender={true}
        blockScrollDown={currentPage===8}
        // blockScrollDown={isMobile&&!isFull}
      >
        <Page isTop={true}>
          <ChapterTitle
            isFilter={true}
            title={'???????????? ?????????'}
            subTitle={t("c1-subtitle")}
            exp={t("c1-exp")}
            num={1}
            img={bg_c1}
            onClick={() => {
              setCurrentPage(1);
              // setTimeout(() => {
              //   isMobile && triggerFull();
              // }, 1200);
            }}
          />
        </Page>
        {
          content.map((section, i) =>
            <Page>
              <LiveArea className={'content'}>
                {
                  i === 0 && <SectionTitleFloating
                    title={`${section.title}`}
                  />
                }
                {
                  i !== 0 && <SectionTitleFloating
                    top={isMobile || isTablet ? '16px' : '48px'}
                    title={`${section.title}`}
                  />
                }
                {/* ??????????????? ?????? */}
                {
                  i === 0 &&
                  <Row>
                    {
                      timelineData.map((time, index) => (
                        <Grid
                          colPC={5}
                          colMb={2}
                          index={index}
                          length={5}
                          spacing={isMobile || isTablet ? 8 : 24}
                        > 
                          <ToTop
                            isTrigger={currentPage === section.page - 1}
                            distance={'middle'}
                            index={index}
                          >
                            <CardTimeline
                              title={time.title}
                              exp={time.exp}
                              expMobile={time.expMobile}
                              key={index}
                              index={0}
                              img={time.img}
                              year={time.year}
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
                  </Row>
                }
                {/* ??? ????????? ?????? ??????????????? */}
                {
                  i === 2 &&
                  <RowAuto
                    isFull={true}
                    isFilter={true}
                  >
                    {
                      buildingList.map((building, index) =>
                        <Grid
                          colPC={3}
                          colMb={1}
                          index={index}
                          spacing={isMobile || isTablet ? 8 : 32}
                          length={3}
                        >
                          <ToTop
                            index={index * 3}
                            isTrigger={currentPage === 3}
                            distance={'short'}
                          >
                            <ViewportWrapper
                              onEnterViewport={() => {
                                console.log('enter');

                              }
                              }>
                              {
                                index !==1 &&
                                <CardComparingInfoRow
                                  num={building.num}
                                  title={building.title}
                                  unit={building.unit}
                                  img={building.img}
                                  isTrigger={currentPage === 3}
                                  delay={index * 0.5}
                                />
                              }
                              {
                                index === 1 &&
                                <CardComparingInfoCol
                                  num={building.num}
                                  title={building.title}
                                  unit={building.unit}
                                  img={building.img}
                                  isTrigger={currentPage === 3}
                                  delay={index * 0.5}
                                />
                              }
                            </ViewportWrapper>
                          </ToTop>
                        </Grid>
                      )
                    }
                  </RowAuto>
                }
                {/* 1??? ????????? ??????????????? */}
                {
                  i === 3 &&
                  <RowAuto
                    isFilter={true}
                    isFull={true}
                  >
                    <FlagChart isTrigger={currentPage === 4} />
                  </RowAuto>
                }
                {/* ?????? ?????? */}
                {
                  i === 5 &&
                  <RowBig
                    isFilter={true}
                    isFull={true}
                  >
                    <ImagePreviewFull
                      imgList={imgListS4}
                      currentIndex={currentImageIndexS4}
                      onNext={() => { setCurrentImageIndexS4(currentImageIndexS4 + 1) }}
                      onPrev={() => { setCurrentImageIndexS4(currentImageIndexS4 - 1) }}
                    />
                  </RowBig>
                }
                {/* ?????? ?????? */}
                {
                  i === 6 &&
                  <RowBig
                    isFilter={true}
                    isFull={true}
                  >
                    <ImagePreviewFull
                      imgList={imgListS5}
                      currentIndex={currentImageIndexS5}
                      onNext={() => { setCurrentImageIndexS5(currentImageIndexS5 + 1) }}
                      onPrev={() => { setCurrentImageIndexS5(currentImageIndexS5 - 1) }}
                    />
                  </RowBig>
                }
                {
                  i !== 0 &&
                  <ChartSpacing height={windowSize.height - 400 + 120 + 'px'}>
                  </ChartSpacing>
                }
                {
                  i === 0 && <ExpFloating>
                    {section.exp}
                  </ExpFloating>
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
        <Page>
          <MsgFullScreen
            title={t('c1-s7-title')}
            exp={t('c1-s7-exp')}
            isCenter={true}
          >
            <Row3>
              <ChapterTitleLink
                title={'??????????????? ??????'}
                num={2}
                img={bg_c2}
                to={'/chapter2'}
                exp={t('c2-subtitle')}
              />
            </Row3>
          </MsgFullScreen>
        </Page>
        {/* </ImageBackground> */}
      </ReactPageScroller>
    </Container>
  )
}

export default Chapter1;