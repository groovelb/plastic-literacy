import { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import useWindowSize from '../../hook/useWindowSize';
// import videoSrc from '../../assets/video/video_bg_section1.mp4';


const Container = styled.div`
	width: calc(100% - 48px);
	margin-left: 24px;
	margin-right: 24px;
	height: calc(100% - 48px);
  max-height: 880px;
	border-radius: 8px;
	overflow: hidden;
	background-image: url(${props => props.img});
	background-size: cover;
  background-position: center;
	position: relative;
	:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.isFilter ? 'rgba(0,0,0,0.48)' : 'rgba(0,0,0,0)'};
    /* background-color: ${props => props.isFilter ? 'rgba(0,48,24,0.64)' : 'rgba(0,0,0,0)'}; */
  }
	*{
		z-index: 9;
	}
	@media only screen and (max-width: 480px) {
		
	}
`;

const VideoBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => props.isTrigger ? '1' : '0'};
  transition: opacity 0.4s ease-in-out;
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
      height={windowSize.height}
      ref={refObject}
    >
      <VideoBG
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

export default VideoBackground;