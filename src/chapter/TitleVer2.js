import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import Section from "../components/layout/Section";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import VideoBackground from "../components/videoBackground/VideoBackground2";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import ViewportWrapper from '../components/ViewportWrapper';
import illust_title from "../assets/illust/illust_title.svg";
import circle_product from "../assets/illust/title/circle_product.svg";
import circle_waste from "../assets/illust/title/circle_waste.svg";
import circle_part from "../assets/illust/title/circle_part.svg";
import circle_flake from "../assets/illust/title/circle_flake.svg";
import ic_production from "../assets/illust/title/ic_ep_produce.svg";
import ic_dispose from "../assets/illust/title/ic_ep_dispose.svg";
import ic_collect from "../assets/illust/title/ic_ep_collect.svg";
import ic_recycling from "../assets/illust/title/ic_ep_recycle.svg";
import logo_gs from "../assets/img/logo/logo_gscaltex.png";
import PlasticCirculation from "../chart/title/PlasticCirculation";
import PlasticParticle from "../chart/title/PlasticParticle";
import { isMobile } from 'react-device-detect';
import useWindowSize from '../hook/useWindowSize';
import video_earth from "../assets/video/earth_spin.mp4";
import ToTop from "../components/motion/ToTop";
import LiveArea from "../components/layout/LiveArea";

import dual_circle from "../assets/img/shape/dual_circle.svg";
import img_earth from "../assets/img/img_earth.png";


const PlasticParticleContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
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

const Container = styled(Section)`
  height: ${props => props.innerHeight + 'px'};
  width: 100%;
  ${props => props.theme.layout.flexColCenter}
  position: relative;
  z-index: 999;
  background-color: rgba(16, 30, 46, 0.5);
  @media only screen and (max-width: 480px) {
    height: ${`${window.innerHeight}px`};
  }
`;

const TitleMsg = styled.div`
  ${props => props.theme.type.weight.exp.bold};
  ${props => props.theme.type.size.title};
  margin-bottom: 24px;
  text-align: center;
  color: #fff;
  margin: 92px 0 24px;
  text-shadow: 0px 0px 8px 8px rgba(0,0,0,0.12);
  @media only screen and (max-width: 480px) {
    position: absolute;
    margin:0;
    top:${`calc(${window.innerWidth / 2}px - 52px)`}
  }
`;

const SubTitleMsg = styled.p`
  width: 560px;
  text-align: center;
  word-break: keep-all;
  ${props => props.theme.type.weight.prd.light};
  ${props => props.theme.type.size.title2};
  color: #fff;
  margin-bottom: 64px;
  @media only screen and (max-width: 480px) {
    position: absolute;
    left:0;
    bottom: 120px;
    width: 100%;
    margin:0;
    padding:0 16px;
  }
`;

const IllustContainer = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.theme.layout.flexColCenter}
  @media only screen and (max-width: 480px) {
  }
`;

const Illust = styled.div`
  position: absolute;
  width: ${`${circleSize.width}px`};
  height: ${`${circleSize.height}px`};
  top: ${`calc((100% - ${circleSize.height}px)/2)`};
  left: ${`calc((100% - ${circleSize.width}px)/2)`};
  @media only screen and (max-width: 480px) {
    padding-top: 20px;
    width: 100%;
    height: auto;
    top: ${`${circleSize.margin}px`};
    left: 0%;
  }
`;

const Rotate = keyframes`
  from {
    transform: rotate( 0deg );
  }
  to {
    transform: rotate( 360deg );
  }
`;

const NodeContainer = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 480px) {
    position: absolute;
    top: 20px;
    left: 0;
    padding-top: 20px;
    height: auto;
  }
`;

const Node = styled.div`
  width: ${nodeSize.width + 'px'};
  height:  ${nodeSize.height + 'px'};
  position: absolute;
  top: ${props => `${props.y}px`};
  left: ${props => `${props.x}px`};
  transform-origin: center center;
  img{
    width: 80%;
    height: 80%;
  }
`;

const NodeCircle = styled.div`
  width: ${nodeSize.width + 'px'};
  height:  ${nodeSize.height + 'px'};
  background-color: ${props => props.theme.color.ui.bg.dark};
  ${props => props.theme.layout.flexColCenter}
  border-radius: 50%;
  img{
    width: 80%;
    height: 80%;
  }
`;

const DualEarth = styled.div`
  width: 100%;
  height: 502px;
  background-image: url(${dual_circle});
  background-size: cover;
  margin-top: 80px;
  display: flex;
  align-items: center;
  padding: 20px;
  img{
    width: auto;
    height: 100%;
  }
`;

const Logo = styled.div`
  ${props => props.theme.type.weight.prd.light};
  ${props => props.theme.type.size.caption};
  ${props => props.theme.layout.flexColCenter}
  color: #fff;
  img{
    width: 148px;
    height: auto;
  }
  @media only screen and (max-width: 480px) {
    position: absolute;
    top:${`calc(${window.innerWidth / 2}px + 54px)`};
    left: calc(50 - 40px);
    img{
    width: 80px;
    height: auto;
  }
  }
`;

const PrincipleTitle = styled.div`
  background-color: ${props => props.theme.color.brand.epGreen};
  color: ${props => props.theme.color.brand.darkNavy};
  ${props => props.theme.type.size.title2}
  ${props => props.theme.type.weight.prd.bold}
  margin-top: 160px;
  padding: 4px 8px;
  text-align: center;
  width: fit-content;
`;
const PricincpleList = styled(LiveArea)`
  display: flex;
  flex-wrap: wrap;
  margin-top: -116px;
  /* width: 100%; */
  :before{
    content: '';
    position: absolute;
    z-index: -1;
    top: 96px;
    left: 96px;
    width: calc(100% - 192px);
    height: calc(100% - 336px);
    border: solid 1px ${props => props.theme.color.brand.epGreen};
    border-style: dashed;
  }
`;

const Pricinple = styled.div`
  width: 50%;
  /* height: 248px; */
  ${props => props.theme.layout.flexColCenter}
  color: ${props => props.theme.color.brand.epGreen};
  padding: 24px;
  margin-bottom: 32px;
  .img{
    width: 144px;
    height: 144px;
    margin-bottom: 24px;
    background-color: ${props => props.theme.color.ui.bg.dark};
    img{
      width: 100%;
      height: 100%;
    }
  }
  h2{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
    margin-bottom: 0px;
  }
  p{
    ${props => props.theme.type.size.body1}
  }
`;



const Title = ({
  refObject,
  currentChapter
}) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const [isStart, setIsStart] = useState(false);
  const [s1TriggerStage, setS1TriggerStage] = useState(0);

  const circleList = [
    {
      x: 1,
      y: 0,
      img: circle_product
    },
    {
      x: 1,
      y: 1,
      img: circle_waste
    },
    {
      x: 0,
      y: 1,
      img: circle_part
    },
    {
      x: 0,
      y: 0,
      img: circle_flake
    },
  ];

  const nodeList = [
    {
      x: circleSize.width / 2 - nodeSize.width / 2,
      y: nodeSize.margin,
      img: ic_production
    },
    {
      x: circleSize.width - nodeSize.width - nodeSize.margin,
      y: circleSize.height / 2 - nodeSize.height / 2,
      img: ic_dispose
    },
    {
      x: circleSize.width / 2 - nodeSize.width / 2,
      y: circleSize.height - nodeSize.height - nodeSize.margin,
      img: ic_collect
    },
    {
      x: nodeSize.margin,
      y: circleSize.height / 2 - nodeSize.height / 2,
      img: ic_recycling
    }
  ];

  const principles = [
    {
      title: '1. 생산',
      rule: '분류 표준 정립',
      exp: '플라스틱 세부 재활용 표준을 정립 제품 생산 단계에서부터 분류 기준을 명시한다.',
      img: ic_production
    },
    {
      title: '2. 배출',
      rule: '분류 일관성 강화',
      exp: '분류된 세부 기준대로 분리수거가 배출될 수 있도록 정책적 노력을 강화한다.',
      img: ic_dispose
    },
    {
      title: '4.처리',
      rule: '재활용율 개선',
      exp: '플라스틱 폐기물의 재활용율 높일 수 있는 기술적 방안을 연구한다.',
      img: ic_recycling
    },
    {
      title: '3. 수거',
      rule: '수거 체계 균일화',
      exp: '분류된 세부 기준대로 분리수거가 배출될 수 있도록 정책적 노력을 강화한다.',
      img: ic_collect
    },

  ]

  useEffect(() => {
    console.log(window.innerHeight);
    setInnerHeight(window.innerHeight);
  }, [window]);

  useEffect(() => {
    setTimeout(() => { setIsStart(true) }, 100);
  }, [])

  return (
    <>
      <Container
        refObject={refObject}
        innerHeight={isMobile ? 360 : innerHeight}
      >
        <PlasticParticleContainer>
          {
            currentChapter === 0 &&
            <ViewportWrapper
              onEnterViewport={
                () => {
                  setS1TriggerStage(1);
                }
              }
            >
              <PlasticParticle
                triggerStage={s1TriggerStage}
              />
            </ViewportWrapper>
          }
        </PlasticParticleContainer>
        <IllustContainer>
          <Illust>
            <PlasticCirculation
              currentChapter={currentChapter}
            />
            <NodeContainer>
              {
                nodeList.map((node, i) =>
                  <Node
                    x={node.x}
                    y={node.y}
                  >
                    <ToTop
                      isTrigger={isStart}
                      index={i * 0.5}
                      distance="short"
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <NodeCircle>
                        <img src={node.img} />
                      </NodeCircle>
                    </ToTop>
                  </Node>
                )
              }
            </NodeContainer>
          </Illust>
          <TitleMsg>
            <ToTop
              isTrigger={isStart}
              index={3}
              distance="short"
            >
              Plastic
              Literacy
            </ToTop>
          </TitleMsg>
          <SubTitleMsg>
            <ToTop
              isTrigger={isStart}
              index={4}
              distance="short"
            >
              플라스틱의 올바른 수거와 재활용에 대한 이해가 필요한 시대, GS칼텍스가 먼저 묻고 답하다.
              </ToTop>
          </SubTitleMsg>
          <Logo>
            {/* with <br /> */}
            <ToTop
              isTrigger={isStart}
              index={5}
              distance="short"
            >
              <img src={logo_gs} alt='' />
            </ToTop>
          </Logo>
        </IllustContainer>
      </Container>
      <SpaceFullScreen
        numX={1}
      />
      <ViewportWrapper
        onEnterViewport={
          () => {
            setS1TriggerStage(1);
          }
        }
      >
        <MsgFullScreen
          title={t('title-s1-title')}
          exp={t('title-s1-exp')}
        >
          {/* <DualEarth>
            <img src={img_earth} alt='' />
          </DualEarth> */}
        </MsgFullScreen>
      </ViewportWrapper>
      <SpaceFullScreen
        numX={1}
      />
      <ViewportWrapper
        onEnterViewport={
          () => {
            setS1TriggerStage(2);
          }
        }
      >
        <MsgFullScreen
          title={t('title-s2-title')}
          exp={t('title-s2-exp')}
        >
          <PrincipleTitle>
            플라스틱 생태계의 단계별 원칙
            </PrincipleTitle>
          <PricincpleList>
            {
              principles.map((item) =>
                <Pricinple>
                  <div className={'img'}>
                    <img src={item.img} alt='' />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.rule}</p>
                  {/* <p>{item.exp}</p> */}
                </Pricinple>
              )
            }
          </PricincpleList>
        </MsgFullScreen>
      </ViewportWrapper>
      <ToTop
        isTrigger={isStart}
        index={0}
        style={{ position: 'absolute' }}
        distance="short"
      >
        <VideoBackground
          isVideoPlay={true}
          width={windowSize.width}
          height={windowSize.height}
          isFilter={true}
          videoSrc={video_earth}
          // refObject={chapterObject.refSection[5]}
          isTrigger={true}
        />
      </ToTop>
    </>
  )
}

export default Title;