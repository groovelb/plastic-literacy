import React, { useEffect, useState, useRef } from 'react';
import styled from "styled-components";
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
import illust_crushed_cluster from "../../assets/illust/title/illust_crushed_cluster.svg";
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

const arrowList = [
  {
    position: 'top',
    title: '수거',
    top: 14,
    left: 256,
    deg: 180
  },
  {
    position: 'top',
    title: '생산',
    top: 14,
    left: 1248 - 272,
    deg: 0
  },
  {
    position: 'bottom',
    title: '처리',
    top: 509,
    left: 256,
    deg: 0
  },
  {
    position: 'bottom',
    title: '배출',
    top: 509,
    left: 1248 - 272,
    deg: 180
  },
];

const PlasticEcoCycle = ({ }) => {
  let svgRef = useRef(null);
  let svg;
  let g;

  const [stop, setStop] = useState(false);
  const [count, setCount] = useState(0);


  useEffect(() => {
    svg = d3.select(svgRef.current)
      .attr("width", 1200 + margin.left + margin.right)
      .attr("height", 498 + margin.top + margin.bottom);

    g = svg.append('g')
      .attr("transform", `translate(${margin.left},${margin.top})`);

    cyclePathData.forEach((path, index, arr) => {
      g.append('path')
        .attr('d', path)
        .attr("class", `path_${index}`)
        .attr("stroke", color.brand.epGreen)
        .attr("fill", 'none')
        .attr("stroke-width", 2);

      g.append('g')
        .attr("class", `particleGroup_${index}`);
    });
  }, []);

  const renderParticle = () => {
    const delay = 2000;

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

      if (i === 0) size = 48;
      if (i === 1) size = 32;
      if (i === 2) size = 48;
      if (i === 3) size = 24;
      if (i === 4) size = 24;

      particleGroup.append("svg:image")
        .attr("xlink:href", (d, j) => {
          let img;

          // 생산
          if (i === 0) {
            if (j % 2 === 0) img = illust_washing;
            if (j % 2 === 1) img = illust_car;
          }
          // 배출
          if (i === 1) {
            if (j % 3 === 0) img = illust_pressed1;
            if (j % 3 === 1) img = illust_pressed2;
            if (j % 3 === 2) img = illust_pressed3;
          }
          // 수거
          if (i === 2) {
            img = illust_crushed_cluster;
          }
          // 수거
          if (i === 3) {
            if (j % 3 === 0) img = illust_product1;
            if (j % 3 === 1) img = illust_product2;
            if (j % 3 === 2) img = illust_product3;
          }
          // 수거
          if (i === 4) {
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
            if (i === 0 || i === 4) isRverse = true;
            return pathTweenWithGroup(path, d, 3, isRverse);
          }
        }).remove();
    }
  }

  const updateParticle = () => {
    if (count === 0) {
      // randerParticle();
    }
    else if (count % 50 === 0) {
      renderParticle();
    }

    setCount(count + 1);
  }

  useAnimationFrameLoop(updateParticle, stop)

  return (
    <Wrapper>
      <Title>
        플라스틱의<br />라이프 사이클
      </Title>
      <Container>
        {
          arrowList.map((arrow, index) =>
            <Arrow
              top={arrow.top + 'px'}
              left={arrow.left + 'px'}
              deg={arrow.deg}
              position={arrow.position}
            >
              <img src={ic_arrow} alt='' alt='' />
              <p>
                {arrow.title}
              </p>
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



export default PlasticEcoCycle;