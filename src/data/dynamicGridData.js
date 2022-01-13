

import img_grid1 from '../assets/img/c2/grid/img_grid_mixed.jpg';
import img_grid2 from '../assets/img/c2/grid/img_grid_polluted.jpg';
import img_grid3 from '../assets/img/c2/grid/img_grid_polluted2.jpg';
import img_grid4 from '../assets/img/c2/grid/img_grid_7category.jpg';
import category1 from '../assets/img/c2/grid/category_pete.jpg';
import category2 from '../assets/img/c2/grid/category_hdpe.jpg';
import category3 from '../assets/img/c2/grid/category_pvc.jpg';
import category4 from '../assets/img/c2/grid/category_ldpe.jpg';
import category5 from '../assets/img/c2/grid/category_pp.jpg';
import category6 from '../assets/img/c2/grid/category_ps.jpg';
import category7 from '../assets/img/c2/grid/category_other.jpg';
import color from '../assets/theme/atom/color';

export const gridDataLand = [
  //Row1
  {
    type: 'question',
    question: `음식물에 오염되어 
    있어도 재활용이 
    가능할까요?`,
    answer1:`불가능합니다`,
    answer2:`음식물에 오염된 상태로 배출되는 일회용 플라스틱은 재활용할 수 없습니다.`,
    x: 0,
    y: 0,
    unitWidth: 2,
    unitHeight: 2
  },
  {
    type: 'image',
    src: img_grid4,
    x: 2,
    y: 0,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid1,
    x: 4,
    y: 0,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid2,
    x: 5,
    y: 0,
    unitWidth: 1,
    unitHeight: 1
  },
  //Row2
  {
    type: 'image',
    src: img_grid3,
    x: 2,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid1,
    x: 3,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `플라스틱은 재질에 상관없이 합쳐서 배출해도 모두 재활용이 가능할까요?`,
    answer1:`불가능합니다`,
    answer2:`플라스틱은 동일한 재질끼리만 재활용이 가능하지만 현재의 배출 환경은 이런 특성을 고려하기 어렵습니다.`,
    x: 4,
    y: 1,
    unitWidth: 2,
    unitHeight: 2
  },
  //Row3
  {
    type: 'image',
    src: img_grid2,
    x: 0,
    y: 2,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid3,
    x: 1,
    y: 2,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `우리나라의 재활용 처리 현황은 정확한 수치일까요?`,
    answer1:`정확하지 않습니다`,
    answer2:`공공선별장 외의 모든 데이터가 반영되지 않아 정확한 재활용 처리 현황을 파악할 수 없습니다.`,
    x: 2,
    y: 2,
    unitWidth: 2,
    unitHeight: 2
  },
  //Row4
  {
    type: 'image',
    src: img_grid4,
    x: 0,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid1,
    x: 1,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid2,
    x: 4,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid3,
    x: 5,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
]; 

export const gridDataCategory = [
  //Row1
  {
    type: 'question',
    bg: color.brand.white,
    themeType:'light',
    question: `플라스틱은 총 7개의 분류체계가 있습니다.`,
    // answer1:`불가능합니다`,
    answer2:`플라스틱은 우리가 흔히 알고있는 PETE부터 재질에 따라 총 7가지 분류체계가 있으며, 경우에 따라 재활용이 불가능,일부가능,가능 여부가 결정됩니다.`,
    x: 0,
    y: 0,
    unitWidth: 1,
    unitHeight: 2
  },
  {
    type: 'question',
    bg: color.brand.epPurple,
    themeType:'dark',
    question: `다음중 재활용이 가능한 플라스틱 분류는 무엇일까요?`,
    // answer1:`불가능합니다`,
    answer2:`아래의 7가지 플라스틱 제품의 재활용 여부를 확인해보세요.`,
    x: 1,
    y: 0,
    unitWidth: 3,
    unitHeight: 1
  },
  //Row2
  {
    type: 'image',
    src: category1,
    x: 1,
    y: 1,
    answer1:`가능합니다`,
    answer2:`우리가 가장 자주 만날 수 있는 플라스틱인 PETE는 투명한 경우에 제대로 된 재활용을 할 수 있습니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true
  },
  {
    type: 'image',
    src: category2,
    x: 2,
    y: 1,
    answer1:`불가능합니다`,
    answer2:`용기에 보관되었던 내용물을 깨끗이 씻고 스티커를 제거해서 배출해야만 재활용할 수 있습니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: false
  },
  {
    type: 'image',
    src: category3,
    x: 3,
    y: 1,
    answer1:`일부만 가능합니다.`,
    answer2:`국내에는 PVC에 함유된 염소를 제거할 수 있는 별도의 공정이 없어서 일부는 재활용이 불가능합니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: false,
  },
  //Row3
  {
    type: 'image',
    src: category4,
    x: 0,
    y: 2,
    answer1:`가능합니다`,
    answer2:`재활용을 위해 내용물을 깨끗이 씻고 스티커를 제거해서 배출하면 재활용할 수 있습니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true
  },
  {
    type: 'image',
    src: category5,
    x: 1,
    y: 2,
    answer1:`가능합니다`,
    answer2:`열에 강한 PP는 환경호르몬도 배출하지 않아 안전하고, 내용물을 잘 씻어 배출하면 재활용을 할 수 있습니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true
  },
  {
    type: 'image',
    src: category6,
    x: 2,
    y: 2,
    answer1:`가능합니다`,
    answer2:`PS는 고온에 쉽게 녹아 변형되고, 발암물질이 발생되지만 잘 씻어서 배출하면 재활용이 가능합니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true
  },
  {
    type: 'image',
    src: category7,
    x: 3,
    y: 2,
    answer1:`불가능합니다`,
    answer2:`OTHER는 소재가 다양하게 섞여 매번 판별이 어렵기 때문에 재활용이 불가능합니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: false
  },
]; 

export const gridDataOcean = [
  //Row1
  {
    type: 'question',
    question: `테트라포드에 버려진 플라스틱은 적절하게 수거되고 있을까요?
    `,
    answer1:`어렵습니다.`,
    answer2:`테트라포드의 폐플라스틱 수거를 위해서는 수십 톤의 테트라포드를 들어내야 하기 때문에 수거가 어렵습니다.`,
    x: 0,
    y: 0,
    unitWidth: 2,
    unitHeight: 2
  },
  {
    type: 'image',
    src: img_grid4,
    x: 2,
    y: 0,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid1,
    x: 4,
    y: 0,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid2,
    x: 5,
    y: 0,
    unitWidth: 1,
    unitHeight: 1
  },
  //Row2
  {
    type: 'image',
    src: img_grid3,
    x: 2,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid1,
    x: 3,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `해양쓰레기는 배출 이후 처리까지 빠른시일 내에 가능할까요?`,
    answer1:`어렵습니다`,
    answer2:`해양쓰레기는 중간 집하장에서 특수 처리를 위한 시간이 걸리기 때문에 치우는 속도가 쌓이는 속도를 따라가지 못합니다.`,
    x: 4,
    y: 1,
    unitWidth: 2,
    unitHeight: 2
  },
  //Row3
  {
    type: 'image',
    src: img_grid2,
    x: 0,
    y: 2,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid3,
    x: 1,
    y: 2,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `해양 플라스틱 쓰레기는 가정에서 버리는 플라스틱과 처리 비용이 비슷할까요?`,
    answer1:`비쌉니다.`,
    answer2:`염분과 부착생물 등 특수한 처리가 필요하기 때문에 생활 플라스틱보다 2~3배 비싼 처리 비용이 필요합니다.`,
    x: 2,
    y: 2,
    unitWidth: 2,
    unitHeight: 2
  },
  //Row4
  {
    type: 'image',
    src: img_grid4,
    x: 0,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid1,
    x: 1,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid2,
    x: 4,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: img_grid3,
    x: 5,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
]; 