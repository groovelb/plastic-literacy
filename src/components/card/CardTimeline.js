import React, {useState} from 'react';
import styled from "styled-components";
import ic_play from "../../assets/icon/ic_play.svg";

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  height: 368px;
  cursor: pointer;
  /* background-color: ${props => props.theme.color.ui.bg.light}; */
  background-position: center;
  background-size: cover;
  color: ${props => props.theme.color.brand.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* justify-content: space-between; */
  transition: color 0.3s, background-color 0.3s;
  margin-top: ${props => `calc(-${props.index} * 36px)`};
  position: relative;
  :before{
    position: absolute;
    content:'';
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: url(${props => props.img});
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    overflow: hidden;
    filter: grayscale(80%) brightness(40%);
    opacity: 0.75;
    transition: filter 0.3s;
    z-index: -1;
  }
  button{
    opacity: 0;
    transition: opacity 0.3s;
    cursor: pointer;
  }
  :hover{
    text-shadow: 0 0 20px rgba(15, 30, 45, 0.34);
    :before{
      filter: grayscale(0%) brightness(75%);
    }
    button{
      opacity: 1;
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 16px;
		height: 120px;
    margin-top: 0px !important;
	}
`;

const Play = styled.button`
  ${props => props.theme.type.size.bttText}
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
  img{
    width: 24px;
    height: 24px;
    margin-left: 16px;
  }
`;

const Num = styled.div`
  font-size: 44px;
  ${props => props.theme.type.weight.prd.black}
  margin-bottom: 24px;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

const Exp = styled.div`
  ${props => props.theme.type.size.body1}
  ${props => props.theme.type.weight.prd.bold}
  word-break: keep-all;
  @media only screen and (max-width: 480px) {
    ${props => props.theme.type.size.caption}
    ${props => props.theme.type.weight.prd.regular}
    display: none;
  }
`;

const CardTimeline = ({
  title,
  exp,
  index,
  img,
  setIsVideo,
  onClick
}) => {

  const [isPlay, setIsPlay] = useState(false);
  return (
    <Container
      img={img}
      index={index}
      onClick={onClick}
    >
      <div>
        <Num>
          {title}
        </Num>
        <Exp>
          {exp}
        </Exp>
      </div>
      <Play onClick={onClick}>
        관련영상 재생
        <img src={ic_play} alt='' />
      </Play>
    </Container>
  )
}

export default CardTimeline;