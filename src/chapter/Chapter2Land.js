import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitle";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import LiveArea from "../components/layout/LiveArea";
import SankeyLand from "../chart/chaper2/SankeyLand";

// Data
import { plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7 } from '../data/chapter1';

const sankeyHeight = 448;
// String
const contentLand = [
  {
    title: `단순한 분리배출, 
    복잡한 플라스틱 재활용`,
    exp: `플라스틱을 버리는 과정에 존재하는 어려움은 이물질과 분리배출이다.  
    가정과 회사에서 버려지는 플라스틱에는 재활용을 어렵게 만드는 음식물과 같은 이물질이 묻어있다. 
    또한, 플라스틱은 7종류 이상으로 다양하게 분류되기 때문에 분리 배출하는 플라스틱 쓰레기 중에는 재활용이 어려운 쓰레기도 포함되어 있다.`,
  },
  {
    title: `분리된 후 합쳐지고, 
    다시 분리되는 플라스틱`,
    exp: `쓰레기를 모으는 과정에서도 어려움은 존재한다.
    재질별로 운반 차량을 확보할 수 없기 때문에 쓰레기의 운반 과정에서 사전에 애써 분류한 플라스틱들이 다시 합쳐지기도 한다. 
    뒤섞인 플라스틱 쓰레기는 다시 분류하기가 어렵다. `
  },
  {
    title: `재활용되는 플라스틱은 
    깨끗한 플라스틱`,
    exp: `모아진 쓰레기는 재활용을 위한 처리가 필요하다. 
    오염된 플라스틱을 재활용하면 품질이 낮은 플라스틱이 생산되기 때문에, 플라스틱을 처리할 때 음식물이나 오염물이 조금이라도 묻어 있으면 재활용이 어렵다.`
  },
  {
    title: `재활용되는 플라스틱은 
    깨끗한 플라스틱`,
    exp: `모아진 쓰레기는 재활용을 위한 처리가 필요하다. 
    오염된 플라스틱을 재활용하면 품질이 낮은 플라스틱이 생산되기 때문에, 플라스틱을 처리할 때 음식물이나 오염물이 조금이라도 묻어 있으면 재활용이 어렵다.`
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
  const [currentSlideLand, setCurrentSlideLand] = useState(0);

  useEffect(() => {
    setInnterHeight(window.innerHeight);
  }, [window]);

  useEffect(() => {

  }, []);

  return (
    <Container ref={chapterObject.ref}>
      <ChapterTitle
        numChapter={2}
        title={'Journey of Plastic'}
        subTitle={'"지금까지 사용했던 플라스틱의 재활용을 얘기하다"'}
        bgColor={'dark'}
        exp={`기본적으로 플라스틱은 분리수거를 통해 버려진다. 분리수거를 통한 재활용은 환경을 보호하는 가장 중요한 과정이다. 
        그렇다면, 분리수거를 지금보다 더 잘 하면 플라스틱 쓰레기 문제가 해결되는 걸까? 
        우리가 분리 배출한 플라스틱들은 어디로 가고 있는 것일까?
        우리가 버리는 쓰레기가 전부 재활용 되는걸까?`}
      />
      <LiveArea>
        {/* <MsgFullScreen
          title={`
          우리가 생활 속에서 버리는 플라스틱들은 배출-수거-선별 과정을 거쳐 재활용된다. 
          
          하지만, 플라스틱의 종류는 너무 다양하고 서로 다른 다른 재질들이 섞여 있기 때문에 재활용은 생각보다 매우 어려운 과정이다. 
          `}
        /> */}
        <MsgFullScreen
          title={`

          `}
        />
        <Section>
          {
            currentChapter === 2 &&
            <Chart
              isActive={isChartActive}
            >
              <SankeyLand
                width={1200}
                height={sankeyHeight}
                currentStage={currentSection}
                currentChapter={currentChapter}
              />
            </Chart>
          }

          {
            contentLand.map((section, i) =>
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