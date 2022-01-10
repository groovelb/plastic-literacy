import colorToken from '../token/colorToken';

const color = {
  brand: {
    orange: colorToken.gsOrange,
    orangeDark: colorToken.gsOrange2,
    emerald: colorToken.gsEmerald,
    blue: colorToken.gsBlue,
    green: colorToken.gsGreen,
    epNavy: colorToken.epNavy,
    epGreen: colorToken.epGreen,
    epBlue: colorToken.epBlue,
    epPurple: colorToken.epPurple,
    darkNavy: colorToken.black,
    epDeepPurple: colorToken.epDeepPurple,
    primary900: colorToken.blue900,
    primary800: colorToken.blue800,
    primary700: colorToken.blue700,
    primary600: colorToken.blue600,
    primary500: colorToken.blue500,
    primary400: colorToken.blue400,
    primary300: colorToken.blue300,
    primary200: colorToken.blue200,
    primary100: colorToken.blue100,
    primary50: colorToken.blue50,
    secondary900: colorToken.blueGray900,
    secondary800: colorToken.blueGray800,
    secondary700: colorToken.blueGray700,
    secondary600: colorToken.blueGray600,
    secondary500: colorToken.blueGray500,
    secondary400: colorToken.blueGray400,
    secondary300: colorToken.blueGray300,
    secondary200: colorToken.blueGray200,
    secondary100: colorToken.blueGray100,
    secondary50: colorToken.blueGray50,
  },
  gradient: {
    blue: `
      background: linear-gradient(132deg, ${colorToken.blueGray900} 0%, ${colorToken.blue700} 100%);
    `,
    white: `
      background: linear-gradient(132deg, ${colorToken.blue200} 0%, ${colorToken.white700} 100%);
    `,
  },
  ui: {
    bg: {
      light: colorToken.white,
      dark: colorToken.black
    },
    strong: colorToken.black,
    middle1: colorToken.gray700,
    middle2: colorToken.gray600,
    low: colorToken.gray200,
    white700: colorToken.white700,
    white600: colorToken.white600,
    white500: colorToken.white500,
  },
  signal: {
    inform: colorToken.blueGray700,
    success: colorToken.green,
    fail: colorToken.pinkRed,
    warn: colorToken.red,
    highlight: colorToken.pinkRed
  },
  input: {
    disabled: colorToken.low,
    enable: colorToken.middle2,
    hover: colorToken.primary700,
    selected: colorToken.primary700,
    active: colorToken.primary900,
  }
}

export default color;