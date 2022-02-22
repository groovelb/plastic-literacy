import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #484848; */
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
  color: ${props => props.themeType === 'light' ? props.theme.color.ui.strong : props.theme.color.ui.white700};
  background-color: ${props => props.type === 'question' ? props.bg : 'rgba(0,0,0,0.5)'};
  padding: 20px;
  border: solid 1px #000;
  background-image: ${props => props.img ? `url(${props.img})` : 'none'};
  background-size: cover;
  background-position: center;
  opacity: 0.75;
  pointer-events: ${props => props.index===0?'none':'default'};
  h2{
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
    background-color: ${props => props.type === 'question' ? props.theme.color.brand.epGreen : 'rgba(0,0,0,0.8)'};
    opacity: 1;
    color: ${props => props.theme.color.ui.strong};
    .answer{
      opacity: 1;
    }
  }
  *{
    z-index: 9;
  }
  :before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.type === 'image' ? 'rgba(0,0,0,0.1)' : 'none'};
  }
  :hover{
    h2.question{
      display: none;
    }
    :before{
      background-color: ${props => props.isRecycle ? 'rgba(60, 220, 135, 0.8)' : 'rgba(250, 77, 86, 0.8)'};
    }
  }
`;

const Answer = styled.div`
  h2{
    ${props => props.theme.type.size.body2}
    ${props => props.theme.type.weight.bold}
    margin-bottom: 4px;
  }
  p{
    ${props => props.theme.type.size.body2}
    ${props => props.theme.type.weight.prd.bold}
  }
`;

const Title = styled.div`
  color: #fff;
  text-shadow: 0px 0px  8px rgba(0,0,0,0.24);
  h3{
    ${props => props.theme.type.size.title3}
    ${props => props.theme.type.weight.bold}
    margin-bottom: 4px;
    margin: 0px;
  }
  p{
    ${props => props.theme.type.size.body2}
    ${props => props.theme.type.weight.regular}
  }
`;


const GridXNum = 4;
const GridYNum = isMobile?4:3;

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
  .exp{
    width: 100%;
    ${props => props.theme.type.size.body2}
  }
  .answer{
    width: 100%;
    text-align: left;
    margin-top: 32px;
    margin-bottom: 8px;
    width: 100%;
    color: ${props => props.theme.color.signal.highlight};
    ${props => props.theme.type.size.title2}
    ${props => props.theme.type.weight.bold}
  }
  img{
    width: 100%;
    height: auto;
    margin: 12px 0;
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
  onClose,
  img
}) => (
  <ModalContainer>
    <p className={'question'}>
      {question}
    </p>
    <img src={img} alt='' />
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

const DynamicImageGrid2 = ({ gridData }) => {
  const [isAnwser, setIsAnswer] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Container>
       {isAnwser &&
        <Modal
          question={gridData[index].title}
          answer1={gridData[index].answer1}
          answer2={gridData[index].answer2}
          img={gridData[index].src}
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
            bg={grid.bg}
            themeType={grid.themeType}
            isRecycle={grid.type === 'question'?true:grid.isRecycle}
            index={index}
            onClick={
              () => {
                if(isMobile&&grid.type==='image'){
                  setIndex(index);
                  setIsAnswer(true);
                }
              }
            }
          >
            {
              grid.type === 'question' &&
              <>
                <h2>
                  {grid.question}
                </h2>
                <Answer
                  className={'answer'}
                  isRecycle={true}
                >
                  {/* <h2>
                    {grid.answer1}
                  </h2> */}
                  <p>
                    {grid.answer2}
                  </p>
                </Answer>
              </>
            }
            {
              grid.type === 'image' &&
              <>
                <Title>
                  <h3>
                    {grid.title}
                  </h3> 
                  <p>
                    {grid.category}
                  </p>
                </Title>
                <Answer
                  className={'answer'}
                >
                  {/* <h2>
                    {grid.answer1}
                  </h2> */}
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

export default DynamicImageGrid2;