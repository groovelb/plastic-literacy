const type = {
  weight: {
    exp: {
      regular: `
      font-family: 'Pretendard Variable';
        font-weight: 400;
      `,
      bold: `
        // font-family: 'Montserrat', sans-serif;
        font-family: 'Pretendard';
        font-weight: 900;
      `
    },
    prd: {
      light: `
        // font-family: 'Noto Sans KR', sans-serif;
        // font-weight: 300;
        // font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-family: 'Pretendard';
        font-weight: 400;
      `,
      regular: `
        // font-family: 'Noto Sans KR', sans-serif;
        // font-weight: 400;
        // font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-family: 'Pretendard';
        font-weight: 400;
      `,
      bold: `
        // font-family: 'Noto Sans KR', sans-serif;
        // font-weight: 900;
        // font-family: 'NanumSquareExtraBold';
        font-family: 'Pretendard';
        font-weight: 800;
        // font-family: 'SpoqaHansBold';
      `,
      black: `
        // font-family: 'Noto Sans KR', sans-serif;
        // font-weight: 900;
        // font-family: 'NanumSquareExtraBold';
        font-family: 'Pretendard';
        font-weight: 900;
      `,
    },
    num: `
      font-family: 'Roboto', sans-serif;
      font-weight: 900;
    `
  },
  size: {
    title: `
    font-size: 100px;
    line-height: 90px;
    letter-spacing: 4px;
    @media only screen and (max-width: 480px) {
      font-size: 40px;
      line-height: 46px;
      letter-spacing:  1.5px;
    }
    `,
    chapterTitle: `
    font-size: 72px;
    line-height: 90px;
    letter-spacing: 4px;
    @media only screen and (max-width: 480px) {
      font-size: 40px;
      line-height: 46px;
      letter-spacing:  1.5px;
    }
    `,
    chapterMark: `
      font-size: 20px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      letter-spacing: 4px;
      text-transform: capitalize;
    `,
    h1: `
    font-size: 44px;
    line-height: 64px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 30px;
      line-height: 46px;
      letter-spacing:  0px;
    }
    `,
    h2: `
    font-size: 36px;
    line-height: 56px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 26px;
      line-height: 32px;
      letter-spacing:  0px;
    }
    `,
    title1: `
    font-size: 28px;
    line-height: 48px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: 0px;
    }
      `,
    title2: `
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.24px;
    }
    `,
    title3: `
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0px;
    }
    `,
    title4: `
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0px;
    }
    `,
    body1: `
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 26px;
      letter-spacing: 0px;
    }
    `,
    body2: `
    font-size: 16px;
    line-height: 1.56;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0px;
    }
    `,
    caption: `
    font-size: 14px !important;
    line-height: 16px !important;
    letter-spacing: 0 !important;
    @media only screen and (max-width: 480px) {
      font-size: 14px !important;
      line-height: 16px !important;
      letter-spacing: 0 !important;
    }
    `,
    bttText: `
    font-size: 14.8px;
    line-height: 14.8px;
    letter-spacing: 0.48px;
    `,
    input: `
      font-size: 12.8px;
      line-height: 18.4px;
      letter-spacing: 0px;
    `,
  }
}

export default type;