import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { isMobile } from 'react-device-detect';

import img_grid1 from '../../assets/img/c2/grid/img_grid_mixed.jpg';
import img_grid2 from '../../assets/img/c2/grid/img_grid_polluted.jpg';
import img_grid3 from '../../assets/img/c2/grid/img_grid_polluted2.jpg';
import img_grid4 from '../../assets/img/c2/grid/img_grid_7category.jpg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #484848;
  position: relative;
  @media only screen and (max-width: 480px) {
    margin-top: 120px;
    width: calc(100% + 24px);
    height: calc(100% - 120px);
    position: relative;
  }
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
  background-color: ${props => props.type === 'question' ? props.theme.color.ui.bg.light : 'rgba(0,0,0,0.5)'};
  padding: 20px;
  border: solid 1px #000;
  background-image: ${props => props.img ? `url(${props.img})` : 'none'};
  background-size: cover;
  background-position: center;
  opacity: 0.75;
  h2.question{
    ${props => props.theme.type.size.title3}
    ${props => props.theme.type.weight.bold}
    max-width: 240px;
  }
  .answer{
    opacity: 0;
    transition: opacity 0.3s;
  }
  cursor: pointer;
  :hover{
    z-index: 9;
    width: ${props => props.type === 'question' ? `calc(2*${props.width})` : props.width};
     /* width: 200px; */
    h2.question{
      display: none;
    }
    background-color: ${props => props.type === 'question' ? props.theme.color.brand.epGreen : 'rgba(0,0,0,0.8)'};
    opacity: 1;
    .answer{
      opacity: 1;
    }
  }
  :before{
  }
  @media only screen and (max-width: 480px) {
    h2.question{
      font-size: 14px;
      line-height: 1.4;
      max-width: 240px;
    }
  }
`;

const Answer = styled.div`
  h2{
    ${props => props.theme.type.size.title3}
    ${props => props.theme.type.weight.bold}
    margin-bottom: 4px;
  }
  p{
    ${props => props.theme.type.size.body2}
    ${props => props.theme.type.weight.bold}
  }
`;


const GridXNum = 6;
const GridYNum = 4;

const ModalContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: -120px;
  left: 0;
  width: 100%;
  height: calc(100% + 120px);
  background-color: ${props => props.theme.color.brand.darkNavy};
  padding: 24px;
  ${props => props.theme.layout.flexColCenter}
  color: #fff;
  word-break: keep-all;
  white-space: pre-line;
  .question{
    width: 100%;
    text-align: left;
    ${props => props.theme.type.size.title2}
    ${props => props.theme.type.weight.bold}
    font-weight: 800;
    opacity: 1;
  }
  .answer{
    text-align: left;
    margin-top: 32px;
    margin-bottom: 8px;
    width: 100%;
    color: ${props => props.theme.color.signal.highlight};
    ${props => props.theme.type.size.title2}
    ${props => props.theme.type.weight.bold}
  }
  .exp{
    width: 100%;
    ${props => props.theme.type.size.body2}
  }
  button{
    margin-top: 48px;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0px 16px; */
    background: none;
    outline: none;
    border-radius: 4px;
    border: solid 1px #fff;
    color: #fff;
  }
`;

const Modal = ({
  answer1,
  answer2,
  question,
  onClose
}) => (
  <ModalContainer>
    <p className={'question'}>
      {question}
    </p>
    <h2 className={'answer'}>
      {answer1}
    </h2>
    <p className={'exp'}>
      {answer2}
    </p>
    <button
      onClick={onClose}
    >
      닫기
    </button>
  </ModalContainer>
);


const DynamicImageGrid = ({ gridData }) => {
  const [isAnwser, setIsAnswer] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <Container>
      {isAnwser &&
        <Modal
          question={gridData[index].question}
          answer1={gridData[index].answer1}
          answer2={gridData[index].answer2}
          onClose={
            () => setIsAnswer(false)
            }
        />}

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
            onClick={
              () => {
                if(isMobile){
                  setIndex(index);
                  setIsAnswer(true);
                }
              }
            }
          >
            {grid.type === 'question' &&
              <>
                <h2 className={'question'}>
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