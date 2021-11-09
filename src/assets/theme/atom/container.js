import color from './color';

const container = {
  static: {
    // PRIMARY
    primaryOutlined: `
      border: solid 0.5px ${color.brand.primary700};
      color: ${color.brand.primary700};
    `,
    primaryFilled: `
      background-color: ${color.primary700};
      color: ${color.ui.white700};
    `,
    // SUPPORTIVE (LIGHT SECONDARY)
    supportiveOutlined: `
      border: solid 0.5px ${color.brand.blueGray50};
      color: ${color.brand.blueGray50};
    `,
    supportiveFilled: `
      background-color: ${color.blueGray50};
      color: ${color.ui.strong};
    `,
    // WHITE
    whiteOutlined: `
      border: solid 0.5px ${color.ui.white700};
      color: ${color.ui.white700};
    `,
    whiteFilled: `
      background-color: ${color.ui.white700};
      color: ${color.ui.strong};
    `,
    // GRAY
    grayOutlined: `
      border: solid 0.5px ${color.ui.middle1};
      color: ${color.ui.strong};
    `,
    // GRAY LIGHT
    grayLightOutlined: `
    border: solid 0.5px ${color.ui.low};
    color: ${color.ui.strong};
  `,
  },
  interactive: {
    // PRIMARY
    primaryOutlined: {
      disable: `
        border: solid 0.5px ${color.brand.primary400};
        color: ${color.brand.primary400};
      `,
      enable: `
        border: solid 0.5px ${color.brand.primary700};
        color: ${color.brand.primary700};
      `,
      hover: `
        border: solid 0.5px ${color.brand.primary900};
        color: ${color.brand.primary900};
      `,
      active: `
        border: solid 0.5px ${color.brand.primary900};
        color: ${color.brand.primary900};
      `,
    },
    primaryFilled: {
      disable: `
        background-color: ${color.brand.primary400};
        color: ${color.ui.white500};
      `,
      enable: `
        background-color: ${color.brand.primary700};
        color: ${color.ui.white700};
      `,
      hover: `
        background-color: ${color.brand.primary900};
        color: ${color.ui.white700};
      `,
      active: `
        background-color: ${color.primary900};
        color: ${color.ui.white700};
      `,
    },
    // WHITE
    whiteOutlined: {
      disable: `
        border: solid 0.5px ${color.ui.low};
        color: ${color.ui.low};
      `,
      enable: `
        border: solid 0.5px ${color.ui.white500};
        color: ${color.ui.white500};
      `,
      hover: `
        border: solid 0.5px ${color.ui.white700};
        color: ${color.ui.white700};
      `,
      active: `
        border: solid 0.5px ${color.ui.white700};
        color: ${color.ui.white700};
      `,
    },
    whiteFilled: {
      disable: `
        background-color: ${color.ui.low};
        color: ${color.ui.middle1};
      `,
      enable: `
        background-color: ${color.ui.white500};
        color: ${color.ui.middle1};
      `,
      hover: `
        background-color: ${color.white700};
        color: ${color.ui.middle2};
      `,
      active: `
        background-color: ${color.white700};
        color: ${color.ui.middle2};
      `,
    },
    // GRAY
    grayOutlined: {
      disable: `
        border: solid 0.5px ${color.ui.low};
        color: ${color.ui.low};
      `,
      enable: `
        border: solid 0.5px ${color.ui.middle1};
        color: ${color.ui.middle2};
      `,
      hover: `
        border: solid 0.5px ${color.ui.middle2};
        color: ${color.ui.strong};
      `,
      active: `
        border: solid 0.5px ${color.ui.middle2};
        color: ${color.ui.strong};
      `,
    },
     // GRAY
     grayLightOutlined: {
      disable: `
        border: solid 0.5px ${color.ui.low};
        color: ${color.ui.low};
      `,
      enable: `
        border: solid 0.5px ${color.ui.low};
        background-color: ${color.ui.white600};
      `,
      hover: `
        border: solid 0.5px ${color.ui.low};
        color: ${color.ui.strong};
        background-color: ${color.ui.white700};
      `,
      active: `
        border: solid 0.5px ${color.ui.low};
        background-color: ${color.ui.white700};
        color: ${color.ui.strong};
      `,
    },
    // Red
    redOutlined: {
      disable: `
        border: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
        opacity: 0.64;
      `,
      enable: `
        border: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
      `,
      hover: `
        border: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
      `,
      active: `
        border: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
      `,
    },
    redFilled: {
      disable: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
        opacity: 0.64;
      `,
      enable: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
      `,
      hover: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
      `,
      active: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
      `,
    },
  },
  interactiveOutline: {
    // PRIMARY
    primaryOutlined: {
      disable: `
        outline: solid 0.5px ${color.brand.primary400};
        color: ${color.brand.primary400};
      `,
      enable: `
        outline: solid 0.5px ${color.brand.primary700};
        color: ${color.brand.primary700};
      `,
      hover: `
        outline: solid 0.5px ${color.brand.primary900};
        color: ${color.brand.primary900};
      `,
      active: `
        outline: solid 0.5px ${color.brand.primary900};
        color: ${color.brand.primary900};
      `,
    },
    primaryFilled: {
      disable: `
        background-color: ${color.brand.primary400};
        color: ${color.ui.white500};
      `,
      enable: `
        background-color: ${color.brand.primary700};
        color: ${color.ui.white700};
      `,
      hover: `
        background-color: ${color.brand.primary900};
        color: ${color.ui.white700};
      `,
      active: `
        background-color: ${color.primary900};
        color: ${color.ui.white700};
      `,
    },
    // WHITE
    whiteOutlined: {
      disable: `
        outline: solid 0.5px ${color.ui.low};
        color: ${color.ui.low};
      `,
      enable: `
        outline: solid 0.5px ${color.ui.white500};
        color: ${color.ui.white500};
      `,
      hover: `
        outline: solid 0.5px ${color.ui.white700};
        color: ${color.ui.white700};
      `,
      active: `
        outline: solid 0.5px ${color.ui.white700};
        color: ${color.ui.white700};
      `,
    },
    whiteFilled: {
      disable: `
        background-color: ${color.ui.low};
        color: ${color.ui.middle1};
      `,
      enable: `
        background-color: ${color.ui.white500};
        color: ${color.ui.middle1};
      `,
      hover: `
        background-color: ${color.white700};
        color: ${color.ui.middle2};
      `,
      active: `
        background-color: ${color.white700};
        color: ${color.ui.middle2};
      `,
    },
    // GRAY
    grayOutlined: {
      disable: `
        outline: solid 0.5px ${color.ui.low};
        color: ${color.ui.low};
      `,
      enable: `
        outline: solid 0.5px ${color.ui.middle1};
        color: ${color.ui.middle2};
      `,
      hover: `
        outline: solid 0.5px ${color.ui.middle2};
        color: ${color.ui.strong};
      `,
      active: `
        outline: solid 0.5px ${color.ui.middle2};
        color: ${color.ui.strong};
      `,
    },
     // GRAY
     grayLightOutlined: {
      disable: `
        outline: solid 0.5px ${color.ui.low};
        color: ${color.ui.low};
      `,
      enable: `
        outline: solid 0.5px ${color.ui.low};
        background-color: ${color.ui.white600};
      `,
      hover: `
        outline: solid 0.5px ${color.ui.low};
        color: ${color.ui.strong};
        background-color: ${color.ui.white700};
      `,
      active: `
        outline: solid 0.5px ${color.ui.low};
        background-color: ${color.ui.white700};
        color: ${color.ui.strong};
      `,
    },
    // Red
    redOutlined: {
      disable: `
        outline: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
        opacity: 0.64;
      `,
      enable: `
        outline: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
      `,
      hover: `
        outline: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
      `,
      active: `
        outline: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
      `,
    },
    redFilled: {
      disable: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
        opacity: 0.64;
      `,
      enable: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
      `,
      hover: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
      `,
      active: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
      `,
    },
  },
  // button
  button: {
    // PRIMARY
    primaryOutlined: {
      disable: `
        border: solid 0.5px ${color.brand.primary400};
        color: ${color.brand.primary400};
      `,
      enable: `
        border: solid 0.5px ${color.brand.primary700};
        color: ${color.brand.primary700};
      `,
      hover: `
        border: solid 0.5px ${color.brand.primary900};
        color: ${color.brand.primary900};
      `,
      active: `
        border : solid 0.5px ${color.brand.primary900};
        color: ${color.brand.primary900};
      `,
    },
    primaryFilled: {
      disable: `
        background-color: ${color.brand.primary400};
        color: ${color.ui.white500};
      `,
      enable: `
        background-color: ${color.brand.primary700};
        color: ${color.ui.white700};
      `,
      hover: `
        background-color: ${color.brand.primary900};
        color: ${color.ui.white700};
      `,
      active: `
        background-color: ${color.primary900};
        color: ${color.ui.white700};
      `,
    },
    // WHITE
    whiteOutlined: {
      disable: `
        border: solid 0.5px ${color.ui.low};
        color: ${color.ui.low};
      `,
      enable: `
        border: solid 0.5px ${color.ui.white500};
        color: ${color.ui.white500};
      `,
      hover: `
        border: solid 0.5px ${color.ui.white700};
        color: ${color.ui.white700};
      `,
      active: `
        border: solid 0.5px ${color.ui.white700};
        color: ${color.ui.white700};
      `,
    },
    whiteFilled: {
      disable: `
        background-color: ${color.ui.low};
        color: ${color.ui.middle1};
      `,
      enable: `
        background-color: ${color.ui.white500};
        color: ${color.ui.middle1};
      `,
      hover: `
        background-color: ${color.white700};
        color: ${color.ui.middle2};
      `,
      active: `
        background-color: ${color.white700};
        color: ${color.ui.middle2};
      `,
    },
    // GRAY
    grayOutlined: {
      disable: `
        border: solid 0.5px ${color.ui.low};
        color: ${color.ui.low};
      `,
      enable: `
        border: solid 0.5px ${color.ui.middle1};
        color: ${color.ui.middle1};
      `,
      hover: `
        border: solid 0.5px ${color.ui.middle2};
        color: ${color.ui.strong};
      `,
      active: `
        border: solid 0.5px ${color.ui.middle2};
        color: ${color.ui.strong};
      `,
    },
     // GRAY
     grayLightOutlined: {
      disable: `
        border: solid 0.5px ${color.ui.low};
        color: ${color.ui.low};
      `,
      enable: `
        border: solid 0.5px ${color.ui.low};
        background-color: ${color.ui.white600};
      `,
      hover: `
        border: solid 0.5px ${color.ui.low};
        color: ${color.ui.strong};
        background-color: ${color.ui.white700};
      `,
      active: `
        border: solid 0.5px ${color.ui.low};
        background-color: ${color.ui.white700};
        color: ${color.ui.strong};
      `,
    },
    // Red
    redOutlined: {
      disable: `
        border: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
        opacity: 0.64;
      `,
      enable: `
        border: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
      `,
      hover: `
        border: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
      `,
      active: `
        border: solid 0.5px ${color.signal.warn};
        color: ${color.signal.warn};
      `,
    },
    redFilled: {
      disable: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
        opacity: 0.64;
      `,
      enable: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
      `,
      hover: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
      `,
      active: `
        background-color: ${color.signal.warn};
        color: ${color.ui.white700};
      `,
    },
  },
  chip:{
    enable: `
      background-color: ${color.brand.secondary50};
      color: ${color.ui.middle1};
    `,
    hover: `
      background-color: ${color.brand.secondary100};
      color: ${color.ui.strong};
    `,
    selected: `
      border: solid 2px ${color.brand.primary700};
      background-color: ${color.brand.secondary50};
      color: ${color.ui.strong};
    `,
  },
 	//elavation
   elevation: {
		level1Block: `
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
    `,
	},
}

export default container;