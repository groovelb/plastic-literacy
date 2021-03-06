import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import { useTranslation } from 'react-i18next';
import bg_c1 from '../../assets/img/bg/img_bg_c1.jpg';
import bg_c2 from '../../assets/img/bg/img_bg_c2.jpg';
import bg_c3 from '../../assets/img/bg/img_bg_c3.jpg';
import color from '../../assets/theme/atom/color';
import ChapterTitleLink from '../../components/layout/ChapterTitleLink';
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
  } !important;
  a{
    color: ${props => props.themeType === 'light' ?
    theme.color.ui.strong :
    theme.color.ui.white700
  } !important;
  }
  background-color: ${props => props.themeType === 'light' ?
    theme.color.ui.bg.light :
    theme.color.ui.bg.dark
  };
  position: fixed;
  transition: color 0.3s, background-color 0.3s;
  @media only screen and (max-width: 825px) {
    height: 80px;
  }
`;

const Content = styled(LiveArea)`
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  ${props => props.theme.type.weight.prd.bold}
  ${props => props.theme.type.size.body2}
  ${props => props.theme.layout.flexColCenter}
  line-height: 1.41;
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
  @media only screen and (max-width: 825px) {
    width: 104px;
    z-index: 9;
    :before{
      background-color: 'none' !important;
    }
  }
`;

const MenuList = styled.div`
  width: calc(100% - 180px);
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 825px) {
    width: calc(100% - 104px);
  }
`;

const Menu = styled.div`
  width: fit-content;
  margin-right: ${props => props.isLast ? '0px' : '80px'};
  .num{
    ${props => props.theme.type.weight.prd.regular}
    ${props => props.theme.type.size.caption}
    margin-bottom: 4px;
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
    @media only screen and (max-width: 825px) {
      background-color: 'none';
    }
  }
  @media only screen and (max-width: 825px) {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
	width: 48px;
	height: 48px;
	${(props) => props.theme.layout.flexColCenter}
	display: none;
	@media only screen and (max-width: 825px) {
    z-index: 9;
		display: flex;
	}
`;

const SlideMenu = styled(LiveArea)`
  display: none;
  @media only screen and (max-width: 825px) {
		display: flex;
    flex-direction: column;
    position: fixed;
    top: ${props => props.isOpen ? '0%' : '0%'};
    padding-top: 80px;
    opacity: ${props => props.isOpen ? '1' : '0'};
    pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
    background-color: ${props => props.themeType==='dark'?props.theme.color.ui.bg.dark:props.theme.color.ui.bg.light};
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
	}
`;

const Row3 = styled.div`
  width: 100%;
  transition: height 0.6s ease-out;
  height: calc(100%/3);
`;

const GNB = ({
  themeType,
  setThemeType
}) => {
  const [currentRoute, setCurrentRoute] = useState('');
  const [isMenuOpen, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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
            by GS?????????
          </Link>
        </Logo>
        <MenuList>
          <Menu
            onClick={
              () => setThemeType('dark')
            }
            isCurrent={currentRoute === '/chapter1'}
            >
            <Link to="chapter1">
              <p className="num">
                Chapter1
              </p>
              <p className="title">
                ???????????? ?????????
              </p>
            </Link>
          </Menu>
          <Menu
            onClick={
              () => setThemeType('dark')
            }
            isCurrent={currentRoute === '/chapter2'}
          >
            <Link to="chapter2">
              <p className="num">
                Chapter2
              </p>
              <p className="title">
                ??????????????? ??????
              </p>
            </Link>
          </Menu>
          <Menu
            isLast={true}
            onClick={
              () => setThemeType('light')
            }
            isCurrent={currentRoute === '/chapter3'}
          >
            <Link to="chapter3">
              <p className="num">
                Chapter3
              </p>
              <p className="title">
                ??????????????? ??????
              </p>
            </Link>
          </Menu>
          <HamburgerContainer>
            <Hamburger
              toggled={isMenuOpen}
              toggle={setOpen}
              color={theme==='light'?color.blueGray900:color.white700}
              rounded={true}
              duration={0.2}
            />
          </HamburgerContainer>
        </MenuList>
        {/* <img src={themeType === 'light' ? logo_black : logo_white} alt='' /> */}
      </Content>
      <SlideMenu
        isOpen={isMenuOpen}
        themeType={themeType}
      >
        <Row3
          onClick={() => {
            setOpen(false);
            setThemeType('dark');
          }}
        >
          <ChapterTitleLink
            title={'???????????? ?????????'}
            num={1}
            img={bg_c1}
            to={'/chapter1'}
            exp={t('c1-subtitle')}
          />
        </Row3>
        <Row3
          onClick={() => {
            setOpen(false);
            setThemeType('dark');
          }}
        >
          <ChapterTitleLink
            title={'??????????????? ??????'}
            num={2}
            img={bg_c2}
            to={'/chapter2'}
            exp={t('c2-subtitle')}
          />
        </Row3>
        <Row3
          onClick={() => {
            setOpen(false);
            setThemeType('light');
          }}
        >
          <ChapterTitleLink
            title={'??????????????? ??????'}
            num={3}
            img={bg_c3}
            to={'/chapter3'}
            exp={t('c3-subtitle')}
          />
        </Row3>
      </SlideMenu>
    </Container>
  )
}

export default GNB;