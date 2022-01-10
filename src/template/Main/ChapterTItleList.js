import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import LiveArea from '../../components/layout/LiveArea';

import Grid from '../../components/layout/Grid';
import CardChapterTitleMain from '../../components/card/CardChapterTitleMain';

import bg_c1 from "../../assets/img/bg/img_bg_c1.jpg";
import bg_c2 from "../../assets/img/bg/img_bg_c2.jpg";
import bg_c3 from "../../assets/img/bg/img_bg_c3.jpg";

const Container = styled(LiveArea)`
  display: flex;
  /* width: 100%; */
  height: 100%;
  padding-top: 180px;
`;

const ChapterTItleList = ({

}) => {
  const { t } = useTranslation();

  const chapterList = [
    {
      img: bg_c1,
      title: t("c1-title"),
      subTitle: t("c1-subtitle")
    },
    {
      img: bg_c2,
      title: t("c2-title"),
      subTitle: t("c2-subtitle")
    },
    {
      img: bg_c3,
      title: t("c3-title"),
      subTitle: t("c3-subtitle")
    }
  ]
  return (
    <Container>
      {
        chapterList.map((chapter, i, arr) => (
          <Grid
            colPC={3}
            colMb={1}
            index={i}
            length={arr.length}
            spacing={16}
          >
            <CardChapterTitleMain
              img={chapter.img}
              num={i + 1}
              title={chapter.title}
              subTitle={chapter.subTitle}
            />
          </Grid>
        ))
      }
    </Container>
  )
}

export default ChapterTItleList;
