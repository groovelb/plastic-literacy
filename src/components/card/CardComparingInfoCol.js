import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import ViewportWrapper from '../ViewportWrapper';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BG = styled.div`
  width: 200px;
  height: 240px;
  position: absolute;
  bottom: 24px;
  left: 120px;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
`;

const Img = styled.div`
  width: 100%;
`;

const ImgBg = styled.img`
  height: 7px !important;
  width: auto;
  opacity: ${props => props.isTrigger?0.25:0};
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.isTrigger ? props.left : props.left0};
  transition: top 0.2s ease-in-out, left 0.3s cubic-bezier(.75,-0.5,0,1.75), opacity 0.2s;
  transition-delay: ${props => `${props.delay + props.index*0.03}s`};
`;

const Text = styled.div`
  width: 100%;
`;

const Number = styled.p`
  ${props => props.theme.color.brand.white700};
  ${props => props.theme.type.size.h2};
  ${props => props.theme.type.weight.prd.black};
`;

const Title = styled.p`
  ${props => props.theme.color.brand.white700};
  ${props => props.theme.type.size.body2};
  ${props => props.theme.type.weight.prd.black};
  span{
    color: ${props => props.theme.color.brand.epPurple} !important;
  }
`;


const bgNum = 25;
let array = [];

for (let i = 0; i < bgNum; i++) {
  let temp = {
    x: i % 5,
    y: parseInt(i / 5)
  }
  array.push(temp);
}


const CardComparingInfo = ({
  num,
  title,
  unit,
  img,
  isTrigger,
  delay,
}) => {

  return (
    <Container>
      <BG>
        {
          array.map((item, index) =>
            <ImgBg
              src={img}
              alt=''
              isTrigger={isTrigger}
              top={`calc(${item.y * 100/6}% + 24px)`}
              left={`calc(${item.x * 100/5}% - ${index*(1%3)}px)`}
              left0={`calc(${item.x * 100/5}% - ${index*(1%3)}px - 75%)`}
              index={index}
              delay={delay}
            />
          )
        }
      </BG>
      <Content>
        <Text>
          <Number>
            {`✕ ${num}`}
          </Number>
          <Title>
            {title}<br />
            <span>{unit}</span>
          </Title>
        </Text>
        <Img>
          <img src={img} alt='' />
        </Img>
      </Content>
    </Container>
  );
}

export default CardComparingInfo;