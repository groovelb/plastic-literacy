import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import PlasticCirculation from "../chart/title/PlasticCirculation";
import PlasticCirculationC3 from "../chart/title/PlasticCirculationC3";
import { isMobile } from 'react-device-detect';
import ic_production from "../assets/illust/title/ic_ep_produce.svg";
import ic_dispose from "../assets/illust/title/ic_ep_dispose.svg";
import ic_collect from "../assets/illust/title/ic_ep_collect.svg";
import ic_recycling from "../assets/illust/title/ic_ep_recycle.svg";

const circleSize = {
  width: isMobile ? window.innerWidth : 900,
  height: isMobile ? window.innerWidth : 900,
  margin: isMobile ? 0 : 20
};

const nodeSize = {
  width: isMobile ? 54 : 108,
  height: isMobile ? 54 : 108,
  margin: isMobile ? 0 : 20
};

const Illust = styled.div`
  position: absolute;
  width: ${`${circleSize.width}px`};
  height: ${`${circleSize.height}px`};
  top: ${`calc((100% - ${circleSize.height}px)/2)`};
  left: ${`calc((100% - ${circleSize.width}px)/2)`};
  @media only screen and (max-width: 480px) {
    padding-top: 20px;
    width: 100%;
    height: auto;
    top: ${`${circleSize.margin}px`};
    left: 0%;
  }
`;

const NodeContainer = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 480px) {
    position: absolute;
    top: 20px;
    left: 0;
    padding-top: 20px;
    height: auto;
  }
`;

const Node = styled.div`
  width: ${nodeSize.width + 'px'};
  height:  ${nodeSize.height + 'px'};
  position: absolute;
  top: ${props => `${props.y}px`};
  left: ${props => `${props.x}px`};
  transform-origin: center center;
  img{
    width: 80%;
    height: 80%;
  }
`;

const NodeCircle = styled.div`
  width: ${nodeSize.width + 'px'};
  height:  ${nodeSize.height + 'px'};
  background-color: ${props => props.theme.color.ui.bg.dark};
  ${props => props.theme.layout.flexColCenter}
  border-radius: 50%;
  img{
    width: 80%;
    height: 80%;
  }
`;

const nodeList = [
  {
    x: circleSize.width / 2 - nodeSize.width / 2,
    y: nodeSize.margin,
    img: ic_production
  },
  {
    x: circleSize.width - nodeSize.width - nodeSize.margin,
    y: circleSize.height / 2 - nodeSize.height / 2,
    img: ic_dispose
  },
  {
    x: circleSize.width / 2 - nodeSize.width / 2,
    y: circleSize.height - nodeSize.height - nodeSize.margin,
    img: ic_collect
  },
  {
    x: nodeSize.margin,
    y: circleSize.height / 2 - nodeSize.height / 2,
    img: ic_recycling
  }
];


const PlasticLiteracy = ({
  currentChapter,
  starChatper,
  id
}) => {
  return (
    <Illust>
      {
        currentChapter === 0 &&
        <PlasticCirculation
          currentChapter={currentChapter}
          starChatper={starChatper}
          id={id}
        />
      }
      {
        currentChapter === 3 &&
        <PlasticCirculationC3
          currentChapter={currentChapter}
          starChatper={starChatper}
          id={id}
        />
      }

      <NodeContainer>
        {
          nodeList.map((node, i) =>
            <Node
              x={node.x}
              y={node.y}
            >
              <NodeCircle>
                <img src={node.img} />
              </NodeCircle>
            </Node>
          )
        }
      </NodeContainer>
    </Illust>
  )
}

export default PlasticLiteracy;