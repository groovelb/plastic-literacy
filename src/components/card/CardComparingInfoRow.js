import React from 'react';
import styled, { keyframes } from "styled-components";
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    height: auto;
    padding: 8px 0;
    margin: 24px 0px;
  }
`;

const BG = styled.div`
  width: 200px;
  height: 240px;
  position: absolute;
  bottom: 24px;
  right: 0;
  z-index: -1;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 120px;
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const Img = styled.div`
  width: 76px;
  @media only screen and (max-width: 480px) {
    width: 76px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: auto;
      height: 120px;
    }
  }
`;

const ImgBg = styled.img`
  width: auto;
  height: 48px !important;
  opacity: ${props => props.isTrigger ? 0.25 : 0};
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.isTrigger ? props.left : props.left0};
  transition: top 0.2s ease-in-out, left 0.3s cubic-bezier(.75,-0.5,0,1.75), opacity 0.2s;
  transition-delay: ${props => `${props.delay + props.index * 0.03}s`};
  @media only screen and (max-width: 480px) {
    height: 24px !important;
    width: auto;
  }
`;

const Text = styled.div`
  width: calc(100% - 76px);
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

const bgNum = 20;
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
  delay
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
              top={`calc(${item.y * 100 / 5}%)`}
              left={`calc(${item.x * 100 / 5}% - ${index * (12 % 5)}px)`}
              left0={`calc(${item.x * 100 / 5}% - ${index * (12 % 5)}px - 75%)`}
              index={index}
              delay={delay}
            />
          )
        }
      </BG>
      <Content>
        <Img>
          <img src={img} alt='' />
        </Img>
        <Text>
        <Number>
            {`✕`}
            {isMobile&&<br/>}
            {num}
          </Number>
          <Title>
            {title}<br />
            <span>{unit}</span>
          </Title>
        </Text>
      </Content>
    </Container>
  );
}

export default CardComparingInfo;