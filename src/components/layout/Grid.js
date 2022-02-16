import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: ${
    props => `calc((100% - ${(props.colPC - 1)*props.spacing}px)/${props.colPC})`
  };
  margin-right: ${
    props => props.index%props.colPC<props.colPC-1?`${props.spacing}px`:'0px'
  };
  ${(props) =>
		(props.isBorder && props.index%props.colPC<props.colPC-1) &&
		`border-right: solid 0.5px ${props.theme.color.blueGray50};`
  }
   margin-bottom: ${props => `${props.spacing}px`};
	@media only screen and (max-width: 480px) {
		width: ${
      props => `calc((100% - ${(props.colMb - 1)*props.spacing}px)/${props.colMb})`
    };
		margin-right: ${
      props => props.index%props.colMb<props.colMb-1?`${props.spacing}px`:'0px'
    };
    border-right: none;
    ${(props) =>
      (props.isBorder && props.index<props.length-1) &&
      `border-bottom: solid 0.5px ${props.theme.color.blueGray50};`
    }
    margin-bottom: ${props => `${props.spacing}px`};
	}
`;

const Grid = ({
  colPC,
  colMb,
  index,
  children,
  isBorder,
  length,
  spacing,
  className
}) => (
  <Container
    isBorder={isBorder}
    length={length}
    colPC={colPC}
    colMb={colMb}
    index={index}
    spacing={spacing}
    className={className}
  >
    {children}
  </Container>
)

export default Grid;