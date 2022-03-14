import React from 'react';
import styled from "styled-components";

const TextContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 148px;
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
    ${props => props.theme.type.weight.prd.regular}
    word-break: break-all;
    position: absolute;
    top: 240px;
    ${
      props => props.isLeft?`left: 0`:`right: 0`
    };
    padding-left: 16px;
    :before{
      position: absolute;
      content: '';
      top: 6px;
      left: 0px;
      width: 3px;
      height: calc(100% - 10px);
      background-color: ${props => props.theme.color.brand.epGreen};
    }
  }
  @media only screen and (max-width: 480px) {
    padding-left: 0px;
    flex-direction: column;
    padding-top: 96px;
    p{
      top: unset;
      width: 100%;
      height: fit-content;
      padding:0;
      padding-left: 16px;
      bottom: 32px;
    }
  }
`;

const SectionTitle = styled.div`
  width: 640px;
  /* display: flex; */
  /* margin-bottom: 72px; */
  h1{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
  }
  h2{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
    width: calc(640px - 80px);
    margin-top: -8px;
  }
  @media only screen and (max-width: 480px) {
    h2{
      width: calc(100% - 156px);
    }
  }
`;


const SectionContainerHorizon = ({
  title,
  exp,
  index,
  isContentFit,
  isLeft
}) => {
  return (
    <TextContent
      index={index}
      isContentFit={isContentFit}
      isLeft={isLeft}
    >
      <SectionTitle>
        {/* <h1>
          {index + 1}
        </h1> */}
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