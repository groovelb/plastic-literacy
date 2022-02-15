import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding-top: 120px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: ${props => props.isOverlap?99:0};
  background-color: 
  ${
    props => {
      switch (props.themeType){
        case 'light':
          return props.theme.color.ui.bg.light;
        case 'dark':
          return props.theme.color.ui.bg.dark;
        default:
          return 'rgba(0,0,0,0)';
      } 
    }
  };
  .content{
    height: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 80px;
  }
`;

const Page = ({
  children,
  className,
  themeType,
  isOverlap
}) => (
  <Container
    className={className}
    themeType={themeType}
    isOverlap={isOverlap}
  >
    {children}
  </Container>
);

export default Page;