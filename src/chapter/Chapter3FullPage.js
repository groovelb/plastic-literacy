import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import ReactPageScroller from 'react-page-scroller';

import LiveArea from '../components/layout/LiveArea';
import Page from '../components/layout/Page';
import SectionTitle from '../components/textContainer/SectionTitle';
import SectionContentVertical from '../components/textContainer/SectionContentVerticalVer2';
import ChapterSummary from '../components/layout/ChapterSummary';
import ChapterTitle from "../components/layout/ChapterTitleVer3";
import Grid from '../components/layout/Grid';
import CardRecycleTech from '../components/card/CardRecycleTech';
import ToTop from '../components/motion/ToTop';
import ToRight from '../components/motion/ToRight';

import illust_result_mr from "../assets/illust/illust_result_mr.svg";
import illust_result_cr from "../assets/illust/illust_result_cr.svg";
import illust_result_tr from "../assets/illust/illust_result_tr.svg";
import ic_arrow_next from "../assets/icon/ic_arrow_short_green.svg";

import bg_c3 from "../assets/img/bg/chapter/bg_chapter3_ver2.png";
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
  top:80px;
  padding-top: 80px;
  /* background-color: ${props => props.theme.color.ui.bg.dark}; */
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  height: calc(100% - 268px);
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

const mrProcessList = [
  {
    title: '1 분류 및 분쇄',
    exp: `Mechanical  Recycling의 첫번째 단계는 폐기물을 동일한  플라스틱 유형으로 분류.세척 후 1차 분쇄를 하는것으로 시작합니다.`,
    x: 0,
    stages: [0, 1]
  },
  {
    title: '2 정밀 분쇄',
    exp: `1차 분쇄가 끝난 폐기물들은 다시한번 세척을 한뒤 플라스틱 플레이크를 합성하기 위한 정밀분쇄 과정을 다시 거칩니다.`,
    x: 1,
    stages: [1, 2]
  },
  {
    title: '3 플레이크 합성',
    exp: `정밀 분쇄가 끝난 산출물들은 특수 과정을 거쳐 비로서 플라스틱 플레이크로 합성됩니다.`,
    x: 2,
    stages: [2, 3]
  },
  {
    title: '4 일반적인 플레이크의 특성',
    exp: `일반적으인 플레이크는 이물질이 혼합될 수 있기 때문에, 기존 새 플라스틱에 비해 품질이 떨어지고 생산이 가능한 제품군이 제한되는 단점이 있습니다.`,
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
  title: '5 특수 첨가제 기반 플레이크',
  exp: `고무 등의 다른 고분자, 무기충진제 및 난연제, 핵제 등 GS칼텍스에서 자체 개발한 기능성 첨가제를 복합적으로  일반 폴리프로필렌에 비해 특정 물성을 강화하거나 변형시킬 수 있다.`,
  x: 3,
  stages: [3, 4]
};

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
  color: ${props => props.themeType==='light'?props.theme.color.ui.strong:props.theme.color.ui.white};
  .arrow{
    position: absolute;
    top: 50%;
    right: -38px;
  }
  p{
    margin-top: 16px;
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
      return 0.25;
    }
  }
  }
  }
`;

const Chapter3 = ({
  currentChapter,
  chapterObject,
  setThemeType,
  themeType
}) => {

  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  // String
  const content = [
    {
      title: t("c3-s1-title"),
      exp: t("c3-s1-exp"),
    },
    {
      title: t("c3-s2-title"),
      exp: t("c3-s2-exp"),
    },
    {
      title: t("c3-s3-title"),
      exp: t("c3-s3-exp"),
    },
    {
      title: t("c3-s4-title"),
      exp: t("c3-s4-exp"),
    },
    {
      title: t("c3-s5-title"),
      exp: t("c3-s5-exp"),
    }
  ];

  const recycleMethods = [
    {
      id: "mr",
      name: 'Mechanical\nRecycling',
      exp: `폐플라스틱을 물리적으로 분쇄하고\n가공해서 원료 생성`,
      img: illust_result_mr,
      result: {
        title: `플라스틱 플레이크\n(Plastic Flake)`,
        exp: `재생산되는 제품의 원료인 플라스틱 결정체`
      }
    },
    {
      id: "cr",
      name: 'Chemical\nRecycling',
      exp: `폐플라스틱을 화학적 열분해하여\n석유화학 공정 원료로 사용`,
      img: illust_result_cr,
      result: {
        title: `석유화학의 원제료\n(Petrochemical)`,
        exp: `친환경 복합수지 생성을 공정을 위한 공정 원료`
      }
    },
    {
      id: "tr",
      name: 'Thermal\nRecycling',
      exp: `재가공이 불가능한 폐기물들을 태워\n화력에너지로 활용`,
      img: illust_result_tr,
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
      title: '1분쇄',
      img: mr_stage2
    },
    {
      title: '2차분쇄',
      img: mr_stage3
    },
    {
      title: '플레이크 합성',
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
      title: '1분쇄',
      img: mr_stage2
    },
    {
      title: '2차분쇄',
      img: mr_stage3
    },
    {
      title: '플레이크 합성',
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
    setCurrentPage(number);
  }

  return (
    <Container>
      {
        1 < currentPage && currentPage < 7 &&
        <Chart
          isActive={2 < currentPage}
        >
          <SectionTitle
            themeType={'dark'}
            title={`2\n${t('c3-s3-title')}`}
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
                      <p>
                        {stage.title}
                      </p>
                    </Stage>
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
            title={`4\n${t('c3-s5-title')}`}
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
                      themeType={2 < index?'dark':'light'}
                    >

                      {
                        index !== 4 &&
                        <img className='arrow' src={ic_arrow_next} alt='' />
                      }
                      <img src={stage.img} alt='' />
                      <p>
                        {stage.title}
                      </p>
                    </Stage>
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
            title={'플라스틱 리터러시'}
            num={3}
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
          />
        </Page>
        <PageAlignTop>
          <LiveArea className={'content'}>
            <SectionTitle
              themeType={'light'}
              title={`1\n${t('c3-s2-title')}`}
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
              <Exp themeType={'light'}>
                {t('c3-s2-exp')}
              </Exp>
            </Row>
          </LiveArea>
        </PageAlignTop>
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
          <LiveArea className={'content'}>
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
                    {t('c3-s4-exp')}
                  </Exp>
                </Row>
              </ContentCol>
            </Row>
          </LiveArea>
        </Page>
        <PageAlignTop>
          <LiveArea className={'content'}>
            <SectionContentVertical
              themeType={'light'}
              title={geMrProcess.title}
              exp={geMrProcess.exp}
              left={geMrProcess.x * 248 + 'px'}
            />
          </LiveArea>
        </PageAlignTop>
        <Page>
          <LiveArea className={'content'}>
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
        <PageAlignTop>
          <LiveArea>
            <SectionTitle
              themeType={'light'}
              title={`4\n${t('c3-s6-title')}`}
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
                        themeType={index===3?'dark':'light'}
                      >

                        {
                          index !== 3 &&
                          <img className='arrow' src={ic_arrow_next} alt='' />
                        }
                        <img className='stage' src={stage.img} alt='' />
                        <p>
                          {stage.title}
                        </p>
                      </Stage>
                    </ToRight>
                  </Grid>
                )
              }
              <Exp themeType='light'>
              {t('c3-s6-exp')}
              </Exp>
            </Row>
          </LiveArea>
        </PageAlignTop>
      </ReactPageScroller>
    </Container>
  )
}

export default Chapter3;