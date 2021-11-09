import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import styled from "styled-components";
import { sankey, sankeyLinkHorizontal, sankeyJustify, sankeyLeft, sankeyCenter } from "d3-sankey";
import { sankeyData } from "../data/public/dataSankeyChart";
import theme from "../../assets/theme/theme";
import ic_throw from "../../assets/img/icon/ic_throw.svg";
import ic_discharge from "../../assets/img/icon/ic_ discharge.svg";
import ic_collect from "../../assets/img/icon/ic_collect.svg";
import ic_select from "../../assets/img/icon/ic_select.svg";
import ic_proceed from "../../assets/img/icon/ic_proceed.svg";

// set the dimensions and margins of the graph
const width = 1280;
const height = 600;
const margin = { top: 168, right: 16, bottom: 10, left: 10 },
  innerWidth = width - margin.left - margin.right,
  innerHeight = height - margin.top - margin.bottom;

const Container = styled.div`
  width: ${props => props.theme.size.liveArea};
  background-color: #122229;
  padding: 48px;
  svg{
    width: ${`${width}px`};
    height: ${`${height}px`};
    position: absolute;
  }
  canvas{
    position: absolute;
    width: ${`${width}px`};
    height: ${`${height}px`};
  }
`;

let data = {
  "nodes": [
    {
      "node": 0,
      "name": "생활 폐기"
    },
    {
      "node": 1,
      "name": "사업장 폐기"
    },
    {
      "node": 2,
      "name": "건설 폐기"
    },
    {
      "node": 3,
      "name": "지정 폐기"
    },
    {
      "node": 4,
      "name": "주택 폐기물"
    },
    {
      "node": 5,
      "name": "산업 폐기물"
    },
    {
      "node": 6,
      "name": "종량제 분류"
    },
    {
      "node": 7,
      "name": "재활용품"
    },
    {
      "node": 8,
      "name": "잔재물"
    },
    {
      "node": 9,
      "name": "재활용"
    },
    {
      "node": 10,
      "name": "시멘트 소성료",
      "isReused": false
    },
    {
      "node": 11,
      "name": "매립",
      "isReused": false
    },
    {
      "node": 12,
      "name": "소각",
      "isReused": true
    },
    {
      "node": 13,
      "name": "소각.매립",
      "isReused": true
    },
    {
      "node": 14,
      "name": "PP.PE",
      "isReused": true
    },
    {
      "node": 15,
      "name": "PET",
      "isReused": true
    },
    {
      "node": 16,
      "name": "비닐",
      "isReused": true
    }
  ],
  "links": [
    {
      "name": "생활배출",
      "source": 0,
      "target": 4,
      "value": 323
    },
    {
      "name": "산업배출1",
      "source": 1,
      "target": 5,
      "value": 30
    },
    {
      "name": "산업배출2",
      "source": 2,
      "target": 5,
      "value": 30
    },
    {
      "name": "산업배출3",
      "source": 3,
      "target": 5,
      "value": 30
    },
    {
      "name": "주택배출1",
      "source": 4,
      "target": 6,
      "value": 178
    },
    {
      "name": "주택배출2",
      "source": 4,
      "target": 7,
      "value": 145
    },
    {
      "name": "산업배툴 선별1",
      "source": 5,
      "target": 9,
      "value": 45
    },
    {
      "name": "산업배툴 선별2",
      "source": 5,
      "target": 9,
      "value": 45
    },
    {
      "name": "제활용품 배출1",
      "source": 7,
      "target": 8,
      "value": 67
    },
    {
      "name": "제활용품 배출2",
      "source": 7,
      "target": 9,
      "value": 77
    },
    {
      "name": "잔재물 처리1",
      "source": 8,
      "target": 10,
      "value": 56
    },
    {
      "name": "잔재물 처리2",
      "source": 8,
      "target": 11,
      "value": 8
    },
    {
      "name": "잔재물 처리3",
      "source": 8,
      "target": 12,
      "value": 3.4
    },
    {
      "name": "재활용 처리1",
      "source": 9,
      "target": 13,
      "value": 2
    },
    {
      "name": "재활용 처리2",
      "source": 9,
      "target": 14,
      "value": 17
    },
    {
      "name": "재활용 처리3",
      "source": 9,
      "target": 15,
      "value": 19.4
    },
    {
      "name": "재활용 처리4",
      "source": 9,
      "target": 16,
      "value": 41.2
    }
  ]
};


const Sankey = ({ }) => {

  // format constiables
  const formatNumber = d3.format(",.0f"), // zero decimal places
    format = function (d) { return formatNumber(d); },
    color = d3.scaleOrdinal(d3.schemeCategory10);

  let svgRef = useRef(null);
  let svg;

  const [nodeGroup, setNodeGroup] = useState([]);

  // append the svg object to the body of the page
  useEffect(() => {

    console.log('load!');
    svg = d3.select(svgRef.current)
      .attr("width", innerWidth + margin.left + margin.right)
      .attr("height", innerHeight + margin.top + margin.bottom)
      .append("g")
      .attr("class", "chart")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    // Set the sankey diagram properties
    const sankeyLayout = sankey()
      .nodeWidth(80)
      .nodePadding(56)
      .nodeAlign(sankeyLeft)
      .size([innerWidth, innerHeight]);

    const path = sankeyLayout.links();
    let freqCounter = 1;

    // load the data


    const graph = sankeyLayout(data);

    console.log(data.link);

    // Set Node Group
    let nodeGroupTemp = [
      { name: '생산', depth: 0, x: null, img:ic_throw },
      { name: '배출', depth: 1, x: null, img:ic_discharge },
      { name: '수거', depth: 2, x: null, img:ic_collect },
      { name: '선별', depth: 3, x: null, img:ic_select },
      { name: '처리', depth: 4, x: null, img:ic_proceed },
    ];

    graph.nodes.forEach((node) => {
      if (nodeGroupTemp[node.depth].x === null) {
        nodeGroupTemp[node.depth].x = node.x0;
      }
    });

    setNodeGroup(nodeGroupTemp);

    // Add state with nodes gro up 

    const stage = svg.append("g")
      .attr("transform","translate(0,-120)")
      .selectAll(".stage")
      .data(nodeGroup)
      .enter();

    stage.append("rect")
      .attr("class", "stage")
      .attr("x", function (d) { return d.x; })
      .attr("y", -40)
      .attr("width", 80)
      .attr("height", height + 40)
      .attr("fill", "#f0f6fa");


    const defs = svg.append('defs');
    // add in the links
    const link = svg.append("g").selectAll(".link")
      .data(graph.links)
      .enter().append("path")
      .attr("class", "link")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke-width", function (d) { return d.width; });

    // add the link titles
    link.append("title")
      .text(function (d) {
        return d.source.name + " → " +
          d.target.name + "\n" + format(d.value);
      });
    ;

    // add in the nodes
    const node = svg.append("g").selectAll(".node")
      .data(graph.nodes)
      .enter().append("g")
      .attr("class", "node");

    // add the rectangles for the nodes
    node.append("rect")
      .attr("x", function (d) { return d.x0; })
      .attr("y", function (d) { return d.y0; })
      .attr("height", function (d) {
        if (d.y1 - d.y0 < 20) {
          return 20;
        }
        else {
          return d.y1 - d.y0;
        }
      })
      .attr("width", sankeyLayout.nodeWidth())
      .attr("class", "node_box")
      .style("fill", function (d) {
        if (d.depth === 0) return d.color = theme.color.brand.secondary700;
        if (d.depth === 1) return d.color = theme.color.brand.emerald;
        if (d.depth === 2) return d.color = theme.color.brand.blue;
        if (d.depth === 3) return d.color = theme.color.brand.green;
        if (d.depth === 4) {
          if (d.isReused) return d.color = theme.color.brand.orange;
          else return d.color = theme.color.brand.secondary900;
        }
      })
      .append("title")
      .text(function (d) {
        return d.name + "\n" + format(d.value);
      });

    // add in the title for the nodes
    node.append("text")
      .attr("class", "node_title")
      .attr("x", function (d) { return d.x0; })
      .attr("y", function (d) { return d.y0 - 14 })
      .attr("dy", "0.35em")
      .text(function (d) { return d.name; })
      .style("fill", (d) => {
        return d.color;
      })
      .filter(function (d) { return d.x0 < innerWidth / 2; })
      .attr("text-anchor", "start");

    const linkExtent = d3.extent(graph.links, function (d) { return d.value });
    const valueScale = d3.scaleLinear().domain(linkExtent).range([12, 32]);

    node.append("text")
      .attr("class", "node_value")
      .attr("x", function (d) { return d.x0 + 4; })
      .attr("y", function (d) {
        if (d.y1 - d.y0 < 20) {
          return d.y0 + 5;
        } else {
          return (d.y1 + d.y0) / 2;
        }
      })
      .attr("dy", "0.35em")
      .attr("alignment-baseline", "middle")
      .style("font-size", (d) => {
        return valueScale(d.value);
      })
      .style("fill", "#ffffff")
      .text(function (d) { return d.value; })
      .filter(function (d) { return d.x0 < innerWidth / 2; })
      .attr("text-anchor", "start");



    link.style('stroke', (d, i) => {
      console.log('d from gradient stroke func', d);

      // make unique gradient ids  
      const gradientID = `gradient${i}`;

      const startColor = d.source.color;
      const stopColor = d.target.color;

      console.log('startColor', startColor);
      console.log('stopColor', stopColor);

      const linearGradient = defs.append('linearGradient')
        .attr('id', gradientID);

      linearGradient.selectAll('stop')
        .data([
          { offset: '10%', color: startColor },
          { offset: '90%', color: stopColor }
        ])
        .enter().append('stop')
        .attr('offset', d => {
          console.log('d.offset', d.offset);
          return d.offset;
        })
        .attr('stop-color', d => {
          console.log('d.color', d.color);
          return d.color;
        });

      return `url(#${gradientID})`;
    });

    return () => {
      console.log('unmounted!!');
      svg = null;
      svgRef = null;
      console.log(d3.select(".chart").remove());
    }
  }, []);

  return (
    <Container id="container">
      <canvas></canvas>
      <svg ref={svgRef} />
    </Container>
  )
}


export default Sankey;