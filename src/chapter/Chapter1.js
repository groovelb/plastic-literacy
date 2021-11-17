import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import Section from "../components/layout/Section";
import FullScreen from "../components/layout/FullScreen";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import ChapterTitle from "../components/layout/ChapterTitle";
import LiveArea from "../components/layout/LiveArea";
import TimelineChartC1S1 from "../components/chart/TimelineChartC1S1";
import BarChart from "../components/chart/BarChart";

// Data
import { plastic_industry_timeline_1_1, plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7, plastic_accumulated_waste_1_8 } from '../data/chapter1';

// String
const content = [
  {
    title: '20세기 최고의 발명품, 플라스틱',
    exp: '우리는 일상부터 의학과 같은 전문 분야까지 플라스틱을 통해 많은 혜택을 누려왔다. 이제 플라스틱은 우리의 삶에서 대체가 불가능할 정도로 필수적인 소재로 자리잡게 되었다.',
    data: plastic_industry_timeline_1_1,
    chartTitle: '플라스틱 산업 발전과정'
  },
  {
    title: '지속적으로 증가하는 플라스틱의 생산량',
    exp: `우리가 필요로 하는 플라스틱의 양은 점점 증가하고 있다. 그 요구에 따라 우리나라 플라스틱 생산량도 꾸준히 늘었다.`,
    data: plastic_production_1_3,
    chartTitle: '전세계 연도별 플라스틱 생산량'
  },
  {
    title: `매년 증가하는 일회용품 소비량`,
    exp: `우리나라의 1인당 플라스틱 사용량은 세계 최고 수준이다. 
    이러한 추세로 플라스틱 사용이 지속될 경우 2030년 1인당 
    플라스틱 연간 소비량은 2018년 대비 26% 상승한 154kg에 
    달할 것으로 예측되고 있다. 환경을 위한 노력이 필요에 의한
    사용을 극복하지 못하고 있다.
    `,
    data: plastic_consumption_1_6,
    chartTitle: '국내 1인당 연간 플라스틱 소비량'
  },
  {
    title: '플라스틱 폐기의 어려움',
    exp: `플라스틱 쓰레기 문제가 점점 심각해지는 이유는, 단단하고 튼튼하다는 플라스틱의 장점이 역설적으로 폐기를 어렵게 만들기 때문이다. 
    단단해서 썩지 않는다는 특성때문에, 플라스틱 폐기물은 매립만으로는 처리될 수 없다. `,
    data: plastic_waste_1_7,
    chartTitle: '연도별 플라스틱 폐기물량'
  },
  {
    title: `100년이 지나도 
    썩지 않는 플라스틱`,
    exp: `플라스틱은 100년이 넘어도 썩어 없어지지 않아, 처음 발명된 플라스틱 조차 아직 썩지 않고 남아있다. 썩지도 않고 매일매일 쏟아지는 엄청난 플라스틱 쓰레기는 지구 전체를 위협하고 있다.`,
    data: plastic_accumulated_waste_1_8,
    chartTitle: '연도별 플라스틱 누적 폐기물량'
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
  top: 160px;
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  width: ${props => `calc(calc(${props.theme.size.liveArea} - 308px - 48px))`};
  height: 680px;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  transform: ${props => props.isActive ? `translateY(00px)` : `translateY(120px)`};
`;

const ChartTitle = styled.p`
  ${props => props.theme.type.size.title2};
  ${props => props.theme.type.weight.prd.bold};
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
    ${props => props.theme.type.size.title1}
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

const Chapter1 = ({
  currentChapter,
  chapterObject,
  currentSection,
  isChartS1Active,
  isChartS2Active,
  isTrigger
}) => {
  const [innerHeight, setInnterHeight] = useState(window.innerHeight);
  const [data, setData] = useState(content[0].data);

  useEffect(() => {
    setInnterHeight(window.innerHeight);
  }, [window]);

  useEffect(() => {
    if (currentSection === 1) {
      setData(content[0].data);
    }
    else if (currentSection === 2) {
      setData(content[1].data);
    } else if (currentSection === 3) {
      setData(content[2].data);
    } else if (currentSection === 4) {
      setData(content[3].data);
    } else if (currentSection === 5) {
      setData(content[4].data);
    }
  }, [currentSection]);

  return (
    <Container ref={chapterObject.ref}>
      <ChapterTitle
        numChapter={1}
        title={'Plastic Dilemma'}
        subTitle={'"플라스틱이 직면한 현실을 얘기하다"'}
        bgColor={'dark'}
        exp={`플라스틱은 발명된 이후 '인류의 축복'이라고 불리며 많은 사람들에게 선물과 같은 존재가 되었다.

        그렇게 현대사회를 구성하는 인간의 삶에 필수적인 소재로 자리잡아왔다. 그러나, 플라스틱은 지구 환경, 기후 위기, 인간의 건강한 삶 등과 같은 문제로 우리에게 다가오게 되었다.
        
        플라스틱을 올바르게 활용하고 처리하기 위해서는 플라스틱의 딜레마를 이해하고, 해결할 수 있는 방안을 고민해야 한다.`}
      />
      <LiveArea>
        <Section>
          {/* plastic history timeline */}
          {
            currentChapter === 1 &&
            <Chart
              isActive={isChartS1Active}
            >
              <ChartTitle>
                {content[0].chartTitle}
              </ChartTitle>
              <TimelineChartC1S1
                data={data}
              >

              </TimelineChartC1S1>
            </Chart>

          }
          {/* bar chart */}
          {
            currentChapter === 1 && 0 < currentSection &&
            <Chart
              isActive={isChartS2Active}
            >
              <ChartTitle>
                {content[currentSection - 1].chartTitle}
              </ChartTitle>
              <BarChart
                data={data}
              />
            </Chart>
          }
          <Space />
          {
            content.map((section, i) =>
              <TextContent
                ref={chapterObject.refSection[i]}
                currentSection={currentSection - 1}
                index={i}
              >
                <h2>
                  {section.title}
                </h2>
                <p>
                  {section.exp}
                </p>
              </TextContent>
            )
          }
        </Section>
        <MsgFullScreen
          refObject={chapterObject.refSection[5]}
          title={` "
          생산과 소비를 줄인다고 
해결될 문제가 아닌 플라스틱 환경문제
          "`}
          exp={`
            플라스틱을 사용하지 않는 것이 해답 중 하나가 될 수 있다. 하지만 플라스틱은 이미 우리 삶 속에 완전히 녹아들어있다.
            플라스틱을 안 쓸 수는 없지만, 이대로 계속 쓸 수도 없는 상황이라면 어떻게 해야 할까?
            
            GS칼텍스는 문제 해결을 위해, 가장 먼저 우리가 쓰고 버리는 플라스틱의 여정에 대한 이해에서 출발했다.
          `}
        />
        <MsgFullScreen
          title={` "
          GS칼텍스는 문제의 해답을 찾기 위해,
쓰고 버리는 플라스틱의 여정을 올바르게 이해하는 과정에서 시작했다.
          "`}
        />
      </LiveArea>
    </Container>
  )
}

export default Chapter1;