import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  useLocation
} from 'react-router-dom';

import Main from '../page/MainVer2';
import GNB from '../components/navigation/GNB';
import Title from '../chapter/TitleVer3';

export default () => (
  <Router>
    <GNB />
    <Routes>
      <Route path="/old" exact element={<Main />} />
      <Route path="/" exact element={<Title currentChapter={0}/>} />
    </Routes>
  </Router>
);