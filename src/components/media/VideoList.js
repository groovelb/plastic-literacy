import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Player } from 'video-react';
import ic_next from "../../assets/img/icon/navigation/next/white.svg";
import ic_prev from "../../assets/img/icon/navigation/prev/white.svg";

const Container = styled.div`
  width: 100%;
  height: 256px;
  position: relative;
  overflow: hidden;
  :before{
    position: absolute;
    z-index: 1;
    pointer-events: none;
    content: '';
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.32) 88%);
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top:0;
  left: ${props => `calc((${props.index - props.currentIndex})*100%)`};
  transition: left 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.src})`};
  background-size: 102%;
  background-position: center;
`;

const ActionBar = styled.div`
  position: absolute;
  left: 0;
  bottom: calc(50% - 24px);
  height: 48px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  display: flex;
`;

const Btt = styled.button`
  width: 48px;
  height: 48px;
  ${props => props.theme.layout.flexColCenter}
  background: none;
  outline: none;
  border: none;
  :disabled{
    opacity: 0.2;
  }
`;

const Caption = styled.div`
   width: 100%;
   ${props => props.theme.type.size.caption}
   color: #fff;
   margin-top: 24px;
   span{
     margin-right: 8px;
     ${props => props.theme.type.weight.exp.bold}
     color: ${props => props.theme.color.brand.epGreen};
   }
`;

const VideoList = ({
  imgList: videoList,
  onNext,
  onPrev,
  currentIndex,
}) => {
  console.log(videoList);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setCurrent(currentIndex);
  }, [currentIndex])
  return (
    <>
      <Container>
        {
          videoList.map((video, i) =>
            <>
              <VideoContainer
                alt=''
                key={i}
                index={i}
                currentIndex={current}
              >
                <Player>
                  <source src={video.src} />
                </Player>
              </VideoContainer>
            </>
          )
        }
        <ActionBar>
          <Btt
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            <img src={ic_prev} alt='' />
          </Btt>
          <Btt
            onClick={onNext}
            disabled={currentIndex === videoList.length - 1}
          >
            <img src={ic_next} alt='' />
          </Btt>
        </ActionBar>
      </Container>
      <Caption>
        <span>*</span>
        {videoList[current].caption}
      </Caption>
    </>
  )
}

export default VideoList;
