import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

import MsgFullScreen from "../../components/layout/MsgFullScreen";
import LiveArea from "../../components/layout/LiveArea";

import ic_production from "../../assets/illust/title/ic_ep_produce.svg";
import ic_dispose from "../../assets/illust/title/ic_ep_dispose.svg";
import ic_recycling from "../../assets/illust/title/ic_ep_recycle.svg";
import ic_collect from "../../assets/illust/title/ic_ep_collect.svg";
import illust_arrow_white from "../../assets/img/illust/illust_arrow_cycle_white.svg";



const PrincipleTitle = styled.div`
  background-color: ${props => props.theme.color.brand.epGreen};
  color: ${props => props.theme.color.brand.darkNavy};
  ${props => props.theme.type.size.title2}
  ${props => props.theme.type.weight.prd.bold}
  margin-top: 80px;
  padding: 4px 8px;
  text-align: center;
  width: fit-content;
`;
const PricincpleList = styled(LiveArea)`
  display: flex;
  flex-wrap: wrap;
  margin-top: -108px;
  width: 900px;
  justify-content: space-between;
   :before{
    content: '';
    position: absolute;
    z-index: -1;
    top: 80px;
    left: 0px;
    background-image: ${`url(${illust_arrow_white})`};
    background-size: cover;
    width: 100%;
    height: 208px;
  }
`;
const Pricinple = styled.div`
  width: 40%;
  /* height: 248px; */
  ${props => props.theme.layout.flexColCenter}
  color: ${props => props.theme.color.brand.epGreen};
  padding: 22px;
  /* margin-bottom: 32px; */
  .img{
    width: 124px;
    margin-bottom: 24px;
    padding: 0 16px;
    background-color: ${props => props.theme.color.ui.bg.dark};
    img{
      width: 100%;
      height: 100%;
    }
  }
  h2{
    ${props => props.theme.type.size.body1}
    ${props => props.theme.type.weight.prd.bold}
    margin-bottom: 0px;
  }
  p{
    ${props => props.theme.type.size.body1}
  }
`;

const ProjectIntroduction = ({

}) => {

  const { t } = useTranslation();

  const principles = [
    {
      title: '생산',
      img: ic_production
    },
    {
      title: '배출',
      img: ic_dispose
    },
    {
      title: '처리',
      img: ic_recycling
    },
    {
      title: '수거',
      img: ic_collect
    },
  ];

  return (
    <MsgFullScreen
      title={t('title-s1-title')}
      exp={t('title-s1-exp')}
    >
      <PrincipleTitle>
        플라스틱의 라이프 싸이클
      </PrincipleTitle>
      <PricincpleList>
        {
          principles.map((item) =>
            <Pricinple>
              <div className={'img'}>
                <img src={item.img} alt='' />
              </div>
              <h2>{item.title}</h2>
              <p>{item.rule}</p>
            </Pricinple>
          )
        }
      </PricincpleList>
    </MsgFullScreen>
  )
}

export default ProjectIntroduction;