import React, { useEffect, useState, useRef } from 'react';
import styled from "styled-components";
import Section from "../components/layout/Section";
import illust_title from "../assets/illust/illust_title.svg";
import logo_gs from "../assets/img/logo/logo_gscaltex.png";

const Container = styled(Section)`
  height: ${props =>props.innerHeight + 'px'};
  width: 100%;
  ${props => props.theme.layout.flexColCenter}
  position: relative;
`;

const TitleMsg = styled.p`
  ${props => props.theme.type.weight.exp.bold};
  ${props => props.theme.type.size.title};
  margin-bottom: 24px;
  text-align: center;
  color: #fff;
  margin: 92px 0 24px;
`;

const SubTitleMsg = styled.p`
  width: 560px;
  text-align: center;
  word-break: keep-all;
  ${props => props.theme.type.weight.prd.light};
  ${props => props.theme.type.size.title2};
  color: #fff;
  margin-bottom: 64px;
`;

const MainIllust = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  ${props => props.theme.layout.flexColCenter}
  img{
    width: 800px;
    height: auto;
  }
`;

const Logo = styled.div`
  ${props => props.theme.type.weight.prd.light};
  ${props => props.theme.type.size.caption};
  ${props => props.theme.layout.flexColCenter}
  color: #fff;
  img{
    width: 148px;
    height: auto;
  }
`;

const Title = ({
  refObject
}) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    console.log(window.innerHeight);
    setInnerHeight(window.innerHeight);
  },[window]);

  return(
    <Container
      refObject={refObject}
      innerHeight={innerHeight}
    >
      <MainIllust>
        <img src={illust_title} alt='' />
      </MainIllust>
      <TitleMsg>
        Plastic Literacy
      </TitleMsg>
      <SubTitleMsg>
        플라스틱의 올바른 수거와 재활용에 대한 이해가 필요한 시대, GS칼텍스가 먼저 묻고 답하다.
      </SubTitleMsg>
      <Logo>
        with <br/>
        <img src={logo_gs} alt='' />
      </Logo>
    </Container>
  )
}

export default Title;