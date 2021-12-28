import React from 'react';
import styled from "styled-components";
import ProgressBar from "react-scroll-progress-bar";
import theme from "../../assets/theme/theme";
import PL_logo from "../../assets/img/logo/PL_logo.png";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 9999;
  height: 80px;
  justify-content: space-between;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 24px;
  background-color: rgba(2, 15, 24, 0.64);
`;

const Bar = styled.div`
  width: 100%;
  height: 3px;
  opacity: 0.24;
  background-color: ${props => props.theme.color.brand.epNavy};
  position: absolute !important;
  top: unset !important;
  bottom: 0 !important;
  left: 0 !important;
  div{
    position: absolute !important;
    top: unset !important;
    bottom: 0 !important;
    left: 0 !important;
  }
`;

const Logo = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 80px;
  height: 80px;
  ${props => props.theme.layout.flexColCenter}
  img{
    width: 48px;
    height: auto;
  }
`;

const MenuList = styled.div`
  width: calc(100% - 0px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: 256px;
  text-align: center;
  p{
    ${props => props.theme.type.weight.exp.regular}
    ${props => props.theme.type.size.bttText}
  }
  p:first-of-type{
    margin-bottom: 8px;
  }
  span{
    ${props => props.theme.type.weight.exp.bold}
  }
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 1s ease-out;
  :hover{
    opacity: 1;
  }
`;

const GNB = ({
  setCurrentChapter
}) => {
  return (
    <Container>
      <Logo>
        <img src={PL_logo} alt='' />
      </Logo>
      <MenuList>
        <Menu onClick={
          () => {
            setCurrentChapter(1);
          }
        }>
          <Link to="chapter1">
            <p>
              <span>Chapter1</span>
            </p>
            <p>
              Plastic Dilemma
            </p>
          </Link>
        </Menu>
        <Menu onClick={
          () => {
            setCurrentChapter(2);
          }
        }>
          <Link to="chapter2">
            <p>
              <span>Chapter2</span>
            </p>
            <p>
              Journey Of Plastic
            </p>
          </Link>
        </Menu>
        <Menu onClick={
          () => {
            setCurrentChapter(4);
          }
        }>
          <Link to="chapter3">
            <p>
              <span>Chapter3</span>
            </p>
            <p>
              Circulation Of Plastic
            </p>
          </Link>
        </Menu>
      </MenuList>
      <Bar>
        <ProgressBar
          bgcolor={theme.color.brand.epPurple}
        />
      </Bar>
    </Container>
  )
}

export default GNB;