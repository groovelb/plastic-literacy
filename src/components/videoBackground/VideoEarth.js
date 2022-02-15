import { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import useWindowSize from '../../hook/useWindowSize';
// import videoSrc from '../../assets/video/video_bg_section1.mp4';


const Container = styled.div`
  display: flex;
  position: absolute;
  z-index: -9;
  top: 0;
  left: 0;
  border-radius: 50%;
  overflow: hidden;
  pointer-events: none;
  width: 100%;
  height: 100%;
`;

const VideoBG = styled.div`
  height: ${props =>`${props.height}px`};
  width: ${props =>`${props.width}px`};
  position: absolute;
  top: ${props => `calc(50% - ${props.height/2}px)`};
  left: ${props => `calc(50% - ${props.width/2}px)`};
  ${props=> props.theme.layout.flexColCenter}
  opacity: ${props => props.isTrigger ? '1' : '0'};
  transition: opacity 0.4s ease-in-out;
  video{
    object-fit: cover;
    filter: grayscale(0.4);
    opacity: 0.3;
  }
  :after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: ${props => props.isFilter ? 'rgba(0,0,0,0.64)' : 'rgba(0,0,0,0)'}; */
    z-index: 9;
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


function VideoEarth({
  videoSrc,
  width,
  height,
  children,
  isFilter,
  isVideoPlay,
  refObject,
  isTrigger
}) {

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
  }, [isVideoPlay]);

  const playVideo = () => {
    setPlaying(true);
  }

  const windowSize = useWindowSize();

  return (
    <Container
      onClick={playVideo}
      width={width}
      height={height}
      ref={refObject}
    >
      <VideoBG
        width={width}
        height={height}
        isTrigger={isTrigger}
        isFilter={isFilter}
        >
        <ReactPlayer
          ref={playerRef}
          url={videoSrc}
          autoPlay={false}
          playing={isVideoPlay}
          loop={true}
          muted={true}
          width={width}
          height={height}
          controls={false}
          playsinline={true}
          style={{ display: 'flex' }}
          onReady={
            () => {
              playVideo();
            }
          }
        />
      </VideoBG>

      <Content>
        {children}
      </Content>

    </Container>
  )
}

export default VideoEarth;