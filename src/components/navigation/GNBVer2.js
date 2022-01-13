import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ProgressBar from "react-scroll-progress-bar";
import theme from "../../assets/theme/theme";
import PL_logo from "../../assets/img/logo/PL_logo.png";
import { Link } from 'react-router-dom';
import LiveArea from '../layout/LiveArea';
import logo_white from '../../assets/img/logo/logo_gs_white.svg';
import logo_black from '../../assets/img/logo/logo_gs_black.svg';

import {
  useLocation
} from 'react-router-dom';
import { useTimeoutEffect } from 'react-timing-hooks';

const Container = styled.div`
  width: 100%;
  z-index: 9999;
  height: 96px;
  /* justify-content: space-between; */
  color: ${props => props.themeType === 'light' ?
    theme.color.ui.strong :
    theme.color.ui.white700
  };
  background-color: ${props => props.themeType === 'light' ?
    theme.color.ui.bg.light :
    theme.color.ui.bg.dark
  };
  position: fixed;
  transition: color 0.3s, background-color 0.3s;
`;

const Content = styled(LiveArea)`
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  font-size: 21px;
  line-height: 1.24;
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.layout.flexColCenter}
  width: fit-content;
  position: relative;
  cursor: pointer;
  :before{
    position: absolute;
    content: '';
    left: 0;
    top: -16px;
    width: 100%;
    height: 2px;
    background-color: ${props => props.isCurrent ? props.theme.color.brand.epGreen : 'none'};
  }
`;

const MenuList = styled.div`
  width: calc(100% - 180px - 112px);
  display: flex;
  padding-left: 180px;
  align-items: center;
`;

const Menu = styled.div`
  width: fit-content;
  margin-right: 104px;
  .num{
    ${props => props.theme.type.weight.prd.regular}
    ${props => props.theme.type.size.caption}
    margin-bottom: 10px;
  }
  .title{
    ${props => props.theme.type.weight.prd.bold}
    ${props => props.theme.type.size.body2}
  } 
  cursor: pointer;
  position: relative;
  :before{
    position: absolute;
    content: '';
    left: 0;
    top: -16px;
    width: 100%;
    height: 2px;
    background-color: ${props => props.isCurrent ? props.theme.color.brand.epGreen : 'none'};
  }
`;

const GNB = ({
  themeType
}) => {
  const [currentRoute, setCurrentRoute] = useState('');
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    setCurrentRoute(location.pathname);
  }, [location]);
  return (
    <Container themeType={themeType}>
      <Content>
        <Logo isCurrent={currentRoute === '/'}>
          <Link to="/">
            Plastic Literacy <br />
            by GS칼텍스
          </Link>
        </Logo>
        <MenuList>
          <Menu isCurrent={currentRoute === '/chapter1'}>
            <Link to="chapter1">
              <p className="num">
                Chapter1
              </p>
              <p className="title">
                플라스틱 딜레마
              </p>
            </Link>
          </Menu>
          <Menu isCurrent={currentRoute === '/chapter2'}>
            <Link to="chapter2">
              <p className="num">
                Chapter2
              </p>
              <p className="title">
                플라스틱의 여정
              </p>
            </Link>
          </Menu>
          <Menu isCurrent={currentRoute === '/chapter3'}>
            <Link to="chapter3">
              <p className="num">
                Chapter3
              </p>
              <p className="title">
                플라스틱 리터러시
              </p>
            </Link>
          </Menu>
        </MenuList>
        {/* <img src={themeType === 'light' ? logo_black : logo_white} alt='' /> */}
      </Content>
    </Container>
  )
}

export default GNB;