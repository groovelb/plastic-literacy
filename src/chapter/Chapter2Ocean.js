import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitle";
import LiveArea from "../components/layout/LiveArea";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import SankeyOcean from "../chart/chaper2/SankeyOcean";

// Data
import { plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7 } from '../data/chapter1';

const sankeyHeight = 448;
// String
const contentOcean = [
  {
    title: `수거가 어려운 해양 쓰레기`,
    exp: `바다는 전 세계가 연결되어 있고 파도를 따라 계속 움직이기 때문에 지속적으로 쓰레기가 흘러 다녀서 배출-유입 경로를 세부적으로 파악하기 어렵다. 현재는 해안으로 몰려 유입된 쓰레기를 중심으로 수거된다. 파도에 떠다니거나 바닥으로 가라앉은 쓰레기를 수거하기 위해서는 수거 전용 선박과 전문 장비가 필요하기 때문에, 쉽지 않은 상황이다. `,
  },
  {
    title: `해양쓰레기의 복잡한 선별 과정`,
    exp: `해양쓰레기는 플라스틱 뿐만 아니라 나무와 고철 등 다양한 쓰레기가 섞여 있기 때문에 추가적인 선별 과정이 반드시 필요하다. 더구나 해양에서 꺼낸 쓰레기는 따개비 같은 생물이 붙어있는 경우도 많아 재활용을 위해서는 반드시 부착 생물을 제거하는 사전 작업이 필요하다.`
  },
  {
    title: `해양 플라스틱 재활용 난제`,
    exp: `해양의 플라스틱 쓰레기를 선별한 이후 육지에 보관하는 과정에서는 악취가 발생하고 벌레들이 모여드는 문제가 있다. 또한, 해양에서 수거한 플라스틱은 바닷물을 머금고 있기 때문에 염분이 높아 재활용을 위해 추가적인 처리 과정이 필요하다. 다양한 문제점 때문에, 해양에서 수거된 플라스틱이 어떻게 재활용되고 있는지를 파악할 수 있는 통계조차 거의 없다.`
  },
  {
    title: `더이상 늦출 수 없는 플라스틱 문제.
    모두가 함께 고민해야 하는 상황.`,
    exp: `이러한 플라스틱의 여정에 대한 이해를 통해, 지금까지 분리배출 했던 플라스틱들의 재활용이 안되는 이유와 문제점을 파악할 수 있다. 그렇다면 플라스틱을 재활용 해야하는 이유는 무엇일까? `
  }
];

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

const Chart = styled.div`
  position: fixed;
  top: 0px;
  padding-top: 80px;
  box-sizing: content-box;
  box-shadow: 0px 40px 80px 60px ${props => props.theme.color.ui.bg.dark};
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  /* width: ${props => `calc(calc(${props.theme.size.liveArea} - 308px - 48px))`}; */
  height: ${sankeyHeight + 'px'};
  background-color: ${props => props.theme.color.ui.bg.dark};
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.3s ease-out;
  /* animation: ${FadeIn} 1s linear forwards; */
`;

const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* padding-top: 240px; */
  padding-left: 64px;
  height: ${window.innerHeight + 'px'};
  /* opacity: ${props => props.currentSection === props.index ? 1 : 0}; */
  transition: opacity 0.3s ease-out;
  word-break: keep-all;
  white-space: pre-line;
  h1{
    ${props => props.theme.type.size.title}
    ${props => props.theme.type.weight.prd.bold}
    margin-right: 16px;
  }
  h2{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
    margin-bottom: 48px;
    width: 360px;
  }
  p{
    width: calc(100% - 240px - 48px - 120px);
    padding-left: 48px;
    padding-right: 120px;
    ${props => props.theme.type.size.body2}
		${props => props.theme.type.weight.prd.regular}
  }
`;

const Space = styled.div`
  height: 240px;
`;

const SectionFull = styled.div`
  height: ${props => props.innerHeight + 'px'};
  width: 100%;
  ${props => props.theme.layout.flexColCenter}
  position: relative;
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  height: 200px;
  overflow: hidden;
  margin-top: 64px;
`;

const Stage = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  left: ${props => `calc(100% * ${(props.index - props.currentSlide)})`};
  transition: left 0.3s ease-in-out;
`;

const StageTitle = styled.div`
  width: 240px;
  margin-right: 48px;
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.title2}
`;

const StageExp = styled.div`
  width: calc(100% - 240px - 240px);
  ${props => props.theme.type.weight.prd.light}
  ${props => props.theme.type.size.body1}
`;

const BttNext = styled.div`
  z-index: 99;
  position: absolute;
  width: 148px;
  top:0;
  right:0;
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.body1}
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  :hover{
    opacity: 1;
  }
`;

const Chapter2 = ({
  chapterObject,
  currentChapter,
  isChartActive,
  currentSection
}) => {

  const [innerHeight, setInnterHeight] = useState(window.innerHeight);
  const [currentSlideOcean, setCurrentSlideOcean] = useState(0);

  useEffect(() => {
    setInnterHeight(window.innerHeight);
  }, [window]);

  useEffect(() => {

  }, []);

  return (
    <Container ref={chapterObject.ref}>
      <LiveArea>
        <MsgFullScreen
          title={`
          문제는 해양쓰레기의 플라스틱
          `}
          exp={
            `
            생활 속에서 버려지는 플라스틱들을 재활용하기 위해 많은 노력을 하고 있지만, 사실 더 큰 문제는 해양으로 유입되는 플라스틱이다. 최근 3년간(2018-2020) 전국 수거된 해양쓰레기를 살펴보면, 플라스틱이 평균 83%(개수 기준)로 가장 많은 비중을 차지하는 것으로 나타났다
            해양의 플라스틱은 모든 해양 생물과 우리의 안전을 위협하지만, 광활한 바다에서 수거행위는 더욱 어렵고 수거된 해양 쓰레기가 어떻게 처리되는지 정확한 통계조차 확인하기 어려운 것이 현실이다.

            `
          }
        />
        <MsgFullScreen
          title={`

          `}
        />
        <Section>
          {
            currentChapter === 3 &&
            <Chart
              isActive={isChartActive}
            >
              <SankeyOcean
                width={1200}
                height={sankeyHeight}
                currentStage={currentSection}
                currentChapter={currentChapter}
              />
            </Chart>
          }
          {
            contentOcean.map((section, i) =>
              <TextContent
                ref={chapterObject.refSection[i]}
                currentSection={currentSection}
                index={i}
              >
                <h1>
                  {i + 1}
                </h1>
                <h2>
                  {section.title}
                </h2>
                <p>
                  {section.exp}
                </p>
              </TextContent>
            )
          }
          <SpaceFullScreen
            refObject={chapterObject.refSection[4]}
            numX={0.25}
          />
        </Section>
      </LiveArea>
    </Container>
  )
}

export default Chapter2;