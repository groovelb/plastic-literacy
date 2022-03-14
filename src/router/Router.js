import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Div100vh from 'react-div-100vh'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Main from '../page/MainVer2';
import GNB from '../components/navigation/GNBVer2';
import Title from '../chapter/TitleVer4';
import Chapter1 from '../chapter/Chapter1FullPageVer2';
import Chapter2Ver2 from '../chapter/Chapter2FullPage';
import Chapter3Ver2 from '../chapter/Chapter3FullPage';
import FullPageTest from '../page/FullPageTest';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${props => props.themeType === 'light' ?
    props.theme.color.ui.bg.light :
    props.theme.color.ui.bg.dark
  };
`;
export default ({
  triggerFull,
  isFull
}) => {
  const [themeType, setThemeType] = useState('light');

  return (

      <Router>
        <GNB
          themeType={themeType}
          setThemeType={setThemeType}
        />
        <Background themeType={themeType} />
        <Routes>
          <Route
            path="/old"
            exactelement={<Main setThemeType={setThemeType} />}
          />
          <Route
            path="/"
            exact element={
              <Title
                triggerFull={triggerFull}
                isFull={isFull}
                currentChapter={0}
                setThemeType={setThemeType}
                themeType={themeType}
              />}
          />
          <Route
            path="/chapter1"
            exact element={
              <Chapter1
                triggerFull={triggerFull}
                isFull={isFull}
                currentChapter={1}
                setThemeType={setThemeType}
                themeType={themeType}
              />}
          />
          <Route
            path="/chapter2"
            exact element={
              <Chapter2Ver2
                triggerFull={triggerFull}
                isFull={isFull}
                currentChapter={2}
                setThemeType={setThemeType}
                themeType={themeType}
              />}
          />
          <Route
            path="/chapter3"
            exact element={
              <Chapter3Ver2
                triggerFull={triggerFull}
                isFull={isFull}
                currentChapter={3}
                setThemeType={setThemeType}
                themeType={themeType}
              />} />
          <Route
            path="/test"
            exect element={
              <FullPageTest/>
            }
          />
        </Routes>
      </Router>
  )
};