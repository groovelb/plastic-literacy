import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import img_grid1 from '../../assets/img/c2/grid/img_grid_mixed.jpg';
import img_grid2 from '../../assets/img/c2/grid/img_grid_polluted.jpg';
import img_grid3 from '../../assets/img/c2/grid/img_grid_polluted2.jpg';
import img_grid4 from '../../assets/img/c2/grid/img_grid_7category.jpg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #484848; */
  position: relative;
`;

const Grid = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: ${props => props.y};
  left: ${props => props.x};
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.theme.color.ui.strong};
  background-color: ${props => props.type==='question'?props.theme.color.ui.bg.light:'rgba(0,0,0,0.5)'};
  padding: 20px;
  border: solid 1px #000;
  background-image: ${props => props.img?`url(${props.img})`:'none'};
  background-size: cover;
  background-position: center;
  opacity: 0.75;
  h2{
    ${props => props.theme.type.size.title2}
    ${props => props.theme.type.weight.bold}
    max-width: 240px;
  }
  .answer{
    opacity: 0;
    transition: opacity 0.3s;
  }
  cursor: pointer;
  :hover{
    background-color: ${props => props.type==='question'?props.theme.color.brand.epGreen:'rgba(0,0,0,0.8)'};
    opacity: 1;
    .answer{
      opacity: 1;
    }
  }
  :before{
  }
`;

const Answer = styled.div`
  h2{
    ${props => props.theme.type.size.title2}
    ${props => props.theme.type.weight.bold}
    margin-bottom: 4px;
  }
  p{
    ${props => props.theme.type.size.body1}
    ${props => props.theme.type.weight.regular}
  }
`;


const GridXNum = 6;
const GridYNum = 4;


const DynamicImageGrid = ({gridData}) => {
  return (
    <Container>
      {
        gridData.map((grid, index) =>
        (
          <Grid
            img={grid.src}
            y={grid.y / GridYNum * 100 + '%'}
            x={grid.x / GridXNum * 100 + '%'}
            width={grid.unitWidth / GridXNum * 100 + '%'}
            height={grid.unitHeight / GridYNum * 100 + '%'}
            type={grid.type}
          >
            {grid.type==='question'&&
            <>
            <h2>
              {grid.question}
            </h2>
            <Answer className={'answer'}>
              <h2>
                {grid.answer1}
              </h2>
              <p>
                {grid.answer2}
              </p>
            </Answer>
            </>
            }
          </Grid>
        ))
      }
    </Container>
  )
}

export default DynamicImageGrid;