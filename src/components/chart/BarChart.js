import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import styled from "styled-components";
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 42px - 20px);
  svg{
    width: 100%;
    height: 100%;
  }
`;

const BarChart = ({
  data,
  stage
}) => {

  const marginUnit = isMobile ? 24 : 24;
  const margin = { top: marginUnit * 1, right: isMobile?marginUnit * 0.5:marginUnit * 0, bottom: marginUnit * 1, left: marginUnit * 0 };

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
    console.log('stage: ' + stage);
  }, [stage]);

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
    data.forEach((item, i, arr) => {
      if (i === 0) {
        tickValues.push(item.year);
      }
      else if (i === arr.length - 1) {
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

    if (true) {
      xScaleData = d3.axisBottom().scale(x).tickValues(tickValues)
      // .tickSize(-height);
    } else {
      xScaleData = d3.axisBottom().scale(x)
      // .tickSize(-height);
    }

    chart = svg.select(".chart.barChart");

    const t = chart.transition()
      .duration(500)
      .ease(d3.easeExpOut);

    d3.select(".xAxis.barChart").transition(t).call(xScaleData);
    d3.select(".yAxis.barChart").transition(t).call(d3.axisLeft(y).tickSize(-width));

    chart.selectAll("rect")
      .data(data)
      .join(
        enter => enter.append("rect")
          .attr("class", `bar ${stage < 4 ? 'positive' : 'negative'}`)
          .attr("width", x.bandwidth())
          .attr("x", function (d) { return x(d.year); })
          .attr("y", height)
          .attr("height", 0)
          .call(enter => enter.transition(t)
            .delay((d, i) => i * 50)
            .attr("y", function (d) { return y(d.value); })
            .attr("opacity", 1)
            .attr("height", function (d) { return height - y(d.value); })
          ),
        update => update
          .attr("class", `bar ${stage < 4 ? 'positive' : 'negative'}`)
          .attr("width", x.bandwidth())
          .attr("x", function (d) { return x(d.year); })
          .attr("y", height)
          .attr("opacity", 1)
          .attr("height", 0)
          .call(enter => enter.transition(t)
            .delay((d, i) => i * 50)
            .attr("y", function (d) { return y(d.value); })
            .attr("opacity", 1)
            .attr("height", function (d) { return height - y(d.value); })
          ),
        exit => exit
          .call(exit => exit.transition().duration(500)
            .attr("y", height)
            .attr("height", 0)
            .remove()
          )
      );

    // World Product
    if (stage === 2) {
      setTimeout(function () {
        chart.selectAll("rect")
          .transition()
          .duration(1000)
          // .ease(d3.ease)
          .attr("opacity", (d, i, arr) => {
            if (i === 0 || i === (arr.length - 1)) {
              return 1;
            }
            else {
              return 0.1;
            }
          })
          .attr("class", (d, i, arr) => {
            if (i === 0) {
              return 'bar highlight delay1';
            }
            else if (i === (arr.length - 1)) {
              return 'bar highlight delay2';
            }
            else {
              return 'bar positive recycle'
            }
          });

        chart.append("g")
          .attr("transform", `translate(${x(2020) + 40},${200})`)
          .attr("class", "s1_text")
          .append("text")
          .attr("class", 'bar_value_text')
          .attr("x", 0)
          .attr("y", 0)
          .attr("fill", "#fff")
          .attr("transform", "rotate(-90)")
          .text("3억 6700만톤");

        chart.append("g")
          .attr("class", "s1_text")
          .attr("transform", `translate(${x(2020) + 8},${16})`)
          .append("text")
          .attr("class", 'bar_mark_text')
          .attr("x", 0)
          .attr("y", 0)
          .attr("fill", "#fff")
          .text("280배");
      }, 1000);
    }
    else{
      chart.selectAll(".s1_text").remove();
    }
    
    if (stage === 4) {
      setTimeout(function () {
        chart.selectAll("rect")
          .transition()
          .duration(1000)
          .attr("class", (d, i, arr) => {
            if (i === (arr.length - 1)) {
              return 'bar mark delay2';
            }
            else {
              return 'bar positive recycle'
            }
          });

        chart.append("g")
          .attr("transform", `translate(${x(2021) + 56},${200})`)
          .attr("class", "s2_text")
          .append("text")
          .attr("class", 'bar_value_text')
          .attr("x", 0)
          .attr("y", 0)
          .attr("fill", "#fff")
          .attr("transform", "rotate(-90)")
          .text("134 킬로그램");

      }, 1000);
    }
    else{
      chart.selectAll(".s2_text").remove();
    }
    // recycling mark
    if (stage === 6) {

      chart.selectAll("rect.recycle")
        .data(data)
        .join(
          enter => enter.append("rect")
            .attr("class", `bar positive recycle`)
            .attr("width", x.bandwidth())
            .attr("x", function (d) { return x(d.year); })
            .attr("y", height)
            .attr("height", 0)
            .call(enter => enter.transition(t)
              .delay((d, i) => 400 + i * 50)
              .attr("y", function (d) { return y(d.recycle); })
              .attr("height", function (d) { return height - y(d.recycle); })
            ),
          update => update
            .attr("class", `bar positive recycle`)
            .attr("width", x.bandwidth())
            .attr("x", function (d) { return x(d.year); })
            .attr("y", height)
            .attr("height", 0)
            .call(enter => enter.transition(t)
              .delay((d, i) => 400 + i * 50)
              .attr("y", function (d) { return y(d.recycle); })
              .attr("height", function (d) { return height - y(d.recycle); })
            ),
          exit => exit
            .call(exit => exit.transition().duration(500)
              .attr("y", height)
              .attr("height", 0)
              .remove()
            )
        );

      chart.selectAll("text.recycle")
        .data(data)
        .join(
          enter => enter.append("text")
            .attr("class", `text recycle`)
            .attr("x", function (d) { return x(d.year) + 4; })
            .attr("y", function (d) { return y(d.recycle) + 24; })
            .attr("opacity", 0)
            .text((d) => parseInt(d.recycle / d.value * 100) + '%')
            .call(enter => enter.transition(t)
              .delay((d, i) => 800)
              .attr("opacity", 1)
            )
          ,
          update => update
            .attr("class", `text recycle`)
            .attr("x", function (d) { return x(d.year) + 4; })
            .attr("y", function (d) { return y(d.recycle) + 24; })
            .attr("opacity", 0)
            .text((d) => parseInt(d.recycle / d.value * 100) + '%')
            .call(enter => enter.transition(t)
              .delay((d, i) => 800)
              .attr("opacity", 1)
            )
          ,
          exit => exit
            .call(exit => exit.transition().duration(500)
              .attr("opacity", 0)
              .attr("x", function (d) { return x(d.year); })
              .attr("y", function (d) { return y(d.recycle); })
              .remove()
            )
        );

      setTimeout(function () {
        chart.append("g")
          .attr("transform", `translate(${x(2021) + 48},${160})`)
          .attr("class", "s3_text")
          .append("text")
          .attr("class", 'bar_value_text')
          .attr("x", 0)
          .attr("y", 0)
          .attr("fill", "#fff")
          .attr("transform", "rotate(-90)")
          .text("113.6만 톤");
      }, 1000);

    } else {
      chart.selectAll("text.recycle").remove();
      chart.selectAll(".s3_text").remove();
    }

    if (stage === 7) {
      setTimeout(function () {
        chart.append("g")
          .attr("transform", `translate(${x(2017) + 64},${160})`)
          .attr("class", "s4_text")
          .append("text")
          .attr("class", 'bar_value_text')
          .attr("x", 0)
          .attr("y", 0)
          .attr("fill", "#fff")
          .attr("transform", "rotate(-90)")
          .text("881.2만 톤");
      }, 1000);
    }
    else{
      chart.selectAll(".s4_text").remove();
    }
  }



  return (
    <Container ref={containerRef}>
      <svg ref={svgRef} />
    </Container>
  )
}

export default BarChart;