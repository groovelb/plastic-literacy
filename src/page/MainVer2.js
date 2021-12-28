import '../translate/I18nSetting';
import React, { useEffect, useState, useRef } from "react";
import SpaceFullScreen from "../components/layout/SpaceFullScreen";
import { isMobile } from 'react-device-detect';
import ViewportWarpper from "../components/ViewportWrapper";
import GNB from "../components/navigation/GNB";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Chapter
import Title from "../chapter/TitleVer2";
import Chapter1 from "../chapter/Chapter1";
import Chapter2Land from "../chapter/Chapter2Land";
import Chapter2Ocean from "../chapter/Chapter2Ocean";
import Chapter3 from "../chapter/Chapter3";

// Hook
import useScrollPosition from '@react-hook/window-scroll';


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


  useEffect(() => {
    console.log("CHAPTER CHANGED: " + currentChapter);
  }, [currentChapter]);

  return (
    <>
      <GNB setCurrentChapter={setCurrentChapter} />
      <ViewportWarpper
        onEnterViewport={
          () => {
            setCurrentChapter(0);
          }
        }
      >
        <Title
          refObject={chapterList[0].ref}
          currentChapter={currentChapter}
        />
      </ViewportWarpper>
      <SpaceFullScreen
        numX={0.2}
      />
      <Element name="chapter1">
        <ViewportWarpper
          onEnterViewport={
            () => {
              setCurrentChapter(1);
            }
          }
        >
          <Chapter1
            currentChapter={currentChapter}
            chapterObject={chapterList[1]}
          />
        </ViewportWarpper>
      </Element>
      <SpaceFullScreen
        numX={0.2}
      />
      <Element name="chapter2">
        <ViewportWarpper
          onEnterViewport={
            () => {
              setCurrentChapter(2);
            }
          }
        >
          <Chapter2Land
            currentChapter={currentChapter}
            chapterObject={chapterList[2]}
            currentSection={chapter2LandCurrentSection}
          />
        </ViewportWarpper>
      </Element>
      <SpaceFullScreen
        numX={0.2}
      />
      <ViewportWarpper
        onEnterViewport={
          () => {
            setCurrentChapter(3);
          }
        }
      >
        <Chapter2Ocean
          currentChapter={currentChapter}
          chapterObject={chapterList[3]}
          currentSection={chapter2OceanCurrentSection}
        />
      </ViewportWarpper>

      <SpaceFullScreen
        numX={0.2}
      />
      <Element name="chapter3">
        <ViewportWarpper
          onEnterViewport={
            () => {
              setCurrentChapter(4);
            }
          }
        >
          <Chapter3
            chapterObject={chapterList[4]}
            currentChapter={currentChapter}
          />
        </ViewportWarpper>
      </Element>
    </>
  );
}
export default Main;
