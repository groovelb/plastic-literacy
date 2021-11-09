import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitle";
import LiveArea from "../components/layout/LiveArea";
import SankeyLand from "../chart/chaper2/SankeyLand";
import SankeyOcean from "../chart/chaper2/SankeyOcean";
import ic_next from "../assets/img/icon/ic_arrow_big.svg";

// Data
import { plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7 } from '../data/chapter1';

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

const contentOcean = [
  {
    title: `수거하는 데 변수가 많은
    해양플라스틱`,
    exp: `더 큰 문제는 바다에 존재하는 플라스틱 쓰레기다. 
    바다는 전 세계가 연결되어 있고 파도를 따라 계속 움직이기 때문에 지속적으로 쓰레기가 유입된다. 
    그래서 해양에 있는 플라스틱은 수거하기가 어렵고, 해저에 침적되어 있는 쓰레기를 수거하기 위해서는 수거 전용 선박과 전문 장비가 반드시 필요하다.`,
  },
  {
    title: `선별 과정이 만만치 않은
    해양쓰레기`,
    exp: `해양쓰레기는 플라스틱 뿐만 아니라 나무와 고철 등 다양한 쓰레기가 섞여있기 때문에 추가적인 선별 과정이 반드시 필요하다. 또한, 해양에서 꺼낸 쓰레기는 따개비 같은 생물이 붙어있는 경우도 많아 재활용을 위해서는 반드시 부착 생물을 제거하는 사전 작업이 필요하다.`
  },
  {
    title: `해양 플라스틱을 
    재활용을 하기 위한 난제`,
    exp: `해양의 플라스틱을 선별한 이후 육지에 보관하는 과정에서 악취와 벌레들이 모여드는 문제가 있다. 또한, 해양에서 수거한 플라스틱은 바닷물을 머금고 있기 때문에 염분이 높아 재활용이 어려운 문제가 있다. 실제로 재활용하기까지의 어려운 점들이 존재하다보니 재활용 통계조차 파악되지 않고 있다.`
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
  top: 200px;
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  width: ${props => `calc(calc(${props.theme.size.liveArea} - 308px - 48px))`};
  height: 680px;
  /* background-color: #a0a0a0; */
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.3s ease-out;
  /* animation: ${FadeIn} 1s linear forwards; */
`;

const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding-top: 240px; */
  padding-left: calc(100% - 308px);
  height: ${window.innerHeight + 'px'};
  opacity: ${props => props.currentSection === props.index ? 1 : 0};
  transition: opacity 0.3s ease-out;
  h2{
    ${props => props.theme.type.size.h2}
    ${props => props.theme.type.weight.prd.bold}
    margin-bottom: 48px;
  }
  p{
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
  chapterObject
}) => {

  const [innerHeight, setInnterHeight] = useState(window.innerHeight);
  const [currentSlideLand, setCurrentSlideLand] = useState(0);
  const [currentSlideOcean, setCurrentSlideOcean] = useState(0);

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
        <SectionFull innerHeight={innerHeight}>
          <SankeyLand
            currentStage={currentSlideLand}
          />
          <Slider>
            <BttNext
              onClick={() => {
                if (currentSlideLand < 3) {
                  setCurrentSlideLand(currentSlideLand + 1);
                }
              }}
            >
              <img src={ic_next} alt='' />
              <p>
                다음으로
              </p>
            </BttNext>
            {
              contentLand.map((section, i) =>
                <Stage
                  currentSlide={currentSlideLand}
                  index={i}
                >
                  <StageTitle>
                    {section.title}
                  </StageTitle>
                  <StageExp>
                    {section.exp}
                  </StageExp>
                </Stage>
              )
            }
          </Slider>
        </SectionFull>
        <SectionFull innerHeight={innerHeight}>
          <SankeyOcean
            currentStage={currentSlideOcean}
          />
          <Slider>
            <BttNext
              onClick={() => {
                if (currentSlideOcean < 3) {
                  setCurrentSlideOcean(currentSlideOcean + 1);
                }
              }}
            >
              <img src={ic_next} alt='' />
              <p>
                다음으로
              </p>
            </BttNext>
            {
              contentOcean.map((section, i) =>
                <Stage
                  currentSlide={currentSlideOcean}
                  index={i}
                >
                  <StageTitle>
                    {section.title}
                  </StageTitle>
                  <StageExp>
                    {section.exp}
                  </StageExp>
                </Stage>
              )
            }
          </Slider>
        </SectionFull>
      </LiveArea>
    </Container>
  )
}

export default Chapter2;