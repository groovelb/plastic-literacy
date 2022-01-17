import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import ReactPageScroller from 'react-page-scroller';

import LiveArea from '../components/layout/LiveArea';
import Page from '../components/layout/Page';
import SectionTitle from '../components/textContainer/SectionTitle';
import SectionContentVertical from '../components/textContainer/SectionContentVerticalVer2';
// import ImageBackground from "../components/videoBackground/ImageBackgroundVer2";
import ImageBackground from "../components/layout/ImageBackground";
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

import illust_result_mr from "../assets/illust/illust_result_mr.svg";
import illust_result_cr from "../assets/illust/illust_result_cr.svg";
import illust_result_tr from "../assets/illust/illust_result_tr.svg";
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

import illust_high1 from "../assets/img/illust/c3/mr/illust_high_product1.svg";
import illust_high2 from "../assets/img/illust/c3/mr/illust_high_product2.svg";
import illust_circular_loop from "../assets/img/illust/c3/mr/illust_economy_cycle_mr.jpg";
import illust_circular_loop2 from "../assets/img/illust/c3/mr/illust_economy_cycle_cr.jpg";
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
  z-index: -1;
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
    height: 55%;
    left: 0;
    top: 0px;
    padding-top: 48px;
    background-color: ${props => props.theme.color.ui.bg.dark};
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
    justify-content: flex-end;
    img{
      margin-bottom: 48px;
    }
  }
  .legend{
    text-align: left;
    margin-top: 24px;
  }
`;

const TitleCol = styled.div`
  width: 360px;
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
`;

const Exp = styled.div`
  margin-top: 24px;
  width: 100%;
  ${props => props.theme.type.size.body1};
  ${props => props.theme.type.weight.prd.bold};
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.whhite};
`;

const ExpCenter = styled.div`
  margin-top: -160px;
  margin-left: auto;
  margin-right: auto;
  width: 33%;
  word-break: keep-all;
  /* text-align: center; */
  ${props => props.theme.type.size.body1};
  ${props => props.theme.type.weight.prd.bold};
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.whhite};
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
  //   title: '5 특수 첨가제 기반 플레이크',
  //   exp: `고무 등의 다른 고분자, 무기충진제 및 난연제, 핵제 등 GS칼텍스에서 자체 개발한 기능성 첨가제를 복합적으로  일반 폴리프로필렌에 비해 특정 물성을 강화하거나 변형시킬 수 있다.`,
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
    title: '고객사 최종 제품화',
    img: '',
    x: 3.2,
    y: 0,
  },
  {
    title: '소비자의 제품 사용',
    img: '',
    x: 4,
    y: 1,
  },
  {
    title: '플라스틱 폐기물 발생',
    img: '',
    x: 3.2,
    y: 2,
  },
  {
    title: '고순도 플레이크 생성',
    img: '',
    x: 0.8,
    y: 0,
  },
  {
    title: '고객별 최적화 recipe',
    img: '',
    x: 0,
    y: 1,
  },
  {
    title: '친환경 복합수지 생성',
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
  height: 424px;
  border: solid 
  ${props => props.isBlink ? '2px ' : '1px '} ${props => props.isBlink ? props.theme.color.brand.epGreen : props.theme.color.brand.epPurple};
  background-color: ${props => props.isBlink ? props.theme.color.ui.bg.dark : ''};
  border-radius: 4px;
  transition: border 0.4s;
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.white};
  .arrow{
    position: absolute;
    top: 50%;
    right: -38px;
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
  }
  }
`;
const StageTitle = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  ${props => props.theme.type.weight.prd.bold};
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.whhite};
`;

const Chapter3 = ({
  currentChapter,
  chapterObject,
  setThemeType,
  themeType
}) => {

  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  // String
  const content = [
    {
      title: t("c3-s1-title"),
      exp: t("c3-s2-exp"),
      pageList:[2],
      page:2,
    },
    {
      title: t("c3-s2-title"),
      exp: t("c3-s2-exp"),
      pageList:[3,4,5,6],
      page:3,
    },
    {
      title: t("c3-s3-title"),
      exp: t("c3-s3-exp"),
      pageList:[7],
      page:7,
    },
    {
      title: t("c3-s4-title"),
      exp: t("c3-s4-exp"),
      pageList:[8],
      page:8,
    },
    {
      title: t("c3-s5-title"),
      exp: t("c3-s5-exp"),
      pageList:[9],
      page:9,
    },
    {
      title: t("c3-s6-title"),
      exp: t("c3-s6-exp"),
      pageList:[10],
      page:10,
    },
    {
      title: t("c3-s7-title"),
      exp: t("c3-s7-exp"),
      pageList:[11],
      page:11,
    },
    {
      title: t("c3-s8-title"),
      exp: t("c3-s8-exp"),
      pageList:[12],
      page:12,
    }
  ];

  const recycleMethods = [
    {
      id: "mr",
      name: 'Mechanical\nRecycling',
      exp: `물리적 재활용(MR)은 플라스틱 쓰레기를 물리적으로 분쇄해서 플라스틱의 원료를 만드는 방법으로, 가장 효율적인 재활용 기술입니다. `,
      img: ic_mr_outliend,
      result: {
        title: `플라스틱 플레이크\n(Plastic Flake)`,
        exp: `재생산되는 제품의 원료인 플라스틱 결정체`
      }
    },
    {
      id: "cr",
      name: 'Chemical\nRecycling',
      exp: `화학적 재활용(CR)은 MR이 불가능한 플라스틱 쓰레기를 화학적으로 분해해서 석유화학의 원재료(재생원료, 재생유)를 생산하는 재활용 기술입니다. 
      `,
      img: ic_cr_outliend,
      result: {
        title: `석유 정제 공정의 원재료\n(Petrochemical)`,
        exp: `친환경 복합수지 생성을 공정을 위한 공정 원료`
      }
    },
    {
      id: "tr",
      name: 'Thermal\nRecycling',
      exp: `재가공이 불가능한 폐기물을 연소 시켜 열에너지로 활용합니다. 다만, 플라스틱의 원료를 만들어내지 못해서 재활용으로 보지 않는 경우도 있습니다.
      `,
      img: ic_tr_outliend,
      result: {
        title: `열 발전 에너지 연료\n(Thermal Energy)`,
        exp: `화력발전 연소를 위한 연료`
      }
    }
  ];

  const mrStage = [
    {
      title: '수거',
      img: mr_stage1
    },
    {
      title: '분류',
      img: mr_stage2
    },
    {
      title: '분쇄',
      img: mr_stage3
    },
    {
      title: '합성',
      img: mr_stage4
    },
    {
      title: '완성',
      img: mr_stage5
    },
  ];

  const gsMrStage = [
    {
      title: '수거',
      img: mr_stage1
    },
    {
      title: '분류',
      img: mr_stage2
    },
    {
      title: '분쇄',
      img: mr_stage3
    },
    {
      title: '합성',
      img: mr_stage4_2
    },
    {
      title: '완성',
      img: mr_stage5_2
    },
  ];

  const crStage = [
    {
      title: '수거',
      img: cr_stage1
    },
    {
      title: '열분해',
      img: cr_stage2
    },
    {
      title: '정제공정',
      img: cr_stage4
    },
    {
      title: '친환경 복합수지 합성',
      img: cr_stage5
    },
  ];

  const lowProductList = [
    {
      title: '아스팔트 포장재',
      img: illust_low1
    },
    {
      title: '건축자재',
      img: illust_low2
    },
    {
      title: '일회용 파레트',
      img: illust_low3
    },
  ];

  const highProductList = [
    {
      title: '자동차 부품',
      img: illust_high1
    },
    {
      title: '세탁기 부품',
      img: illust_high2
    }
  ];

  const carPartList = [
    {
      title: 'Side Garnish',
      id: 'A',
      top: 145,
      left: 80,
    },
    {
      title: 'Lamp Housing',
      id: 'B',
      top: 115,
      left: 140,
    },
    {
      title: 'Door Module',
      id: 'C',
      top: 125,
      left: 230,
    },
    {
      title: 'Sunroof Frame',
      id: 'D',
      top: 25,
      left: 100,
    },
  ];

  const washingPartList = [
    {
      title: 'Drum Tube',
      id: 'A',
      top: 125,
      left: 130,
    },
    {
      title: 'Blower Housing',
      id: 'B',
      top: 15,
      left: 90,
    },
    {
      title: 'Body Drawer',
      id: 'C',
      top: -5,
      left: 160,
    },
    {
      title: 'Gasket',
      id: 'D',
      top: 95,
      left: 190,
    },
  ];




  const handlePageChange = (number) => {
    console.log(number);
    if (number === 0) {
      setThemeType('light');
    }
    if (number === 1) {
      setThemeType('light');
    }
    if (number === 2) {
      setThemeType('light');
    }
    if (number === 3) {
      setThemeType('dark');
    }
    if (number === 7) {
      setThemeType('dark');
    }
    if (number === 8) {
      setThemeType('light');
    }
    if (number === 12) {
      setThemeType('light');
    }
    if (number === 13) {
      setThemeType('dark');
    }
    setCurrentPage(number);
  }

  return (
    <Container>
      <ChapterIndicator
        sectionList={content}
        isTrigger={1<currentPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        themeType={themeType}
      />
      {
        1 < currentPage && currentPage < 7 &&
        <Chart
          isActive={2 < currentPage}
        >
          <SectionTitle
            themeType={'dark'}
            title={`2\n${t('c3-s2-title')}`}
          />
          <Row>
            {
              mrStage.map((stage, index, arr) =>
                <Grid
                  colPC={5}
                  colMb={5}
                  index={index}
                  length={arr}
                  spacing={48}
                >
                  <ToRight
                    isTrigger={2 < currentPage}
                    index={index}
                    distance={'short'}
                  >
                    <Stage
                      index={index}
                      themeType={'dark'}
                      status={
                        2 < currentPage ?
                          mrProcessList[currentPage - 3].stages.includes(index) === true ? 'on' : index < currentPage - 1 ? 'pass' : 'off' :
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
      {
        6 < currentPage &&
        <Chart
          isActive={currentPage === 8}
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
                  colMb={5}
                  index={index}
                  length={arr}
                  spacing={48}
                >
                  <ToRight
                    isTrigger={currentPage === 8}
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
                      <img src={stage.img} alt='' />
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
      }
      <ReactPageScroller
        pageOnChange={handlePageChange}
        animationTimerBuffer={0}
        animationTimer={1000}
        customPageNumber={currentPage}
      >
        <Page>
          <ChapterTitle
            title={'플라스틱의 순환'}
            num={3}
            isFilter={true}
            img={bg_c3}
            onClick={() => {
              setCurrentPage(1);
            }}
          />
        </Page>
        <Page>
          <ChapterSummary
            title={t("c3-subtitle")}
            exp={t("c3-exp")}
            sectionList={content}
            themeType={'light'}
            setCurrentPage={setCurrentPage}
          />
        </Page>
        <Page>
          <LiveArea className={''}>
            <SectionTitle
              themeType={'light'}
              title={`1\n${t('c3-s1-title')}`}
            />
            <Row>
              {
                recycleMethods.map((item, index, arr) =>
                  <Grid
                    colPC={3}
                    colMb={1}
                    index={index}
                    spacing={24}
                    length={arr.length}
                  >
                    <CardRecycleTech
                      title={item.name}
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
            <PageAlignTop key={index}>
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
        <Page>
          <LiveArea className={''}>
            <Row>
              <TitleCol>
                <SectionTitle title={`3\n${t('c3-s4-title')}`} />
              </TitleCol>
              <ContentCol>
                <Row>
                  <SubTitle>
                    로우 엔드 제품
                  </SubTitle>
                  {
                    lowProductList.map((product, index, arr) => (
                      <Grid
                        colPC={3}
                        colMb={3}
                        spacing={24}
                        length={arr.length}
                        index={index}
                        className={'product'}
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
        <PageAlignTop>
          <LiveArea className={''}>
            <SectionContentVertical
              themeType={'light'}
              title={geMrProcess.title}
              exp={geMrProcess.exp}
              left={geMrProcess.x * 248 + 'px'}
            />
          </LiveArea>
        </PageAlignTop>
        <Page>
          <LiveArea className={''}>
            <Row>
              <TitleCol>
                <SectionTitle
                  themeType={'light'}
                  title={`5\n${t('c3-s5-title')}`}
                />
              </TitleCol>
              <ContentCol>
                <Row themeType={'light'}>
                  <SubTitle>
                    하이 엔드 제품
                  </SubTitle>
                  {
                    highProductList.map((product, index, arr) => (
                      <Grid
                        colPC={2}
                        colMb={2}
                        spacing={24}
                        length={arr.length}
                        index={index}
                        className={'product'}
                      >
                        <img src={product.img} alt='' />
                        <p>
                          {product.title}
                        </p>
                        <div className={'legend'}>
                          {
                            index === 0 && carPartList.map((part, index) =>
                              <p>
                                <span>{part.id} - </span>
                                {part.title}
                              </p>
                            )
                          }

                          {
                            index === 1 && washingPartList.map((part, index) =>
                              <p>
                                <span>{part.id} - </span>
                                {part.title}
                              </p>
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
        <Page>
          <LiveArea>
            <SectionTitle
              themeType={'light'}
              title={`6\n${t('c3-s6-title')}`}
            />
            <Row>
              {
                crStage.map((stage, index, arr) =>
                  <Grid
                    colPC={4}
                    colMb={4}
                    index={index}
                    length={arr}
                    spacing={48}
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
          </LiveArea>
        </Page>
        <Page>
          <LiveArea>
            <SectionTitle
              themeType={'light'}
              title={t('c3-s7-title')}
            />
            <CircularLoop isActive={currentPage === 11}>
              <PlasticEcoCycleMR isStop={currentPage !== 11}/>
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
              {t('c3-s7-exp')}
            </ExpCenter>
          </LiveArea>
        </Page>
        <Page>
          <LiveArea>
            <SectionTitle
              themeType={'light'}
              title={t('c3-s8-title')}
            />
            <CircularLoop isActive={currentPage === 12}>
              <PlasticEcoCycleCR isStop={currentPage !== 12}/>
            </CircularLoop>
            <ExpCenter themeType='light'>
              {t('c3-s8-exp')}
            </ExpCenter>
          </LiveArea>
        </Page>
        <Page>
          <ImageBackground
            isFilter={true}
            img={videoURL.c3.s7.bg}
            isTrigger={true}
            title={t('c3-s9-title')}
            exp={t('c3-s9-exp')}
          >
          </ImageBackground>
        </Page>
        <Page>
          <ImageBackground
            isFilter={true}
            img={videoURL.c3.s8.bg}
            isTrigger={true}
            title={t('c3-s10-title')}
            exp={t('c3-s10-exp')}
          >
          </ImageBackground>
        </Page>
        <Page>
          <MsgFullScreen
            title={t('c3-s10-ending')}
          >
            <img src={text_energy} style={{marginBottom: '48px'}} alt='' />
            <img src={logo_white} alt='' />
          </MsgFullScreen>
        </Page>
      </ReactPageScroller>
    </Container>
  )
}

export default Chapter3;