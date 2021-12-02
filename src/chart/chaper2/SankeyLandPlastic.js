import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import { isMobile } from 'react-device-detect';

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

import illust_trash_blue from "../../assets/illust/illust_trash_blue.svg";
import illust_trash_orange from "../../assets/illust/illust_trash_orange.svg";
import illust_trash_emerald from "../../assets/illust/illust_trash_emerald.svg";

const Container = styled.div`
  /* padding: 48px; */
  width: 100%;
  height: 100%;
  svg{
    width: 100%;
    height: 100%;
    /* position: absolute; */
  }
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Space = styled.div`
  height: 240px;
`;


let data = {
  "nodes": [
    {
      "node": 0,
      "name": "생활계 플라스틱"
    },
    {
      "node": 1,
      "name": "사업장 플라스틱"
    },
    {
      "node": 2,
      "name": "지정 플라스틱"
    },
    {
      "node": 3,
      "name": "건설 플라스틱"
    },
    {
      "node": 4,
      "name": "공동.단독 주택"
    },
    {
      "node": 5,
      "name": "배출 사업장"
    },
    {
      "node": 6,
      "name": "건설공사"
    },
    {
      "node": 7,
      "name": "분리배출"
    },
    {
      "node": 8,
      "name": "종량제 봉투"
    },
    {
      "node": 9,
      "name": "사업장 폐기물"
    },
    {
      "node": 10,
      "name": "건설 폐기물"
    },
    {
      "node": 11,
      "name": "플라스틱"
    },
    {
      "node": 12,
      "name": "폐기물(잔재물 등)"
    },
    {
      "node": 13,
      "name": "재활용"
    },
    {
      "node": 14,
      "name": "매립"
    },
    {
      "node": 15,
      "name": "소각"
    },
    {
      "node": 16,
      "name": "건설폐기물 재활용"
    },
  ],
  "links": [
    {
      "name": "소비-배출1",
      "source": 0,
      "target": 4,
      "value": 4642
    },
    {
      "name": "소비-배출2",
      "source": 1,
      "target": 5,
      "value": 5577
    },
    {
      "name": "소비-배출3",
      "source": 2,
      "target": 5,
      "value": 20
    },
    {
      "name": "소비-배출4",
      "source": 3,
      "target": 6,
      "value": 586
    },
    {
      "name": "배출-수거1",
      "source": 4,
      "target": 7,
      "value": 1930
    },
    {
      "name": "배출-수거2",
      "source": 4,
      "target": 8,
      "value": 2712
    },
    {
      "name": "배출-수거3",
      "source": 5,
      "target": 9,
      "value": 5597
    },
    {
      "name": "배출-수거4",
      "source": 6,
      "target": 10,
      "value": 586
    },
    {
      "name": "수거-선별1",
      "source": 7,
      "target": 11,
      "value": 1308
    },
    {
      "name": "수거-선별2",
      "source": 7,
      "target": 12,
      "value": 622
    },
    {
      "name": "수거-선별3",
      "source": 8,
      "target": 12,
      "value": 2712
    },
    {
      "name": "수거-선별4",
      "source": 9,
      "target": 11,
      "value": 4476
    },
    {
      "name": "수거-선별5",
      "source": 9,
      "target": 12,
      "value": 1121
    },
    {
      "name": "수거-선별6",
      "source": 10,
      "target": 11,
      "value": 385
    },
    {
      "name": "수거-선별7",
      "source": 10,
      "target": 12,
      "value": 201
    },
    {
      "name": "선별-처리1",
      "source": 11,
      "target": 13,
      "value": 5784
    },
    {
      "name": "선별-처리2",
      "source": 11,
      "target": 16,
      "value": 386
    },
    {
      "name": "선별-처리3",
      "source": 12,
      "target": 13,
      "value": 1340
    },
    {
      "name": "선별-처리4",
      "source": 12,
      "target": 14,
      "value": 2836
    },
    {
      "name": "선별-처리5",
      "source": 12,
      "target": 15,
      "value": 479
    }
  ]
};

let link;
let defs;
let graph;
let svg;

const Sankey = ({
  // width,
  // height,
  currentStage,
  currentChapter,
}) => {

  let containerRef = useRef(null);

  // set the dimensions and margins of the graph
  const margin = { top: 80, right: 10, bottom: 10, left: 24 };
  // innerWidth = width - margin.left - margin.right,
  // innerHeight = height - margin.top - margin.bottom;

  // format constiables
  const formatNumber = d3.format(",.0f"), // zero decimal places
    format = function (d) { return formatNumber(d); },
    color = d3.scaleOrdinal(d3.schemeCategory10);

  let svgRef = useRef(null);

  const [isInitiate, setIsInitiate] = useState(false);

  // append the svg object to the body of the page
  useEffect(() => {

    let width = containerRef.current.clientWidth - margin.left - margin.right;
    let height = containerRef.current.clientHeight - margin.top - margin.bottom;

    svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("class", "sankey")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    // Set the sankey diagram properties
    const sankeyLayout = sankey()
      .nodeWidth(80)
      .nodePadding(56)
      .nodeAlign(sankeyLeft)
      .size([width, height]);

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
          .attr("x", node.x0)
          .attr("y", -64)
          .attr("class", "stage_title")
          .attr("text-anchor", "middle")
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

    const particleGroupLand = svg.append("g").selectAll(".particleGroupLand")
      .data(graph.links)
      .enter().append("g")
      .attr("class", (d, i) => {
        return `particleGroupLand particleGroupLand${i}`
      });

    // add in the links
    link = svg.append("g").selectAll(".link")
      .data(graph.links)
      .enter().append("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke-width", function (d) { return d.width; });

    link.attr("class", (d, i) => {
      return `land link link_${d.source.depth} path${i}`;
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
      .filter(function (d) { return d.x0 < width / 2; })
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
      .filter(function (d) { return d.x0 < width / 2; })
      .attr("text-anchor", "start");

    setIsInitiate(true);

    return () => {
      svg = null;
      svgRef = null;
      setStop(true);
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


  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(false);

  function updateParticle() {
    if (1 <= currentStage && currentStage <= 3) {
      let depthList;
      if (currentStage === 1) depthList = [0];
      if (currentStage === 2) depthList = [1, 2];
      if (currentStage === 3) depthList = [3];

      if (count === 0) {
        randerParticle(depthList);
      }
      else if (count % 125 === 0) {
        console.log('update');
        randerParticle(depthList);
      }
      setCount(count + 1);
    }
  }

  useAnimationFrameLoop(updateParticle, currentStage === 0)

  useEffect(() => {
    if (currentChapter !== 2) {
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

  function randerParticle(depthList) {
    // Trash
    const trashSize = {
      width: isMobile ? 15 : 30,
      hegiht: isMobile ? 34 : 68
    }

    // console.log(currentChapter);
    if (1 <= currentStage && currentStage <= 4) {
      let linkNum = graph.links.length;

      for (let i = 0; i < linkNum; i++) {
        let targetColor = graph.links[i].target.color;
        if (depthList.includes(graph.links[i].source.depth)) {

          let trashGroup = d3.select(`.particleGroupLand${i}`)
            .selectAll('.particle')
            .data(() => {
              let data = [];
              let num = parseInt(graph.links[i].value / 30);
              let bandHeight = (graph.links[i].width - 12);
              for (let index = 0; index < num; index++) {
                data.push(parseInt(Math.random() * bandHeight) - bandHeight / 2);
              }
              return data;
            })
            .enter()
            .append("g")
            .attr("class", "particle")
            .attr("transform", "translate(0,0)");

          trashGroup.append("svg:image")
            .attr("xlink:href", (d, i) => {
              let img;
              if (i % 3 === 0) img = illust_trash_blue;
              if (i % 3 === 1) img = illust_trash_orange;
              if (i % 3 === 2) img = illust_trash_emerald;
              return img;
            })
            .attr("x", 0)
            .attr("y", 0)
            .attr("opacity", 1)
            .attr("width", trashSize.width)
            .attr("height", trashSize.hegiht);

          trashGroup.transition()
            .duration(1500)
            .delay(() => {
              return Math.random() * 3000;
            })
            .attr("opacity", 1)
            .tween("pathTween", (d) => {
              if (svg !== null) {
                let path = svg.select(`.path${i}`);
                console.log(path);
                return pathTweenWithGroup(path, d, 3);
              }
            }).remove()
        }
      }
    }
  }

  useEffect(() => {
    let depthList = [];
    if (currentStage === 1) depthList = [0];
    if (currentStage === 2) depthList = [1, 2];
    if (currentStage === 3) depthList = [3];

    d3.selectAll(`.link.land`)
      // .transition()
      // .duration(1500)
      .style("stroke-opacity", 0.05);

    if (depthList.length > 0) {
      depthList.forEach(depth => {
        d3.selectAll(
          `.link_${depth}.land`)
          .transition()
          .duration(1500)
          .style("stroke-opacity", 0.25);
      });
    }
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

  function pathTweenWithGroup(path, offset, size, r) {
    var length = path.node().getTotalLength(); // Get the length of the path
    var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length
    return function (t) {
      var point = path.node().getPointAtLength(r(t)); // Get the next point along the path

      d3.select(this) // Select the circle
        // .attr("x", point.x + offset.x) // Set the cx
        // .attr("y", point.y + offset.y) // Set the cy
        .attr("transform", `translate(${point.x + offset.x},${point.y + offset.y})`)
    }
  }

  return (
    <Container
      ref={containerRef}
      id="container_land">
      <svg ref={svgRef} />
    </Container>
  )
}


export default Sankey;