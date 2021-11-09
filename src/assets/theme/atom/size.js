import sizeToken from '../token/sizeToken';

const size = {
  liveArea: '1200px',
  liveAreaSmall: '820px',
  // basic unit in grid system
  unit: {
    tiny:sizeToken.gridUnit.tiny,
    small:sizeToken.gridUnit.small,
    regular:sizeToken.gridUnit.regular,
    big:sizeToken.gridUnit.big,
  },
  // spacing size between elements in same components
  spacing: {
    tiny: sizeToken.gridUnit.tiny * 1,
    small: sizeToken.gridUnit.small * 1,
    regular: sizeToken.gridUnit.regular * 1,
    medium1: sizeToken.gridUnit.regular * 1.5,
    medium2: sizeToken.gridUnit.regular * 2,
    big1: sizeToken.gridUnit.regular * 2,
    big2: sizeToken.gridUnit.small * 5,
    huge: sizeToken.gridUnit.small * 9,
  },
  // height of clickable components like button, chip, tag etc...
  height: {
    tiny: 24,
    small: 32,
    regular: 40,
    medium: 48,
    big: 56
  }
}

export default size;