import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import Section from "../components/layout/Section";
import illust_title from "../assets/illust/illust_title.svg";
import circle_product from "../assets/illust/title/circle_product.svg";
import circle_waste from "../assets/illust/title/circle_waste.svg";
import circle_part from "../assets/illust/title/circle_part.svg";
import circle_flake from "../assets/illust/title/circle_flake.svg";
import ic_production from "../assets/illust/title/ic_production.svg";
import ic_dispose from "../assets/illust/title/ic_dispose.svg";
import ic_collect from "../assets/illust/title/ic_collect.svg";
import ic_recycling from "../assets/illust/title/ic_recycling.svg";
import logo_gs from "../assets/img/logo/logo_gscaltex.png";

const Container = styled(Section)`
  height: ${props => props.innerHeight + 'px'};
  width: 100%;
  ${props => props.theme.layout.flexColCenter}
  position: relative;
`;

const TitleMsg = styled.p`
  ${props => props.theme.type.weight.exp.bold};
  ${props => props.theme.type.size.title};
  margin-bottom: 24px;
  text-align: center;
  color: #fff;
  margin: 92px 0 24px;
`;

const SubTitleMsg = styled.p`
  width: 560px;
  text-align: center;
  word-break: keep-all;
  ${props => props.theme.type.weight.prd.light};
  ${props => props.theme.type.size.title2};
  color: #fff;
  margin-bottom: 64px;
`;

const IllustContainer = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.theme.layout.flexColCenter}
`;

const Illust = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  top: calc((100% - 800px)/2);
  left: calc((100% - 800px)/2);
`;
const Rotate = keyframes`
  from {
    transform: rotate( 0deg );
  }
  to {
    transform: rotate( 360deg );
  }
`;

const Node = styled.div`
  width: 108px;
  height: 108px;
  position: absolute;
  top: ${props => `${props.y}px`};
  left: ${props => `${props.x}px`};
  transform-origin: center center;
`;

const Circle = styled.div`
    width: 420px;
    height: 400px;
    overflow: hidden;
    position: absolute;
    top: ${props => `${props.y}px`};
    left: ${props => `${props.x}px`};
    img{
      width: 800px;
      height: 800px;
      position: absolute;
      top: ${props => `-${props.y}px`};
      left: ${props => `-${props.x}px`};
      animation: ${Rotate} 280s linear infinite;
    }
`;

const Logo = styled.div`
  ${props => props.theme.type.weight.prd.light};
  ${props => props.theme.type.size.caption};
  ${props => props.theme.layout.flexColCenter}
  color: #fff;
  img{
    width: 148px;
    height: auto;
  }
`;



const Title = ({
  refObject
}) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  const circleList = [
    {
      x: 1,
      y: 0,
      img: circle_product
    },
    {
      x: 1,
      y: 1,
      img: circle_waste
    },
    {
      x: 0,
      y: 1,
      img: circle_part
    },
    {
      x: 0,
      y: 0,
      img: circle_flake
    },
  ];

  const nodeList = [
    {
      x: 400 - 54,
      y: -16,
      img: ic_production
    },
    {
      x: 800 - 54 - 32,
      y: 400 - 54,
      img: ic_dispose
    },
    {
      x: 400 - 54,
      y: 800 - 54 - 40,
      img: ic_collect
    },
    {
      x: -24,
      y: 400 - 54,
      img: ic_production
    }
  ];

  useEffect(() => {
    console.log(window.innerHeight);
    setInnerHeight(window.innerHeight);
  }, [window]);

  return (
    <Container
      refObject={refObject}
      innerHeight={innerHeight}
    >
      <IllustContainer>
        <Illust>
          {
            circleList.map((circle) =>
              <Circle
                x={circle.x * 400}
                y={circle.y * 400}
              >
                <img src={circle.img} alt='' />
              </Circle>
            )
          }
          {
            nodeList.map((node) =>
              <Node
                x={node.x}
                y={node.y}
              >
                <img src={node.img} />
              </Node>
            )
          }
        </Illust>
        <TitleMsg>
          Plastic Literacy
      </TitleMsg>
        <SubTitleMsg>
          플라스틱의 올바른 수거와 재활용에 대한 이해가 필요한 시대, GS칼텍스가 먼저 묻고 답하다.
      </SubTitleMsg>
        <Logo>
          with <br />
          <img src={logo_gs} alt='' />
        </Logo>
      </IllustContainer>
    </Container>
  )
}

export default Title;