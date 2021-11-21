import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import * as d3 from 'd3';
import { useAnimationFrameLoop } from "react-timing-hooks";

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

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const PlasticCycle = ({
  currentChapter
}) => {

  let containerRef = useRef(null);
  let svgRef = useRef(null);
  let svg;
  let cycle;

  

  const margin = { top: 0, right: 0, bottom: 0, left: 0 };

  useAnimationFrameLoop(updateParticle, currentChapter !== 0);

  function updateParticle() {

  }


  useEffect(() => {

    let width = containerRef.current.clientWidth - margin.left - margin.right;
    let height = containerRef.current.clientHeight - margin.top - margin.bottom;

    svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

    cycle = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    cycle.append("circle")
      .attr("cx", width/ 2)
      .attr("cy", height / 2)
      .attr("r", width/2 - 50)
      .attr("stroke", "#009999")
      .attr("stroke-width", 100)
      .attr("opacity", 0.05);

  }, []);

  return (
    <Container ref={containerRef}>
      <svg ref={svgRef} />
    </Container>
  )
}

export default PlasticCycle;