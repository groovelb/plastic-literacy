import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import LiveArea from "./LiveArea";

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* padding-top: 160px; */
  position: relative;
  min-height: ${props => props.height + 'px'};
  word-break: keep-all;
  white-space: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => props.theme.layout.flexColCenter}
  img{
    margin-bottom: 24px;
  }
  :after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.isFilter ? 'rgba(0,0,0,0.32)' : 'rgba(0,0,0,0)'};
    z-index: -1;
  }
`;

const Title = styled.div`
	width: 900px;
	text-align: center;
	h1{
		${props => props.theme.type.size.h2}
		${props => props.theme.type.weight.exp.bold}
		text-transform: capitalize;
		margin-bottom: 48px;
	}
	h2{
		${props => props.theme.type.size.h2}
		${props => props.theme.type.weight.prd.light}
		margin-bottom:48px;
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Children = styled.div`
  width: 900px;
`;


const Exp = styled.div`
	position: relative;
	width: 900px;
  word-break: break-all;
	${props => props.theme.type.size.body1}
	${props => props.theme.type.weight.prd.light}
	text-align: left;
	margin-top: 12px;
	/* padding: 48px; */
	transition: opacity 1s ease-in-out;
	/* border: solid 1px #fff; */
 
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const FullScreen = ({
  className,
  refObject,
  title,
  exp,
  children,
  isFilter
}) => {

  const size = useWindowSize();

  return (
    <Container
      isFilter={isFilter}
      ref={refObject}
      className={className}
      height={size.height}
    >
      <Title>
        <h1>
          {title}
        </h1>
      </Title>
      {
        exp&&<Exp>{exp}</Exp>
      }
      <>
        {
          children
        }
      </>
    </Container>
  )
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default FullScreen;