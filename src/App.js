import logo from './logo.svg';
import './App.css';
import './assets/font/pretendardvariable.css';
import './translate/I18nSetting';
import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { isMobile } from 'react-device-detect';
import theme from "./assets/theme/theme";
import styled from 'styled-components';
import Scrollbar from 'smooth-scrollbar';
import Router from "./router/Router";

// Chapter
import MainVer2 from "./page/MainVer2";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <MainVer2 /> */}
      <Router />
    </ThemeProvider>
  );
}
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    
  }
  body{
    /* background-color: ${(props) => props.theme.color.ui.bg.dark}; */
    color: #fff;
    overflow-x: hidden;
    margin: 0;
    height:100vh;
    width:100vw;
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
    font-size: 20px;
    fill: ${props => props.theme.color.brand.epGreen};
    fill: #fff;
    opacity: 0.5;
  }
  .node_box{
    
  }
  .node_title{
    font-weight: bold;
    font-size: 12px;
  }
  .node_value{
    /* font-size: 20px; */
    font-weight: bold;
    /* text-shadow: 0px 0px 4px #fff; */
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
    animation: blink 1s linear infinite;
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
  .barChart{
    path{
      stroke: #fff;
      stroke-width: 0.5px;
      opacity: 0.3;
      opacity: 0;
    }
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
  @media only screen and (max-width: 480px) {
    .exp{
      font-size: 12px;
    }
  }
`;
export default App;
