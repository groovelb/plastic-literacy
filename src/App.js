import logo from './logo.svg';
import './App.css';
import './translate/I18nSetting';
import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { isMobile } from 'react-device-detect';
import theme from "./assets/theme/theme";
import styled from 'styled-components';

// Chapter
import MainVer2 from "./page/MainVer2";
import Title from "./chapter/Title";
import Chapter1 from "./chapter/Chapter1";
import Chapter2Land from "./chapter/Chapter2Land";
import Chapter2Ocean from "./chapter/Chapter2Ocean";
import Chapter3 from "./chapter/Chapter3";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainVer2 />
    </ThemeProvider>
  );
}
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    
  }
  body{
    background-color: ${(props) => props.theme.color.ui.bg.dark};
    color: #fff;
  } 
  p{
    margin: 0px;
  }
  .node rect {
    fill-opacity: 1;
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
  .stage_title{
    font-weight: bold;
    font-size: 20px;
    fill: #fff;
    opacity: 0.5;
  }
  .node_box{
    
  }
  .node_title{
    font-weight: bold;
    font-size: 14px;
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
    fill: ${props => props.theme.color.brand.epGreen};
  }
  .stroke-opacity{
    transition: opacity 1s ease-in-out;
  }
  .tick{
    font-size: 14.8px;
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
`;
export default App;
