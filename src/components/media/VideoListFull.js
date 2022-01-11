import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Player } from 'video-react';
import ic_next from "../../assets/img/icon/navigation/next/white.svg";
import ic_prev from "../../assets/img/icon/navigation/prev/white.svg";
import LiveArea from '../layout/LiveArea';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  /* background-color: ${props => props.theme.color.ui.bg.dark}; */
  :before{
    position: absolute;
    z-index: 1;
    pointer-events: none;
    content: '';
    width: 100%;
    height: 100%;
    /* background-image: linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.32) 88%); */
  }
`;

const Wrapper = styled(LiveArea)`
  position: relative;
  overflow: hidden;
  height: 100%;
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
  .video-react{
    border-radius: 8px;
  overflow: hidden;
  }
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
  width: 64px;
  height: 64px;
  ${props => props.theme.layout.flexColCenter}
  background: none;
  outline: none;
  border: none;
  :disabled{
    opacity: 0.2;
  }
`;

const BttClose = styled.button`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 9;
  background-color: rgba(43, 51, 63, 0.7);
  color: #000;
  font-weight: bold;
  outline: none;
  border: solid 1px #fff;
  border-radius: 4px;
  :hover{
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Caption = styled.div`
   span{
     margin-left: -20px;
   }
   width: 100%;
   ${props => props.theme.type.size.body1}
   color: #fff;
   bottom: -100%;
   left: 0;
   /* position: absolute; */
   width: 60%;
   span{
     margin-right: 8px;
     ${props => props.theme.type.weight.exp.bold}
     color: ${props => props.theme.color.brand.epGreen};
   }
`;

const VideoList = ({
  videoList,
  onNext,
  onPrev,
  currentIndex,
  closeVideo,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(currentIndex);
    videoList.forEach((video, i) => {
      if (i !== currentIndex) {
        video.ref.pause();
      }
    })
  }, [currentIndex])
  return (
    <>
      <Container>
        <Wrapper>
          <BttClose onClick={closeVideo}>
            ✕
          </BttClose>
          {
            videoList.map((video, i) =>
              <>
                <VideoContainer
                  alt=''
                  key={i}
                  index={i}
                  currentIndex={current}
                >
                  <Player
                    ref={player => {
                      video.ref = player
                    }}
                  >
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
        </Wrapper>
        <LiveArea>
          <Caption>
            <span>*</span>
            {videoList[current].caption}
          </Caption>
        </LiveArea>
      </Container>
    </>
  )
}

export default VideoList;
