import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import ChapterTitle from "../components/layout/ChapterTitle";
import useWindowSize from '../hook/useWindowSize';
import Section from "../components/layout/Section";
import ViewportWrapper from '../components/ViewportWrapper';
import MsgFullScreen from "../components/layout/MsgFullScreen";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import VideoBackground from "../components/videoBackground/VideoBackground";
import ToTop from '../components/motion/ToTop';
import FadeIn from '../components/motion/FadeIn';
import LiveArea from "../components/layout/LiveArea";
import PlasticLiteracy from "../template/PlasticLiteracy";
import SectionContentHorizon from "../components/textContainer/SectionContentHorizon";
import ImageBackground from "../components/videoBackground/ImageBackground";

import { isMobile } from 'react-device-detect';
import video_s4 from "../assets/video/video_c3_last.mp4";
import bg_title from "../assets/img/bg/title_bg_c3.jpeg";
import bg_transition from '../assets/img/bg/bg_c2_ocean_transition.jpg';

import illust_result_mr from "../assets/illust/illust_result_mr.svg";
import illust_result_cr from "../assets/illust/illust_result_cr.svg";
import illust_result_tr from "../assets/illust/illust_result_tr.svg";

import illust_circle_mr from "../assets/img/illust/c3/circle_mr.svg";
import illust_circle_cr from "../assets/img/illust/c3/circle_cr.svg";
import illust_circle_tr from "../assets/img/illust/c3/circle_tr.svg";
import ic_arrow_down_white from "../assets/img/icon/ic_arrow_down_white.svg";

import { videoURL } from '../assets/mediaURL';
import illust_process_mr_general from "../assets/img/illust/c3/process_mr_general.png";
import illust_process_mr_gs from "../assets/img/illust/c3/process_mr_gs.png";
import illust_process_cr from "../assets/img/illust/c3/process_cr.png";
import illust_mr1 from "../assets/img/illust/result/mr1.svg";
import illust_mr2 from "../assets/img/illust/result/mr2.svg";
import illust_mr3 from "../assets/img/illust/result/mr3.svg";
import illust_mr4 from "../assets/img/illust/result/mr4.svg";
import illust_mr5 from "../assets/img/illust/result/mr5.svg";


const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  margin-bottom: 48px;
`;

const IllustContainer = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.theme.layout.flexColCenter}
  @media only screen and (max-width: 480px) {
   
  }
`;

const circleSize = {
  width: isMobile ? window.innerWidth : 900,
  height: isMobile ? window.innerWidth : 900,
  margin: isMobile ? 0 : 20
};

const nodeSize = {
  width: isMobile ? 54 : 108,
  height: isMobile ? 54 : 108,
  margin: isMobile ? 0 : 20
};

const TitleCenter = styled.div`
  ${props => props.theme.type.size.title1};
  ${props => props.theme.type.weight.prd.bold};
  margin-bottom: 96px;
  text-align: center;
`;

const Text = styled.div`
  ${props => props.theme.type.size.body2};
  ${props => props.theme.type.weight.prd.regular};
  margin: 48px auto;
  width: 480px;
  word-break: keep-all;
  white-space: pre-line;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ImageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  transition: opacity 0.3s ease-out;
  word-break: keep-all;
  white-space: pre-line;
  margin-top: 80px;
  margin-bottom: 80px;
  position: relative;
  h2{
    position: absolute;
    top: 0;
    left: 0;
    span{
      ${props => props.theme.type.size.title3}
      ${props => props.theme.type.weight.prd.bold}
      color: ${props => props.theme.color.brand.epGreen};
      margin-bottom: 24px;
    }
    ${props => props.theme.type.size.title2}
    ${props => props.theme.type.weight.prd.light}
    margin-bottom: 48px;
    width: 280px;
  }
  div.content{
    display: flex;
    width: calc(100%);
    ${props => props.theme.type.size.body2}
		${props => props.theme.type.weight.prd.regular}
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;


const ImageList = styled.div`
  width: 100%;
  padding: 0px 160px;
  display: flex;
  justify-content: space-around;
`;

const ImageList2 = styled.div`
  width: 100%;
  padding-left: 240px;
  display: flex;
  justify-content: space-around;
`;

const ImageCol = styled.div`
  width: 256px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  img.arrow{
      margin-top: 24px;
    }
  .title{
    display: flex;
    width: 100% !important;
    margin-bottom: 24px;
    img{
      width: 64px;
      height: 64px;
    }
    p{
      width: calc(100% - 64px);
      ${props => props.theme.type.weight.prd.bold}
    }
  }
  p{
    ${props => props.theme.type.size.body2}
  }
`;

const ImageCo2 = styled.div`
  position: relative;
  width: 360px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  img{
    width: 100%;
  }
  .title{
    display: flex;
    width: 100% !important;
    margin-bottom: 24px;
    img{
      width: 64px;
      height: 64px;
    }
    p{
      width: calc(100% - 64px);
      ${props => props.theme.type.weight.prd.bold}
    }
  }
  p{
    margin-bottom: 16px;
    ${props => props.theme.type.size.body2}
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
  background-color: rgba(100, 100, 255, 0.86);
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.caption}
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  animation: ${Blink} 2s ease-in 0s infinite;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const PartLegend = styled.div`
  width: 50%;
  color: ${props => props.theme.color.brand.epGreen};
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.caption}
  margin-bottom: 12px;;
`;

const ShiftUp = styled.div`
  width: 100%;
  margin-top: -420px;
  margin-bottom: 280px;
  div{
    padding: 24px 0px;
    background-color: rgba(2, 15, 24, 0.48);
  }
`;

const Divider = styled.div`
  border-bottom:0.5px solid ${props => props.theme.color.brand.secondary400};
  margin-top: 80px;
  margin-bottom: 320px;
`;

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


const Chapter3 = ({
  currentChapter,
  chapterObject,
}) => {

  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const [isTitleTrigger, setIsTitleTrigger] = useState(false);
  const [isS1Trigger, setIsS1Trigger] = useState(false);
  const [isS2Trigger, setIsS2Trigger] = useState(false);
  const [isVideoTrigger, setIsVideoTrigger] = useState(false);
  const [isS8Trigger, setIsS8Trigger] = useState(false);
  const [isS9Trigger, setIsS9Trigger] = useState(false);
  const [isS3Trigger, setIsS3Trigger] = useState(false);
  const [isLowTrigger, setIsLowTrigger] = useState(false);
  const [isS4Trigger, setIsS4Trigger] = useState(false);
  const [isHighTrigger, setIsHighTrigger] = useState(false);
  const [isS5Trigger, setIsS5Trigger] = useState(false);
  const bottleList = [1, 2, 3];

  const recycleMethods = [
    {
      id: "mr",
      name: 'Mechanical\nRecycling',
      img: illust_circle_mr,
      img2: illust_result_mr,
      result: {
        title: `플라스틱 플레이크\n(Plastic Flake)`,
        exp: `재생산되는 플라스틱 제품의 원료로 사용되는 플라스틱 결정체`
      }
    },
    {
      id: "cr",
      name: 'Chemical\nRecycling',
      img: illust_circle_cr,
      img2: illust_result_cr,
      result: {
        title: `석유화학의 원제료\n(Petrochemical)`,
        exp: `플라스틱 유기화합물의 화학적 원료로 정제공저의 원료로 사용`
      }
    },
    {
      id: "tr",
      name: 'Thermal\nRecycling',
      img: illust_circle_tr,
      img2: illust_result_tr,
      result: {
        title: `열 발전 에너지 연료\n(Thermal Energy)`,
        exp: `화력발전을 위한 연료로 사용`
      }
    }
  ];

  const mrReulstList = [
    {
      title: '아스팔트 포장재',
      img: illust_mr1
    },
    {
      title: '건축자재',
      img: illust_mr2
    },
    {
      title: '일회용 파레트',
      img: illust_mr3
    }
  ];

  const mrReulstList2 = [
    {
      title: '자동차 부품',
      img: illust_mr4
    },
    {
      title: '세탁기 부품',
      img: illust_mr5
    }
  ];

  return (
    <Container ref={chapterObject.ref}>
      {/* TITLE */}
      <ViewportWrapper
        onEnterViewport={
          () => {
            setIsTitleTrigger(true);
          }
        }
        onLeaveViewport={
          () => {
            // setIsTitleTrigger(false);
          }
        }
      >
        {
          currentChapter === 4 &&
          <ChapterTitle
            numChapter={3}
            title={t("c3-title")}
            subTitle={t("c3-subtitle")}
            bgColor={'dark'}
            exp={t("c3-exp")}
            isTrigger={isTitleTrigger}
            isFilter={true}
            src={videoURL.c3.bg}
          />
        }

      </ViewportWrapper>
      <Section>
        <ViewportWrapper
          onEnterViewport={
            () => {
              setIsS1Trigger(true);
            }
          }
          onLeaveViewport={
            () => {
              // setIsS1Trigger(false);
            }
          }
        >
          <FadeIn
            isTrigger={isS1Trigger}
            index={0}
          >
            <TitleCenter>
              {t('c3-s1-title')}
            </TitleCenter>
            <Wrapper>
              <IllustContainer>
                {
                  currentChapter === 4 &&
                  <PlasticLiteracy
                    id={'c3'}
                    starChatper={4}
                    currentChapter={currentChapter}
                  />
                }
                <Text>
                  {t('c3-s1-exp')}
                </Text>
              </IllustContainer>
            </Wrapper>
          </FadeIn>
        </ViewportWrapper>
      </Section>
      {/* TECNIQUE INTRO */}
      <Section>
        <ViewportWrapper
          onEnterViewport={
            () => {
              setIsS2Trigger(true);
            }
          }
          onLeaveViewport={
            () => {
              // setIsS2Trigger(false);
            }
          }
        >
          <LiveArea>
            <FadeIn
              isTrigger={isS2Trigger}
              index={0}
            >
              <SectionContentHorizon
                title={t('c3-s2-title')}
                exp={t('c3-s2-exp')}
                index={0}
                isContentFit={true}
              />
            </FadeIn>
            <ImageContent>
              <h2>
                <span>재활용 기술</span>
              </h2>
              <ImageList2>
                {
                  recycleMethods.map((recycle, index) =>
                    <ToTop
                      isTrigger={isS2Trigger}
                      index={3 + index}
                      distance={'middle'}
                    >
                      <ImageCol key={index}>

                        <img src={recycle.img} alt='' />
                        <img className={'arrow'} src={ic_arrow_down_white} alt='' />
                      </ImageCol>
                    </ToTop>
                  )
                }
              </ImageList2>
            </ImageContent>
            <ImageContent>
              <h2>
                <span>공정 산출물</span>
              </h2>
              <ImageList2>
                {
                  recycleMethods.map((recycle, index) =>
                    <ToTop
                      isTrigger={isS2Trigger}
                      index={6 + index}
                      distance={'middle'}
                    >
                      <ImageCol key={index}>
                        <div className={'title'}>
                          <img src={recycle.img2} alt='' />
                          <p>{recycle.result.title}</p>
                        </div>
                        <p>{recycle.result.exp}</p>
                      </ImageCol>
                    </ToTop>
                  )
                }
              </ImageList2>
            </ImageContent>
            <Divider />
            {/* GENERAL MR */}
            <ViewportWrapper
              onEnterViewport={
                () => {
                  setIsS3Trigger(true);
                }
              }
            >
              <ToTop
                isTrigger={isS3Trigger}
                index={0}
                distance={'middle'}
              >
                <SectionContentHorizon
                  title={t('c3-s3-title')}
                  exp={t('c3-s3-exp')}
                  index={1}
                  isContentFit={true}
                />
              </ToTop>
            </ViewportWrapper>
            <ToTop
              isTrigger={isS3Trigger}
              index={2}
              distance={'middle'}
            >
              <img style={{ width: '100%', height: 'auto' }} src={illust_process_mr_general} alt='' />
            </ToTop>
            <ShiftUp>
              <SectionContentHorizon
                title={t('c3-s4-title')}
                exp={t('c3-s4-exp')}
                index={2}
                isContentFit={true}
              />
            </ShiftUp>
            <ImageContent>
              <h2>
                <span>{t('c3-s4-subtitle')}</span>
              </h2>
              <ViewportWrapper
                onEnterViewport={
                  () => {
                    setIsLowTrigger(true);
                  }
                }
              >
                <ImageList>
                  {
                    mrReulstList.map((result, index) =>
                      <ToTop
                        isTrigger={isLowTrigger}
                        index={index + 1}
                        distance={'middle'}
                      >
                        <ImageCol key={index}>
                          <img src={result.img} alt='' />
                          <p>{result.title}</p>
                        </ImageCol>
                      </ToTop>

                    )
                  }
                </ImageList>
              </ViewportWrapper>
            </ImageContent>
            <Divider />
            {/* GS MR */}
            <ViewportWrapper
              onEnterViewport={
                () => {
                  setIsS4Trigger(true);
                }
              }
            >
              <ToTop
                isTrigger={isS4Trigger}
                index={0}
                distance={'middle'}
              >
                <SectionContentHorizon
                  title={t('c3-s5-title')}
                  exp={t('c3-s5-exp')}
                  index={3}
                  isContentFit={true}
                />
              </ToTop>
            </ViewportWrapper>
            <ToTop
              isTrigger={isS4Trigger}
              index={1}
              distance={'middle'}
            >
              <img style={{ width: '100%', height: 'auto' }} src={illust_process_mr_gs} alt='' />
            </ToTop>
            <ViewportWrapper
              onEnterViewport={
                () => {
                  setIsHighTrigger(true);
                }
              }
            >
              <ImageContent>
                <h2>
                  <span>{t('c3-s5-subtitle')}</span>
                </h2>
                <ImageList>
                  {
                    mrReulstList2.map((result, index) =>
                      <ToTop
                        isTrigger={isHighTrigger}
                        index={index + 2}
                        distance={'middle'}
                      >
                        <ImageCo2 key={index}>
                          <img src={result.img} alt='' />
                          <p>{result.title}</p>
                          {
                            index === 0 &&
                            <>
                              {
                                carPartList.map((part, j) =>

                                  <ImageMark
                                    top={part.top}
                                    left={part.left}
                                  >
                                    {part.id}
                                  </ImageMark>
                                )
                              }
                              <Row>
                                {
                                  carPartList.map((part, j) =>

                                    <PartLegend>
                                      {`${part.id} - ${part.title}`}
                                    </PartLegend>
                                  )
                                }
                              </Row>
                            </>
                          }
                          {
                            index === 1 &&
                            <>
                              {
                                washingPartList.map((part, j) =>
                                  <ImageMark
                                    top={part.top}
                                    left={part.left}
                                  >
                                    {part.id}
                                  </ImageMark>
                                )
                              }
                              <Row>
                                {
                                  washingPartList.map((part, j) =>

                                    <PartLegend>
                                      {`${part.id} - ${part.title}`}
                                    </PartLegend>

                                  )
                                }
                              </Row>
                            </>
                          }
                        </ImageCo2>
                      </ToTop>
                    )
                  }
                </ImageList>
              </ImageContent>
            </ViewportWrapper>

            <Divider />
            {/* GS CR */}
            <ViewportWrapper
              onEnterViewport={
                () => {
                  setIsS5Trigger(true);
                }
              }
            >
              <ToTop
                isTrigger={isS5Trigger}
                index={0}
                distance={'middle'}
              >
                <SectionContentHorizon
                  title={t('c3-s6-title')}
                  exp={t('c3-s6-exp')}
                  index={3}
                  isContentFit={true}
                />
              </ToTop>
            </ViewportWrapper>
            <ToTop
              isTrigger={isS5Trigger}
              index={2}
              distance={'middle'}
            >
              <img style={{ width: '100%', height: 'auto' }} src={illust_process_cr} alt='' />
            </ToTop>

          </LiveArea>
        </ViewportWrapper>
        <SpaceFullScreen
          numX={0.75}
        />
        <ViewportWrapper
          onEnterViewport={() => {
            setIsVideoTrigger(true);
          }}
          onLeaveViewport={() => {
            setIsVideoTrigger(false);
          }}
        >
          <ImageBackground
            isFilter={true}
            img={videoURL.c3.s7.bg}
            refObject={chapterObject.refSection[5]}
            isTrigger={isVideoTrigger}
          >
            <MsgFullScreen
              title={t('c3-s7-title')}
            // exp={t('c3-s7-exp')}
            />
          </ImageBackground>
        </ViewportWrapper>
        <SpaceFullScreen
          numX={0.75}
        />
        <ViewportWrapper
          onEnterViewport={() => {
            setIsS8Trigger(true);
          }}
          onLeaveViewport={() => {
            setIsS8Trigger(false);
          }}
        >
          <ImageBackground
            isFilter={true}
            img={videoURL.c3.s8.bg}
            refObject={chapterObject.refSection[5]}
            isTrigger={isS8Trigger}
          >
            <MsgFullScreen
              title={t('c3-s8-title')}
              exp={t('c3-s8-exp')}
            />
          </ImageBackground>
        </ViewportWrapper>
        <ViewportWrapper
          onEnterViewport={() => {
            setIsS9Trigger(true);
          }}
          onLeaveViewport={() => {
            setIsS9Trigger(false);
          }}
        >
          <ImageBackground
            isFilter={true}
            img={videoURL.c3.s8.bg}
            refObject={chapterObject.refSection[5]}
            isTrigger={isS9Trigger}
          >
            <MsgFullScreen
              title={t('c3-s9-title')}
            />
          </ImageBackground>
        </ViewportWrapper>
      </Section>
    </Container>
  )
}

export default Chapter3;