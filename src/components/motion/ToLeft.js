import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  // Transition
  left: ${props => props.isTrigger?'0px':'80px'};
  opacity: ${props => props.isTrigger?'1':'0'};
  transition: all 1s ease-out;
  transition-delay: ${props => `${props.index*0.2}s`};
`;

function ToLeft ({
  children,
  className,
  isTrigger,
  index
}){
  return (
    <Container
      index={index}
      isTrigger={isTrigger}
      className={className}
    >
      {children}
    </Container>
  )
}

export default ToLeft;