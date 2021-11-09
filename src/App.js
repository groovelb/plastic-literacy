import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { isMobile } from 'react-device-detect';
import theme from "./assets/theme/theme";
import styled from 'styled-components';

// Chapter
import Title from "./chapter/Title";
import Chapter1 from "./chapter/Chapter1";
import Chapter2 from "./chapter/Chapter2";

// Hook
import useScrollPosition from '@react-hook/window-scroll'

function App() {
  // Intit Scroll Hook
  const scrollY = useScrollPosition(60);
  const [isScrollStart, setIsScrollStart] = useState(false);
  const scrollOffset = isMobile ? 200 : 400;
  const [progress, setProgress] = useState(0);

  const [chapter1CurrentSection, setChapter1CurrentSection] = useState(0);

  // Init Chapter Ref
  // const refTitle = useRef(null);
  // const refChapter1 = useRef(null);
  // const refChapter2 = useRef(null);
  // const refChapter3 = useRef(null);

  // Init Section Object
  const RefSection1 = useRef(null);
  const chapterList = [
    {
      ref: RefSection1,
      theme: 'light',
    },
    {
      ref: useRef(null),
      theme: 'light',
      isTrigger: false,
      ref: useRef(null),
      refSection1: useRef(null),
      refSection2: useRef(null),
      refSection3: useRef(null),
      refSection4: useRef(null),
      refSection5: useRef(null),
      refSection6: useRef(null),
    },
    {
      ref: useRef(null),
      theme: 'dark',
    },
    {
      ref: useRef(null),
      theme: 'dark',
    }
  ];

  const [currentChapter, setCurrentChapter] = useState(0);
  const [isChartS1Active, setIsChartS1Active] = useState(false);

  const [triggerList, setTriggerList] = useState(
    {
      title: false,
      chapter1: false,
      chapter1: false,
      chapter1: false
    }
  )

  const chapterOffset = 300;

  useEffect(() => {
    // Prevent Ref Pre-lading
    if (!isScrollStart && scrollY < 10) {
      setIsScrollStart(true);
    }
    if (isScrollStart) {
      if (chapterList[0].ref.current.offsetTop - chapterOffset <= scrollY && scrollY <= (chapterList[1].ref.current.offsetTop - chapterOffset)) {
        setTriggerList({
          ...triggerList,
          title: true
        });
        setCurrentChapter(0);
        console.log("title");
      } else if (chapterList[1].ref.current.offsetTop - chapterOffset <= scrollY && scrollY <= (chapterList[2].ref.current.offsetTop - chapterOffset)) {
        console.log("chpater1");
        // set current section of chapter1
        let chapterOffset = chapterList[0].ref.current.offsetHeight;
        setChapter1CurrentSection(0);
        setIsChartS1Active(false);
        setTriggerList({
          ...triggerList,
          chapter1: true
        });
        setCurrentChapter(1);
        if (chapterList[1].refSection1.current.offsetTop + chapterOffset <= scrollY && scrollY <= (chapterList[1].refSection2.current.offsetTop + chapterOffset)) {
          setChapter1CurrentSection(1);
          setIsChartS1Active(true);
        } else if (chapterList[1].refSection2.current.offsetTop + chapterOffset <= scrollY && scrollY <= (chapterList[1].refSection3.current.offsetTop + chapterOffset)) {
          setChapter1CurrentSection(2);
          setIsChartS1Active(true);
        } else if (chapterList[1].refSection3.current.offsetTop + chapterOffset <= scrollY) {
          setChapter1CurrentSection(3);
          setIsChartS1Active(true);
        } 
        // else if (chapterList[1].refSection4.current.offsetTop + chapterOffset <= scrollY) {
        //   setChapter1CurrentSection(4);
        //   setIsChartS1Active(true);
        // } else {
        //   setChapter1CurrentSection(5);
        //   setIsChartS1Active(false);
        // }
      } else {
        console.log("chpater2");
        setIsChartS1Active(false);
      }
    }
  }, [scrollY]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Title
        refObject={chapterList[0].ref}
      />
      <Chapter1
        currentChapter={currentChapter}
        isTrigger={triggerList.chapter1}
        refObject={chapterList[1].ref}
        chapterObject={chapterList[1]}
        currentSection={chapter1CurrentSection}
        refSection1={chapterList[1].refSection1}
        refSection2={chapterList[1].refSection2}
        isChartActive={isChartS1Active}
      />
      <Chapter2
        chapterObject={chapterList[2]}
      />
    </ThemeProvider>
  );
}
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    background-color: ${(props) => props.theme.color.brand.secondary900};
    color: #fff;
  } 
  p{
    margin: 0px;
  }
  .node rect {
    fill-opacity: .9;
    shape-rendering: crispEdges;
  }
  .node text {
    pointer-events: none;
    /* text-shadow: 0 1px 0 #fff; */
  }
  .link {
    fill: none;
    /* stroke: #000; */
    stroke-opacity: .1;
  }
  .link:hover {
    stroke-opacity: .75;
  }
  .node_box{
    
  }
  .node_title{
    font-weight: bold;
    font-size: 16px;
  }
  .node_value{
    /* font-size: 20px; */
    font-weight: bold;
    /* text-shadow: 0px 0px 4px #fff; */
  }
  h1,h2{
    margin: 0;
  }
  .bar.positive{
    fill: ${props=> props.theme.color.brand.emerald};
  }
  .stroke-opacity{
    transition: opacity 1s ease-in-out;
  }
`;
export default App;
