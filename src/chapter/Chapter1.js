import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import Section from "../components/layout/Section";
import FullScreen from "../components/layout/FullScreen";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import ChapterTitle from "../components/layout/ChapterTitle";
import LiveArea from "../components/layout/LiveArea";
import TimelineChartC1S1 from "../components/chart/TimelineChartC1S1";
import BarChart from "../components/chart/BarChart";

// Data
import { plastic_industry_timeline_1_1, plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7, plastic_accumulated_waste_1_8 } from '../data/chapter1';


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
  padding-left: 40px;
  margin-bottom: 16px;
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

  const { t } = useTranslation();

  // String
  const content = [
    {
      title: t("c1-s1-title"),
      exp: t("c1-s1-exp"),
      data: plastic_industry_timeline_1_1,
      chartTitle: '플라스틱 산업 발전과정'
    },
    {
      title: t("c1-s2-title"),
      exp: t("c1-s2-exp"),
      data: plastic_production_1_3,
      chartTitle: '전세계 연도별 플라스틱 생산량'
    },
    {
      title: t("c1-s3-title"),
      exp: t("c1-s3-exp"),
      data: plastic_consumption_1_6,
      chartTitle: '국내 1인당 연간 플라스틱 소비량'
    },
    {
      title: t("c1-s4-title"),
      exp: t("c1-s4-exp"),
      data: plastic_waste_1_7,
      chartTitle: '연도별 플라스틱 폐기물량'
    },
    {
      title: t("c1-s5-title"),
      exp: t("c1-s5-exp"),
      data: plastic_accumulated_waste_1_8,
      chartTitle: '연도별 플라스틱 누적 폐기물량'
    }
  ];

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
        title={t("c1-title")}
        subTitle={t("c1-subtitle")}
        bgColor={'dark'}
        exp={t("c1-exp")}
      />
      <LiveArea>
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
              {content[currentSection - 1] && content[currentSection - 1].chartTitle}
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
        <MsgFullScreen
          refObject={chapterObject.refSection[5]}
          title={t('c1-s7-exp')}
        />
      </LiveArea>
    </Container>
  )
}

export default Chapter1;