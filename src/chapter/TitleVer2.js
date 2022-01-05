import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import Section from "../components/layout/Section";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import VideoBackground from "../components/videoBackground/VideoBackground2";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import ViewportWrapper from '../components/ViewportWrapper';
import circle_product from "../assets/illust/title/circle_product.svg";
import circle_waste from "../assets/illust/title/circle_waste.svg";
import circle_part from "../assets/illust/title/circle_part.svg";
import circle_flake from "../assets/illust/title/circle_flake.svg";
import ic_production from "../assets/illust/title/ic_ep_produce.svg";
import ic_dispose from "../assets/illust/title/ic_ep_dispose.svg";
import ic_collect from "../assets/illust/title/ic_ep_collect.svg";
import ic_recycling from "../assets/illust/title/ic_ep_recycle.svg";
import logo_gs from "../assets/img/logo/logo_gscaltex.png";
import PlasticLiteracy from "../template/Main/PlasticLiteracy";
import PlasticParticle from "../chart/title/PlasticParticle";
import { isMobile } from 'react-device-detect';
import useWindowSize from '../hook/useWindowSize';
import video_earth from "../assets/video/earth_spin.mp4";
import ToTop from "../components/motion/ToTop";
import LiveArea from "../components/layout/LiveArea";
import dual_circle from "../assets/img/shape/dual_circle.svg";

import illust_arrow_white from "../assets/img/illust/illust_arrow_cycle_white.svg";

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
  padding-top: 160px;
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
  margin-top: -108px;
  width: 900px;
  justify-content: space-between;
   :before{
    content: '';
    position: absolute;
    z-index: -1;
    top: 80px;
    left: 0px;
    background-image: ${`url(${illust_arrow_white})`};
    background-size: cover;
    width: 100%;
    height: 208px;
  }
`;

const Pricinple = styled.div`
  width: 40%;
  /* height: 248px; */
  ${props => props.theme.layout.flexColCenter}
  color: ${props => props.theme.color.brand.epGreen};
  padding: 22px;
  /* margin-bottom: 32px; */
  .img{
    width: 124px;
    margin-bottom: 24px;
    padding: 0 16px;
    background-color: ${props => props.theme.color.ui.bg.dark};
    img{
      width: 100%;
      height: 100%;
    }
  }
  h2{
    ${props => props.theme.type.size.body1}
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

  const principles = [
    {
      title: '생산',
      img: ic_production
    },
    {
      title: '배출',
      img: ic_dispose
    },
    {
      title: '처리',
      img: ic_recycling
    },
    {
      title: '수거',
      img: ic_collect
    },
  ];

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
        <ViewportWrapper
          onEnterViewport={
            () => {
              setS1TriggerStage(0);
            }
          }
        >
          <IllustContainer>
            {
              currentChapter === 0 && <PlasticLiteracy
                currentChapter={currentChapter}
                starChatper={0}
                id={'c0'}
              />
            }

            <TitleMsg>
              <ToTop
                isTrigger={isStart}
                index={3}
                distance="short"
              >
                {t('title-title')}
              </ToTop>
            </TitleMsg>
            <SubTitleMsg>
              <ToTop
                isTrigger={isStart}
                index={4}
                distance="short"
              >
                {t('title-subtitle')}
              </ToTop>
            </SubTitleMsg>
            <Logo>
              <ToTop
                isTrigger={isStart}
                index={5}
                distance="short"
              >
                <img src={logo_gs} alt='' />
              </ToTop>
            </Logo>
          </IllustContainer>
        </ViewportWrapper>
        {/* {
          currentChapter === 0 && <PlasticParticle triggerStage={s1TriggerStage} />
        } */}
      </Container>
      <SpaceFullScreen
        numX={0.2}
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
          <PrincipleTitle>
            플라스틱의 라이프 싸이클
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
                </Pricinple>
              )
            }
          </PricincpleList>
        </MsgFullScreen>
      </ViewportWrapper>
      <ViewportWrapper
        onEnterViewport={
          () => {
            setS1TriggerStage(2);
          }
        }
      >
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
          videoSrc={'https://firebasestorage.googleapis.com/v0/b/data-driven-design-d2418.appspot.com/o/earth_spin.mp4?alt=media&token=7d0b37cd-0a3b-4398-ba2c-692a33a07299'}
          isTrigger={true}
        />
      </ToTop>
    </>
  )
}

export default Title;