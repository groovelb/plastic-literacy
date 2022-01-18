import React from 'react';
import styled from "styled-components";

const TextContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 180px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  /* padding-top: 240px; */
  /* opacity: ${props => props.currentSection === props.index ? 1 : 0}; */
  transition: opacity 0.3s ease-out;
  word-break: keep-all;
  white-space: pre-line;
  margin-bottom: ${props => props.isContentFit?'80px':'0px'};
  p{
    width: calc(100% - 480px - 48px);
    /* padding-left: 48px; */
    /* width: 100%; */
    /* padding-right: 120px; */
    ${props => props.theme.type.size.body1}
    ${props => props.theme.type.weight.prd.bold}
    word-break: break-all;
    margin-top: -8px;
    position: absolute;
    bottom: 96px;
    right: 0;
  }
  @media only screen and (max-width: 480px) {
    padding-left: 0px;
    flex-direction: column;
    padding-top: 80px;
    p{
      width: 100%;
      padding:0;
      bottom: 24px;
    }
  }
`;

const SectionTitle = styled.div`
  width: 480px;
  /* display: flex; */
  /* margin-bottom: 72px; */
  h1{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
  }
  h2{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
    width: calc(480px - 80px);
    margin-top: -8px;
  }
  @media only screen and (max-width: 480px) {
    h2{
      width: calc(100% - 120px);
    }
  }
`;


const SectionContainerHorizon = ({
  title,
  exp,
  index,
  isContentFit
}) => {
  return (
    <TextContent
      index={index}
      isContentFit={isContentFit}
    >
      <SectionTitle>
        <h1>
          {index + 1}
        </h1>
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

export default SectionContainerHorizon