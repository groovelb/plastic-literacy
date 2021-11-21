import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import * as d3 from 'd3';
import { useAnimationFrameLoop } from "react-timing-hooks";
import { isMobile } from 'react-device-detect';

// img
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

const Container = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 480px) {
    width: ${`${window.innerWidth}px`};
    height: ${`${window.innerWidth}px`};
  }
`;

const Plasticcycle2 = ({
  currentChapter
}) => {

  let containerRef = useRef(null);
  let svgRef = useRef(null);
  let svg;
  let cycle2;

  const margin = { top: isMobile?0:25, right: isMobile?0:25, bottom: isMobile?0:25, left: isMobile?0:25 };
  const groupMargin = isMobile?0:50;
  const strokeWidth = isMobile?54:100;
  const particleOffset = isMobile?10:40;
  const duration = isMobile?10000:15000;

  const [count, setCount] = useState(0);

  useAnimationFrameLoop(updateParticle, currentChapter !== 0);

  function updateParticle() {
    if (count === 0) {
      console.log("start");
      randerPlastic();
    }
    else if (count % 125 === 0) {
      console.log('update');

    }
    setCount(count + 1);
  }

  function randerPlastic() {
    console.log("render plastic");
    // Product
    const bottleSize = {
      width: isMobile?10:20,
      hegiht: isMobile?32:64
    }
    const bottleGroup = d3.select('.cycle2').selectAll(".bottle")
      .data(() => {
        let data = [];
        let num = 100;
        for (let i = 0; i < num; i++) {
          let img;
          console.log(i);
          if (i % 3 === 0) img = illust_bottle_blue;
          if (i % 3 === 1) img = illust_bottle_orange;
          if (i % 3 === 2) img = illust_bottle_emerald;

          let instance = {
            x: parseInt(Math.random() * particleOffset) - particleOffset/2 - bottleSize.width/2,
            y: parseInt(Math.random() * particleOffset) - particleOffset/2 - bottleSize.hegiht/2,
            img: img
          };
          data.push(instance);
        }
        return data;
      })
      .enter()
      .append("g")
      .attr("class", "bottle")
      .attr("transform", "translate(-100,-100)")

    bottleGroup.append("svg:image")
      .attr("xlink:href", (d) => d.img)
      .attr("x", 0)
      .attr("y", 0)
      .attr("opacity", 1)
      .attr("width", bottleSize.width)
      .attr("height", bottleSize.hegiht);

    bottleGroup.transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return 3000 * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle2_path_product`);
        let offset = {
          x: d.x,
          y: d.y,
          deg: parseInt(Math.random() * 360),
        };
        return pathTweenWithGroup(path, offset, bottleSize, 3);
      })
      .remove();

    // Trash
    const trashSize = {
      width: isMobile?15:30,
      hegiht: isMobile?34:68
    }
    const trashGroup = d3.select('.cycle2').selectAll(".trash")
      .data(() => {
        let data = [];
        let num = 100;
        for (let i = 0; i < num; i++) {
          let img;
          console.log(i);
          if (i % 3 === 0) img = illust_trash_blue;
          if (i % 3 === 1) img = illust_trash_orange;
          if (i % 3 === 2) img = illust_trash_emerald;

          let instance = {
            x: parseInt(Math.random() * particleOffset) - particleOffset/2 - trashSize.width/2,
            y: parseInt(Math.random() * particleOffset) - particleOffset/2 - trashSize.hegiht/2,
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
      .attr("x", 0)
      .attr("y", 0)
      .attr("opacity", 1)
      .attr("width", trashSize.width)
      .attr("height", trashSize.hegiht);

    trashGroup.transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return 3000 * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle2_path_trash`);
        let offset = {
          x: d.x,
          y: d.y,
          deg: parseInt(Math.random() * 360),
        };
        return pathTweenWithGroup(path, offset, trashSize, 3);
      })
      .remove();

    // Reproduct
    const reproductSize = {
      width: isMobile?40:80,
      hegiht: isMobile?40:80
    }
    const reproductGroup = d3.select('.cycle2').selectAll(".reproduct")
      .data(() => {
        let data = [];
        let num = 100;
        for (let i = 0; i < num; i++) {
          let img;
          console.log(i);
          if (i % 3 === 0) img = illust_reproduct_bottle;
          if (i % 3 === 1) img = illust_reproduct_top;
          if (i % 3 === 2) img = illust_reproduct_package;

          let instance = {
            x: parseInt(Math.random() * 40) - 20 - 10,
            y: parseInt(Math.random() * 40) - 20 - 32,
            img: img
          };
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

    reproductGroup.transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return 5000 * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle2_path_reproduct`);
        return pathTweenWithGroup2(path, reproductSize, 3);
      })
      .remove();

    // Flake
    const flakeSize = {
      width: isMobile?40:80,
      hegiht: isMobile?40:80
    }
    const flakeGroup = d3.select('.cycle2').selectAll(".flake")
      .data(() => {
        let data = [];
        let num = 100;
        for (let i = 0; i < num; i++) {
          let img;
          console.log(i);
          if (i % 3 === 0) img = illust_flake_blue;
          if (i % 3 === 1) img = illust_flake_orange;
          if (i % 3 === 2) img = illust_flake_green;

          let instance = {
            x: parseInt(Math.random() * 40) - 20 - 10,
            y: parseInt(Math.random() * 40) - 20 - 32,
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

      flakeGroup.transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return 5000 * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle2_path_flake`);
        return pathTweenWithGroup2(path, flakeSize, 3);
      })
      .remove();
  }


  useEffect(() => {

    let width = containerRef.current.clientWidth - margin.left - margin.right;
    let height = containerRef.current.clientHeight - margin.top - margin.bottom;

    svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

    cycle2 = svg.append("g")
      .attr("class", "cycle2")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Product Path  
    let pathProduct = d3.path();
    pathProduct.arc(
      width / 2,
      height / 2,
      width / 2 - strokeWidth/2,
      Math.PI * 1.5,
      Math.PI * 2
    );

    cycle2.append("path")
      .attr("d", pathProduct)
      .attr("class", "circle2_path_product")
      .attr("fill", "none")
      .attr("stroke", "#009999")
      .attr("opacity", 0.1)
      .attr("stroke-width", strokeWidth);

    // Trash Path
    let pathTrash = d3.path();
    pathTrash.arc(
      width / 2,
      height / 2,
      width / 2 - strokeWidth/2,
      Math.PI * 2,
      Math.PI * 2.5
    );

    cycle2.append("path")
      .attr("d", pathTrash)
      .attr("class", "circle2_path_trash")
      .attr("fill", "none")
      .attr("stroke", "#009999")
      .attr("opacity", 0.1)
      .attr("stroke-width", strokeWidth);

    // Reproduct Path
    let pathReproduct = d3.path();
    pathReproduct.arc(
      width / 2,
      height / 2,
      width / 2 - strokeWidth/2,
      Math.PI * 2.5,
      Math.PI * 3
    );

    cycle2.append("path")
      .attr("d", pathReproduct)
      .attr("class", "circle2_path_reproduct")
      .attr("fill", "none")
      .attr("stroke", "#009999")
      .attr("opacity", 0.1)
      .attr("stroke-width", strokeWidth);

    // Flake Path
    let pathFlake = d3.path();
    pathFlake.arc(
      width / 2,
      height / 2,
      width / 2 - strokeWidth/2,
      Math.PI * 3,
      Math.PI * 3.5
    );

    cycle2.append("path")
      .attr("d", pathFlake)
      .attr("class", "circle2_path_flake")
      .attr("fill", "none")
      .attr("stroke", "#009999")
      .attr("opacity", 0.1)
      .attr("stroke-width", strokeWidth);
  }, []);

  function pathTweenWithGroup(path, offset, size, r) {
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

  function pathTween(path, offset, r) {
    var length = path.node().getTotalLength(); // Get the length of the path
    var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length
    return function (t) {
      var point = path.node().getPointAtLength(r(t)); // Get the next point along the path

      d3.select(this) // Select the circle
        .attr("x", point.x + offset.x) // Set the cx
        .attr("y", point.y + offset.y) // Set the cy
    }
  }

  return (
    <Container ref={containerRef}>
      <svg ref={svgRef} />
    </Container>
  )
}

export default Plasticcycle2;