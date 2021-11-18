import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import ChapterTitle from "../components/layout/ChapterTitle";
import useWindowSize from '../hook/useWindowSize';
import Section from "../components/layout/Section";
import LiveArea from "../components/layout/LiveArea";
import circle_product from "../assets/illust/title/circle_product.svg";
import circle_waste from "../assets/illust/title/circle_waste.svg";
import circle_part from "../assets/illust/title/circle_part.svg";
import circle_flake from "../assets/illust/title/circle_flake.svg";
import ic_production from "../assets/illust/title/ic_production.svg";
import ic_dispose from "../assets/illust/title/ic_dispose.svg";
import ic_collect from "../assets/illust/title/ic_collect.svg";
import color from "../assets/theme/atom/color";


const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
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
  ${props => props.theme.layout.flexColCenter};
`;
const Rotate = keyframes`
  from {
    transform: rotate( 0deg );
  }
  to {
    transform: rotate( 360deg );
  }
`;

const TitleCenter = styled.div`
  ${props => props.theme.type.size.h1};
  ${props => props.theme.type.weight.prd.bold};
  margin-bottom: 64px;
  text-align: center;
`;

const Text = styled.div`
  ${props => props.theme.type.size.body1};
  ${props => props.theme.type.weight.prd.regular};
  margin: 48px auto;
  width: 820px;
  word-break: keep-all;
  white-space: pre-line;
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

const Cycle = styled.div`
  width: 308px;
  height: 308px;
  border-radius: 50%;
  color: #fff;
  background-color: ${props => props.bgColor};
  ${props => props.theme.layout.flexColCenter};
  ${props => props.theme.type.size.title1};
  ${props => props.theme.type.weight.prd.bold};
  text-align: center;
  word-break: keep-all;
  white-space: pre-line;
`;

const Msg = styled.div`
  text-align: center;
  ${props => props.theme.type.size.title}
  ${props => props.theme.type.weight.exp.bold}
  color: ${props => props.theme.color.brand.epGreen};
`;

const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* padding-top: 240px; */
  /* padding-left: 64px; */
  /* opacity: ${props => props.currentSection === props.index ? 1 : 0}; */
  transition: opacity 0.3s ease-out;
  word-break: keep-all;
  white-space: pre-line;
  margin-bottom: 48px;
  h2{
    ${props => props.theme.type.size.title1}
    ${props => props.theme.type.weight.prd.bold}
    margin-bottom: 48px;
    width: 360px;
  }
  p{
    width: calc(100% - 240px - 48px - 120px);
    padding-left: 0;
    ${props => props.theme.type.size.body2}
		${props => props.theme.type.weight.prd.regular}
  }
`;


const ReyclingList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Chapter3 = ({
  currentChapter,
  chapterObject,
  currentSection,
}) => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();

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

  const recycleMethods = [
    {
      name: 'Chemical\nRecycling',
      color: color.brand.orange
    },
    {
      name: 'Mechanical\nRecycling',
      color: color.brand.emerald
    },
    {
      name: 'Thermal\nRecycling',
      color: color.brand.blue
    },
  ];

  return (
    <Container ref={chapterObject.ref}>

      <ChapterTitle
        numChapter={3}
        title={t("c3-title")}
        subTitle={t("c3-subtitle")}
        bgColor={'dark'}
        exp={t("c3-exp")}
      />
      <Section>
        <LiveArea>
          <TitleCenter>
            {t('c3-s1-title')}
          </TitleCenter>
          <Wrapper>
            <IllustContainer>
              <Illust>
                <Msg>
                  CIRCULATION<br />
                OF PLASTIC
              </Msg>
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
            </IllustContainer>
          </Wrapper>
          <Text>
            {t('c3-s1-exp')}
          </Text>
        </LiveArea>
      </Section>
      <Section>
        <LiveArea>
          <TextContent>
            <h2>
              {t('c3-s2-title')}
            </h2>
            <p>
              {t('c3-s2-exp')}
            </p>
          </TextContent>
          <ReyclingList>
            {
              recycleMethods.map((method) =>
                <Cycle
                  bgColor={method.color}
                >
                  {method.name}
                </Cycle>
              )
            }
          </ReyclingList>
        </LiveArea>
      </Section>
    </Container>
  )
}

export default Chapter3;