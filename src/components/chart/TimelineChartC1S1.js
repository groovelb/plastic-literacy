import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import styled from "styled-components";

import ic_movie from "../../assets/img/icon/ic_movie.svg";
import ic_music from "../../assets/img/icon/ic_music.svg";
import ic_electric from "../../assets/img/icon/ic_electric.svg";
import ic_medical from "../../assets/img/icon/ic_medical.svg";
import ic_space from "../../assets/img/icon/ic_rocket.svg";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BarChart = ({
  data,
}) => {

  const margin = { top: 20, right: 20, bottom: 70, left: 40 };

  let containerRef = useRef(null);
  let svgRef = useRef(null);
  let svg;
  let chart;

  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [isStart, setIsStart] = useState(false);

  // Declare Scale
  let x;
  let y;
  let xAxis;
  let yAxis;

  useEffect(() => {

    let width = containerRef.current.clientWidth - margin.left - margin.right;
    let height = containerRef.current.clientHeight - margin.top - margin.bottom;

    svg = d3.select(svgRef.current);

    // set the ranges
    x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);

    y = d3.scaleLinear()
      .range([height, 0]);

    x.domain(data.map(function (d) { return d.year; }));
    y.domain([0, d3.max(data, function (d) { return d.value; })]);

    // Initiate Chart Setting
    if (!isStart) {
      setIsStart(true);
      setInnerWidth(width);
      setInnerHeight(height);

      chart = svg
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("class", "chart timeline")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      xAxis = chart.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "xAxis timeline");

      xAxis.call(d3.axisBottom(x));

      yAxis = chart.append("g")
        .attr("class", "yAxis timeline");

      update();
    }
    // Update Cycle
    else {
      // update();
    }
    return () => {
    }
  }, [data]);

  function update() {

    let width = containerRef.current.clientWidth - margin.left - margin.right;
    let height = containerRef.current.clientHeight - margin.top - margin.bottom;

    // set the ranges
    x = d3.scaleLinear()
      .range([0, width]);

    y = d3.scaleLinear()
      .range([height / 2, 0]);

    x.domain([1780, 2050]);
    y.domain([0, d3.max(data, function (d) { return d.value; })]);

    d3.select(".xAxis.timeline").call(
      d3.axisBottom(x)
        .tickValues([1800, 1900, 2000])
        .tickFormat((d) => { return d + '년대' })
    );

    chart = svg.select(".chart.timeline");

    const t = chart.transition()
      .duration(750);

    // chart.selectAll("rect")
    //   .data(data)
    //   .join(
    //     enter => enter.append("circle")
    //       .attr("class", "bar positive")
    //       .attr("width", x.bandwidth())
    //       .attr("cx", function (d) { return x(d.year); })
    //       .attr("cy", height)
    //       .attr("height", 0)
    //       .call(enter => enter.transition(t)
    //         .attr("y", function (d) { return y(d.value); })
    //         .attr("height", function (d) { return height - y(d.value); })
    //       ),
    //     update => update
    //       .attr("class", "bar positive")
    //       .attr("width", x.bandwidth())
    //       .attr("x", function (d) { return x(d.year); })
    //       .attr("y", height)
    //       .attr("height", 0)
    //       .call(enter => enter.transition(t)
    //         .attr("y", function (d) { return y(d.value); })
    //         .attr("height", function (d) { return height - y(d.value); })
    //       ),
    //     exit => exit
    //       .call(exit => exit.transition(t)
    //       .attr("y", height)
    //       .attr("height", 0)
    //       .remove()
    //     )
    //   )

    chart.selectAll(".marker").exit().remove();

    // Node Enter
    const enter = chart.selectAll(".marker")
      .data(data)
      .enter();

    // Buttom circle
    enter.append("circle")
      .attr("class", "marker")
      .attr("cx", function (d) { return x(d.year); })
      .attr("cy", height)
      .attr("r", 2)
      .attr("fill", '#fff');

    // line
    chart.selectAll(".line")
      .data(data)
      .enter()
      .append("line")
      .attr("class", "line")
      .attr("x1", function (d) { return x(d.year); })
      .attr("x2", function (d) { return x(d.year); })
      .attr("y1", height)
      .attr("y2", function (d) { return y(d.value) + 160; })
      .attr("stroke-width", '0.5px')
      .attr("opacity", 0.3)
      .style("stroke-dasharray", ("4, 4"))
      .attr("stroke", '#f0f0f0');

    // Top circle
    chart.selectAll(".marker2")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "marker2")
      .attr("cx", function (d) { return x(d.year); })
      .attr("cy", function (d) { return y(d.value) + 160; })
      .attr("r", 32)
      .attr("fill", '#fff');

      enter.append("svg:image")
      .attr("xlink:href", (d) => d.img)
      .attr("x", function (d) { return x(d.year) - 32; })
      .attr("y", function (d) { return y(d.value) + 160 - 32; })
      .attr("height", 64)
      .attr("width", 64);

    // Text
    let text = chart.selectAll(".exp")
      .data(data)
      .enter()
      .append("text")
      .attr("text-anchor", "start")
      .attr("class", "exp")
      .attr("x", function (d) { return x(d.year) + 45; })
      .attr("y", function (d) { return y(d.value) + 160 - 20; })
      .attr("fill", "#fff")
      .text((d) => d.exp)
      .attr("dy", "0.8em");

    d3.selectAll(".exp").call(wrap, 180);


    // Add a <tspan class="text"> for every text line.
    // text.selectAll("tspan.text")
    //   .data(d => d.exp.split("\n"))
    //   .enter()
    //   .append("tspan")
    //   .attr("class", "text")
    //   .attr("fill","#fff")
    //   .text(d => d)
    //   .attr("x", function (d) { return x(d.year); })
    //   // .attr("dx", 0)
    //   .attr("dy", 22);
  }

  function wrap(text, width) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", d3.select(this).attr("x")).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", d3.select(this).attr("x")).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }

  return (
    <Container ref={containerRef}>
      <svg ref={svgRef} />
    </Container>
  )
}

export default BarChart;