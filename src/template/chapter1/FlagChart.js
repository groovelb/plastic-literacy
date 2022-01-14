import React from 'react';
import styled, { keyframes } from "styled-components";

import flag_kr from "../../assets/img/c1/flag_korea.jpg";
import flag_us from "../../assets/img/c1/flag_usa.jpg";
import flag_cn from "../../assets/img/c1/flag_china.jpg";
import flag_jp from "../../assets/img/c1/flag_japan.jpg";
import flag_uk from "../../assets/img/c1/flag_uk.jpg";
import flag_rs from "../../assets/img/c1/flag_russia.jpg";
import ToRight from '../../components/motion/ToRight';
import ic_bottle from "../../assets/img/c1/ic_bottle_simple.svg";

const consumptionList = [
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
  {
    title: '일본',
    img: flag_jp,
    value: 71.5
  },
  {
    title: '영국',
    img: flag_uk,
    value: 50.4
  },
  {
    title: '러시아',
    img: flag_rs,
    value: 44.3
  }
];

const Container = styled.div`
  width: 100%;
  padding: 0 48px;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
`;

const Flag = styled.div`
  width: 64px;
  img{
    width: 100%;
    height: auto;
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
  let num = parseInt(number / 3.5);
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