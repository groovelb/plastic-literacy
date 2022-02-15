import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ic_next from "../../assets/img/icon/navigation/next/white.svg";
import ic_prev from "../../assets/img/icon/navigation/prev/white.svg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  overflow: hidden;
  :before{
    position: absolute;
    z-index: 1;
    pointer-events: none;
    content: '';
    top: 24px;
    left:0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.32) 88%);
  }
`;

const Image = styled.div`
  position: absolute;
  top:24px;
  left: ${props => `calc((${props.index - props.currentIndex})*100%)`};
  transition: left 0.3s ease-in-out;
  width: 100%;
  height: calc(100% - 24px);
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
`;

const ActionBar = styled.div`
  position: absolute;
  left: 0;
  bottom: calc(50% - 24px);
  padding: 0 8px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  display: flex;
`;

const Btt = styled.button`
  width: 48px;
  height: 48px;
  ${props => props.theme.layout.flexColCenter}
  img{
    width: auto;
    height: 100%;
  }
  background: none;
  outline: none;
  border: none;
  :disabled{
    opacity: 0.2;
  }
`;

const Caption = styled.div`
   width: 100%;
   ${props => props.theme.type.size.caption}
   color: #fff;
   margin-top: 24px;
   span{
     margin-right: 8px;
     ${props => props.theme.type.weight.exp.bold}
     color: ${props => props.theme.color.brand.epGreen};
   }
`;

const ImagePreview = ({
  imgList,
  onNext,
  onPrev,
  currentIndex,
}) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setCurrent(currentIndex);
  }, [currentIndex])
  return (
    <>
      <Container>
        {
          imgList.map((img, i) =>
            <>
              <Image
                src={img.src}
                alt=''
                key={i}
                index={i}
                currentIndex={current}
              >
              </Image>
            </>
          )
        }
        <ActionBar>
          <Btt
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            <img src={ic_prev} alt='' />
          </Btt>
          <Btt
            onClick={onNext}
            disabled={currentIndex === imgList.length - 1}
          >
            <img src={ic_next} alt='' />
          </Btt>
        </ActionBar>
      </Container>
      <Caption>
        <span>*</span>
        {imgList[current].caption}
      </Caption>
    </>
  )
}

export default ImagePreview;
