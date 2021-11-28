import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // Transition
  top: ${props => {
    switch (props.distance) {
      case 'big':
        return props.isTrigger?'0px':props.theme.motion.transition.distance.big;
      case 'middle':
        return props.isTrigger?'0px':props.theme.motion.transition.distance.middle;
      case 'short':
        return props.isTrigger?'0px':props.theme.motion.transition.distance.short;
      default:
        return props.isTrigger?'0px':props.theme.motion.transition.distance.big;
    }
  }
  };
  opacity: ${props => props.isTrigger ? '1' : '0'};
  transition: all ${props => props.theme.motion.transition.duration} ease-out;
  transition-delay: ${props => `${props.theme.motion.transition.delayRate * props.index}s`};
`;

function ToTop({
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

export default ToTop;