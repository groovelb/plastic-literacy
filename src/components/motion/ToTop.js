import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // Transition
  top: ${props => props.isTrigger?'0px':props.theme.motion.transition.distance.big};
  opacity: ${props => props.isTrigger?'1':'0'};
  transition: all ${props => props.theme.motion.transition.duration} ease-out;
  transition-delay: ${props => `${props.theme.motion.delayRate*0.2}s`};
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