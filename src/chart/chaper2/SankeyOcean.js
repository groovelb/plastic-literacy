import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import styled, { keyframes } from "styled-components";
import { useAnimationFrameLoop } from "react-timing-hooks";
import { sankey, sankeyLinkHorizontal, sankeyJustify, sankeyLeft, sankeyCenter } from "d3-sankey";
import { sankeyData } from "../data/public/dataSankeyChart";
import theme from "../../assets/theme/theme";
import ic_throw from "../../assets/img/icon/ic_throw.svg";
import ic_discharge from "../../assets/img/icon/ic_ discharge.svg";
import ic_collect from "../../assets/img/icon/ic_collect.svg";
import ic_select from "../../assets/img/icon/ic_select.svg";
import ic_proceed from "../../assets/img/icon/ic_proceed.svg";


const Container = styled.div`
  width: ${props => props.theme.size.liveArea};
  svg{
    width: 100%;
    height: 100%;
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
      "name": "기타물질"
    },
    {
      "node": 8,
      "category": "final",
      "name": "재활용"
    },
    {
      "node": 9,
      "category": "final",
      "name": "소각"
    },
    {
      "node": 10,
      "category": "final",
      "name": "매립"
    },
    {
      "node": 11,
      "category": "final",
      "name": "위탁처리"
    }
  ],
  "links": [
    {
      "name": "육상 배출1",
      "source": 0,
      "target": 2,
      "value": 270000 / 2,
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
      "value": 270000 / 2,
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
      "value": 419000 * 7/10,
      "isReal": false
    },
    {
      "name": "폐기물 선별2",
      "source": 5,
      "target": 7,
      "value": 419000 * 3/10,
      "isReal": false
    },
    {
      "name": "플라스틱 처리1",
      "source": 6,
      "target": 8,
      "value": 419000 * 7/30,
      "isReal": false
    },
    {
      "name": "플라스틱 처리2",
      "source": 6,
      "target": 9,
      "value": 419000 * 7/30,
      "isReal": false
    },
    {
      "name": "플라스틱 처리3",
      "source": 6,
      "target": 10,
      "value": 419000 * 7/30,
      "isReal": false
    },
    {
      "name": "기타 처리",
      "source": 7,
      "target": 9,
      "value": 419000 * 3/30,
      "isReal": false
    },
    {
      "name": "기타 처리",
      "source": 7,
      "target": 10,
      "value": 419000 * 3/30,
      "isReal": false
    },
    {
      "name": "기타 처리",
      "source": 7,
      "target": 11,
      "value": 419000 * 3/30,
      "isReal": false
    },
  ]
};

let link;
let defs;
let graph;
let svg;

const Sankey = ({
  width,
  height,
  currentStage,
  currentChapter,
}) => {

  const margin = { top: 80, right: 10, bottom: 10, left: 24 },
    innerWidth = width - margin.left - margin.right,
    innerHeight = height - margin.top - margin.bottom;

  // format constiables
  const formatNumber = d3.format(",.0f"), // zero decimal places
    format = function (d) { return formatNumber(d); },
    color = d3.scaleOrdinal(d3.schemeCategory10);

  let svgRef = useRef(null);

  const [isInitiate, setIsInitiate] = useState(false);

  // append the svg object to the body of the page
  useEffect(() => {

    svg = d3.select(svgRef.current)
      .attr("width", innerWidth + margin.left + margin.right)
      .attr("height", innerHeight + margin.top + margin.bottom)
      .append("g")
      .attr("class", "sankey")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    // Set the sankey diagram properties
    const sankeyLayout = sankey()
      .nodeWidth(80)
      .nodePadding(56)
      .nodeAlign(sankeyLeft)
      .size([innerWidth, innerHeight]);

    // load the data


    graph = sankeyLayout(data);

    // Set Node Group
    const stage = svg.append("g")
      .attr("transform", "translate(0,0)");

    let nodeGroupTemp = [
      { name: '생산', depth: 0, x: null, img: ic_throw },
      { name: '배출', depth: 1, x: null, img: ic_discharge },
      { name: '수거', depth: 2, x: null, img: ic_collect },
      { name: '선별', depth: 3, x: null, img: ic_select },
      { name: '처리', depth: 4, x: null, img: ic_proceed },
    ];

    graph.nodes.forEach((node) => {
      // 건설폐기물 재활용 노드 강제 이동
      if (node.index === 18) {
        node.depth = 4;
      }

      if (nodeGroupTemp[node.depth].x === null) {
        nodeGroupTemp[node.depth].x = node.x0;

        stage.append("text")
              .attr("x",node.x0)
              .attr("y",-64)
              .attr("class","stage_title")
              .attr("text-anchor","middle")
              .text(nodeGroupTemp[node.depth].name);

        stage.append("line")
          .attr("class", "stage")
          .attr("x1", node.x0 - 2)
          .attr("x2", node.x0 - 2)
          .attr("y1", -56)
          .attr("y2", height + 40)
          .attr("stroke", theme.color.brand.secondary600)
          .attr("stroke-width", 4)
          .attr("stroke-dasharray", 8)
          .attr("opacity", 0.5)
          .on("click", () => {
            d3.selectAll(`.link.land`)
              .style("stroke-opacity", 0.1);
            d3.selectAll(`.link_${node.depth}.land`)
              .style("stroke-opacity", 0.5);
          });
      }
    });

    defs = svg.append('defs');

    // add in the links
    link = svg.append("g").selectAll(".link")
      .data(graph.links)
      .enter().append("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke-width", function (d) { return d.width; });

    link.attr("class", (d, i) => {
      return `ocean link link_${d.source.depth} path${i}`;
    });

    // add the link titles
    link.append("title")
      .text(function (d) {
        return d.source.name + " → " +
          d.target.name + "\n" + format(d.value);
      });

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
    const valueScale = d3.scaleLinear().domain(linkExtent).range([12, 28]);

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


    const particleGroupOcean = svg.append("g").selectAll(".particleGroupOcean")
      .data(graph.links)
      .enter().append("g")
      .attr("class", (d, i) => {
        return `particleGroupOcean particleGroupOcean${i}`
      });

    setIsInitiate(true);

    return () => {
      svg = null;
      svgRef = null;
    }
  }, []);

  // Draw Gradient Link
  useEffect(() => {

    if (isInitiate) {
      link.style('stroke', (d, i) => {

        // make unique gradient  ids  
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
    }

  }, [isInitiate])

  // Particle
  useEffect(() => {
    updateParticle();
  }, [currentStage]);

  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(false);

  function updateParticle() {
    if (1 <= currentStage && currentStage <= 4) {
      if (count === 0) {
        randerParticle();
      }
      else if (count % 125 === 0) {
        console.log('update');
        randerParticle();
      }
      setCount(count + 1);
    }
  }

  useAnimationFrameLoop(updateParticle, currentStage === 0)

  useEffect(() => {
    if (currentChapter !== 3) {
      // console.log('stop!');
      setStop(true);
    }
    else {
      // console.log('start!');
    }
  }, [currentChapter]);

  useEffect(() => {
    // console.log(`stage: ${currentStage}`);
  }, [currentStage])

  function randerParticle() {
    // console.log(currentChapter);
    if (1 <= currentStage && currentStage <= 4) {
      let linkNum = graph.links.length;

      for (let i = 0; i < linkNum; i++) {
        let targetColor = graph.links[i].target.color;
        if (graph.links[i].source.depth === currentStage - 1) {

          d3.select(`.particleGroupOcean${i}`)
            .selectAll('.particle')
            .data(() => {
              let data = [];
              let num = parseInt(graph.links[i].value / 1000);
              let bandHeight = (graph.links[i].width - 12);
              for (let index = 0; index < num; index++) {
                data.push(parseInt(Math.random() * bandHeight) - bandHeight / 2);
              }
              return data;
            })
            .enter().append("rect")
            .attr("width", 6)
            .attr("height", 6)
            .attr("opacity", 0)
            // .attr("r", 3)
            .attr("class", "particle")
            .attr("fill", targetColor)
            .transition()
            .duration(1500)
            .delay(() => {
              return Math.random() * 3000;
            })
            .attr("opacity", 1)
            .tween("pathTween", (d) => {
              if (svg !== null) {
                let path = svg.select(`.path${i}`)
                return pathTween(path, d, 3);
              }
            }).remove()
        }
      }
    }
  }

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

  function pathTween(path, offset, r) {
    var length = path.node().getTotalLength(); // Get the length of the path
    var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length
    return function (t) {
      var point = path.node().getPointAtLength(r(t)); // Get the next point along the path
      d3.select(this) // Select the circle
        .attr("x", point.x + 0) // Set the cx
        .attr("y", point.y + offset) // Set the cy
    }
  }

  return (
    <Container id="container_ocean">
      <svg ref={svgRef} />
    </Container>
  )
}


export default Sankey;