import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitle";
import LiveArea from "../components/layout/LiveArea";
import BarChart from "../components/chart/BarChart";

// Data
import { plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7 } from '../data/chapter1';

// String
const content = {
  // {
  //   title: '20세기 최고의 발명품, 플라스틱',
  //   exp: '우리는 일상부터 의학과 같은 전문 분야까지 플라스틱을 통해 많은 혜택을 누려왔다. 이제 플라스틱은 우리의 삶에서 대체가 불가능할 정도로 필수적인 소재로 자리잡게 되었다.',
  //   data: plastic_production_1_3
  // },
  s1: {
    title: '지속적으로 증가하는 플라스틱의 생산량',
    exp: `우리가 필요로 하는 플라스틱의 양은 점점 증가하고 있다. 그 요구에 따라 우리나라 플라스틱 생산량도 꾸준히 늘었다.`,
    data: plastic_production_1_3
  },
  s2: {
    title: `코로나19로 증가하는 일회용품 소비량`,
    exp: '특히 2019년 이후 코로나19로 배달음식이 증가하면서 일회용품 사용도 급증했다. 환경을 위한 노력이 필요에 의한 사용을 극복하지 못하고 있다.',
    data: plastic_consumption_1_6
  },
  s3: {
    title: '플라스틱 폐기의 어려움',
    exp: `플라스틱 쓰레기 문제가 점점 심각해지는 이유는, 단단하고 튼튼하다는 플라스틱의 장점이 역설적으로 폐기를 어렵게 만들기 때문이다. 
    단단해서 썩지 않는다는 특성때문에, 플라스틱 폐기물은 매립만으로는 처리될 수 없다. `,
    data: plastic_waste_1_7
  }
};

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

const Chapter1 = ({
  currentChapter,
  chapterObject,
  currentSection,
  isChartActive,
  isTrigger
}) => {
  const [innerHeight, setInnterHeight] = useState(window.innerHeight);
  const [data, setData] = useState(content.s1.data);

  useEffect(() => {
    setInnterHeight(window.innerHeight);
  }, [window]);

  useEffect(() => {
    console.log("section change: " + currentSection);

    if(currentSection===1){
      setData(content.s1.data);
    } else if(currentSection===2){
      setData(content.s2.data);
    } else if(currentSection===3){
      setData(content.s3.data);
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
          {
            currentChapter === 1 &&
            <Chart
              isActive={isChartActive}
            >
              <BarChart
                data={data}
              />
            </Chart>
          }
          <Space />
          <TextContent
            ref={chapterObject.refSection1}
            currentSection={currentSection}
            index={1}
          >
            <h2>{content.s1.title}</h2>
            <p>{content.s1.exp}</p>
          </TextContent>
          <TextContent
            ref={chapterObject.refSection2}
            currentSection={currentSection}
            index={2}
          >
            <h2>{content.s2.title}</h2>
            <p>{content.s2.exp}</p>
          </TextContent>
          <TextContent
            ref={chapterObject.refSection3}
            currentSection={currentSection}
            index={3}
          >
            <h2>{content.s3.title}</h2>
            <p>{content.s3.exp}</p>
          </TextContent>
        </Section>
      </LiveArea>
    </Container>
  )
}

export default Chapter1;