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
const width = 1200;
const height = 600;
const margin = { top: 48, right: 10, bottom: 10, left: 10 },
  innerWidth = width - margin.left - margin.right,
  innerHeight = height - margin.top - margin.bottom;

const Container = styled.div`
  width: ${props => props.theme.size.liveArea};
  svg{
    width: ${`${width}px`};
    height: ${`${height}px`};
    /* position: absolute; */
  }
`;





let data = {
  "nodes": [
    {
      "node": 0,
      "category": "product",
      "name": "육상기인"
    },
    {
      "node": 1,
      "category": "product",
      "name": "해상기인"
    },
    {
      "node": 2,
      "category": "dispose",
      "name": "해안쓰레기",
      "isReal": true
    },
    {
      "node": 3,
      "category": "dispose",
      "name": "부유쓰레기",
      "isReal": true
    },
    {
      "node": 4,
      "category": "dispose",
      "name": "침적쓰레기",
      "isReal": true
    },
    {
      "node": 5,
      "category": "collect",
      "name": "폐기물",
      "isReal": true
    },
    {
      "node": 6,
      "category": "select",
      "name": "플라스틱"
    },
    {
      "node": 7,
      "category": "select",
      "name": "스티로폼"
    },
    {
      "node": 8,
      "category": "select",
      "name": "기타물질"
    },
    {
      "node": 9,
      "category": "select",
      "name": "가연성물질"
    },
    {
      "node": 10,
      "category": "select",
      "name": "불연성물질"
    },
    {
      "node": 11,
      "category": "select",
      "name": "특수폐기물"
    },
    {
      "node": 12,
      "category": "final",
      "name": "재활용"
    },
    {
      "node": 13,
      "category": "final",
      "name": "소각"
    },
    {
      "node": 14,
      "category": "final",
      "name": "매립"
    },
    {
      "node": 15,
      "category": "final",
      "name": "위탁처리"
    }
  ],
  "links": [
    {
      "name": "육상 배출1",
      "source": 0,
      "target": 2,
      "value": 270000/2,
      "isReal": false
    },
    {
      "name": "육상 배출2",
      "source": 0,
      "target": 3,
      "value": 19500,
      "isReal": false
    },
    {
      "name": "육상 배출3",
      "source": 0,
      "target": 4,
      "value": 55000,
      "isReal": false
    },
    {
      "name": "해상 배출1",
      "source": 1,
      "target": 2,
      "value": 270000/2,
      "isReal": false
    },
    {
      "name": "해상 배출2",
      "source": 1,
      "target": 3,
      "value": 19500,
      "isReal": false
    },
    {
      "name": "해상 배출3",
      "source": 1,
      "target": 4,
      "value": 55000,
      "isReal": false
    },
    {
      "name": "해안 수거",
      "source": 2,
      "target": 5,
      "value": 270000,
      "isReal": true
    },
    {
      "name": "부유 수거",
      "source": 3,
      "target": 5,
      "value": 39000,
      "isReal": true
    },
    {
      "name": "침적 수거",
      "source": 4,
      "target": 5,
      "value": 110000,
      "isReal": true
    },
    {
      "name": "폐기물 선별1",
      "source": 5,
      "target": 6,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "폐기물 선별2",
      "source": 5,
      "target": 7,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "폐기물 선별3",
      "source": 5,
      "target": 8,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "폐기물 선별4",
      "source": 5,
      "target": 9,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "폐기물 선별5",
      "source": 5,
      "target": 10,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "폐기물 선별6",
      "source": 5,
      "target": 11,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "플라스틱 처리",
      "source": 6,
      "target": 12,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "스티로폼 처리",
      "source": 7,
      "target": 12,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "기타물질 처리",
      "source": 8,
      "target": 12,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "가연성 처리",
      "source": 9,
      "target": 13,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "불연성 처리",
      "source": 10,
      "target": 14,
      "value": 69800,
      "isReal": false
    },
    {
      "name": "특수 처리",
      "source": 11,
      "target": 15,
      "value": 69800,
      "isReal": false
    }
  ]
};


const Sankey = ({currentStage}) => {

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

    console.log(graph.links);

    // Set Node Group
    const stage = svg.append("g")
      .attr("transform", "translate(0,-120)");

    let nodeGroupTemp = [
      { name: '생산', depth: 0, x: null, img: ic_throw },
      { name: '배출', depth: 1, x: null, img: ic_discharge },
      { name: '수거', depth: 2, x: null, img: ic_collect },
      { name: '선별', depth: 3, x: null, img: ic_select },
      { name: '처리', depth: 4, x: null, img: ic_proceed },
    ];

    graph.nodes.forEach((node) => {
      // 건설폐기물 재활용  노드 강제 이동
      if (node.index === 18) {
        console.log(node);
        node.depth = 4;
      }

      if (nodeGroupTemp[node.depth].x === null) {
        nodeGroupTemp[node.depth].x = node.x0;
        stage.append("rect")
          .attr("class", "stage")
          .attr("x", node.x0)
          .attr("y", -40)
          .attr("width", 80)
          .attr("height", height + 40)
          .attr("fill", theme.color.brand.secondary800)
          .attr("opacity", 0.5)
          .on("click",() => {
            console.log(node.depth);
            d3.selectAll(`.link.ocean`)
              .style("stroke-opacity",0.1);
            d3.selectAll(`.link_${node.depth}.ocean`)
              .style("stroke-opacity",0.75);
          })
      }
    });

    graph.links.forEach((link,i) => {
      link.isReal = data.links[i].isReal;
      console.log(link);
    });

    const defs = svg.append('defs'); 
    // add in the links
    const link = svg.append("g").selectAll(".link")
      .data(graph.links)
      .enter().append("path")
      .attr("class","link")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke-width", function (d) { return d.width; });

    link.attr("class",(d) => {
      console.log(d);
      return `link link_${d.source.depth} ocean`;
    });

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
        if (d.depth === 0) return d.color = theme.color.brand.secondary900;
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
      .style("fill", function (d) {
        if (d.depth === 0) return d.textColor = theme.color.brand.secondary500;
        if (d.depth === 1) return d.textColor = theme.color.brand.emerald;
        if (d.depth === 2) return d.textColor = theme.color.brand.blue;
        if (d.depth === 3) return d.color = theme.color.brand.green;
        if (d.depth === 4) {
          if (d.isReused) return d.textColor = theme.color.brand.orange;
          else return d.textColor = theme.color.brand.secondary500;
        }
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
        console.log(d);
        if(!d.isReal){
          return 16;
        }
        else{
          return valueScale(d.value);
        }     
      })
      .style("fill", "#ffffff")
      .text(function (d,i) { 
        console.log(data.nodes[i]);
        if(!data.nodes[i].isReal){
          return '추정 불가';
        }
        else{
          return d.value; 
        }
      })
      .filter(function (d) { return d.x0 < innerWidth / 2; })
      .attr("text-anchor", "start");



    link.style('stroke', (d, i) => {

      // make unique gradient ids  
      const gradientID = `gradient${i}`;

      const startColor = d.source.color;
      const stopColor = d.target.color;

      const linearGradient = defs.append('linearGradient')
        .attr('id', gradientID);

      linearGradient.selectAll('stop')
        .data([
          { offset: '10%', color: startColor },
          { offset: '90%', color: stopColor }
        ])
        .enter().append('stop')
        .attr('offset', d => {
          return d.offset;
        })
        .attr('stop-color', d => {
          return d.color;
        });

      return `url(#${gradientID})`;
    });

    return () => {
      console.log('unmounted!!');
      svg = null;
      svgRef = null;
    }
  }, []);

  useEffect(() => {
    d3.selectAll(`.link.ocean`)
      .transition()
      .duration(1500)
      .style("stroke-opacity", 0.1);
    d3.selectAll(`.link_${currentStage}.ocean`)
      .transition()
      .duration(1500)
      .style("stroke-opacity", 0.75);
  }, [currentStage]);

  return (
    <Container id="container_ocean">
      <svg ref={svgRef} />
    </Container>
  )
}


export default Sankey;