import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import * as d3 from 'd3';
import { useAnimationFrameLoop } from "react-timing-hooks";
import { isMobile } from 'react-device-detect';
import theme from "../../assets/theme/theme";

// img
import illust_inner_circle from "../../assets/illust/inner_circle_illust.svg";

import illust_bottle_blue from "../../assets/illust/illust_bottle_blue.svg";
import illust_bottle_orange from "../../assets/illust/illust_bottle_orange.svg";
import illust_bottle_emerald from "../../assets/illust/illust_bottle_emerald.svg";
import illust_trash_blue from "../../assets/illust/illust_trash_blue.svg";
import illust_trash_orange from "../../assets/illust/illust_trash_orange.svg";
import illust_trash_emerald from "../../assets/illust/illust_trash_emerald.svg";
import illust_reproduct_bottle from "../../assets/illust/illust_reproduct_bottle.svg";
import illust_reproduct_top from "../../assets/illust/illust_reproduct_top.svg";
import illust_reproduct_package from "../../assets/illust/illust_reproduct_package.svg";
import illust_flake_blue from "../../assets/illust/flake_blue.svg";
import illust_flake_orange from "../../assets/illust/flake_orange.svg";
import illust_flake_green from "../../assets/illust/flake_green.svg";

import illust_product1 from "../../assets/illust/title/product_simple_1.svg";
import illust_product2 from "../../assets/illust/title/product_simple_2.svg";
import illust_product3 from "../../assets/illust/title/product_simple_3.svg";

import illust_part from "../../assets/illust/title/product_part.svg";
import illust_washing from "../../assets/illust/title/product_washing.svg";
import illust_car from "../../assets/illust/title/product_car.svg";


import illust_pressed1 from "../../assets/illust/title/pressed_simple_1.svg";
import illust_pressed2 from "../../assets/illust/title/pressed_simple_2.svg";
import illust_pressed3 from "../../assets/illust/title/pressed_simple_3.svg";
import illust_crushed1 from "../../assets/illust/title/crushed_simple_1.svg";
import illust_crushed2 from "../../assets/illust/title/crushed_simple_2.svg";
import illust_crushed3 from "../../assets/illust/title/crushed_simple_3.svg";
import illust_crushed_cluster from "../../assets/illust/title/illust_crushed_cluster.svg";
import illust_flake1 from "../../assets/illust/title/flake_simple_1.svg";
import illust_flake2 from "../../assets/illust/title/flake_simple_2.svg";
import illust_flake3 from "../../assets/illust/title/flake_simple_3.svg";


const Container = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 480px) {
    width: ${`${window.innerWidth}px`};
    height: ${`${window.innerWidth}px`};
  }
`;

const PlasticCycle = ({
  currentChapter,
  starChatper,
  id
}) => {

  let containerRef = useRef(null);
  let svgRef = useRef(null);
  let svg;
  let cycle;

  // SVG group 마진
  const margin = { top: isMobile ? 0 : 25, right: isMobile ? 0 : 25, bottom: isMobile ? 0 : 25, left: isMobile ? 0 : 25 };
  // Cycle Stroke
  const strokeWidth = isMobile ? 54 : 100;

  const particleOffset = isMobile ? 10 : 40;
  const duration = isMobile ? 10000 : 16000;

  const [count, setCount] = useState(0);
  const delaySlow = 3600;

  useAnimationFrameLoop(updateParticle, currentChapter !== starChatper);


  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      let rOuter = containerRef.current.clientWidth - margin.left - margin.right;
      let rInner = containerRef.current.clientWidth - margin.left - margin.right;
      let width = containerRef.current.clientWidth - margin.left - margin.right;
      let height = containerRef.current.clientHeight - margin.top - margin.bottom;

      svg = d3.select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      cycle = svg.append("g")
        .attr("class", `cycle_${id}`)
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Cycle Path data
      let pathWholeOutter = d3.path();
      pathWholeOutter.arc(
        rOuter / 2,
        rOuter / 2,
        width / 2 - 1 / 2,
        Math.PI * -1.5,
        Math.PI * -3.5,
      );

      let pathWholeInner = d3.path();
      pathWholeInner.arc(
        rOuter / 2,
        rOuter / 2,
        width / 2 - strokeWidth,
        Math.PI * 1.5,
        Math.PI * 3.5,
      );

      let pathLengthOutter;
      let pathLengthInner;

      cycle.append("path")
        .attr("d", pathWholeOutter)
        .attr("class", "circle_path_whole")
        .attr("fill", "none")
        // .attr("stroke",theme.color.brand.epGreen)
        // .attr("stroke", `url(#${gradientID})`)
        .attr("stroke", '#fff')
        .attr("opacity", 1)
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", function () {
          return pathLengthOutter = this.getTotalLength();
        })
        .attr("stroke-dashoffset", pathLengthOutter)
        .transition()
        .delay(2000)
        .duration(2000)
        .attr("stroke-dashoffset", 0);

      // cycle.append("path")
      //   .attr("d", pathWholeInner)
      //   .attr("class", "circle_path_whole inner")
      //   .attr("fill", "none")
      //   // .attr("stroke",theme.color.brand.epGreen)
      //   // .attr("stroke", `url(#${gradientID})`)
      //   .attr("stroke", '#fff')
      //   .attr("opacity", 1)
      //   .attr("stroke-width", 1)
      //   .attr("stroke-dasharray", function () {
      //     return pathLengthInner = this.getTotalLength();
      //   })
      //   .attr("stroke-dashoffset", pathLengthInner)
      //   .transition()
      //   .duration(2000)
      //   .attr("stroke-dashoffset", 0);

      const tau = 2 * Math.PI;

      // Product Path  
      let pathProduct = d3.path();
      pathProduct.arc(
        width / 2,
        height / 2,
        width / 2 - strokeWidth / 2,
        Math.PI * 1.5,
        Math.PI * 2
      );

      cycle.append("path")
        .attr("d", pathProduct)
        .attr("class", `circle_path_product_${id}`)
        .attr("fill", "none")
        // .attr("stroke", "#009999")
        .attr("opacity", 0.12)
        .attr("stroke-width", 1);

      // Trash Path
      let pathTrash = d3.path();
      pathTrash.arc(
        width / 2,
        height / 2,
        width / 2 - strokeWidth / 2,
        Math.PI * 2,
        Math.PI * 2.5
      );

      cycle.append("path")
        .attr("d", pathTrash)
        .attr("class", "circle_path_trash")
        .attr("fill", "none")
        // .attr("stroke", "#009999")
        .attr("opacity", 0.1)
        .attr("stroke-width", 1);

      // Reproduct Path
      let pathReproduct = d3.path();
      pathReproduct.arc(
        width / 2,
        height / 2,
        width / 2 - strokeWidth / 2,
        Math.PI * 2.5,
        Math.PI * 3
      );

      cycle.append("path")
        .attr("d", pathReproduct)
        .attr("class", "circle_path_reproduct")
        .attr("fill", "none")
        // .attr("stroke", "#009999")
        .attr("opacity", 0.1)
        .attr("stroke-width", 1);

      // Flake Path
      let pathFlake = d3.path();
      pathFlake.arc(
        width / 2,
        height / 2,
        width / 2 - strokeWidth / 2,
        Math.PI * 3,
        Math.PI * 3.5
      );

      cycle.append("path")
        .attr("d", pathFlake)
        .attr("class", "circle_path_flake")
        .attr("fill", "none")
        // .attr("stroke", "#009999")
        .attr("opacity", 0.1)
        .attr("stroke-width", 1);
    }
    return () => {
      console.log('unmounted');
      isMounted = false;
      svg.selectAll("g").transition();
      svg.selectAll("g").remove();
      svg = null;
    }
  }, []);

  function updateParticle() {
    if (count === 0) {
      randerPlastic();
    }
    else if (count % 125 === 0) {

    }
    setCount(count + 1);
  }

  function randerPlastic() {
    // Product
    const bottleSize = {
      width: isMobile ? 10 : 60,
      hegiht: isMobile ? 32 : 60
    }
    const bottleGroup = d3.select(`.cycle_${id}`).selectAll(`.bottle_${id}`)
      .data(() => {
        let data = [];
        let num = 100;
        for (let i = 0; i < num; i++) {
          let img;
          if (i % 3 === 0) img = illust_part;
          if (i % 3 === 1) img = illust_washing;
          if (i % 3 === 2) img = illust_car;

          let instance = {
            x: parseInt(Math.random() * strokeWidth/2)  - bottleSize.width / 2,
            y: parseInt(Math.random() * strokeWidth/2)  - bottleSize.hegiht / 2,
            img: img
          };
          data.push(instance);
        }
        console.log("bottle!");
        console.log(data);
        return data;
      })
      .enter()
      .append("g")
      .attr("class", `bottle_${id}`)
      .attr("transform", "translate(-100,-100)")

    bottleGroup.append("svg:image")
      .attr("xlink:href", (d) => d.img)
      .attr("x", -bottleSize.width/2)
      .attr("y", -bottleSize.hegiht/2)
      .attr("opacity", 1)
      .attr("width", bottleSize.width)
      .attr("height", bottleSize.hegiht);

    bottleGroup
      .attr("opacity", 0.3)
      .transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return delaySlow * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle_path_product_${id}`);
        let offset = {
          x: 0,
          y: 0,
          deg: parseInt(Math.random() * 360),
        };
        return pathTweenWithGroup3(path, offset, bottleSize, 3);
      })
      .remove();

    // Trash
    const trashSize = {
      width: isMobile ? 15 : 44,
      hegiht: isMobile ? 34 : 44
    }
    const trashGroup = d3.select(`.cycle_${id}`).selectAll(".trash")
      .data(() => {
        let data = [];
        let num = 200;
        for (let i = 0; i < num; i++) {
          let img;
          if (i % 3 === 0) img = illust_pressed1;
          if (i % 3 === 1) img = illust_pressed2;
          if (i % 3 === 2) img = illust_pressed3;

          let instance = {
            x: parseInt(Math.random() * particleOffset) - particleOffset / 2 - trashSize.width / 2,
            y: parseInt(Math.random() * particleOffset) - particleOffset / 2 - trashSize.hegiht / 2,
            img: img
          };
          data.push(instance);
        }
        return data;
      })
      .enter()
      .append("g")
      .attr("class", "trash")
      .attr("transform", "translate(-100,-100)")

    trashGroup.append("svg:image")
      .attr("xlink:href", (d) => d.img)
      .attr("x", -trashSize.width/2)
      .attr("y", -trashSize.hegiht/2)
      .attr("opacity", 1)
      .attr("width", trashSize.width)
      .attr("height", trashSize.hegiht);

    trashGroup.attr("opacity", 0.3)
      .transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return delaySlow * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle_path_trash`);
        let offset = {
          x: 0,
          y: 0,
          deg: parseInt(Math.random() * 360),
        };
        return pathTweenWithGroup3(path, offset, trashSize, 3);
      })
      .remove();

    // Reproduct
    const reproductSize = {
      width: isMobile ? 40 : 56,
      hegiht: isMobile ? 40 : 56
    }
    const reproductGroup = d3.select(`.cycle_${id}`).selectAll(".reproduct")
      .data(() => {
        let data = [];
        let num = 200;
        for (let i = 0; i < num; i++) {
          let img;
          if (i % 3 === 0) img = illust_crushed_cluster;
          if (i % 3 === 1) img = illust_crushed_cluster;
          if (i % 3 === 2) img = illust_crushed_cluster;
          let pow1 = Math.pow(-1, parseInt(Math.random()*10));
          let pow2 = Math.pow(-1, parseInt(Math.random()*10));
          let instance = {
            // x: parseInt(Math.random() * pow1 * strokeWidth/2),
            // y: parseInt(Math.random() * pow2 * strokeWidth/2),
            x: 0,
            y: 0,
            img: img
          };

          // let instance = {
          //   x: parseInt(Math.random() * 40) - 20 - 10,
          //   y: parseInt(Math.random() * 40) - 20 - 32,
          //   img: img
          // };
          data.push(instance);
        }
        return data;
      })
      .enter()
      .append("g")
      .attr("class", "reproduct")
      .attr("transform", "translate(-100,-100)")

    reproductGroup.append("svg:image")
      .attr("xlink:href", (d) => d.img)
      .attr("x", -reproductSize.width / 2)
      .attr("y", -reproductSize.hegiht / 2)
      .attr("opacity", 1)
      .attr("width", reproductSize.width)
      .attr("height", reproductSize.hegiht);

    reproductGroup.attr("opacity", 0.3)
      .transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return 1800 * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle_path_reproduct`);
        let offset = {
          x: d.x,
          y: d.y,
          deg: parseInt(Math.random() * 360),
        };
        return pathTweenWithGroup3(path, offset, reproductSize, 3);
      })
      .remove();

    // Flake
    const flakeSize = {
      width: isMobile ? 40 : 52,
      hegiht: isMobile ? 40 : 52
    }
    const flakeGroup = d3.select(`.cycle_${id}`).selectAll(".flake")
      .data(() => {
        let data = [];
        let num = 100;
        for (let i = 0; i < num; i++) {
          let img;
          if (i % 3 === 0) img = illust_flake1;
          if (i % 3 === 1) img = illust_flake2;
          if (i % 3 === 2) img = illust_flake3;

          // let instance = {
          //   x: parseInt(Math.random() * 40) - 20 - 10,
          //   y: parseInt(Math.random() * 40) - 20 - 32,
          //   img: img
          // };

          let instance = {
            x: parseInt(Math.random() * particleOffset) - particleOffset / 2 - bottleSize.width / 2,
            y: parseInt(Math.random() * particleOffset) - particleOffset / 2 - bottleSize.hegiht / 2,
            img: img
          };

          data.push(instance);
        }
        return data;
      })
      .enter()
      .append("g")
      .attr("class", "flake")
      .attr("transform", "translate(-100,-100)")

    flakeGroup.append("svg:image")
      .attr("xlink:href", (d) => d.img)
      .attr("x", -flakeSize.width / 2)
      .attr("y", -flakeSize.hegiht / 2)
      .attr("opacity", 1)
      .attr("width", flakeSize.width)
      .attr("height", flakeSize.hegiht);

    flakeGroup.attr("opacity", 0.3)
      .transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return delaySlow * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle_path_flake`);
        let offset = {
          x: 0,
          y: 0,
          deg: parseInt(Math.random() * 360),
        };
        return pathTweenWithGroup3(path, offset, flakeSize, 3);
      })
      .remove();
  }


  function pathTweenWithGroup(path, offset, size, r) {
    if (path !== null) {
      var length = path.node().getTotalLength(); // Get the length of the path
      var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length
      return function (t) {
        var point = path.node().getPointAtLength(r(t)); // Get the next point along the path

        d3.select(this) // Select the circle
          // .attr("x", point.x + offset.x) // Set the cx
          // .attr("y", point.y + offset.y) // Set the cy
          .attr("transform", `translate(${point.x + offset.x},${point.y + offset.y})rotate(${offset.deg + r(t)},${size.width / 2},${size.hegiht / 2})`)
      }
    }
  }

  function pathTweenWithGroup2(path, offset, size, r) {
    var length = path.node().getTotalLength(); // Get the length of the path
    var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length
    return function (t) {
      var point = path.node().getPointAtLength(r(t)); // Get the next point along the path

      d3.select(this) // Select the circle
        // .attr("x", point.x + offset.x) // Set the cx
        // .attr("y", point.y + offset.y) // Set the cy
        .attr("transform", `translate(${point.x},${point.y})`)
    }
  }

  function pathTweenWithGroup3(path, offset, size, r) {
    var length = path.node().getTotalLength(); // Get the length of the path
    var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length
    return function (t) {
      var point = path.node().getPointAtLength(r(t)); // Get the next point along the path

      d3.select(this) // Select the circle
        // .attr("x", point.x + offset.x) // Set the cx
        // .attr("y", point.y + offset.y) // Set the cy
        .attr("transform", `translate(${point.x + offset.x},${point.y + offset.y})`)
    }
  }

  return (
    <Container ref={containerRef}>
      <svg ref={svgRef} />
    </Container>
  )
}

export default PlasticCycle;