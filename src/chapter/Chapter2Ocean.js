import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitle";
import LiveArea from "../components/layout/LiveArea";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import SankeyOcean from "../chart/chaper2/SankeyOcean";

// Data
import { plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7 } from '../data/chapter1';

const sankeyHeight = 448;


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

  const { t } = useTranslation();

  // String
  const contentOcean = [
    {
      title: t('c2-s6-title'),
      exp: t('c2-s6-exp')
    },
    {
      title: t('c2-s7-title'),
      exp: t('c2-s7-exp')
    },
    {
      title: t('c2-s8-title'),
      exp: t('c2-s8-exp')
    }
  ];

  useEffect(() => {
    setInnterHeight(window.innerHeight);
  }, [window]);

  useEffect(() => {

  }, []);

  return (
    <Container ref={chapterObject.ref}>
      <LiveArea>
        <MsgFullScreen
          title={t('c2-s5-title')}
          exp={t('c2-s5-exp')}
          refObject={chapterObject.refSection[0]}
        />
        <SpaceFullScreen
          numX={0.25}
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
                ref={chapterObject.refSection[i+1]}
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
          <MsgFullScreen
            exp={t('c2-s9-exp')}
          />
        </Section>
      </LiveArea>
    </Container>
  )
}

export default Chapter2;