import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import styled from "styled-components";

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
    console.log(svg);
    console.log("moundet!");

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
      console.log('first load!');
      setIsStart(true);


      setInnerWidth(width);
      setInnerHeight(height);

      chart = svg
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("class", "chart")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      console.log(x);

      xAxis = chart.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "xAxis");

      xAxis.call(d3.axisBottom(x));

      yAxis = chart.append("g")
        .attr("class", "yAxis");


      update();
    }
    // Update Cycle
    else {
      update();
    }
    return () => {
      console.log()
    }
  }, [data]);

  function update() {

    let width = containerRef.current.clientWidth - margin.left - margin.right;
    let height = containerRef.current.clientHeight - margin.top - margin.bottom;

    // set the ranges
    x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);

    y = d3.scaleLinear()
      .range([height, 0]);

    x.domain(data.map(function (d) { return d.year; }));
    y.domain([0, d3.max(data, function (d) { return d.value; })]);

    d3.select(".xAxis").transition().duration(1000).call(d3.axisBottom(x));
    d3.select(".yAxis").transition().duration(1000).call(d3.axisLeft(y));

    chart = svg.select(".chart");

    const u = chart.selectAll("rect")
      .data(data);

    u.enter().append("rect")
      .merge(u)
      .transition()
      .duration(1000)
      .attr("class", "bar positive")
      .attr("x", function (d) { return x(d.year); })
      .attr("width", x.bandwidth())
      .attr("y", function (d) { return y(d.value); })
      .attr("height", function (d) { return height - y(d.value); });

    u
      .exit()
      .remove();
  }



  return (
    <Container ref={containerRef}>
      <svg ref={svgRef} />
    </Container>
  )
}

export default BarChart;