import React, { useEffect, useState, useRef } from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import Section from "../components/layout/Section";
import ReactPageScroller from 'react-page-scroller';

import SiteTitle from '../components/layout/SiteTitleVer2';
import ChapterTitleLink from '../components/layout/ChapterTitleLink';
import SectionTitle from '../components/textContainer/SectionTitle';
import LiveArea from '../components/layout/LiveArea';
import Page from '../components/layout/Page';

import bg_title from '../assets/img/bg/chapter/bg_title1_ver2.png';
import bg_c1 from '../assets/img/bg/img_bg_c1.jpg';
import bg_c2 from '../assets/img/bg/img_bg_c2.jpg';
// import bg_c1 from '../assets/img/bg/chapter/bg_chapter1_ver2.png';
// import bg_c2 from '../assets/img/bg/chapter/bg_chapter2_ver2.png';
import bg_c3 from '../assets/img/bg/chapter/bg_chapter3_ver2.png';
import illust_cycle_main from '../assets/illust/title/illust_cycle_main.png';


const Container = styled(Section)`
  height: ${props => props.innerHeight + 'px'};
  width: 100%;
  ${props => props.theme.layout.flexColCenter}
  position: relative;
  z-index: 999;
  padding-top: 160px;
  @media only screen and (max-width: 480px) {
    height: ${`${window.innerHeight}px`};
  }
`;

const Row3 = styled.div`
  width: 100%;
  transition: height 0.6s ease-out;
  height: ${props=>props.isNotSelected?'calc(100%/4)':'calc(100%/3)'};
  :hover{
    height: calc(100%/2);
  }
`;

// const Page = styled.div`
//   padding-top: 120px;
//   height: 100%;
//   display: flex;
//   align-items: center;
// `;

const IllustCycle = styled.img`
  width: 1200px;
  height: auto;
`;

const Title = ({
  setThemeType
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRow,setSelectedRow] = useState(0);
  const { t } = useTranslation();

  const handlePageChange = (number) => {
    console.log(number);
    setCurrentPage(number);
    if (number === 0) {
      setThemeType('light');
    }
    if (number === 1) {
      setThemeType('dark');
    }
  }

  const handleBeforeChange = (number) => {
    if (number === 0) {
      setThemeType('light');
    }
    if (number === 1) {
      setThemeType('dark');
    }
  }

  return (
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        // onBeforePageScroll={handleBeforeChange}
        animationTimer={750}
        transitionTimingFunction={'ease-in-out'}
        customPageNumber={currentPage}
      >
        <Page>
          <SiteTitle
            img={bg_title}
            onClick={() => {
              setCurrentPage(1);
            }}
          />
        </Page>
        <Page>
          <LiveArea>
            <SectionTitle
              title={t('title-s1-title')}
              exp={t('title-s1-exp')}
            />
            <IllustCycle src={illust_cycle_main} alt='' />
          </LiveArea>
        </Page>
        <Page>
          <LiveArea className={'content'}>
            <Row3
              onMouseOver={() => {setSelectedRow(1)}}
              onMouseLeave={() => {setSelectedRow(0)}}
              isNotSelected={selectedRow!==0&selectedRow!==1}
            >
              <ChapterTitleLink
                title={'플라스틱 딜레마'}
                num={1}
                img={bg_c1}
                to={'/chapter1'}
                exp={t('c1-subtitle')}
              />
            </Row3>
            <Row3
              onMouseOver={() => {setSelectedRow(2)}}
              onMouseLeave={() => {setSelectedRow(0)}}
              isNotSelected={selectedRow!==0&selectedRow!==2}
            >
              <ChapterTitleLink
                title={'플라스틱의 여정'}
                num={2}
                img={bg_c2}
                to={'/chapter2'}
                exp={t('c2-subtitle')}
              />
            </Row3>
            <Row3
              onMouseOver={() => {setSelectedRow(3)}}
              onMouseLeave={() => {setSelectedRow(0)}}
              isNotSelected={selectedRow!==0&selectedRow!==3}
            >
              <ChapterTitleLink
                title={'플라스틱 리터러시'}
                num={3}
                img={bg_c3}
                to={'/chapter3'}
                exp={t('c3-subtitle')}
              />
            </Row3>
          </LiveArea>
        </Page>
      </ReactPageScroller>
    </>
  )
}

export default Title;