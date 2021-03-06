import '../translate/I18nSetting';
import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { isMobile } from 'react-device-detect';
import theme from "../assets/theme/theme";
import styled from 'styled-components';

// Chapter
import Title from "../chapter/Title";
import Chapter1 from "../chapter/Chapter1";
import Chapter2Land from "../chapter/Chapter2Land";
import Chapter2Ocean from "../chapter/Chapter2Ocean";
import Chapter3 from "../chapter/Chapter3";

// Hook
import useScrollPosition from '@react-hook/window-scroll';
import handleViewport from 'react-in-viewport';

const Block = ({
  inViewport,
  forwardedRef
}) => {

  const color = inViewport ? '#217ac0' : '#ff9800';
  const text = inViewport ? 'In viewport' : 'Not in viewport';

  return (
    <div ref={forwardedRef}>
      <h3>{text}</h3>
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
      ref: RefSection1,
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
    // ??????3
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
      if (chapterList[0].ref.current.offsetTop - chapterOffset <= scrollY && scrollY <= (chapterList[1].ref.current.offsetTop - chapterOffset)) {
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
        if (chapterList[1].refSection[0].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[1].refSection[1].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater1-1");
          setChapter1CurrentSection(1);
          setIsChartS1Active(true);
          setIsChartS2Active(false);
        } else if (chapterList[1].refSection[1].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[1].refSection[2].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater1-2");
          setChapter1CurrentSection(2);
          setIsChartS1Active(false);
          setIsChartS2Active(true);
        } else if (chapterList[1].refSection[2].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[1].refSection[3].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater1-3");
          setChapter1CurrentSection(3);
          setIsChartS1Active(false);
          setIsChartS2Active(true);
        } else if (chapterList[1].refSection[3].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[1].refSection[4].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater1-4");
          setChapter1CurrentSection(4);
          setIsChartS1Active(false);
          setIsChartS2Active(true);
        } else if (chapterList[1].refSection[4].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[1].refSection[5].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater1-5");
          setChapter1CurrentSection(5);
          setIsChartS1Active(false);
          setIsChartS2Active(true);
        } else if (chapterList[1].refSection[5].current.offsetTop + previousChapterHeight <= scrollY) {
          // console.log("chpater1-6");
          setChapter1CurrentSection(6);
          setIsChartS2Active(false);
        }
      }
      // Chapter2 - land
      else if (chapterList[2].ref.current.offsetTop - chapterOffset <= scrollY && scrollY <= (chapterList[3].ref.current.offsetTop - chapterOffset)) {
        // console.log("section2-land");
        setCurrentChapter(2);
        setIsChartLandS1Active(false);
        setChapter2LandCurrentSection(0);
        let previousChapterHeight = chapterList[2].ref.current.offsetTop;
        if (chapterList[2].refSection[0].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[2].refSection[1].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater2-land-1");
          setChapter2LandCurrentSection(1);
          setIsChartLandS1Active(true);
        } else if (chapterList[2].refSection[1].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[2].refSection[2].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater2-land-2");
          setChapter2LandCurrentSection(2);
          setIsChartLandS1Active(true);
        } else if (chapterList[2].refSection[2].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[2].refSection[3].current.offsetTop + previousChapterHeight)) {
          // console.log("setChapter2Land-3");
          setChapter2LandCurrentSection(3);
          setIsChartLandS1Active(true);
        } else if (chapterList[2].refSection[3].current.offsetTop + previousChapterHeight <= scrollY) {
          // console.log("chpater2-land-4");
          setChapter2LandCurrentSection(4);
          setIsChartLandS1Active(false);
        }
      }
      // Chapter2 - ocean
      else if (chapterList[3].ref.current.offsetTop - chapterOffset <= scrollY && scrollY <= (chapterList[4].ref.current.offsetTop - chapterOffset)) {
        setCurrentChapter(3);
        setIsChartOceanS1Active(false);
        setChapter2OceanCurrentSection(0);
        // console.log("chapter2-ocean");
        let previousChapterHeight = chapterList[3].ref.current.offsetTop;
        if (chapterList[3].refSection[0].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[3].refSection[1].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater2-ocean-1");
          setChapter2OceanCurrentSection(1);
          setIsChartOceanS1Active(true);
        } else if (chapterList[3].refSection[1].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[3].refSection[2].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater2-ocean-2");
          setChapter2OceanCurrentSection(2);
          setIsChartOceanS1Active(true);
        } else if (chapterList[3].refSection[2].current.offsetTop + previousChapterHeight <= scrollY && scrollY <= (chapterList[3].refSection[3].current.offsetTop + previousChapterHeight)) {
          // console.log("chpater2-ocean-3");
          setChapter2OceanCurrentSection(3);
          setIsChartOceanS1Active(true);
        } else if (chapterList[3].refSection[3].current.offsetTop + previousChapterHeight <= scrollY) {
          // console.log("chpater2-ocean-4");
          setChapter2OceanCurrentSection(4);
          setIsChartOceanS1Active(false);
        }
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
      />
      <Chapter1
        currentChapter={currentChapter}
        refObject={chapterList[1].ref}
        chapterObject={chapterList[1]}
        currentSection={chapter1CurrentSection}
        refSection1={chapterList[1].refSection1}
        refSection2={chapterList[1].refSection2}
        isChartS1Active={isChartS1Active}
        isChartS2Active={isChartS2Active}
      />
      <ViewportBlock
        onEnterViewport={() => console.log('enter')}
        onLeaveViewport={() => console.log('leave')}
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

      {/* <div ref={chapterList[4].ref} /> */}
      <Chapter3 chapterObject={chapterList[4]} />
    </>
  );
}
export default Main;
