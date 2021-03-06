import React, { useEffect, useState, useRef } from 'react';
import styled from "styled-components";
import { isMobile } from 'react-device-detect';
import * as d3 from 'd3';
import { cyclePathData } from '../../data/cyclePathData';
import { useAnimationFrameLoop } from "react-timing-hooks";
import color from '../../assets/theme/atom/color';
import ic_arrow from "../../assets/icon/arrow_cycle.svg";

// import path1 from "../../assets/path/path_cycle1.svg";
// import path2 from "../../assets/path/path_cycle2.svg";
// import path3 from "../../assets/path/path_cycle3.svg";
// import path4 from "../../assets/path/path_cycle4.svg";
// import path5 from "../../assets/path/path_cycle5.svg";
// import path6 from "../../assets/path/path_cycle6.svg";
// import path7 from "../../assets/path/path_cycle7.svg";

import illust_part from "../../assets/illust/title/product_part.svg";
import illust_washing from "../../assets/illust/title/product_washing.svg";
import illust_car from "../../assets/illust/title/product_car.svg";
import illust_product1 from "../../assets/illust/title/product_simple_1.svg";
import illust_product2 from "../../assets/illust/title/product_simple_2.svg";
import illust_product3 from "../../assets/illust/title/product_simple_3.svg";
import illust_pressed1 from "../../assets/illust/title/pressed_simple_1.svg";
import illust_pressed2 from "../../assets/illust/title/pressed_simple_2.svg";
import illust_pressed3 from "../../assets/illust/title/pressed_simple_3.svg";
import illust_crushed_cluster from "../../assets/illust/title/illust_crushed_cluster_small.svg";
import illust_flake1 from "../../assets/illust/title/flake_simple_1.svg";
import illust_flake2 from "../../assets/illust/title/flake_simple_2.svg";
import illust_flake3 from "../../assets/illust/title/flake_simple_3.svg";

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
  }
`;

const Title = styled.div`
  ${props => props.theme.type.size.title1}
  ${props => props.theme.type.weight.prd.black}
  color: ${props => props.theme.color.brand.epGreen};
  text-align: center;
`;


const Container = styled.div`
   width: ${`calc(1200px + ${margin.left} + ${margin.right} )`};
   height: ${`calc(498px + ${margin.top} + ${margin.bottom} )`};
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
   top: ${props => props.position === 'top' ? '48px' : '-56px'};
 }
 @media only screen and (max-width: 480px) {
  p{
   position: absolute;
   width: 48px;
   left: 0;
   top: ${props => props.position === 'top' ? '24px' : '-28px'};
 }
  /* display: none; */
 }
`;

const ArrowHead = styled.div`
  width: 0; 
  height: 0;
  z-index: -1;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  /* opacity: 0.1; */
  border-left: 60px solid #143136;
  position: absolute;
  top: ${isMobile?'22%':'147px'};
  left: ${isMobile?'42%':'526px'};
  transform: rotate(45deg);
  @media only screen and (max-width: 480px) {
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid #143136;
  }
  /* border-radius: 4px; */
`;

const arrowList = [
  {
    position: 'top',
    title: '??????',
    top: 14,
    left: 256,
    deg: 180
  },
  {
    position: 'top',
    title: '??????',
    top: 14,
    left: 1248 - 272,
    deg: 0
  },
  {
    position: 'bottom',
    title: '??????',
    top: 509,
    left: 256,
    deg: 0
  },
  {
    position: 'bottom',
    title: '??????',
    top: 509,
    left: 1248 - 272,
    deg: 180
  },
];

const arrowList2 = [
  {
    position: 'top',
    title: '??????',
    top: 0,
    left: 17,
    deg: 180
  },
  {
    position: 'top',
    title: '??????',
    top: 0,
    left: 76,
    deg: 0
  },
  {
    position: 'bottom',
    title: '??????',
    top: 76,
    left: 17,
    deg: 0
  },
  {
    position: 'bottom',
    title: '??????',
    top: 76,
    left: 76,
    deg: 180
  },
];

const PlasticEcoCycle = ({ isStop }) => {
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
  }, []);

  useEffect(() => {
    if (isStop === true) {
      setStop(true);
      setCount(0);
    }
    else {
      setStop(false);
    }
  }, [isStop]);

  useEffect(() => {
    svg = d3.select(svgRef.current)
      .attr("width", isMobile ? widthMobile : 1200 + margin.left + margin.right)
      .attr("height", isMobile ? widthMobile / 2 : 498 + margin.top + margin.bottom);

    g = svg.append('g')
      .attr("transform",
        isMobile ? `scale(${widthMobile / 1248}, ${widthMobile / 1248}) translate(24,24)` : `translate(${margin.left},${margin.top})`);

    cyclePathData.forEach((path, index, arr) => {
      g.append('path')
        .attr('d', path)
        .attr("class", `path_${index}`)
        .attr("stroke", '#143136')
        .attr("fill", 'none')
        // .attr("opacity", 0.1)
        // .attr("marker-end","url(#arrow)")
        .attr("stroke-width", 48);

      g.append('g')
        .attr("class", `particleGroup_${index}`);
    });
  }, []);

  const renderParticle = () => {
    const delay = 1500;

    for (let i = 0; i < cyclePathData.length; i++) {
      let particleGroup = d3.select(`.particleGroup_${i}`).selectAll('.particle')
        .data(() => {
          let data = [];
          let num = 8;
          for (let index = 0; index < num; index++) {
            data.push(index);
          }
          return data;
        })
        .enter().append("g")
        .attr("class", "particle")
        .attr("opacity", "translate(0,0)");

      let size = 48;

      if (i === 0) size = isMobile ? 48 : 24;
      if (i === 1) size = isMobile ? 72 : 48;
      if (i === 2) size = isMobile ? 72 : 48;
      if (i === 3) size = isMobile ? 56 : 32;
      if (i === 4) size = isMobile ? 72 : 48;

      particleGroup.append("svg:image")
        .attr("xlink:href", (d, j) => {
          let img;

          // ??????
          if (i === 0) {
            if (j % 3 === 0) img = illust_product1;
            if (j % 3 === 1) img = illust_product2;
            if (j % 3 === 2) img = illust_product3;
          }
          // ??????
          if (i === 1) {
            if (j % 2 === 0) img = illust_washing;
            if (j % 2 === 1) img = illust_car;
          }
          // ??????
          if (i === 2) {
            if (j % 2 === 0) img = illust_washing;
            if (j % 2 === 1) img = illust_car;
          }
          // ??????
          if (i === 3) {
            if (j % 3 === 0) img = illust_pressed1;
            if (j % 3 === 1) img = illust_pressed2;
            if (j % 3 === 2) img = illust_pressed3;
          }
          // ??????
          if (i === 4) {
            img = illust_crushed_cluster
          }
          return img;
        })
        .attr("x", -size / 2)
        .attr("y", -size / 2)
        .attr("opacity", 1)
        .attr("width", size)
        .attr("height", size);


      let duration = d3.select(`.path_${i}`).node().getTotalLength() * 10;

      particleGroup
        .attr("opacity", 0)
        .transition()
        .ease(d3.easeLinear)
        .duration(duration)
        .delay((d, i) => {
          return delay * i;
        })
        .attr("opacity", 1)
        .tween("pathTween", (d) => {
          if (svg !== null) {
            let path = d3.select(`.path_${i}`);
            let isRverse = false;
            if (i === 0 || i === 2 || i === 4) isRverse = true;
            return pathTweenWithGroup(path, d, 3, isRverse);
          }
        })
        .transition()
        .duration(200)
        .attr("opacity", 0)
        .remove();
    }
  }

  const updateParticle = () => {
    if (count === 0) {
      // randerParticle();
    }
    else if (count % 25 === 0) {
      renderParticle();
    }

    setCount(count + 1);
  }

  useAnimationFrameLoop(updateParticle, stop)

  return (
    <Wrapper>
      <Title>
        ???????????????<br />????????? ?????????
      </Title>
      <Container ref={containerRef}>
        <ArrowHead />
        {
          isMobile&&arrowList2.map((arrow, index) =>
            <Arrow
              top={arrow.top + '%'}
              left={arrow.left + '%'}
              deg={arrow.deg}
              position={arrow.position}
            >
              {/* <img src={ic_arrow} alt='' alt='' /> */}
              <p>
                {arrow.title}
              </p>
            </Arrow>
          )
        }
         {
          !isMobile&&arrowList.map((arrow, index) =>
            <Arrow
              top={arrow.top + 'px'}
              left={arrow.left + 'px'}
              deg={arrow.deg}
              position={arrow.position}
            >
              {/* <img src={ic_arrow} alt='' alt='' /> */}
              <p>
                {arrow.title}
              </p>
            </Arrow>
          )
        }
        <svg
          className={'plastic_cycle'}
          ref={svgRef}
        >
        </svg>
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



export default PlasticEcoCycle;