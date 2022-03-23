import { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import useWindowSize from '../../hook/useWindowSize';
// import imgSrc from '../../assets/video/video_bg_section1.mp4';


const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  pointer-events: none;
  height: 100%;
`;

const ImgBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => props.isTrigger ? '1' : '0'};
  transition: opacity 0.4s ease-in-out;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  filter:  ${props => props.isFilter ? `grayscale(0.2) brightness(75%)` :  `grayscale(0.32) brightness(60%)`};
  :after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.isFilter ? 'rgba(15,30,45,0.48)' : 'rgba(0,0,0,0)'};
    z-index: 9;
    pointer-events: none;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.flexCenter}
`;


function VideoBackground({
  img,
  children,
  isFilter,
  isTrigger
}) {

  const windowSize = useWindowSize();

  return (
    <Container
      // height={windowSize.height}
    >
      <ImgBG
        isTrigger={isTrigger}
        isFilter={isFilter}
        img={img}
      >
      </ImgBG>

      <Content>
        {children}
      </Content>

    </Container>
  )
}

export default VideoBackground;