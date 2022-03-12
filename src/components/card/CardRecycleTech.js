import React, { useState } from 'react';
import styled from "styled-components";
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  height: 480px;
  color: ${props => props.theme.color.ui.strong};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: auto !important;
    padding: 12px 16px;
  }
`;

const Top = styled.div`
  width: 100%;
  h2{
    ${props => props.theme.type.size.h1}
    ${props => props.theme.type.weight.prd.regular}
    color: ${props => props.theme.color.brand.epGreen};
    white-space: break-spaces;
    line-height: 1.15;
    @media only screen and (max-width: 480px) {
      ${props => props.theme.type.size.title2}
      display: flex;
      align-items: center;
      white-space: normal;
      margin-bottom:16px;
      /* font-size: 22px; */
      line-height: 1.15;
      margin-bottom: 8px;
      img{
        width: 40px;
        height: 40px;
        margin-right: 4px;
      }
    }
    margin: 0;
  }
  h2::first-letter {
    ${props => props.theme.type.weight.prd.black}
  }
  p{
    margin-top: 36px;
    ${props => props.theme.type.size.body2}
    ${props => props.theme.type.weight.prd.bold}
    white-space: break-spaces;
    @media only screen and (max-width: 480px) {
      white-space: normal;
      margin-top: 12px;
    }
  }
`;

const Exp = styled.p`
  ${props => props.theme.type.size.body1}
  ${props => props.theme.type.weight.prd.bold}
`;

const Bottom = styled.div`
  padding-top: 20px;
  border-top: solid 1px ${props => props.theme.color.ui.low};
  /* height: 172px; */
  width: 100%;
  ${props => props.theme.type.size.body2}
  .title{
    display: flex;
    align-items: center;
    width: 100% !important;
    word-break: keep-all;
    /* margin-bottom: 24px; */
    white-space: break-spaces;
    ${props => props.theme.type.weight.prd.bold}
    .img{
      width: 64px;
      height: 64px;
      margin-right: 8px;
      ${props => props.theme.layout.flexColCenter}
      img{
        width: 56px;
        height: 56px;
      }
    }
    p{
      width: calc(100% - 64px);
      ${props => props.theme.type.weight.prd.bold}
    }
  }
  @media only screen and (max-width: 480px) {
      display: none;
    }
`;

const CardRecycleTech = ({
  titleTop,
  titleBottom,
  exp,
  img,
  title2,
  exp2
}) => {

  const [isPlay, setIsPlay] = useState(false);
  return (
    <Container
    >
      <Top>
        <h2>
          {isMobile && <img src={img} alt='' />}
          {titleTop}
        </h2>
        <h2>
          {titleBottom}
        </h2>
        <p>
          {exp}
        </p>
      </Top>
      <Bottom>
        <div className="title">
          <div className='img'>
            <img src={img} alt='' />
          </div>
          {title2}
        </div>
        {/* <p>{exp2}</p> */}
      </Bottom>
    </Container>
  )
}

export default CardRecycleTech;