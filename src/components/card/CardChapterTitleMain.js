import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  ${props => props.theme.layout.flexColCenter}
  width: 100%;
  height: 720px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  color: #fff;
  /* filter:  ${props => props.isFilter ? `grayscale(0.6) brightness(50%)` :  `grayscale(0.32) brightness(60%)`}; */
  *{
    z-index: 9;
  }
  :after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.isFilter ? 'rgba(0,18,10,0.10)' : 'rgba(0,0,0,0)'};
    z-index: 0;
  }
`;

const Chapter = styled.div`
  ${props => props.theme.type.weight.exp.regular};
  ${props => props.theme.type.size.title4};
`;

const Title = styled.div`
  ${props => props.theme.type.weight.exp.bold};
  ${props => props.theme.type.size.title1};
`;
const SubTitle = styled.div`
  ${props => props.theme.type.weight.prd.regular};
  ${props => props.theme.type.size.body2};
`;

const CardChapterTitleMain = ({
    img,
    title,
    subtitle,
    num,
    to
  }) => {
    return (
      <Container
        img={img}
        isFilter={true}
      >
        <Chapter>
          {`CHAPTER${num}`}
        </Chapter>
        <Title>
          {title}
        </Title>
        <SubTitle>
          {subtitle}
        </SubTitle>
      </Container>
    )
  }

  export default CardChapterTitleMain;