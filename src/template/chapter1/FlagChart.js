import React from 'react';
import styled, { keyframes } from "styled-components";
import { isMobile } from 'react-device-detect';

import flag_be from "../../assets/img/c1/flag_belgium.png";
import flag_ta from "../../assets/img/c1/flag_taiwan.png";
import flag_kr from "../../assets/img/c1/flag_korea.jpg";
import flag_us from "../../assets/img/c1/flag_usa.jpg";
import flag_cn from "../../assets/img/c1/flag_china.jpg";
import ToRight from '../../components/motion/ToRight';
import ic_bottle from "../../assets/img/c1/ic_bottle_simple.svg";

const consumptionList = [
  {
    title: '벨기에',
    img: flag_be,
    value: 199.1
  },
  {
    title: '대만',
    img: flag_ta,
    value: 154.7
  },
  {
    title: '한국',
    img: flag_kr,
    value: 145.9
  },
  {
    title: '미국',
    img: flag_us,
    value: 100.2
  },
  {
    title: '중국',
    img: flag_cn,
    value: 72.6
  },
];

const Container = styled.div`
  width: 100%;
  padding: 0;
  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

const List = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  @media only screen and (max-width: 480px) {
    height: 40px;
  }
`;

const Flag = styled.div`
  width: 64px;
  img{
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 480px) {
    width: 28px;
  }
`;

const Bottles = styled.div`
  position: relative;
  margin-left: 24px;
  margin-right: 16px;
  width: calc(100% - 64px - 80px - 24px);
  display: flex;
  .bottle{
    width: 20px;
    height: 36px;
    ${props => props.theme.layout.flexColCenter}
    background-color: ${props => props.theme.color.ui.bg.dark};
    img{
      width: 16px;
    }
  }
  @media only screen and (max-width: 480px) {
    margin-left: 8px;
    margin-right: 8px;
    .bottle{
      width: 14px;
      img{
        width: 10px;
      }
    }
    width: calc(100% - 32px - 24px);
  }
`;

const BgLined = styled.div`
  position: absolute;
  width: 100%;
  height: 0px;
  border-top: 1px dashed ${props => props.theme.color.brand.epPurple};
  top: calc(50% - 1px);
  left: 0;
`;

const Value = styled.div`
  width: 80px;
  ${props => props.theme.type.weight.prd.black}
  ${props => props.theme.type.size.body1}
`;

const RenderBottle = (number) => {
  let divide = isMobile?14:4;
  let num = parseInt(number / divide);
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(i);
  }
  return array;
}

const FlagChart = ({ isTrigger }) => {
  return (
    <Container>
      {
        consumptionList.map((nation, index) =>
          <List>
            <Flag>
              <img src={nation.img} alt='' />
            </Flag>
            <Bottles>
              <BgLined />
              {RenderBottle(nation.value).map((item, i) =>
                <div>
                  <ToRight
                    isTrigger={isTrigger}
                    index={i * 0.1 + index}
                  > <div className='bottle'>
                      <img src={ic_bottle} alt='' />
                    </div>

                  </ToRight>
                </div>
              )}
            </Bottles>
            <Value>
              <ToRight
                isTrigger={isTrigger}
                index={nation.value/3.5 * 0.1 + 0.5 + index}
              >
                {nation.value + 'kg'}
              </ToRight>

            </Value>
          </List>
        )
      }
    </Container>
  )
}

export default FlagChart;