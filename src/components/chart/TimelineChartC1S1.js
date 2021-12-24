import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import styled from "styled-components";
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 100%;
  height: 100%;
  svg{
    width: 100%;
    height: 100%;
  }
`;

const BarChart = ({
  data,
}) => {

  const marginUnit = isMobile?10:20;
  const margin = { top: marginUnit*1, right: marginUnit*2, bottom: marginUnit*2, left: marginUnit*2 };

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
  let yAxis2;

  useEffect(() => {

    let width = containerRef.current.clientWidth - margin.left - margin.right;
    let height = containerRef.current.clientHeight - margin.top - margin.bottom;

    svg = d3.select(svgRef.current);

    // set the ranges
    x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);

    const offsetY = isMobile ? 40 : 240;

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
        .attr("class", "yAxis timeline")
        .attr("transform", "translate(0,0)");

      yAxis2 = chart.append("g")
        .attr("class", "yAxis timeline")
        .attr("transform", `translate(${width},0)`);

      yAxis.call(d3.axisLeft(y).tickSize(-width).tickFormat(function (d) { return ''; }));
      yAxis.call(d3.axisRight(y).tickSize(width).tickFormat(function (d) { return ''; }));

      update();
    }
    // Update Cycle
    else {
      update();
    }
    return () => {
    }
  }, [data]);

  function update() {

    let width = containerRef.current.clientWidth - margin.left - margin.right;
    let height = containerRef.current.clientHeight - margin.top - margin.bottom;

    const offsetY = isMobile ? 40 : 80;
    const r = isMobile?24:32;
    const textX = isMobile?32:45;
    const yearEnd = isMobile?2100:2080;
    const expWidth = isMobile?96:148;

    // set the ranges
    x = d3.scaleLinear()
      .range([0, width]);



    y = d3.scaleLinear()
      .range([height - offsetY, offsetY]);

    x.domain([1900, yearEnd]);
    y.domain([0, d3.max(data, function (d) { return d.value; })]);

    d3.select(".xAxis.timeline").call(
      d3.axisBottom(x)
        .tickValues([1900, 2000])
        .tickFormat((d) => { return d + '년대' })
    );

    chart = svg.select(".chart.timeline");

    const t = chart.transition()
      .duration(750);

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
      .attr("y2", function (d) { return y(d.value); })
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
      .attr("cy", function (d) { return y(d.value); })
      .attr("r", r)
      .attr("fill", '#fff');

    enter.append("svg:image")
      .attr("xlink:href", (d) => d.img)
      .attr("x", function (d) { return x(d.year) - r; })
      .attr("y", function (d) { return y(d.value) - r; })
      .attr("height", r*2)
      .attr("width", r*2);

    // Text
    let text = chart.selectAll(".exp")
      .data(data)
      .enter()
      .append("text")
      .attr("text-anchor", "start")
      .attr("class", "exp")
      .attr("x", function (d) { return x(d.year) + textX; })
      .attr("y", function (d) { return y(d.value) - 20; })
      .attr("fill", "#fff")
      .text((d) =>{ 
        let text = isMobile?d.exp2:d.exp;
        return text;
      })
      .attr("dy", "0.8em");

    d3.selectAll(".exp").call(wrap, expWidth);
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