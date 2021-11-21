import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from "styled-components";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";
import { sankeyData } from "../data/public/dataSankeyChart";

const Container = styled.div`
  width: ${props => props.theme.size.liveArea};
  svg{
    width: 800px;
    height: 600px
  }
`;

const width = 800;
const height = 600;

const Sankey = ({ }) => {

  let svgRef = useRef(null);
  let svg;

  // format variables
  const formatNumber = d3.format(",.0f"), // zero decimal places
    format = function (d) { return formatNumber(d); },
    color = d3.scaleOrdinal(d3.schemeCategory10);

  useEffect(() => {
    svg = d3.select(svgRef.current)
      .append("g")
      .attr("transform", "translate(0,0)");

    // Set the sankey diagram properties
    const sankeyLayout = sankey()
      .nodeWidth(36)
      .nodePadding(40)
      .size([width, height]);

    const path = sankeyLayout.links();
    const graph = sankeyLayout(sankeyData);

    // add in the links
    const link = svg.append("g").selectAll(".link")
      .data(graph.links)
      .enter().append("path")
      .attr("class", "link")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke-width", function (d) { return d.width; });

    link.append("title")
      .text(function (d) {
        return d.source.id + " → " +
          d.target.id + "\n" + format(d.value);
      });


    link.append("circle")
      .attr("cx",0)
      .attr("cy",0)
      .attr("r",4)
      .attr("fill","#FA0000")
      .trantition()
      .duration(300)
      .ease("linear")
      .tween("pathTween", (d) => {return pathTween(link)});



    // add in the nodes
    const node = svg.append("g").selectAll(".node")
      .data(graph.nodes)
      .enter().append("g")
      .attr("class", "node");

    // add the rectangles for the nodes
    node.append("rect")
      .attr("x", function (d) { return d.x0; })
      .attr("y", function (d) { return d.y0; })
      .attr("height", function (d) { return d.y1 - d.y0; })
      .attr("width", 36)
      .style("fill", function (d) {
        return d.color = color(d.name.replace(/ .*/, ""));
      })
      .style("stroke", function (d) {
        return d3.rgb(d.color).darker(2);
      })
      .append("title")
      .text(function (d) {
        return d.name + "\n" + format(d.value);
      });

    // add in the title for the nodes
    node.append("text")
      .attr("x", function (d) { return d.x0 - 6; })
      .attr("y", function (d) { return (d.y1 + d.y0) / 2; })
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text(function (d) { return d.name; })
      .filter(function (d) { return d.x0 < width / 2; })
      .attr("x", function (d) { return d.x1 + 6; })
      .attr("text-anchor", "start");

  }, []);

  function pathTween(path){
    var length = path.node().getTotalLength(); // Get the length of the path
    var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length
    return function(t){
      var point = path.node().getPointAtLength(r(t)); // Get the next point along the path
      d3.select(this) // Select the circle
        .attr("cx", point.x) // Set the cx
        .attr("cy", point.y) // Set the cy
    }
  }
  
  return (
    <Container>
      <svg ref={svgRef} />
    </Container>
  )
}


export default Sankey;