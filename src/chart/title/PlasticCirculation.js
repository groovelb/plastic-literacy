import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import * as d3 from 'd3';
import { useAnimationFrameLoop } from "react-timing-hooks";
import { isMobile } from 'react-device-detect';
import theme from "../../assets/theme/theme";

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

const PlasticCycle = ({
  currentChapter
}) => {

  let containerRef = useRef(null);
  let svgRef = useRef(null);
  let svg;
  let cycle;

  const margin = { top: isMobile ? 0 : 25, right: isMobile ? 0 : 25, bottom: isMobile ? 0 : 25, left: isMobile ? 0 : 25 };
  const groupMargin = isMobile ? 0 : 50;
  const strokeWidth = isMobile ? 54 : 100;
  const particleOffset = isMobile ? 10 : 40;
  const duration = isMobile ? 10000 : 20000;

  const [count, setCount] = useState(0);

  useAnimationFrameLoop(updateParticle, currentChapter !== 0);

  let defs;

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
      width: isMobile ? 10 : 15,
      hegiht: isMobile ? 32 : 48
    }
    const bottleGroup = d3.select('.cycle').selectAll(".bottle")
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
      .attr("class", "bottle")
      .attr("transform", "translate(-100,-100)")

    bottleGroup.append("svg:image")
      .attr("xlink:href", (d) => d.img)
      .attr("x", 0)
      .attr("y", 0)
      .attr("opacity", 1)
      .attr("width", bottleSize.width)
      .attr("height", bottleSize.hegiht);

    bottleGroup
      .attr("opacity", 0.3)
      .transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return 2500 * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle_path_product`);
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
      width: isMobile ? 15 : 20,
      hegiht: isMobile ? 34 : 46
    }
    const trashGroup = d3.select('.cycle').selectAll(".trash")
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
      .attr("x", 0)
      .attr("y", 0)
      .attr("opacity", 1)
      .attr("width", trashSize.width)
      .attr("height", trashSize.hegiht);

    trashGroup.attr("opacity", 0.3)
      .transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return 2500 * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle_path_trash`);
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
      width: isMobile ? 40 : 56,
      hegiht: isMobile ? 40 : 56
    }
    const reproductGroup = d3.select('.cycle').selectAll(".reproduct")
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

    reproductGroup.attr("opacity", 0.3)
      .transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return 4000 * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle_path_reproduct`);
        return pathTweenWithGroup2(path, reproductSize, 3);
      })
      .remove();

    // Flake
    const flakeSize = {
      width: isMobile ? 40 : 56,
      hegiht: isMobile ? 40 : 56
    }
    const flakeGroup = d3.select('.cycle').selectAll(".flake")
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

    flakeGroup.attr("opacity", 0.3)
      .transition()
      .ease(d3.easeLinear)
      .duration(duration)
      .delay((d, i) => {
        return 4000 * i;
      })
      .attr("opacity", 1)
      .tween("pathTween", (d) => {
        let path = d3.select(`.circle_path_flake`);
        return pathTweenWithGroup2(path, flakeSize, 3);
      })
      .remove();
  }


  useEffect(() => {

    let width = containerRef.current.clientWidth - margin.left - margin.right;
    let height = containerRef.current.clientHeight - margin.top - margin.bottom;

    svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    defs = svg.append('defs');

    // make unique gradient  ids  
    const gradientID = `gradientGS`;

    // const color1 = "#F36D20";
    // const color2 = "#F4BA17";
    // const color3 = "#2EB27D";
    // const color4 = "#00B6BD";
    // const color5 = "#0072BC";
    // const color6 = "#F36D20";
    const color1 = theme.color.brand.epGreen;
    const color2 = theme.color.brand.epPurple;
    const color3 = theme.color.brand.epBlue;
    // const color4 = theme.color.brand.epDeepPurple;
    // const color5 = theme.color.brand.epGreen;
    const linearGradient1 = defs.append('linearGradient')
      .attr('id', gradientID);

    linearGradient1.selectAll('stop')
      .data([
        { offset: '10%', color: color1 },
        { offset: '50%', color: color2 },
        { offset: '95%', color: color3 },
        { offset: '100%', color: color1 },
        // { offset: '80%', color: color5 },
        // { offset: '100%', color: color6 }
      ])
      .enter().append('stop')
      .attr('offset', d => {
        return d.offset;
      })
      .attr('stop-color', d => {
        return d.color;
      });

    // const linearGradient2 = defs.append('linearGradient')
    //   .attr('id', gradientID);

    // linearGradient2.selectAll('stop')
    //   .data([
    //     { offset: '10%', color: color5 },
    //     { offset: '20%', color: color6 },
    //     { offset: '40%', color: color1 },
    //     { offset: '60%', color: color2 },
    //     { offset: '80%', color: color3 },
    //     { offset: '100%', color: color4 }
    //   ])
    //   .enter().append('stop')
    //   .attr('offset', d => {
    //     return d.offset;
    //   })
    //   .attr('stop-color', d => {
    //     return d.color;
    //   });

    cycle = svg.append("g")
      .attr("class", "cycle")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    let pathWhole = d3.path();
    pathWhole.arc(
      width / 2,
      height / 2,
      width / 2 - strokeWidth / 2,
      Math.PI * 1.5,
      Math.PI * 3.5
    );

    let pathLength;

    cycle.append("path")
      .attr("d", pathWhole)
      .attr("class", "circle_path_whole")
      .attr("fill", "none")
      // .attr("stroke",theme.color.brand.epGreen)
      .attr("stroke", `url(#${gradientID})`)
      .attr("opacity", 0.06)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-dasharray", function () {
        return pathLength = this.getTotalLength();
      })
      .attr("stroke-dashoffset", pathLength)
      .transition()
      .duration(1500)
      .attr("stroke-dashoffset", 0);

    const tau = 2 * Math.PI;
    // Whole path
    // let rOffset = isMobile?50:100;
    // let wholePath = d3.arc()
    //   .innerRadius(width / 2 - rOffset)
    //   .outerRadius(width / 2)
    //   .startAngle(0);

    const arcTween = (newAngle) => {

      // The function passed to attrTween is invoked for each selected element when
      // the transition starts, and for each element returns the interpolator to use
      // over the course of transition. This function is thus responsible for
      // determining the starting angle of the transition (which is pulled from the
      // element’s bound datum, d.endAngle), and the ending angle (simply the
      // newAngle argument to the enclosing function).
      return function (d) {

        // To interpolate between the two angles, we use the default d3.interpolate.
        // (Internally, this maps to d3.interpolateNumber, since both of the
        // arguments to d3.interpolate are numbers.) The returned function takes a
        // single argument t and returns a number between the starting angle and the
        // ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
        // newAngle; and for 0 < t < 1 it returns an angle in-between.
        var interpolate = d3.interpolate(d.endAngle, newAngle);

        // The return value of the attrTween is also a function: the function that
        // we want to run for each tick of the transition. Because we used
        // attrTween("d"), the return value of this last function will be set to the
        // "d" attribute at every tick. (It’s also possible to use transition.tween
        // to run arbitrary code for every tick, say if you want to set multiple
        // attributes from a single function.) The argument t ranges from 0, at the
        // start of the transition, to 1, at the end.
        return function (t) {

          // Calculate the current arc angle based on the transition time, t. Since
          // the t for the transition and the t for the interpolate both range from
          // 0 to 1, we can pass t directly to the interpolator.
          //
          // Note that the interpolated angle is written into the element’s bound
          // data object! This is important: it means that if the transition were
          // interrupted, the data bound to the element would still be consistent
          // with its appearance. Whenever we start a new arc transition, the
          // correct starting angle can be inferred from the data.
          d.endAngle = interpolate(t);

          // Lastly, compute the arc path given the updated data! In effect, this
          // transition uses data-space interpolation: the data is interpolated
          // (that is, the end angle) rather than the path string itself.
          // Interpolating the angles in polar coordinates, rather than the raw path
          // string, produces valid intermediate arcs during the transition.
          // return wholePath(d);
        };
      };
    }
    const color = d3.interpolateRainbow;

    // cycle.append("g")
    //   .attr("transform", `translate(${width / 2},${height / 2})`)
    //   .append("path")
    //   .attr("class", "circle_path_whole")
    //   .datum({ endAngle: 0 * tau })
    //   .attr("stroke", "#009999")
    //   .attr("opacity", 1)
    //   .attr("d", wholePath)
    //   .transition()
    //   .duration(1500)
    //   .attrTween("d", arcTween(1 * tau));

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
      .attr("class", "circle_path_product")
      .attr("fill", "none")
      // .attr("stroke", "#009999")
      .attr("opacity", 0.12)
      .attr("stroke-width", strokeWidth);

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
      .attr("stroke-width", strokeWidth);

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
      .attr("stroke-width", strokeWidth);

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

  // Sample the SVG path uniformly with the specified precision.
  function samples(path, precision) {
    var n = path.getTotalLength(), t = [0], i = 0, dt = precision;
    while ((i += dt) < n) t.push(i);
    t.push(n);
    return t.map(function (t) {
      var p = path.getPointAtLength(t), a = [p.x, p.y];
      a.t = t / n;
      return a;
    });
  }

  // Compute quads of adjacent points [p0, p1, p2, p3].
  function quads(points) {
    return d3.range(points.length - 1).map(function (i) {
      var a = [points[i - 1], points[i], points[i + 1], points[i + 2]];
      a.t = (points[i].t + points[i + 1].t) / 2;
      return a;
    });
  }

  // Compute stroke outline for segment p12.
  function lineJoin(p0, p1, p2, p3, width) {
    var u12 = perp(p1, p2),
      r = width / 2,
      a = [p1[0] + u12[0] * r, p1[1] + u12[1] * r],
      b = [p2[0] + u12[0] * r, p2[1] + u12[1] * r],
      c = [p2[0] - u12[0] * r, p2[1] - u12[1] * r],
      d = [p1[0] - u12[0] * r, p1[1] - u12[1] * r];

    if (p0) { // clip ad and dc using average of u01 and u12
      var u01 = perp(p0, p1), e = [p1[0] + u01[0] + u12[0], p1[1] + u01[1] + u12[1]];
      a = lineIntersect(p1, e, a, b);
      d = lineIntersect(p1, e, d, c);
    }

    if (p3) { // clip ab and dc using average of u12 and u23
      var u23 = perp(p2, p3), e = [p2[0] + u23[0] + u12[0], p2[1] + u23[1] + u12[1]];
      b = lineIntersect(p2, e, a, b);
      c = lineIntersect(p2, e, d, c);
    }

    return "M" + a + "L" + b + " " + c + " " + d + "Z";
  }

  // Compute intersection of two infinite lines ab and cd.
  function lineIntersect(a, b, c, d) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3,
      y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3,
      ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [x1 + ua * x21, y1 + ua * y21];
  }

  // Compute unit vector perpendicular to p01.
  function perp(p0, p1) {
    var u01x = p0[1] - p1[1], u01y = p1[0] - p0[0],
      u01d = Math.sqrt(u01x * u01x + u01y * u01y);
    return [u01x / u01d, u01y / u01d];
  }

  return (
    <Container ref={containerRef}>
      <svg ref={svgRef} />
    </Container>
  )
}

export default PlasticCycle;