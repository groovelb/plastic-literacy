import React from 'react';
import styled from "styled-components";
import LiveArea from '../layout/LiveArea';

const Container = styled(LiveArea)`
  /* width: 100%; */
  display: flex;
  justify-content: ${props => props.index === 0 ? 'flex-end' : 'flex-start'};
`;

const TextContent = styled.div`
  width: 448px;
  display: flex;
  position: absolute;
  left: ${props => props.left};
  top: 680px;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  /* padding-top: 240px; */
  /* opacity: ${props => props.currentSection === props.index ? 1 : 0}; */
  transition: opacity 0.3s ease-out;
  word-break: keep-all;
  white-space: pre-line;
  margin-bottom: ${props => props.isContentFit ? '80px' : '0px'};
  color: ${props => props.themeType==='light'?props.theme.color.ui.strong:props.theme.color.brand.epGreen};
  p{
    width: calc(100%);
    /* padding-left: 48px; */
    /* width: 100%; */
    /* padding-right: 120px; */
    ${props => props.theme.type.size.body1}
    ${props => props.theme.type.weight.prd.regular}
    word-break: break-all;
    margin-top: -8px;
  }
  @media only screen and (max-width: 480px) {
    padding-left: 0px;
    flex-direction: column;
    p{
      width: 100%;
      padding:0;
     
    }
  }
`;

const SectionTitle = styled.div`
  width: 480px;
  display: flex;
  /* margin-bottom: 72px; */
  h1{
    ${props => props.theme.type.size.title3}
    ${props => props.theme.type.weight.prd.black}
    margin-right: 16px;
    width: 80px;
    height: 80px;
    ${props => props.theme.layout.flexColCenter};
    color: ${props => props.theme.color.brand.epGreen};
    border: 0.5px solid ${props => props.theme.color.brand.epGreen};
    /* background-color: ${props => props.theme.color.brand.epDeepPurple}; */
    /* margin-top: -4px; */
  }
  h2{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
    width: calc(480px - 80px);
    margin-top: -8px;
    margin-bottom:8px;
  }
`;


const SectionContentVertical = ({
  title,
  exp,
  index,
  isContentFit,
  left,
  themeType
}) => {
  return (

      <TextContent
        index={index}
        isContentFit={isContentFit}
        left={left}
        themeType={themeType}
      >
        <SectionTitle>
          <h2>
            {title}
          </h2>
        </SectionTitle>
        <p>
          {exp}
        </p>
      </TextContent>
  )
}

export default SectionContentVertical