import React from "react";
import styled from "styled-components";
import handleViewport from 'react-in-viewport';

const Container = styled.div`
  display: inline-block;
  width: 100%;
`;

const Wrapper = ({
  inViewport,
  forwardedRef,
  children,
  onEnterViewport,
  onLeaveViewport
}) => <Container ref={forwardedRef}>{children}</Container>;

const Block = handleViewport(Wrapper);

const ViwportWrapper = ({
  children,
  onEnterViewport,
  onLeaveViewport,
  style,
  className
}) => {
 
  return (
    <Block
      className={className}
      onEnterViewport={onEnterViewport}
      onLeaveViewport={onLeaveViewport}
    >
      {children}
    </Block>
  )
}

export default ViwportWrapper;