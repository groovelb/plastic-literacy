import styled from '../chart/node_modules/styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  // Transition
  top: ${props => props.isTrigger?'0px':'-120px'};
  opacity: ${props => props.isTrigger?'1':'0'};
  transition: all 1s ease-out;
  transition-delay: ${props => `${props.index*0.2}s`};
`;

function SectionOverlap ({
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

export default SectionOverlap;