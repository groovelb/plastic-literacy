const type = {
  weight: {
    exp: {
      bold: `
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
      `
    },
    prd: {
      light: `
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
      `,
      regular: `
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
      `,
      bold: `
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 800;
      `
    },
  },
  size: {
    title: `
    font-size: 64px;
    line-height: 64px;
    letter-spacing: 4px;
    @media only screen and (max-width: 480px) {
      font-size: 40px;
      line-height: 46px;
      letter-spacing:  1.5px;
    }
    `,
    chapterMark: `
      font-size: 20px;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      letter-spacing: 4px;
    `,
    h1: `
    font-size: 48px;
    line-height: 64px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 30px;
      line-height: 46px;
      letter-spacing:  0px;
    }
    `,
    title1: `
    font-size: 32px;
    line-height: 46px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: 0px;
    }
      `,
    title2: `
    font-size: 24px;
    line-height: 36px;
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
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0px;
    }
    `,
    body2: `
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0px;
    }
    `,
    caption: `
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
    @media only screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0;
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