import React, { useEffect, useState, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import styled from "styled-components";
import * as d3 from 'd3';
import { cyclePathData2 } from '../../data/cyclePathData';
import { useAnimationFrameLoop } from "react-timing-hooks";
import color from '../../assets/theme/atom/color';
import ic_arrow from "../../assets/icon/arrow_cycle.svg";
import logo_gs from "../../assets/img/logo/logo_gs_black.svg";

// import path1 from "../../assets/path/path_mr_cycle1.svg";
// import path2 from "../../assets/path/path_mr_cycle2.svg";
// import path3 from "../../assets/path/path_mr_cycle3.svg";
// import path4 from "../../assets/path/path_mr_cycle4.svg";
// import path5 from "../../assets/path/path_mr_cycle5.svg";
// import path6 from "../../assets/path/path_mr_cycle6.svg";
// import path7 from "../../assets/path/path_mr_cycle7.svg";

import illust_washing from "../../assets/illust/title/product_washing.svg";
import illust_car from "../../assets/illust/title/product_car.svg";
import illust_product1 from "../../assets/illust/title/product_simple_1.svg";
import illust_product2 from "../../assets/illust/title/product_simple_2.svg";
import illust_product3 from "../../assets/illust/title/product_simple_3.svg";
import illust_pressed1 from "../../assets/illust/title/pressed_simple_1.svg";
import illust_pressed2 from "../../assets/illust/title/pressed_simple_2.svg";
import illust_pressed3 from "../../assets/illust/title/pressed_simple_3.svg";
import illust_crushed_cluster from "../../assets/illust/title/illust_crushed_cluster_small.svg";

import ic_stage1 from '../../assets/icon/cycle/ic_factory.svg';
import ic_stage2 from '../../assets/icon/cycle/ic_mr_use.svg';
import ic_stage3 from '../../assets/icon/cycle/ic_mr_waste.svg';
import ic_stage4 from '../../assets/icon/cycle/ic_mr_grind.svg';
import ic_stage5 from '../../assets/icon/cycle/ic_mr_process.svg';
import ic_stage6 from '../../assets/icon/cycle/ic_mr_flake.svg';

const margin = { top: 24, right: 24, bottom: 24, left: 24 };

const Wrapper = styled.div`
  width: 1200px;
  height: 498px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    display: none;
  }
`;

const Title = styled.div`
  margin-top: 24px;
  ${props => props.theme.type.size.title1}
  ${props => props.theme.type.weight.prd.black}
  color: ${props => props.theme.color.brand.epGreen};
  text-align: center;
`;


const Container = styled.div`
   width: ${`calc(1200px + ${margin.left}px + ${margin.right}px )`};
   height: ${`calc(498px + ${margin.top}px + ${margin.bottom}px )`};
   position: absolute;
   top: -24px;
   left: -24px;
   @media only screen and (max-width: 480px) {
    width: calc(100% + 32px);
    top:80px;
    left:-16px;
  }
`;

const Arrow = styled.div`
 position: absolute;
 top: ${props => props.top};
 left: ${props => props.left};
 img {
  transform: ${props => `rotate(${props.deg}deg)`};
 }
 p{
   position: absolute;
   width: 48px;
   left: 0;
   top: ${props => props.position === 'top' ? '32px' : '-40px'};
 }
`;

const stageList = [
  {
    title: `고객사 최종 제품화\n(가전, 자동차 부품)`,
    img: ic_stage1,
    top: 32,
    left: 980,
    position: 'top',
  },
  {
    title: `소비자의 제품 사용`,
    img: ic_stage2,
    top: 272,
    left: 1216,
    position: 'bottom',
  },
  {
    title: `플라스틱 폐기물\n발생`,
    img: ic_stage3,
    top: 512,
    left: 980,
    position: 'bottom',
  },
  {
    title: `전처리를 통한\n고순도 플레이크 생산`,
    img: ic_stage4,
    top: 32,
    left: 264,
    position: 'top',
  },
  {
    title: `고객사 니즈에 맞는\n복합수지 recipe`,
    img: ic_stage5,
    top: 272,
    left: 32,
    position: 'bottom',
  },
  {
    title: `upcycling\n친환경 복합수지 생산`,
    img: ic_stage6,
    top: 512,
    left: 264,
    position: 'bottom',
  },
];

const CycleFill = styled.div`
  position: absolute;
  width: 276px;
  height: 276px;
  border-radius: 50%;
  background-color: rgba(60, 220, 135, 0.48);
  top: ${props => props.top};
  left: ${props => props.left};
  ${props => props.theme.layout.flexColCenter}
  color: ${props => props.theme.color.brand.epNavy};
  ${props => props.theme.type.size.title3}
  ${props => props.theme.type.weight.prd.black}
  img{
    width: 128px !important;
    height: auto !important;
  }
`;

const Stage = styled.div`
  position: absolute;
  width: 108px;
  height: 108px;
  background-color: #fff;
  border-radius: 50%;
  border: solid 1px ${props => props.theme.color.brand.epGreen};
  top: ${props => props.top};
  left: ${props => props.left};
  ${props => props.theme.layout.flexColCenter}
  z-index: 9;
  opacity: 1;
  img{
    width: 76px !important;
    height: 76px !important;
    margin: 0 !important;
  }
  p{
   position: absolute;
   width: 48px;
   left: -6px;
   top: ${props => props.position === 'bottom' ? '117px' : '-44px'};
   ${props => props.theme.type.size.caption}
   ${props => props.theme.type.weight.prd.regular}
   color: ${props => props.theme.color.ui.strong};
   width: 120px;
   text-align: center;
   white-space: pre-line;
   background-color: ${props => props.theme.color.ui.bg.light};
   padding: 4px 0;
 }
`;

const arrowList = [
  {
    top: 15,
    left: 256,
    deg: 180
  },
  {
    top: 15,
    left: 1248 - 272,
    deg: 0
  },
  {
    top: 510,
    left: 256,
    deg: 0
  },
  {
    top: 510,
    left: 1248 - 272,
    deg: 180
  },
  {
    top: 353,
    left: 1248 - 725,
    deg: -45
  },
];

const PlasticEcoCycleMR = ({ isStop }) => {
  let containerRef = useRef(null);
  let svgRef = useRef(null);
  let svg;
  let g;

  const [stop, setStop] = useState(false);
  const [count, setCount] = useState(0);
  let widthMobile = 0;

  useEffect(() => {
    widthMobile = containerRef.current.clientWidth;
    console.log(widthMobile);
  },[]);

  useEffect(() => {
    if (isStop === true) {
      setStop(true);
      setCount(0);
    }
    else {
      setStop(false);
    }
  }, [isStop])


  useEffect(() => {
    svg = d3.select(svgRef.current)
    .attr("width", isMobile?widthMobile:1200 + margin.left + margin.right)
    .attr("height", isMobile?widthMobile/2:498 + margin.top + margin.bottom);

    g = svg.append('g')
    .attr("transform", 
      isMobile?`scale(${widthMobile/1248}, ${widthMobile/1248}) translate(24,24)`: `translate(${margin.left},${margin.top})`);

    cyclePathData2.forEach((path, index, arr) => {
      g.append('path')
        .attr('d', path)
        .attr("class", `path_mr_${index}`)
        .attr("stroke", color.brand.epGreen)
        .attr("fill", 'none')
        .attr("stroke-width", 2);

      g.append('g')
        .attr("class", `particleGroup_mr_${index}`);
    });
  }, []);

  const renderParticle = () => {
    const delay = 1500;

    for (let i = 0; i < cyclePathData2.length; i++) {
      let particleGroup = d3.select(`.particleGroup_mr_${i}`).selectAll('.particle')
        .data(() => {
          let data = [];
          let num = 8;
          if (i === 2) num = 16;
          for (let index = 0; index < num; index++) {
            data.push(index);
          }
          return data;
        })
        .enter().append("g")
        .attr("class", "particle")
        .attr("transform", "translate(-1000,-1000)");

      let size = 48;

      if (i === 0) size = 56;
      if (i === 1) size = 56;
      if (i === 2) size = 32;
      if (i === 3) size = 48;
      if (i === 4) size = 48;
      if (i === 5) size = 24;
      if (i === 6) size = 24;

      particleGroup.append("svg:image")
        .attr("class", 'cycle_image')
        .attr("xlink:href", (d, j) => {
          let img;

          // 생산
          if (i === 0) {
            if (j % 2 === 0) img = illust_washing;
            if (j % 2 === 1) img = illust_car;
          }
          // 배출
          if (i === 1) {
            if (j % 2 === 0) img = illust_washing;
            if (j % 2 === 1) img = illust_car;
          }
          // 수거
          if (i === 2) {
            if (j % 3 === 0) img = illust_pressed1;
            if (j % 3 === 1) img = illust_pressed2;
            if (j % 3 === 2) img = illust_pressed3;

          }
          // 수거
          if (i === 3) {
            img = illust_crushed_cluster;
          }
          // 수거
          if (i === 4) {
            img = illust_crushed_cluster;
          }
          // 수거
          if (i === 5) {
            if (j % 3 === 0) img = illust_product1;
            if (j % 3 === 1) img = illust_product2;
            if (j % 3 === 2) img = illust_product3;
          }
          // 수거
          if (i === 6) {
            if (j % 3 === 0) img = illust_product1;
            if (j % 3 === 1) img = illust_product2;
            if (j % 3 === 2) img = illust_product3;
          }
          return img;
        })
        .attr("x", -size / 2)
        .attr("y", -size / 2)
        .attr("opacity", 1)
        .attr("width", size)
        .attr("height", size);


      let duration = d3.select(`.path_mr_${i}`).node().getTotalLength() * 10;

      particleGroup
        .attr("opacity", 1)
        .transition()
        .ease(d3.easeLinear)
        .duration(duration)
        .delay((d, i) => {
          return delay * i;
        })
        .attr("opacity", 1)
        .tween("pathTween", (d) => {
          if (svg !== null) {
            let path = d3.select(`.path_mr_${i}`);
            let isReverse = false;
            if (i === 0 || i === 1 || i === 6) isReverse = true;
            return pathTweenWithGroup(path, d, 3, isReverse);
          }
        })
        .transition()
        .duration(200)
        .attr("opacity", 0)
        .remove();
    }
  }

  const updateParticle = () => {
    if (count === 1) {
      renderParticle();
    }
    else if (count % 300 === 0) {
      renderParticle();
      console.log(count);
    }
    setCount(count + 1);
  }

  useAnimationFrameLoop(updateParticle, stop)

  return (
    <Wrapper>
      <Title>
        Circular<br />
        Economy System
      </Title>
      <Container ref={containerRef}>
        <CycleFill
          top={'calc((546px - 276px)/2)'}
          left={'120px'}
        >
          <img src={logo_gs} alt='' />
        </CycleFill>
        <CycleFill
          top={'calc((546px - 276px)/2)'}
          left={'848px'}
        >
          자동차.가전 시장
        </CycleFill>
        {
          stageList.map((stage, index) =>
            <Stage
              top={`calc(${stage.top}px - 54px)`}
              left={`calc(${stage.left}px - 54px)`}
              position={stage.position}
              key={index}
            >
              <img src={stage.img} alt='' />
              <p>
                {stage.title}
              </p>
            </Stage>
          )
        }
        {
          arrowList.map((arrow, index) =>
            <Arrow
              top={arrow.top + 'px'}
              left={arrow.left + 'px'}
              deg={arrow.deg}
              position={arrow.position}
            >
              <img src={ic_arrow} alt='' alt='' />
            </Arrow>
          )
        }
        <svg
          className={'plastic_cycle'}
          ref={svgRef}
        />
      </Container>
    </Wrapper>
  );

  function pathTweenWithGroup(path, offset, r, isReverse) {
    if (path.node() !== null) {
      var length = path.node().getTotalLength(); // Get the length of the path
      var r = isReverse ? d3.interpolate(length, 0) : d3.interpolate(0, length); //Set up interpolation from 0 to the path length
      return function (t) {
        var point = path.node().getPointAtLength(r(t)); // Get the next point along the path

        d3.select(this) // Select the circle
          // .attr("x", point.x + offset.x) // Set the cx
          // .attr("y", point.y + offset.y) // Set the cy
          .attr("transform", `translate(${point.x},${point.y + offset})`)
      }
    }
  }
}



export default PlasticEcoCycleMR;