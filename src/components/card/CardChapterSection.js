import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  height: 164px;
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
`;

const Num = styled.div`
  font-size: 44px;
  ${props => props.theme.type.weight.prd.black}
`;

const Exp = styled.div`
  font-size: 18px;
  ${props => props.theme.type.weight.prd.bold}
`;

const CardChapterSection = ({ 
  themeType,
  num,
  exp,
  onClick
 }) => {
  return (
    <Container
      themeType={themeType}
      onClick={onClick}
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