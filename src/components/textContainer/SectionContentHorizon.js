import React from 'react';
import styled from "styled-components";

const TextContent = styled.div`
  width: 100%;
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
    ${props => props.theme.type.size.body2}
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
    ${props => props.theme.type.size.title}
    ${props => props.theme.type.weight.prd.num}
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