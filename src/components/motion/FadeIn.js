import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // Transition
  opacity: ${props => props.isTrigger ? '1' : '0'};
  transition: all ${props => props.theme.motion.transition.duration} ease-out;
  transition-delay: ${props => `${props.theme.motion.transition.delayRate * props.index}s`};
`;

function FadeIn({
  children,
  className,
  isTrigger,
  index,
  style,
  distance,
  speed
}) {
  return (
    <Container
      index={index}
      isTrigger={isTrigger}
      className={className}
      style={style}
      distance={distance}
    >
      {children}
    </Container>
  )
}

export default FadeIn;