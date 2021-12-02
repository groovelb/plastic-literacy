import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import Section from "../components/layout/Section";
import ChapterTitle from "../components/layout/ChapterTitle";
import MsgFullScreen from "../components/layout/MsgFullScreen";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import LiveArea from "../components/layout/LiveArea";
import SankeyLand from "../chart/chaper2/SankeyLand";
import ViewportWrapper from '../components/ViewportWrapper';
import bg_c2 from "../assets/img/bg/title_bg_c2.png";
import SectionContentHorizon from "../components/textContainer/SectionContentHorizon";

// Data
import { plastic_production_1_3, plastic_consumption_1_6, plastic_waste_1_7 } from '../data/chapter1';

const sankeyHeight = 424;

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
  width: ${props => props.theme.size.liveArea};
  box-shadow: 0px 40px 80px 60px ${props => props.theme.color.ui.bg.dark};
  left: ${(props) => `calc((100% - ${props.theme.size.liveArea})/2)`};
  /* width: ${props => `calc(calc(${props.theme.size.liveArea} - 308px - 48px))`}; */
  height: ${sankeyHeight + 'px'};
  background-color: ${props => props.theme.color.ui.bg.dark};
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.3s ease-out;
  /* animation: ${FadeIn} 1s linear forwards; */
  @media only screen and (max-width: 480px) {
    width: 100%;
    left: 0%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Chapter2 = ({
  chapterObject,
  currentChapter,
}) => {

  const { t } = useTranslation();

  // String
  const contentLand = [
    {
      title: t("c2-s2-title"),
      exp: t("c2-s2-exp"),
    },
    {
      title: t("c2-s3-title"),
      exp: t("c2-s3-exp"),
    },
    {
      title: t("c2-s4-title"),
      exp: t("c2-s4-exp"),
    }
  ];

  const [innerHeight, setInnterHeight] = useState(window.innerHeight);
  const [currentSlideLand, setCurrentSlideLand] = useState(0);
  const [isTitleTrigger, setIsTitleTrigger] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isChartActive, setIsChartActive] = useState(false);

  useEffect(() => {
    setInnterHeight(window.innerHeight);
  }, [window]);

  useEffect(() => {
    if (currentSection === 0) {
      setIsChartActive(false);
    } else if (currentSection === 1) {
      setIsChartActive(true);
    } else if (currentSection === 2) {
      setIsChartActive(true);
    } else if (currentSection === 3) {
      setIsChartActive(true);
    }
    else if (currentSection === 4) {
      setIsChartActive(false);
    }
  }, [currentSection]);

  return (
    <Container ref={chapterObject.ref}>
      <ViewportWrapper
        onEnterViewport={() => {
          console.log("enter: 0");
          setCurrentSection(0);
          setIsTitleTrigger(true);
        }}
      >
        <ChapterTitle
          img={bg_c2}
          numChapter={2}
          title={t("c2-title")}
          subTitle={t("c2-subtitle")}
          bgColor={'dark'}
          exp={t("c2-exp")}
          isTrigger={isTitleTrigger}
        />
      </ViewportWrapper>
      <LiveArea>
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
                // width={1200}
                // height={sankeyHeight}
                currentStage={currentSection}
                currentChapter={currentChapter}
              />
            </Chart>
          }

          {
            contentLand.map((section, i) =>
              <Wrapper>
                <ViewportWrapper
                  onEnterViewport={() => {
                    console.log("enter: " + (i + 1));
                    setCurrentSection(i + 1);
                  }}
                >
                  <SectionContentHorizon
                    title={section.title}
                    exp={section.exp}
                    index={i}
                  />
                </ViewportWrapper>
              </Wrapper>
            )
          }
           <SpaceFullScreen
              numX={0.1}
            />
          <ViewportWrapper
            onEnterViewport={() => {
              setCurrentSection(4);
            }}
          >
            <SpaceFullScreen
              numX={0.25}
            />
          </ViewportWrapper>
        </Section>
      </LiveArea>
    </Container>
  )
}

export default Chapter2;