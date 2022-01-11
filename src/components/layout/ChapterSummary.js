import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import LiveArea from './LiveArea';
import SectionTitle from '../textContainer/SectionTitle';
import Grid from './Grid';
import CardChapterSection from '../card/CardChapterSection';

const SectionList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;  

const ChapterSummary = ({
  title,
  exp,
  sectionList,
  themeType,
  setCurrentPage,
  page
}) => {
  return (
    <LiveArea>
      <SectionTitle
        title={title}
        exp={exp}
        themeType={themeType}
      />
      <SectionList>
        {
          sectionList.map((section,index) => 
            <Grid
              colPC={2}
              colMb={2}
              length={5}
              spacing={24}
              index={index}
            >
              <CardChapterSection
                onClick={() => {
                  setCurrentPage(section.page)
                }}
                themeType={themeType}
                num={index+1}
                exp={section.title}
              />
            </Grid>
          )
        }
      </SectionList>
    </LiveArea>
  )
}

export default ChapterSummary;