import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  padding-top: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Page = ({children, className}) => (
  <Container className={className}>
    {children}
  </Container>
);

export default Page;