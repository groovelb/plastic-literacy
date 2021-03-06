import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import ReactPageScroller from 'react-page-scroller';
import { isMobile } from 'react-device-detect';

import LiveArea from '../components/layout/LiveArea';
import Page from '../components/layout/Page';
import SectionTitle from '../components/textContainer/SectionTitle';
import SectionContentVertical from '../components/textContainer/SectionContentVerticalVer2';
// import ImageBackground from "../components/videoBackground/ImageBackgroundVer2";
import ImageBackground from "../components/layout/ImageBackground";
import ImageBackgroundGradient from "../components/layout/ImageBackgroundGradient";
import ImageBackgroundVer2 from "../components/videoBackground/ImageBackgroundVer2";
import ChapterSummary from '../components/layout/ChapterSummary';
import ChapterIndicator from '../components/layout/ChapterIndicator';
import ChapterTitle from "../components/layout/ChapterTitleVer3";
import Grid from '../components/layout/Grid';
import CardRecycleTech from '../components/card/CardRecycleTech';

import PlasticEcoCycleMR from '../components/cycle/PlasticEcoCycleMR';
import PlasticEcoCycleCR from '../components/cycle/PlasticEcoCycleCR';

import ToTop from '../components/motion/ToTop';
import ToRight from '../components/motion/ToRight';
import MsgFullScreen from "../components/layout/MsgFullScreenVer2";
import { videoURL } from '../assets/mediaURL';
import logo_white from "../assets/img/logo/logo_white.svg";
import text_energy from "../assets/img/logo/text_energy.svg";

import ic_mr_outliend from "../assets/img/icon/ic_mr_outlined.svg";
import ic_cr_outliend from "../assets/img/icon/ic_cr_outlined.svg";
import ic_tr_outliend from "../assets/img/icon/ic_tr_outlined.svg";
import ic_arrow_next from "../assets/icon/ic_arrow_short_green.svg";

// import bg_c3 from "../assets/img/bg/chapter/bg_chapter3_ver2.png";
import bg_c3 from '../assets/img/bg/img_bg_c3.jpg';
import mr_stage1 from "../assets/img/illust/c3/mr/stage1.svg";
import mr_stage2 from "../assets/img/illust/c3/mr/stage2.svg";
import mr_stage3 from "../assets/img/illust/c3/mr/stage3.svg";
import mr_stage4 from "../assets/img/illust/c3/mr/stage4.svg";
import mr_stage4_2 from "../assets/img/illust/c3/mr/stage4-2.svg";
import mr_stage5 from "../assets/img/illust/c3/mr/stage5.svg";
import mr_stage5_2 from "../assets/img/illust/c3/mr/stage5-2.svg";
import cr_stage1 from "../assets/img/illust/c3/cr/stage1.svg";
import cr_stage2 from "../assets/img/illust/c3/cr/stage2.svg";
import cr_stage3 from "../assets/img/illust/c3/cr/stage3.svg";
import cr_stage4 from "../assets/img/illust/c3/cr/stage4.svg";
import cr_stage5 from "../assets/img/illust/c3/cr/stage5-2.svg";

import illust_low1 from "../assets/img/illust/c3/mr/illust_low_product1.svg";
import illust_low2 from "../assets/img/illust/c3/mr/illust_low_product2.svg";
import illust_low3 from "../assets/img/illust/c3/mr/illust_low_product3.svg";

// import illust_high1 from "../assets/img/illust/c3/mr/illust_high_product1.svg";
// import illust_high2 from "../assets/img/illust/c3/mr/illust_high_product2.svg";
import img_high1 from "../assets/img/illust/c3/mr/highend_car.png";
import img_high2 from "../assets/img/illust/c3/mr/highend_washing.png";
import gs_factory_bg from "../assets/img/bg/chapter/gs_factory_bg.jpg";
import illust_circular_loop from "../assets/img/illust/c3/mr/illust_economy_cycle_mr.jpg";
import illust_circular_loop2 from "../assets/img/illust/c3/mr/illust_economy_cycle_cr.jpg";
import img_slogan from "../assets/img/logo/logo_slogan.svg";
// import img_slogan_vertical from "../assets/img/logo/slogan_vertical.svg";

import bg_energy_plus from "../assets/img/bg/bg_energy_plus.jpg";
import logo_energy_plus from "../assets/img/logo/logo_energy_plus.svg";
import { t } from 'i18next';


const Container = styled.div`
  width: 100%;
`;

const PageAlignTop = styled(Page)`
  justify-content: flex-start !important;
  padding-top: 144px;
  height: 100%;
  .content{
    height: 100%;
  }
`;

const Chart = styled(LiveArea)`
  /* display: none; */
  position: fixed;
  pointer-events: none;
  z-index: 1;
  top:160px;
  /* background-color: ${props => props.theme.color.ui.bg.dark}; */
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  height: calc(100% - 440px);
  max-height: 920px;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.15s ease-out, transform 0.15s ease-out;
  transform: ${props => props.isActive ? `translateY(00px)` : `translateY(120px)`};
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    left: 0;
    top: 36px;
    padding-top: 48px;
    /* background-color: ${props => props.theme.color.ui.bg.dark}; */
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.whhite};
  .product{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: flex-end; */
    img{
      margin-bottom: 24px;
      @media only screen and (max-width: 480px) {
        width: 86px;
        height: auto;
      }
    }
  }
  .product.low{
    img{
      height: 140px;
      width: auto;
      @media only screen and (max-width: 480px) {
        height: 64px;
      }
    }
    
  }
  .product.high{
    img{
      height: 200px !important;
      width: auto !important;
    }
    @media only screen and (max-width: 480px) {
        .imgContainer{
          height: 100px;
          ${props => props.theme.layout.flexColCenter}
        }
        img.car{
          height: 72px !important;
          width: auto;
        }
        img.washing{
          height: 100px !important;
          width: auto;
        }
      }
  }
  .legend{
    text-align: left;
    margin-top: 16px;
    span{
      font-weight: bold;
      color: rgba(100, 100, 255, 1);
    }
  }
`;

const PartName = styled.p`
  opacity: ${props => props.isSelected ? 1 : 0.6};
  cursor: pointer;
  :hover{
    opacity: 1;
  }
`;

const Blink = keyframes`
  0%{opacity: 0.64}
  50%{opacity: 1}
  100%{opacity: 0.64}
`;

const ImageMark = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  ${props => props.theme.layout.flexColCenter}
  color: ${props => props.theme.color.brand.epGreen};
  background-color: rgba(100, 100, 255, 1);
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.caption}
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  cursor: pointer;
  opacity: 0.75;
  :hover{
    opacity: 1;
  }
  @media only screen and (max-width: 480px) {
    top: ${props => `calc(${props.top}% - 2px)`};
    left: ${props => `calc(${props.left}% - 2px)`};
    width: 16px;
    height: 16px;
    border-radius: 8px;
  }
`;

const TitleCol = styled.div`
  width: 360px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  ${props => props.theme.type.size.body1};
  ${props => props.theme.type.weight.prd.black};
  color: ${props => props.theme.color.brand.epGreen};
  margin-bottom: 48px;
  margin-top: 16px;
`;

const ContentCol = styled.div`
  width: calc(100% - 360px - 48px);
  margin-left: 48px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 0px;
  }
`;

const Exp = styled.div`
  margin-top: 24px;
  width: 100%;
  ${props => props.theme.type.size.body1};
  ${props => props.theme.type.weight.prd.bold};
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.whhite};
`;

const ExpCenter = styled.div`
  margin-top: -164px;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
  /* word-break: keep-all; */
  /* text-align: center; */
  ${props => props.theme.type.size.body1}
  ${props => props.theme.type.weight.prd.bold};
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.whhite};
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 0px;
  }
`;


const CircularLoop = styled.div`
  width: 100%;
  position: relative;
  margin: 120px 0;
  ${props => props.theme.layout.flexColCenter}
  img{
    width: 90%;
    margin: 0 auto;
    height: auto;
  }
  transition: opacity 0.3s;
  opacity: ${props => props.isActive ? 1 : 0};
  @media only screen and (max-width: 480px) {
    margin: 24px 0;
  }
`;

const mrProcessList = [
  {
    title: t('c3-s2-p1-subtitle'),
    exp: t('c3-s2-p1-exp'),
    x: 0,
    stages: [0, 1]
  },
  {
    title: t('c3-s2-p2-subtitle'),
    exp: t('c3-s2-p2-exp'),
    x: 1,
    stages: [1, 2]
  },
  {
    title: t('c3-s2-p3-subtitle'),
    exp: t('c3-s2-p3-exp'),
    x: 2,
    stages: [2, 3]
  },
  {
    title: t('c3-s2-p4-subtitle'),
    exp: t('c3-s2-p4-exp'),
    x: 3,
    stages: [3, 4]
  },
  // {
  //   title: '5 ?????? ????????? ?????? ????????????',
  //   exp: `?????? ?????? ?????? ?????????, ??????????????? ??? ?????????, ?????? ??? GS??????????????? ?????? ????????? ????????? ???????????? ???????????????  ?????? ????????????????????? ?????? ?????? ????????? ??????????????? ???????????? ??? ??????.`,
  //   x: 3,
  //   stages: [3, 4]
  // },
];

const geMrProcess = {
  title: t('c3-s4-p1-subtitle'),
  exp: t('c3-s4-p1-exp'),
  x: 3,
  stages: [3, 4]
};

const circularStageList = [
  {
    title: '????????? ?????? ?????????',
    img: '',
    x: 3.2,
    y: 0,
  },
  {
    title: '???????????? ?????? ??????',
    img: '',
    x: 4,
    y: 1,
  },
  {
    title: '???????????? ????????? ??????',
    img: '',
    x: 3.2,
    y: 2,
  },
  {
    title: '????????? ???????????? ??????',
    img: '',
    x: 0.8,
    y: 0,
  },
  {
    title: '????????? ????????? recipe',
    img: '',
    x: 0,
    y: 1,
  },
  {
    title: '????????? ???????????? ??????',
    img: '',
    x: 0.8,
    y: 2,
  },
];

const CircularStage = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 54px;
  background-color: #fff;
  border: solid 1px ${props => props.theme.color.brand.epGreen};
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`;

const Stage = styled.div`
  position: relative;
  ${props => props.theme.layout.flexColCenter}
  width: 100%;
  height: 386px;
  border: solid 
  ${props => props.isBlink ? '2px ' : '1px '} ${props => props.isBlink ? props.theme.color.brand.epGreen : props.theme.color.brand.epPurple};
  background-color: ${props => props.isBlink ? props.theme.color.ui.bg.dark : ''};
  border-radius: 4px;
  transition: border 0.4s;
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.white};
  @media only screen and (max-width: 480px) {
    height: 120px;
    padding: 12px 0;
  }
  .arrow{
    position: absolute;
    top: 50%;
    right: -38px;
    @media only screen and (max-width: 480px) {
      display: none;
    }
  }
  p{
    margin-top: 32px;
    ${props => props.theme.type.weight.prd.bold};
  }
  img.stage{
    transition: opacity 0.5s;
    height: 324px;
    width: auto;
    opacity: ${props => {
    if (props.status === 'on') {
      return 1;
    }
    if (props.status === 'off') {
      return 0;
    }
    if (props.status === 'pass') {
      return 0.1;
    }
  }
  };
    @media only screen and (max-width: 480px) {
      height: 100%;
      width: auto;
    }
  }
`;
const StageTitle = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  ${props => props.theme.type.weight.prd.bold};
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.whhite};
  @media only screen and (max-width: 480px) {
    margin-top: 8px;
  }
`;

const StageContent = styled(SectionContentVertical)`
  position: static;
  margin-left: ${props => props.left};
  @media only screen and (max-width: 480px) {
    margin-top: 16px;
    margin-left: 0px;
    width: 100%;
  }
`;

const Slogan = styled.a`
  margin: 120px auto 0px auto;
  width: 480px;
  padding: 16px;
  height: auto;
  position: relative;
  img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    margin-top: 0px;
    opacity: 0.82;
    transition: all 0.3s;
  }
  :hover{
    img{
      margin-top: -24px;
      opacity: 1;
    }
  }
  @media only screen and (max-width: 480px) {
    margin: 48px auto 0px auto;
    width: 256px;
    img{
      opacity: 1;
    }
  }
  
`;

const Chapter3 = ({
  currentChapter,
  chapterObject,
  setThemeType,
  themeType,
  triggerFull,
  isFull
}) => {

  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  // String
  const content = [
    {
      title: t("c3-s1-title"),
      exp: t("c3-s2-exp"),
      pageList: [1],
      page: 1,
    },
    {
      title: t("c3-s2-title"),
      exp: t("c3-s2-exp"),
      pageList: [2, 3, 4, 5],
      page: 2,
    },
    {
      title: t("c3-s3-title"),
      exp: t("c3-s3-exp"),
      pageList: [6],
      page: 6,
    },
    {
      title: t("c3-s4-title"),
      exp: t("c3-s4-exp"),
      pageList: [7],
      page: 7,
    },
    {
      title: t("c3-s5-title"),
      exp: t("c3-s5-exp"),
      pageList: [8, 9],
      page: 8,
    },
    {
      // title: t("c3-s6-title"),
      title: '??????????????? ???????????? ???????????? GS???????????? CR',
      exp: t("c3-s6-exp"),
      pageList: [10, 11, 12],
      page: 10,
    },
    // {
    //   title: t("c3-s7-title"),
    //   exp: t("c3-s7-exp"),
    //   pageList: [11],
    //   page: 11,
    // },
    // {
    //   title: t("c3-s8-title"),
    //   exp: t("c3-s8-exp"),
    //   pageList: [12],
    //   page: 12,
    // }
  ];

  const recycleMethods = [
    {
      id: "mr",
      name1: 'Mechanical',
      name2: 'Recycling',
      exp: t('c3-s1-subexp1'),
      img: ic_mr_outliend,
      result: {
        title: `???????????? ????????????\n(Plastic Flake)`,
        exp: `??????????????? ????????? ????????? ???????????? ?????????`
      }
    },
    {
      id: "cr",
      name1: 'Chemical',
      name2: 'Recycling',
      exp: t('c3-s1-subexp2'),
      img: ic_cr_outliend,
      result: {
        title: `?????? ?????? ????????? ?????????\n(Petrochemical)`,
        exp: `????????? ???????????? ????????? ????????? ?????? ?????? ??????`
      }
    },
    {
      id: "tr",
      name1: 'Thermal',
      name2: 'Recycling',
      exp: t('c3-s1-subexp3'),
      img: ic_tr_outliend,
      result: {
        title: `??? ?????? ????????? ??????\n(Thermal Energy)`,
        exp: `???????????? ????????? ?????? ??????`
      }
    }
  ];

  const [isMrStageShow, setIsMrStageShow] = useState(false);
  const mrStage = [
    {
      title: '??????',
      img: mr_stage1
    },
    {
      title: '?????? ??? ??????',
      img: mr_stage2
    },
    {
      title: '??????',
      img: mr_stage3
    },
    {
      title: '??????',
      img: mr_stage4
    },
    {
      title: '??????',
      img: mr_stage5
    },
  ];
  const [isMrStageShow2, setIsMrStageShow2] = useState(false);

  const gsMrStage = [
    {
      title: '??????',
      img: mr_stage1
    },
    {
      title: '?????? ??? ??????',
      img: mr_stage2
    },
    {
      title: '??????',
      img: mr_stage3
    },
    {
      title: '?????? ??? ??????',
      img: mr_stage4_2
    },
    {
      title: '??????',
      img: mr_stage5_2
    },
  ];

  const crStage = [
    {
      title: '??????',
      img: cr_stage1
    },
    {
      title: '?????????',
      img: cr_stage2
    },
    {
      title: '????????????',
      img: cr_stage4
    },
    {
      title: '????????? ???????????? ??????',
      img: cr_stage5
    },
  ];

  const lowProductList = [
    // {
    //   title: '???????????? ?????????',
    //   img: illust_low1
    // },
    {
      title: '?????? ??????',
      img: illust_low2
    },
    {
      title: '????????? ?????????',
      img: illust_low3
    },
  ];

  const highProductList = [
    {
      title: '????????? ??????',
      img: img_high1
    },
    {
      title: '????????? ??????',
      img: img_high2
    }
  ];

  const [partIndex1, setPartIndex1] = useState(0);
  const [partIndex2, setPartIndex2] = useState(0);

  const carPartList = [
    {
      title: 'Engine Under Cover',
      id: 'A',
      top: isMobile ? 17 : 110,
      left: isMobile ? 1 : -30,
    },
    {
      title: 'Battery Tray',
      id: 'B',
      top: isMobile ? 13 : 80,
      left: isMobile ? 11 : 24,
    },
    {
      title: 'Mud Guard',
      id: 'C',
      top: isMobile ? 19 : 144,
      left: isMobile ? 27 : 86,
    },
    {
      title: 'Luggage Floor Box',
      id: 'D',
      top: isMobile ? 15 : 108,
      left: isMobile ? 43 : 164,
    },
    {
      title: 'Wheel Guard',
      id: 'E',
      top: isMobile ? 13 : 96,
      left: isMobile ? 81 : 340,
    },
  ];

  const washingPartList = [
    // {
    //   title: 'Drawer Panel',
    //   id: 'A',
    //   top: isMobile ? -12 : 8,
    //   left: isMobile ? 44 : 128,
    // },
    // {
    //   title: 'Control Panel',
    //   id: 'B',
    //   top: isMobile ? -12 : 8,
    //   left: isMobile ? 92 : 224,
    // },
    {
      title: 'Carbinet Base',
      id: 'A',
      top: isMobile ? 29 : 180,
      left: isMobile ? 49 : 180,
    }
  ];


  const handlePageChange = (number) => {
    console.log('??????' + number);
    console.log('-------------');
    if (number === 0) {
      setThemeType('light');
    }
    if (number === 1) {
      setThemeType('light');
    }
    if (number === 2) {
      setThemeType('dark');
    }
    if (number === 3) {
      setThemeType('dark');
    }
    if (number === 4) {
      setThemeType('dark');
    }
    if (number === 5) {
      setThemeType('dark');
    }
    if (number === 6) {
      setThemeType('dark');
    }
    if (number === 7) {
      setThemeType('light');
    }
    if (number === 8) {
      setThemeType('light');
    }
    if (number === 9) {
      setThemeType('light');
    }
    if (number === 10) {
      setThemeType('light');
    }
    if (number === 11) {
      setThemeType('light');
    }
    if (number === 12) {
      setThemeType('light');
    }
    if (number === 13) {
      setThemeType('dark');
    }

    if (1 < number && number < 6) {
      setIsMrStageShow(true);
      console.log('true');
    }
    if (number === 7) {
      setIsMrStageShow2(true);
    }
    setCurrentPage(number);
  }

  const handleBeforePageChange = (number) => {
    console.log('-------------');
    console.log('??????' + number);
    if (!(1 < number && number < 6)) {
      // setThemeType('dark');
      setIsMrStageShow(false);
      console.log('false');
    }
    if (number !== 7) {
      setIsMrStageShow2(false);
    }

    handlePageChange(number);
    // setCurrentPage(number);
  }

  return (
    <Container>
      <ChapterIndicator
        sectionList={content}
        isTrigger={0 < currentPage && currentPage < 12}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        themeType={themeType}
      />
      {
        0 < currentPage && currentPage < 6 &&
        <Chart
          isActive={isMrStageShow}
        >
          <SectionTitle
            themeType={'dark'}
            title={`${t('c3-s2-title')}`}
          />
          <Row>
            {
              mrStage.map((stage, index, arr) =>
                <Grid
                  colPC={5}
                  colMb={3}
                  index={index}
                  length={arr}
                  spacing={isMobile ? 8 : 48}
                >
                  <ToRight
                    isTrigger={1 < currentPage}
                    index={index}
                    distance={'short'}
                  >
                    <Stage
                      index={index}
                      themeType={'dark'}
                      status={
                        1 < currentPage ?
                          mrProcessList[currentPage - 2].stages.includes(index) === true ? 'on' : index < currentPage - 1 ? 'pass' : 'off' :
                          'off'
                      }
                      isBlink={
                        currentPage === 7 && (index === 3 || index === 4)
                      }
                    >
                      {
                        index !== 4 &&
                        <img className='arrow' src={ic_arrow_next} alt='' />
                      }
                      {
                        index === 4 && currentPage === 7 && <img className='stage' src={mr_stage5_2} alt='' />
                      }
                      {
                        index === 3 && currentPage === 7 && <img className='stage' src={mr_stage4_2} alt='' />
                      }
                      {
                        index === 4 && currentPage !== 7 && <img className='stage' src={stage.img} alt='' />
                      }
                      {
                        index === 3 && currentPage !== 7 && <img className='stage' src={stage.img} alt='' />
                      }
                      {
                        index < 3 && <img className='stage' src={stage.img} alt='' />
                      }
                    </Stage>
                    <StageTitle>
                      {stage.title}
                    </StageTitle>
                  </ToRight>
                </Grid>
              )
            }
          </Row>
        </Chart>
      }
      {/* {
        6 < currentPage &&
        <Chart
          isActive={isMrStageShow2}
        >
          <SectionTitle
            themeType={'light'}
            title={`4\n${t('c3-s4-title')}`}
          />
          <Row>
            {
              gsMrStage.map((stage, index, arr) =>
                <Grid
                  colPC={5}
                  colMb={3}
                  index={index}
                  length={arr}
                  spacing={isMobile? 16 : 48}
                >
                  <ToRight
                    isTrigger={currentPage === 7}
                    index={index}
                    distance={'short'}
                  >
                    <Stage
                      index={index}
                      status={'on'}
                      isBlink={2 < index}
                      themeType={2 < index ? 'dark' : 'light'}
                    >

                      {
                        index !== 4 &&
                        <img className='arrow' src={ic_arrow_next} alt='' />
                      }
                      <img className={'stage'} src={stage.img} alt='' />
                    </Stage>
                    <StageTitle themeType={themeType}>
                      {stage.title}
                    </StageTitle>
                  </ToRight>
                </Grid>
              )
            }
          </Row>
        </Chart>
      } */}
      <ReactPageScroller
        // pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        animationTimer={750}
        customPageNumber={currentPage}
        renderAllPagesOnFirstRender={true}
        blockScrollDown={currentPage === 14}
      // blockScrollDown={isMobile&&!isFull}
      >
        <Page isTop={true}>
          <ChapterTitle
            title={'??????????????? ??????'}
            subTitle={t("c3-subtitle")}
            exp={t("c3-exp")}
            num={3}
            isFilter={true}
            img={bg_c3}
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
            title={t("c3-subtitle")}
            exp={t("c3-exp")}
            sectionList={content}
            themeType={'light'}
            setCurrentPage={setCurrentPage}
          />
        </Page> */}
        <Page
          themeType={'light'}
          isOverlap={true}
        >
          <LiveArea className={''}>
            <SectionTitle
              themeType={'light'}
              title={`${t('c3-s1-title')}`}
            />
            <Row>
              {
                recycleMethods.map((item, index, arr) =>
                  <Grid
                    colPC={3}
                    colMb={1}
                    index={index}
                    spacing={isMobile ? 8 : 24}
                    length={arr.length}
                  >
                    <CardRecycleTech
                      titleTop={item.name1}
                      titleBottom={item.name2}
                      exp={item.exp}
                      title2={item.result.title}
                      exp2={item.result.exp}
                      img={item.img}
                    />
                  </Grid>
                )
              }
              {/* <Exp themeType={'light'}>
                {t('c3-s2-exp')}
              </Exp> */}
            </Row>
          </LiveArea>
        </Page>
        {
          mrProcessList.map((process, index) =>
            <PageAlignTop
              themeType='dark'
              key={index}
            >
              <LiveArea className={'content'}>
                <SectionContentVertical
                  title={process.title}
                  exp={process.exp}
                  left={process.x * 248 + 'px'}
                />
              </LiveArea>
            </PageAlignTop>
          )
        }
        <Page themeType={'dark'}>
          <LiveArea className={''}>
            <Row className={'RowCol'}>
              <TitleCol>
                <SectionTitle title={`${t('c3-s3-title')}`} />
              </TitleCol>
              <ContentCol>
                <Row>
                  <SubTitle>
                    ?????? ?????? ??????
                  </SubTitle>
                  {
                    lowProductList.map((product, index, arr) => (
                      <Grid
                        colPC={2}
                        colMb={2}
                        spacing={isMobile ? 8 : 24}
                        length={arr.length}
                        index={index}
                        className={'product low'}
                      >
                        <img src={product.img} alt='' />
                        <p>
                          {product.title}
                        </p>
                      </Grid>
                    ))
                  }
                  <Exp>
                    {t('c3-s3-exp')}
                  </Exp>
                </Row>
              </ContentCol>
            </Row>
          </LiveArea>
        </Page>
        <Page themeType={'light'}>
          <LiveArea className={''}>
            <SectionTitle
              themeType={'light'}
              title={`${t('c3-s4-title')}`}
            />
            <Row>
              {
                gsMrStage.map((stage, index, arr) =>
                  <Grid
                    colPC={5}
                    colMb={3}
                    index={index}
                    length={arr}
                    spacing={isMobile ? 8 : 48}
                  >
                    <ToRight
                      isTrigger={currentPage === 7}
                      index={index}
                      distance={'short'}
                    >
                      <Stage
                        index={index}
                        status={'on'}
                        isBlink={2 < index}
                        themeType={2 < index ? 'dark' : 'light'}
                      >

                        {
                          index !== 4 &&
                          <img className='arrow' src={ic_arrow_next} alt='' />
                        }
                        <img className={'stage'} src={stage.img} alt='' />
                      </Stage>
                      <StageTitle themeType={themeType}>
                        {stage.title}
                      </StageTitle>
                    </ToRight>
                  </Grid>
                )
              }
            </Row>
            {/* <Exp themeType='light'>
              {geMrProcess.exp}
            </Exp> */}
            <StageContent
              themeType={'light'}
              title={geMrProcess.title}
              exp={geMrProcess.exp}
              left={geMrProcess.x * 248 + 'px'}
            />
          </LiveArea>
        </Page>
        <Page isTop={isMobile ? true : false}>
          <LiveArea className={''}>
            <Row>
              <TitleCol>
                <SectionTitle
                  themeType={'light'}
                  title={`${t('c3-s5-title')}`}
                />
              </TitleCol>
              <ContentCol>
                <Row themeType={'light'}>
                  <SubTitle>
                    {t('c3-s5-subtitle')}
                  </SubTitle>
                  {
                    highProductList.map((product, index, arr) => (
                      <Grid
                        colPC={2}
                        colMb={2}
                        spacing={isMobile ? 8 : 24}
                        length={arr.length}
                        index={index}
                        className={'product high'}
                      >
                        {
                          index === 0 && carPartList.map((part, index) =>
                            <ImageMark
                              top={part.top}
                              left={part.left}
                              key={index}
                              onMouseOver={() => setPartIndex1(index + 1)}
                              onMouseLeave={() => setPartIndex1(0)}
                            >
                              {part.id}
                            </ImageMark>
                          )
                        }
                        {
                          index === 1 && washingPartList.map((part, index) =>
                            <ImageMark
                              top={part.top}
                              left={part.left}
                              key={index}
                              onMouseOver={() => setPartIndex2(index + 1)}
                              onMouseLeave={() => setPartIndex2(0)}
                            >
                              {part.id}
                            </ImageMark>
                          )
                        }
                        <div className='imgContainer'>
                          <img className={index === 0 ? 'car' : 'washing'} src={product.img} alt='' />
                        </div>

                        <p>
                          {product.title}
                        </p>
                        <div className={'legend'}>
                          {/* CAR */}
                          {
                            index === 0 && carPartList.map((part, index) =>
                              <PartName isSelected={partIndex1 === index + 1}>
                                <span>{part.id}</span> - &nbsp;
                                {part.title}
                              </PartName>
                            )
                          }
                          {/* WASHING MACHINE */}
                          {
                            index === 1 && washingPartList.map((part, index) =>
                              <PartName isSelected={partIndex2 === index + 1}>
                                <span>{part.id}</span> - &nbsp;
                                {part.title}
                              </PartName>
                            )
                          }
                        </div>
                      </Grid>
                    ))
                  }
                  <Exp themeType={'light'}>
                    {t('c3-s5-exp')}
                  </Exp>
                </Row>
              </ContentCol>
            </Row>
          </LiveArea>
        </Page>
        <Page isTop={isMobile ? true : false}>
          <LiveArea>
            <SectionTitle
              themeType={'light'}
              title={t('c3-s6-title')}
            />
            <CircularLoop isActive={true}>
              <PlasticEcoCycleMR isStop={currentPage !== 9} />
              {/* <img src={illust_circular_loop} alt='' /> */}
              {/* {
                circularStageList.map((stage,index) => 
                  <CircularStage
                    top={`calc(${stage.y} * 50% - 54px)`}
                    left={`calc(${stage.x} * 25% - 54px)`}
                  >
                  </CircularStage>
                )
              } */}
            </CircularLoop>
            <ExpCenter themeType='light'>
              {t('c3-s6-exp')}
            </ExpCenter>
          </LiveArea>
        </Page>
        <Page isTop={true}>
          <ImageBackground
            isFilter={true}
            img={gs_factory_bg}
            isTrigger={true}
            title={t('c3-s7-title')}
            exp={t('c3-s7-subtitle') + t('c3-s7-exp')}
          >
          </ImageBackground>
          {/* <LiveArea>
            <SectionTitle
              themeType={'light'}
              title={`${t('c3-s6-title')}`}
            />
            <Row>
              {
                crStage.map((stage, index, arr) =>
                  <Grid
                    colPC={4}
                    colMb={4}
                    index={index}
                    length={arr}
                    spacing={isMobile ? 8 : 48}
                  >
                    <ToRight
                      isTrigger={currentPage === 10}
                      index={index}
                      distance={'short'}
                    >
                      <Stage
                        index={index}
                        status={'on'}
                        isBlink={2 < index}
                        themeType={index === 3 ? 'dark' : 'light'}
                      >
                        {
                          index !== 3 &&
                          <img className='arrow' src={ic_arrow_next} alt='' />
                        }
                        <img className='stage' src={stage.img} alt='' />
                      </Stage>
                      <StageTitle themeType='light'>
                        {stage.title}
                      </StageTitle>
                    </ToRight>
                  </Grid>
                )
              }
              <Exp themeType='light'>
                {t('c3-s6-exp')}
              </Exp>
            </Row>
          </LiveArea> */}
        </Page>
        <Page isTop={isMobile ? true : false}>
          <LiveArea>
            <SectionTitle
              themeType={'light'}
              title={t('c3-s8-title')}
            />
            <CircularLoop isActive={true}>
              <PlasticEcoCycleCR isStop={currentPage !== 11} />
            </CircularLoop>
            <ExpCenter themeType='light'>
              {t('c3-s8-exp')}
            </ExpCenter>
          </LiveArea>
        </Page>
        <Page isTop={true}>
          <ImageBackground
            isFilter={true}
            img={videoURL.c3.ending1}
            isTrigger={true}
            title={t('c3-s9-title')}
            exp={t('c3-s9-exp')}
          >
          </ImageBackground>
        </Page>
        <Page isTop={true}>
          <ImageBackground
            isFilter={true}
            img={videoURL.c3.ending2}
            isTrigger={true}
            title={t('c3-s10-title')}
            exp={t('c3-s10-exp')}
          >
            {/* <Slogan href='https://gscaltexmediahub.com/category/csr/esg/' target='_blank'>
              <img src={img_slogan} alt='' />
            </Slogan> */}
          </ImageBackground>
        </Page>
        <Page isTop={true}>
          <ImageBackgroundGradient
            isFilter={true}
            img={bg_energy_plus}
            isTrigger={true}
            title={t('c3-s11-title')}
            exp={t('c3-s11-exp')}
          >
            <Slogan href='https://bit.ly/3LbtqG9' target='_blank'>
              <img src={logo_energy_plus} alt='' />
            </Slogan>
          </ImageBackgroundGradient>
        </Page>
        {/* <Page>
          <MsgFullScreen
            title={t('c3-s10-ending')}
          >
            <img src={text_energy} style={{ margin: '80px 0px' }} alt='' />
            <img src={logo_white} style={{ marginBottom: '80px' }} alt='' />
          </MsgFullScreen>
        </Page> */}
      </ReactPageScroller>
    </Container>
  )
}

export default Chapter3;