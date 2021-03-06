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
import illust_mobile from '../../assets/img/illust/c3/mr/illust_cycle_mr_mobile.jpg';

const margin = { top: isMobile ? 0 : 24, right: isMobile ? 0 : 24, bottom: isMobile ? 0 : 24, left: isMobile ? 0 : 24 };

const Wrapper = styled.div`
  width: 1200px;
  height: 498px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    /* display: none; */
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
    position: relative;
    width: calc(100% + 32px);
    height: ${props => `calc(498px * (${props.widthMobile} / 1200))`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    top:0px;
    left:0px;
    padding:0 8%;
    svg{
      position: absolute;
      top:0;
      left:8px;
    }
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
 @media only screen and (max-width: 480px) {
  display: none;
}
`;

const IllustImg = styled.img`
  width: calc(100% + 32px) !important;
  margin-left: -16px  !important;
  margin-top: 32px !important;
  margin-bottom: 20px !important;
`;

const stageList = [
  {
    title: `???????????? ??????\n????????? ???????????? ??????`,
    img: ic_stage4,
    top: 512,
    left: 264,
    position: 'bottom',
  },
  {
    title: `????????? ????????? ??????\n???????????? recipe`,
    img: ic_stage5,
    top: 272,
    left: 32,
    position: 'bottom',
  },
  {
    title: `upcycling\n????????? ???????????? ??????`,
    img: ic_stage6,
    top: 32,
    left: 264,
    position: 'top',
  },
  {
    title: `????????? ?????? ?????????\n(??????, ????????? ??????)`,
    img: ic_stage1,
    top: 512,
    left: 980,
    position: 'bottom',
  },
  {
    title: `???????????? ?????? ??????`,
    img: ic_stage2,
    top: 272,
    left: 1216,
    position: 'bottom',
  },
  {
    title: `???????????? ?????????\n??????`,
    img: ic_stage3,
    top: 32,
    left: 980,
    position: 'top',
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
  @media only screen and (max-width: 480px) {
      position: static;
      width: 108px;
      height: 108px;
      ${props => props.theme.type.size.body2}
      img{
      width: 80px !important;
      height: auto !important;
    }
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
 @media only screen and (max-width: 480px) {
  display: none;
  width: 48px;
  height: 48px;
  img{
    width: 44px !important;
    height: 44px !important;
    margin: 0 !important;
  }
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
    top: 173.5,
    left: 1248 - 725,
    deg: 45
  },
];

const PlasticEcoCycleMR = ({ isStop }) => {
  let containerRef = useRef(null);
  let svgRef = useRef(null);
  let svg;
  let g;

  const [stop, setStop] = useState(false);
  const [count, setCount] = useState(0);
  const [widthMobileState, setWidthMobile] = useState(0);
  const [heightMobile, setHeightMobile] = useState(0);
  let widthMobile = 0;
  // let heightMobile = 0;

  useEffect(() => {
    if(!isMobile){
      widthMobile = containerRef.current.clientWidth;
      setWidthMobile(widthMobile);
      setHeightMobile(containerRef.current.clientHeight);
      console.log(widthMobile);
    }
  }, []);

  useEffect(() => {
    if(!isMobile){
      if (isStop === true) {
        setStop(true);
        setCount(0);
      }
      else {
        setStop(false);
      }
    }
  }, [isStop]);

  useEffect(() => {
    if(!isMobile){
      svg = d3.select(svgRef.current)
      .attr("width", isMobile ? widthMobile : 1200 + margin.left + margin.right)
      .attr("height", isMobile ? 498 * (widthMobile / 1200) : 498 + margin.top + margin.bottom);

    g = svg.append('g')
      .attr("transform",
        isMobile ? `translate(${margin.left},${margin.top}) scale(${widthMobile / 1248}, ${widthMobile / 1248})` : `translate(${margin.left},${margin.top})`);

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
    }
  }, []);

  const renderParticle = () => {
    const delay = 1200;

    for (let i = 0; i < cyclePathData2.length; i++) {
      let particleGroup = d3.select(`.particleGroup_mr_${i}`).selectAll('.particle')
        .data(() => {
          let data = [];
          let num = 200;
          if (i === 6) num = 400;
          for (let index = 0; index < num; index++) {
            data.push(index);
          }
          return data;
        })
        .enter().append("g")
        .attr("class", "particle")
        .attr("transform", "translate(-1000,-1000)");

      let size = 48;

      if (i === 0) size = 48;
      if (i === 1) size = 48;
      if (i === 2) size = 24;
      if (i === 3) size = 24;
      if (i === 4) size = 56;
      if (i === 5) size = 56;
      if (i === 6) size = 32;

      particleGroup.append("svg:image")
        .attr("class", 'cycle_image')
        .attr("xlink:href", (d, j) => {
          let img;

          // ??????
          if (i === 0) {
            img = illust_crushed_cluster;
          }
          // ??????
          if (i === 1) {
            img = illust_crushed_cluster;
          }
          // ??????
          if (i === 2) {
            if (j % 3 === 0) img = illust_product1;
            if (j % 3 === 1) img = illust_product2;
            if (j % 3 === 2) img = illust_product3;
          }
          // ??????
          if (i === 3) {
            if (j % 3 === 0) img = illust_product1;
            if (j % 3 === 1) img = illust_product2;
            if (j % 3 === 2) img = illust_product3;
          }
          // ??????
          if (i === 4) {
            if (j % 2 === 0) img = illust_washing;
            if (j % 2 === 1) img = illust_car;
          }
          // ??????
          if (i === 5) {
            if (j % 2 === 0) img = illust_washing;
            if (j % 2 === 1) img = illust_car;
          }
          // ??????
          if (i === 6) {
            if (j % 3 === 0) img = illust_pressed1;
            if (j % 3 === 1) img = illust_pressed2;
            if (j % 3 === 2) img = illust_pressed3;
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
            if (i === 0 || i === 1 || i === 3 || i === 6) isReverse = true;
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
    if(!isMobile){
      if (count === 1) {
        renderParticle();
      }
      else if (count % 900 === 0) {
        renderParticle();
        console.log(count);
      }
      setCount(count + 1);
    }
   
  }

  useAnimationFrameLoop(updateParticle, stop)

  return (
    <Wrapper>
      {
        !isMobile &&
        <>
          <Title>
            Circular<br />
            Economy System
          </Title>
          <Container
            ref={containerRef}
            widthMobile={widthMobileState}
          >
            <CycleFill
              top={isMobile ? `calc((${heightMobile}px - 108px)/2 - 16px)` : 'calc((546px - 276px)/2)'}
              left={isMobile ? '16px' : '120px'}
            >
              <img src={logo_gs} alt='' />
            </CycleFill>
            <CycleFill
              top={isMobile ? `calc((${heightMobile}px - 108px)/2 - 16px)` : 'calc((546px - 276px)/2)'}
              left={isMobile ? 'calc(100% - 136px)' : '848px'}
            >
              ?????????/?????? ??????
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
                  <img src={ic_arrow} alt='' />
                </Arrow>
              )
            }
            <svg
              className={'plastic_cycle'}
              ref={svgRef}
            />
          </Container>
        </>
      }
      {
        isMobile && 
        <IllustImg src={illust_mobile} alt='' />
      }
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