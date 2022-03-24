import logo from './logo.svg';
import styled from "styled-components";
import './App.css';
import './assets/font/pretendardvariable.css';
import './translate/I18nSetting';
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { isMobile } from 'react-device-detect';
import theme from "./assets/theme/theme";
import Scrollbar from 'smooth-scrollbar';
import Router from "./router/Router";
import useFullscreen from './hook/useFullScreen';

// Chapter
import MainVer2 from "./page/MainVer2";


const Container = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };

  const bttRef = useRef(null);
  // const element = useRef(null);
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  const [isFull, setIsFull] = useState(false);

  useLayoutEffect(() => {
  
    setTimeout(() =>{
      // bttRef.current.click();
      // triggerFull(element);
    },500);
  },[]);

  return (
    <Container
      ref={element}
      onMounted={() => console.log('mounted')}
    >
      <ThemeProvider theme={theme}>
      {/* <button ref={bttRef} onClick={() => {triggerFull(element)}}>Make fullscreen</button> */}
        <GlobalStyle />
        {/* <MainVer2 /> */}
        <Router
          triggerFull={() => {
            triggerFull();
            setIsFull(true);
          }}
          isFull={isFull}
        />
      </ThemeProvider>
    </Container>
  );
}
const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
  *{
    box-sizing: border-box;
    /* overflow-x: hidden; */
  }
  html{
    overflow: hidden;
    width: 100%;
    height: 100%;
    /* min-height: -webkit-fill-available;
    height: 100vh; */
  }
  body{
    /* background-color: ${(props) => props.theme.color.ui.bg.dark}; */
    color: #fff;
    overflow: hidden;
    margin: 0;
    height:100%;
    width:100%;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    @media only screen and (max-width: 480px) {
       height: calc(var(--vh, 1vh) * 100);
    }
   
    } 
   // Title
  .circle_path_whole.inner{
    /* stroke-dasharray: 5; */
  }
  .marker2{
    fill: #03233A;
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.50);
    border-radius: 4px;
  }
  p{
    margin: 0px;
  }
  .node rect {
    fill-opacity: 0.86;
    shape-rendering: crispEdges;
  }
  .node text {
    pointer-events: none;
    /* text-shadow: 0 1px 0 #fff; */
  }
  .text.recycle{
    fill: #004628;
    font-size: 14px;
    font-weight: bold;
    @media only screen and (max-width: 480px) {
      font-size: 10px;
      font-weight: black;
      letter-spacing: -0.4px;
    }
  }
  .link {
    fill: none;
    /* stroke: #000; */
    stroke-opacity: .1;
  }
  .link:hover {
    stroke-opacity: .75;
  }
  .stage_title{
    /* font-weight: bold; */
    ${props => props.theme.type.weight.prd.regular}
    font-size: 20px;
    fill: #fff;
    opacity: 0.92;
    @media only screen and (max-width: 480px) {
      fill: ${props => props.theme.color.brand.epGreen};
      font-size: 14px;
      font-weight: bold;
    }
  }
  .node_box{
    
  }
  .node_title{
    ${props => props.theme.type.weight.prd.black}
    text-shadow: 0px 0px 12px ${props => props.theme.color.brand.epDeepPurple};
    font-size: 16px;
    white-space: pre-line;
    word-break: keep-all;
    letter-spacing: -0.5px;
    @media only screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
  .node_value{
    font-size: 14px;
    ${props => props.theme.type.weight.prd.regular};
    /* font-weight: bold; */
    /* text-shadow: 0px 0px 4px #fff; */
    @media only screen and (max-width: 480px) {
      font-size: 12px;
      letter-spacing: -0.8px ;
    }
  }
  h1,h2{
    margin: 0;
  }
  .bar{
    transition: fill 0.5s ease-out;
  }
  .bar.positive{
    /* fill: ${props => props.theme.color.brand.epGreen}; */
    fill: #30DF7A;
    opacity: 0.75;
  }
  .bar.fade{
    opacity: 0.2 !important;
  }
  .bar.negative{
    fill: ${props => props.theme.color.brand.epPurple};
    opacity: 0.75;
  }
  @keyframes blink{
    0%{opacity: 0;}
    50%{opacity: .5;}
    100%{opacity: 1;}
  }
  .bar.highlight{
    fill: ${props => props.theme.color.brand.epPurple};
    opacity: 0.75;
    animation: blink 2s linear infinite;
  }

  .bar.mark{
    fill: ${props => props.theme.color.brand.epPurple};
    opacity: 0.75;
  }
  .delay1{
    animation-delay: 0.5s;
  }
  .delay2{
    animation-delay: 1s;
  }
  .stroke-opacity{
    transition: opacity 1s ease-in-out;
  }
  .bar.recycle{
    opacity: 0.92;
  }
  .bar.secondary{
    fill: #30DF7A;
  }
  .barChart{
    path{
      stroke: #fff;
      stroke-width: 0.5px;
      opacity: 0.3;
      opacity: 0;
    }
  }
  .cycle_image{
    filter: brightness(95%);
  }
  .timeline.yAxis{
    opacity: 0;
    path{
      stroke: #fff;
      stroke-width: 0.5px;
      opacity: 0.3;
      display: none;
      opacity: 0;
    }
  }
  .tick{
    font-size: 14.8px;
    line{
      stroke: #fff;
      stroke-width: 0.5px;
      opacity: 0.3;
      opacity: 0;
    }
    @media only screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  p{
    ${props => props.theme.type.size.body1};
    ${props => props.theme.type.weight.prd.regular};
  }
  h2{
    ${props => props.theme.type.size.title1};
    ${props => props.theme.type.weight.prd.bold};
    margin-bottom: 24px;
  }
  .exp{
    font-size: 14px;
    fill: #fff;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  .bar_value_text{
    fill: #fff;
    ${props => props.theme.type.size.title2};
    ${props => props.theme.type.weight.prd.black};
    @media only screen and (max-width: 480px) {
      font-size: 12px !important;
    }
  }
  .bar_value_text_purple{
    fill: #6464FF;
    ${props => props.theme.type.size.title2};
    ${props => props.theme.type.weight.prd.black};
    @media only screen and (max-width: 480px) {
      font-size: 12px !important;
    }
  }
  .bar_mark_text{
    fill: #fff;
    ${props => props.theme.type.size.body1};
    ${props => props.theme.type.weight.prd.black};
  }
  .RowCol{
    @media only screen and (max-width: 480px) {
      flex-direction: column;
    } 
  }
  @media only screen and (max-width: 480px) {
    .exp{
      font-size: 12px;
    }
  }
`;
export default App;
