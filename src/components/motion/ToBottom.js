import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  // Transition
  top: ${props => props.isTrigger?'80px':'-320px'};
  opacity: ${props => props.isTrigger?'1':'0'};
  transition: all 6s ease-out;
  transition-delay: ${props => `${props.index*0.2}s`};
`;

function ToTop ({
  children,
  className,
  isTrigger,
  index,
  style
}){
  return (
    <Container
      index={index}
      isTrigger={isTrigger}
      className={className}
      style={style}
    >
      {children}
    </Container>
  )
}

export default ToTop;