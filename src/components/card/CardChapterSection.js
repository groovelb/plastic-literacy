import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  height: ${props => props.length<6?'164px':'124px'};
  cursor: pointer;
  background-color: ${props => props.themeType === 'light' ?
    props.theme.color.brand.darkNavy : props.theme.color.brand.epPurple
  };
  color: ${props => props.themeType === 'light' ?
    props.theme.color.brand.epGreen : props.theme.color.brand.darkNavy
  };
  :hover{
    color: ${props => props.theme.color.brand.darkNavy};
    background-color: ${props => props.theme.color.brand.epGreen};
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: color 0.3s, background-color 0.3s;
  @media only screen and (max-width: 480px) {
    padding: 8px;
    height: 116px !important;
  }
`;

const Num = styled.div`
  font-size: 44px;
  ${props => props.theme.type.weight.prd.black}
  @media only screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const Exp = styled.div`
  font-size: 18px;
  ${props => props.theme.type.weight.prd.bold}
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const CardChapterSection = ({ 
  themeType,
  num,
  exp,
  onClick,
  length
 }) => {
  return (
    <Container
      themeType={themeType}
      onClick={onClick}
      length={length}
    >
      <Num>
        {num}
      </Num>
      <Exp>
        {exp}
      </Exp>
    </Container>
  )
}

export default CardChapterSection;