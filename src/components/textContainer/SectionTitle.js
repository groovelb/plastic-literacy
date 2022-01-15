
import React from 'react';
import styled from "styled-components";


const Title = styled.div`
  ${props => props.theme.type.size.h1};
  ${props => props.theme.type.weight.prd.black};
  margin-bottom: 24px;
  white-space: break-spaces;
  word-break: keep-all;
  color: ${props => props.themeType === 'light' ?
    props.theme.color.ui.strong : props.theme.color.brand.white
  };
`;

const Exp = styled.div`
  ${props => props.theme.type.size.body1};
  ${props => props.theme.type.weight.prd.bold};
  margin-bottom: 56px;
  white-space: break-spaces;
  width: 60%;
  color: ${props => props.themeType === 'light' ?
    props.theme.color.ui.strong : props.theme.color.brand.white
  };
`;

const SectionTitle = ({
  title,
  exp,
  themeType
}) => {
  return (
    <>
      <Title themeType={themeType}>{title}</Title>
      {
        exp&&<Exp themeType={themeType}>{exp}</Exp>
      }
    </>
  )
}

export default SectionTitle;