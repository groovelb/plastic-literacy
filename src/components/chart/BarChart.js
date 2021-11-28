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
  const margin = { top: marginUnit*1, right: marginUnit*2, bottom: marginUnit*2, left: marginUnit*4 };

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

    y.domain([0, d3.max(data, function (d) { return d.value * 1.5; })]);



    // Initiate Chart Setting
    if (!isStart) {
      setIsStart(true);
      setInnerWidth(width);
      setInnerHeight(height);

      chart = svg
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("class", "chart barChart")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      xAxis = chart.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "xAxis barChart");

      xAxis.call(d3.axisBottom(x).ticks(4));

      yAxis = chart.append("g")
        .attr("class", "yAxis barChart");


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
    let tickValues = [];
    data.forEach((item,i) => {
      if(i%3===0){
        tickValues.push(item.year);
      }
    })

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

    let xScaleData;

    if(true){
      xScaleData = d3.axisBottom().scale(x).tickValues(tickValues)
      // .tickSize(-height);
    }else{
      xScaleData = d3.axisBottom().scale(x)
      // .tickSize(-height);
    }
    
    d3.select(".xAxis.barChart").transition().duration(1000).call(xScaleData);
    d3.select(".yAxis.barChart").transition().duration(1000).call(d3.axisLeft(y).tickSize(-width));

    chart = svg.select(".chart.barChart");

    const t = chart.transition()
      .duration(750);

    chart.selectAll("rect")
      .data(data)
      .join(
        enter => enter.append("rect")
          .attr("class", "bar positive")
          .attr("width", x.bandwidth())
          .attr("x", function (d) { return x(d.year); })
          .attr("y", height)
          .attr("height", 0)
          .call(enter => enter.transition(t)
            .attr("y", function (d) { return y(d.value); })
            .attr("height", function (d) { return height - y(d.value); })
          ),
        update => update
          .attr("class", "bar positive")
          .attr("width", x.bandwidth())
          .attr("x", function (d) { return x(d.year); })
          .attr("y", height)
          .attr("height", 0)
          .call(enter => enter.transition(t)
            .attr("y", function (d) { return y(d.value); })
            .attr("height", function (d) { return height - y(d.value); })
          ),
        exit => exit
          .call(exit => exit.transition().duration(200)
          .attr("y", height)
          .attr("height", 0)
          .remove()
        )
      )
  }



  return (
    <Container ref={containerRef}>
      <svg ref={svgRef} />
    </Container>
  )
}

export default BarChart;