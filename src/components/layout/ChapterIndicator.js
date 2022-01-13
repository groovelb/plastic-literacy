import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import LiveArea from './LiveArea';
import SectionTitle from '../textContainer/SectionTitle';
import Grid from './Grid';
import CardChapterSection from '../card/CardChapterSection';

const Container = styled.div`
  width: 64px;
  height: calc(100% - 120px);
  position: fixed;
  ${props => props.theme.layout.flexColCenter}
  top: 120px;
  right: ${props => props.isTrigger ? '8px' : '-100%'};
  z-index: 999;
  :hover{
    width: 144px;
  }
  transition: all 0.4s ease-in-out;
`;

const Section = styled.div`
  width: 100%;
  position: relative;
  height: ${props => props.height};
  opacity: ${props => props.isCurrent ? '1' : '0.3'};
  border-top: solid 0.5px ${props => props.theme.color.brand.secondary600};
  /* ${props => props.theme.layout.flexColCenter} */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  transition: all 0.2s ease-in-out;
  :hover{
    opacity: 1;
  }
  cursor: pointer;
  .section_title{
    position: absolute;
    top:50%;
    left:0;
    width: 144px;
    opacity: 0;
    transition: all 1s ease-in-out;
    text-align: center;
  }
  :hover{
    .section_title{
      opacity: 1;
    }
  }
`;

const Title = styled.p`
  ${props => props.theme.type.size.body1}
  ${props => props.theme.type.weight.prd.black}
  span{
    ${props => props.theme.type.size.caption}
    ${props => props.theme.type.weight.prd.bold}
  }
`;

const ChapterSummary = ({
  title,
  exp,
  sectionList,
  themeType,
  setCurrentPage,
  isTrigger,
  currentPage
}) => {
  return (
    <Container
      isTrigger={isTrigger}
    >
      {
        sectionList.map((section, index, arr) =>
          <Section
            isCurrent={currentPage - 2 === index}
            height={`calc(100%/${arr.length})`}
            onClick={() => {
              setCurrentPage(section.page);
            }}
          >
            <Title>
              {index + 1} <br />
              <span className='section_title'>
                {section.title}
              </span>
            </Title>
          </Section>
        )
      }
    </Container>
  )
}

export default ChapterSummary;