import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: ${props => props.height + 'px'};
  word-break: keep-all;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 calc(50% - 480px);
  h2{
    ${props => props.theme.type.size.h1}
    ${props => props.theme.type.weight.bold}
    text-align: center;
    margin-bottom: 24px;
    text-shadow: 0px 0px 12px rgba(0,0,0,0.25);
  }
  p{
    ${props => props.theme.type.size.body1}
    ${props => props.theme.type.weight.light}
    text-shadow: 0px 0px 12px rgba(0,0,0,0.25);
  }
`;

const FullScreen = ({
  className,
  refObject,
  title,
  exp
}) => {

  const size = useWindowSize();

  return (
    <Container
      ref={refObject}
      className={className}
      height={size.height}
    >
      <h2>{title}</h2>
      <p>{exp}</p>
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