import { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import ReactPlayer from 'react-player';
// import videoSrc from '../../assets/video/video_bg_section1.mp4';


const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  video{
    object-fit: cover;
    filter: grayscale(0.4);
  }
  :after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.isFilter ? 'rgba(0,0,0,0.64)' : 'rgba(0,0,0,0)'};
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


function VideoBackground({
  videoSrc,
  width,
  height,
  children,
  isFilter,
  isVideoPlay,
  refObject
}) {

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    console.log("is video played: " + isVideoPlay);
  }, [isVideoPlay]);

  const playVideo = () => {
    console.log('load!');
    setPlaying(true);
  }

  return (
    <Container
      onClick={playVideo}
      isFilter={isFilter}
      ref={refObject}
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
      <Content>
        {children}
      </Content>

    </Container>
  )
}

export default VideoBackground;