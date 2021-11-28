import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import LiveArea from "../layout/LiveArea";

const Container = styled(LiveArea)`
  /* width: 100%; */
  min-height: ${props => props.height + 'px'};
  word-break: keep-all;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => props.theme.layout.flexColCenter}
`;

const Title = styled.div`
	width: 100%;
	text-align: center;
	h1{
		${props => props.theme.type.size.h1}
		${props => props.theme.type.weight.exp.bold}
		text-transform: capitalize;
		margin-bottom: 16px;
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


const Exp = styled.div`
	position: relative;
	width: 75%;
	${props => props.theme.type.size.body1}
	${props => props.theme.type.weight.prd.light}
	text-align: left;
	margin-top: 12px;
	padding: 48px;
	transition: opacity 1s ease-in-out;
	border: solid 1px #fff;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const FullScreen = ({
  className,
  refObject,
  title,
  exp,
  children
}) => {

  const size = useWindowSize();

  return (
    <Container
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