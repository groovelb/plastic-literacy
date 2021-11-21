import '../translate/I18nSetting';
import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { isMobile } from 'react-device-detect';
import theme from "../assets/theme/theme";
import styled from 'styled-components';

// Chapter
import Title from "../chapter/TitleVer2";
import Chapter1 from "../chapter/Chapter1";
import Chapter2Land from "../chapter/Chapter2Land";
import Chapter2Ocean from "../chapter/Chapter2Ocean";
import Chapter3 from "../chapter/Chapter3";

// Hook
import useScrollPosition from '@react-hook/window-scroll';
import handleViewport from 'react-in-viewport';

const Block = ({
  inViewport,
  forwardedRef,
  number
}) => {

  const color = inViewport ? '#217ac0' : '#ff9800';
  const text = inViewport ? 'In viewport' : 'Not in viewport';

  return (
    <div ref={forwardedRef}>
      <h3>{text + number}</h3>
      <div style={{ width: '400px', height: '300px', background: color }} />
    </div>
  );
}
const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

function Main() {
  // Intit Scroll Hook
  const scrollY = useScrollPosition(60);
  const [isScrollStart, setIsScrollStart] = useState(false);


  const scrollOffset = isMobile ? 200 : 400;
  const [progress, setProgress] = useState(0);

  // Set a Current Section Inside Each Chapter
  const [chapter1CurrentSection, setChapter1CurrentSection] = useState(0);
  const [chapter2LandCurrentSection, setChapter2LandCurrentSection] = useState(0);
  const [chapter2OceanCurrentSection, setChapter2OceanCurrentSection] = useState(0);


  // Init Section Object
  const RefSection1 = useRef(null);
  const chapterList = [
    //Title Chapter
    {
      ref: useRef(null),
      theme: 'light',
    },
    //  Chapter1: Plastic Dilemma
    {
      ref: useRef(null),
      theme: 'light',
      isTrigger: false,
      ref: useRef(null),
      refSection: [
        // 1.plastic history
        useRef(null),
        // 2.plastic production
        useRef(null),
        // 3.plastic consumption
        useRef(null),
        // 4.plastic waste
        useRef(null),
        // 5.plastic waste2
        useRef(null),
        // 6.ending
        useRef(null)
      ],
    },
    // Chapter2: Journey Of Plastic - Land
    {
      ref: useRef(null),
      theme: 'dark',
      refSection: [
        // 1
        useRef(null),
        // 2 
        useRef(null),
        // 3
        useRef(null),
        // space
        useRef(null)
      ]
    },
    // Chapter2: Journey Of Plastic - Ocean
    {
      ref: useRef(null),
      theme: 'dark',
      refSection: [
        // 1
        useRef(null),
        // 2 
        useRef(null),
        // 3
        useRef(null),
        // 4
        useRef(null),
        // space
        useRef(null)
      ]
    },
    // 챕터3
    {
      ref: useRef(null),
      theme: 'dark',
      refSection: [
        // 1
        useRef(null),
        // 2 
        useRef(null),
        // 3
        useRef(null),
        // 4
        useRef(null)
      ]
    }
  ];


  const [currentChapter, setCurrentChapter] = useState(0);
  const [isChartS1Active, setIsChartS1Active] = useState(false);
  const [isChartS2Active, setIsChartS2Active] = useState(false);
  const [isChartLandActive, setIsChartLandS1Active] = useState(false);
  const [isChartOceanActive, setIsChartOceanS1Active] = useState(false);

  const chapterOffset = 300;


  useEffect(() => {
    // Prevent Ref Pre-loading
    if (!isScrollStart && scrollY < 10) {
      setIsScrollStart(true);
    }
    // Start Tracking Scroll After Ref loading
    if (isScrollStart) {
      // Title Page
      if (scrollY <= (chapterList[1].ref.current.offsetTop - chapterOffset)) {
        setCurrentChapter(0);
        // console.log("title");
      }
      // Chapter1
      else if (chapterList[1].ref.current.offsetTop - chapterOffset <= scrollY && scrollY <= (chapterList[2].ref.current.offsetTop - chapterOffset)) {
        // console.log("chpater1");
        // set current section of chapter1
        let previousChapterHeight = chapterList[1].ref.current.offsetTop;
        // setChapter1CurrentSection(0);
        setIsChartS1Active(false);
        setIsChartS2Active(false);
        setIsChartLandS1Active(false);
        setCurrentChapter(1);
      }
      // Chapter2 - land
      else if (chapterList[2].ref.current.offsetTop - chapterOffset <= scrollY && scrollY <= (chapterList[3].ref.current.offsetTop - chapterOffset)) {
        // console.log("section2-land");
        setCurrentChapter(2);
        setIsChartLandS1Active(false);
        setChapter2LandCurrentSection(0);
      }
      // Chapter2 - ocean
      else if (chapterList[3].ref.current.offsetTop - chapterOffset <= scrollY && scrollY <= (chapterList[4].ref.current.offsetTop - chapterOffset)) {
        setCurrentChapter(3);
        setIsChartOceanS1Active(false);
        setChapter2OceanCurrentSection(0);
  
      }
      // chapter
      else {

      }
    }
  }, [scrollY]);

  return (
    <>
      <Title
        refObject={chapterList[0].ref}
        currentChapter={currentChapter}
      />
      <Chapter1
        currentChapter={currentChapter}
        chapterObject={chapterList[1]}
        refSection1={chapterList[1].refSection1}
        refSection2={chapterList[1].refSection2}
        isChartS1Active={isChartS1Active}
        isChartS2Active={isChartS2Active}
      />
      <Chapter2Land
        currentChapter={currentChapter}
        chapterObject={chapterList[2]}
        currentSection={chapter2LandCurrentSection}
        isChartActive={isChartLandActive}
      />
      <Chapter2Ocean
        currentChapter={currentChapter}
        chapterObject={chapterList[3]}
        currentSection={chapter2OceanCurrentSection}
        isChartActive={isChartOceanActive}
      />
      <Chapter3
        chapterObject={chapterList[4]} />
    </>
  );
}
export default Main;
