import React, { useState } from 'react';
import styled from "styled-components";
import useWindowSize from '../../hook/useWindowSize';
import { Player } from 'video-react';
import ViewportWrapper from '../../components/ViewportWrapper';

const Container = styled.div`
  width: 100%;
  padding-left: calc(100% - 760px);
`;

const Stage = styled.div`
  width: 100%;
  /* min-height: ${props => `${props.minHeight}px`}; */
`;

const StageTitle = styled.p`
  width: 100%;
  ${props => props.theme.type.size.title2}
  ${props => props.theme.type.weight.prd.bold}
  color: ${props => props.theme.color.brand.epGreen};
  padding-bottom: 16px;
  border-bottom: solid 1px ${props => props.theme.color.brand.epGreen};
  margin-bottom: 32px;
`;

const Section = styled.div`
  width: 100%;
  color: #fff;
  height: ${props => `${props.height}px`};
  margin-bottom: 56px;
  img{
    width: 100%;
    height: auto;
  }
`;

const SectionTitle = styled.p`
  width: 100%;
  ${props => props.theme.type.size.body2}
  ${props => props.theme.type.weight.prd.bold}
  margin-bottom: 16px;
`;

const SectionExp = styled.p`
  width: 100%;
  ${props => props.theme.type.size.body2}
  ${props => props.theme.type.weight.prd.regular}
  margin-bottom: 16px;
`;

const Report = ({
  reportData,
  currentStage,
  setCurrentStage
}) => {
  const windowSize = useWindowSize();
  // const [currentStage, setCurrentStage] = useState(0);

  return (
    <Container>
      {
        reportData.map((stage, i) =>
          <ViewportWrapper
            onEnterViewport={() => {setCurrentStage(i)}}
          >
            <Stage minHeight={windowSize.height * 2}>
              <StageTitle>{stage.title}</StageTitle>
              {
                stage.sectionList.map((section, j) =>
                  <Section>
                    <SectionTitle>
                      {section.title}
                    </SectionTitle>
                    <SectionExp>
                      {section.exp}
                    </SectionExp>
                    {
                      section.type === 'image' && <img src={section.src} alt='' />
                    }
                    {
                      section.type === 'video' && <Player>
                        <source src={section.src} />
                      </Player>
                    }

                  </Section>
                )
              }
            </Stage>
          </ViewportWrapper>

        )
      }
    </Container>
  )
}

export default Report;