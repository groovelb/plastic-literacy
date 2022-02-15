

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

import land1 from '../assets/img/girdLand/1.jpg';
import land2 from '../assets/img/girdLand/2.jpg';
import land3 from '../assets/img/girdLand/3.jpg';
import land4 from '../assets/img/girdLand/4.jpg';
import land5 from '../assets/img/girdLand/5.jpg';
import land6 from '../assets/img/girdLand/6.jpg';
import land7 from '../assets/img/girdLand/7.jpg';
import land8 from '../assets/img/girdLand/8.jpg';
import land9 from '../assets/img/girdLand/9.jpg';
import land10 from '../assets/img/girdLand/10.jpg';
import land11 from '../assets/img/girdLand/11.jpg';
import land12 from '../assets/img/girdLand/12.jpg';
import land13 from '../assets/img/girdLand/13.jpg';

import ocean1 from '../assets/img/gridOcean/1.jpg';
import ocean2 from '../assets/img/gridOcean/2.jpg';
import ocean3 from '../assets/img/gridOcean/3.jpg';
import ocean4 from '../assets/img/gridOcean/4.jpg';
import ocean5 from '../assets/img/gridOcean/5.jpg';
import ocean6 from '../assets/img/gridOcean/6.jpg';
import ocean7 from '../assets/img/gridOcean/7.jpg';
import ocean8 from '../assets/img/gridOcean/8.jpg';
import ocean9 from '../assets/img/gridOcean/9.jpg';
import ocean10 from '../assets/img/gridOcean/10.jpg';
import ocean11 from '../assets/img/gridOcean/11.jpg';
import ocean12 from '../assets/img/gridOcean/12.jpg';
import ocean13 from '../assets/img/gridOcean/13.jpg';

import HDPE from '../assets/img/plasticType/Plastics_HDPE.jpg';
import LDPE from '../assets/img/plasticType/Plastics_LDPE.jpg';
import OTHER from '../assets/img/plasticType/Plastics_OTHER.jpg';
import PETE from '../assets/img/plasticType/Plastics_PETE.jpg';
import PP from '../assets/img/plasticType/Plastics_PP.jpg';
import PS from '../assets/img/plasticType/Plastics_PS.jpg';
import PVC from '../assets/img/plasticType/Plastics_PVC.jpg';

export const gridDataLand = [
  //Row1
  {
    type: 'question',
    question: `서로 다른 플라스틱 재질은 하나하나 분리해서 배출해야 할까요? `,
    answer1:`분리배출이 원칙이지만, 예외도 존재합니다. `,
    answer2:`예를 들어 투명 페트병과 뚜껑은 서로 다른 플라스틱 재질이지만, 뚜껑을 꼭 닫아 배출해야 합니다. 수거 과정에서 투명 페트병의 오염을 방지하기 위해서인데, 재활용을 위해 분쇄 후 물에 씻는 과정에서 뚜껑재질은 물에 뜨기 때문에 쉽게 분리가 가능합니다.`,
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
    question: `음식물이 묻은 플라스틱은 분리수거 하면 안 된다고 하던데, 깨끗이 씻으면 재활용이 가능할까요?`,
    answer1:`불가능합니다`,
    answer2:`플라스틱에 남아있는 염분은 재활용을 어렵게 하기 때문에, 일반적으로 물로 깨끗이 헹궈서 배출하면 재활용이 가능합니다. 
    하지만, 스티로폼 재질의 컵라면 용기처럼 아무리 씻어도 음식물 색이 지워지지 않으면 종량제 봉투에 버려야 합니다.`,
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
    question: `빨대, 칫솔 등 작은 플라스틱도 분리수거 해야 할까요?`,
    answer1:`종량제 봉투에 배출이 적합합니다.`,
    answer2:`분리배출에는 3가지 원칙이 있습니다. 분리배출 표시가 있으면 분리배출, 최대한 씻어서 분리배출, 최대한 크게 잘라서 분리배출입니다. 
    하지만, 작은 플라스틱은 수거업체를 위해 종량제 봉투에 배출하는 것이 좋습니다. 빠르게 이동하는 컨베어 벨트에서 플라스틱을 손으로 수거하는 시스템에서 작은 플라스틱은 수거될 가능성이 적고, 크기가 작아 재활용의 수익성이 떨어지기 때문입니다.
    `,
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

export const gridDataLand1 = [
  //Row1
  {
    type: 'question',
    question: `서로 다른 플라스틱 재질은 하나하나 분리해서 배출해야 할까요? `,
    answer1:`분리배출이 원칙이지만, 예외도 존재합니다. `,
    answer2:`페트병과 뚜껑은 서로 다른 재질이지만, 뚜껑을 닫고 배출해도 괜찮습니다. 수거 과정에서 페트병의 오염을 방지할 수 있고, 분쇄 후 세척 과정에서 뚜껑 재질은 물에 뜨기 때문에 쉽게 분리가 가능합니다.`,
    x: 0,
    y: 0,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land1,
    x: 2,
    y: 0,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land2,
    x: 4,
    y: 0,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land3,
    x: 5,
    y: 0,
    unitWidth: 1,
    unitHeight: 1
  },
  //Row2
  {
    type: 'image',
    src: land4,
    x: 0,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land5,
    x: 1,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `음식물이 묻은 플라스틱은 분리수거 하면 안 된다고 하던데, 깨끗이 씻으면 재활용이 가능할까요?`,
    answer1:`음식물 색이 남아있으면 불가능합니다.`,
    answer2:`사용했던 플라스틱에 남아있는 염분 등 이물질은 재활용을 어렵게 하기 때문에, 물로 깨끗이 헹궈서 배출해야 합니다. 다만, 스티로폼 재질의 컵라면 용기처럼 아무리 씻어도 음식물 색이 남아있으면 종량제 봉투로 배출해야 합니다.`,
    x: 2,
    y: 1,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land6,
    x: 4,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land7,
    x: 5,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  //Row3
  {
    type: 'question',
    question: `빨대, 칫솔 등 작은 플라스틱도 분리수거 해야 할까요?`,
    answer1:`종량제 봉투에 배출이 적합합니다.`,
    answer2:`플라스틱을 배출하면 빠르게 이동하는 컨베어 벨트 위에서 선별해야 하는데, 작은 플라스틱은 수거될 가능성이 적고, 크기가 작아 재활용의 수익성이 떨어집니다. 또한, 기계를 고장낼 수도 있기 때문에 종량제 봉투에 배출해야 합니다.`,
    x: 0,
    y: 2,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land8,
    x: 2,
    y: 2,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land9,
    x: 3,
    y: 2,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land10,
    x: 4,
    y: 2,
    unitWidth: 2,
    unitHeight: 1
  },
  //Row4
  {
    type: 'image',
    src: land11,
    x: 0,
    y: 3,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `플라스틱 처리시설을 늘리면 심각한 플라스틱 쓰레기 문제를 해결할 수 있지 않나요?`,
    answer1:`쓰레기를 줄이는 것이 우선입니다.`,
    answer2:`쓰레기 처리 과정에서 발생하는 환경오염 등의 이유로 주민반대가 심하기 때문에 새로운 처리 시설을 찾기 쉽지 않습니다. 대표적 예로 서울과 경기권의 쓰레기를 처리하던 인천시는 2025년부터 인천시 안에서 발생하는 쓰레기만 처리하겠다고 선언해, 지자체 간 갈등이 고조되고 있습니다. 결국, 새로운 처리시설 보다는 쓰레기를 줄이는 것이 우선입니다.`,
    x: 2,
    y: 3,
    unitWidth: 2,
    unitHeight: 1
  },
  
  {
    type: 'image',
    src: land12,
    x: 4,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land13,
    x: 5,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
]; 

export const gridDataLand1Mobile = [
  //Row1
  {
    type: 'question',
    question: `서로 다른 플라스틱 재질은 하나하나 분리해서 배출해야 할까요? `,
    answer1:`분리배출이 원칙이지만, 예외도 존재합니다. `,
    answer2:`페트병과 뚜껑은 서로 다른 재질이지만, 뚜껑을 닫고 배출해도 괜찮습니다. 수거 과정에서 페트병의 오염을 방지할 수 있고, 분쇄 후 세척 과정에서 뚜껑 재질은 물에 뜨기 때문에 쉽게 분리가 가능합니다.`,
    x: 0,
    y: 0,
    unitWidth: 3,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land1,
    x: 3,
    y: 0,
    unitWidth: 3,
    unitHeight: 1
  },
  //Row2
  {
    type: 'image',
    src: land4,
    x: 0,
    y: 1,
    unitWidth: 3,
    unitHeight: 1
  },
  // {
  //   type: 'image',
  //   src: land5,
  //   x: 2,
  //   y: 1,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
  {
    type: 'question',
    question: `음식물이 묻은 플라스틱은 분리수거 하면 안 된다고 하던데, 깨끗이 씻으면 재활용이 가능할까요?`,
    answer1:`음식물 색이 남아있으면 불가능합니다.`,
    answer2:`사용했던 플라스틱에 남아있는 염분 등 이물질은 재활용을 어렵게 하기 때문에, 물로 깨끗이 헹궈서 배출해야 합니다. 다만, 스티로폼 재질의 컵라면 용기처럼 아무리 씻어도 음식물 색이 남아있으면 종량제 봉투로 배출해야 합니다.`,
    x: 3,
    y: 1,
    unitWidth: 3,
    unitHeight: 1
  },
  //Row3
  {
    type: 'question',
    question: `빨대, 칫솔 등 작은 플라스틱도 분리수거 해야 할까요?`,
    answer1:`종량제 봉투에 배출이 적합합니다.`,
    answer2:`플라스틱을 배출하면 빠르게 이동하는 컨베어 벨트 위에서 선별해야 하는데, 작은 플라스틱은 수거될 가능성이 적고, 크기가 작아 재활용의 수익성이 떨어집니다. 또한, 기계를 고장낼 수도 있기 때문에 종량제 봉투에 배출해야 합니다.`,
    x: 0,
    y: 2,
    unitWidth: 3,
    unitHeight: 1
  },
  {
    type: 'image',
    src: land8,
    x: 3,
    y: 2,
    unitWidth: 3,
    unitHeight: 1
  },
  // {
  //   type: 'image',
  //   src: land9,
  //   x: 3,
  //   y: 2,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
  //Row4
  {
    type: 'image',
    src: land11,
    x: 0,
    y: 3,
    unitWidth: 3,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `플라스틱 처리시설을 늘리면 심각한 플라스틱 쓰레기 문제를 해결할 수 있지 않나요?`,
    answer1:`쓰레기를 줄이는 것이 우선입니다.`,
    answer2:`쓰레기 처리 과정에서 발생하는 환경오염 등의 이유로 주민반대가 심하기 때문에 새로운 처리 시설을 찾기 쉽지 않습니다. 대표적 예로 서울과 경기권의 쓰레기를 처리하던 인천시는 2025년부터 인천시 안에서 발생하는 쓰레기만 처리하겠다고 선언해, 지자체 간 갈등이 고조되고 있습니다. 결국, 새로운 처리시설 보다는 쓰레기를 줄이는 것이 우선입니다.`,
    x: 3,
    y: 3,
    unitWidth: 3,
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
    src: PETE,
    x: 1,
    y: 1,
    answer1:`가능합니다`,
    answer2:`생수병을 만드는 PETE 소재는 재활용이 가능합니다. 
    물로 깨끗이 세척 후 라벨을 분리해서 배출하면 됩니다.
    `,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true,
    title:'음료수가 담겨있던 페트병',
    category:'PETE'
  },
  {
    type: 'image',
    src: HDPE,
    x: 2,
    y: 1,
    answer1:`불가능합니다`,
    answer2:`세탁, 설거지를 위한 세제 용기는 일반적으로 HDPE로 만들어져 재활용이 가능합니다. 하지만 세제가 다른 플라스틱을 오염시킬 수 있기 때문에 반드시 깨끗이 씻어서 배출해야 합니다.
    `,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true,
    title:'세자가 담겨있던 주방 세제통',
    category:'HDPE'
  },
  {
    type: 'image',
    src: PVC,
    x: 3,
    y: 1,
    answer1:`불가능합니다.`,
    answer2:`국내에는 파이프의 원료인 PVC에 함유된 염소를 제거할 수 있는 별도의 공정이 없기 때문에, 일반적으로 재활용이 어렵습니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: false,
    title:'플라스틱 파이프',
    category:'PVC'
  },
  //Row3
  {
    type: 'image',
    src: LDPE,
    x: 0,
    y: 2,
    answer1:`가능합니다`,
    answer2:`랩이나 지퍼백 같은 LDPE 소재는 깨끗이 씻어 이물질을 제거하고 배출하면 재활용할 수 있습니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true,
    title:'투명 포장재',
    category:'LDPE'
  },
  {
    type: 'image',
    src: PP,
    x: 1,
    y: 2,
    answer1:`가능합니다`,
    answer2:`배달음식을 주로 담는 PP 소재는 재활용이 가능합니다. 하지만 음식물을 반드시 깨끗이 씻어서 배출해야 합니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true,
    title:'배달 도시락 용기',
    category:'PP'
  },
  {
    type: 'image',
    src: PS,
    x: 2,
    y: 2,
    answer1:`가능합니다`,
    answer2:`요구르트와 바나나 우유병, 그리고 스티로폼은 모두 PS 재질입니다. 이 재질은 오염 물질을 제거하면 재활용이 가능합니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true,
    title:'바나나맛 우유병',
    category:'PS'
  },
  {
    type: 'image',
    src: OTHER,
    x: 3,
    y: 2,
    answer1:`불가능합니다`,
    answer2:`화장품 용기, 아기 젖병 등의 OTHER는 두 가지 이상의 재질이 섞인 복합재질을 의미합니다. 이 소재는 재활용할 수 없으며, 종량제 봉투에 배출해야 합니다.`,
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: false,
    title:'화장품 용기',
    category:'OTHER'
  },
]; 
export const gridDataCategoryMobile = [
  //Row1
  // {
  //   type: 'question',
  //   bg: color.brand.white,
  //   themeType:'light',
  //   question: `플라스틱은 총 7개의 분류체계가 있습니다.`,
  //   // answer1:`불가능합니다`,
  //   answer2:`플라스틱은 우리가 흔히 알고있는 PETE부터 재질에 따라 총 7가지 분류체계가 있으며, 경우에 따라 재활용이 불가능,일부가능,가능 여부가 결정됩니다.`,
  //   x: 0,
  //   y: 0,
  //   unitWidth: 2,
  //   unitHeight: 1
  // },
  {
    type: 'question',
    bg: color.brand.epPurple,
    themeType:'dark',
    question: `다음중 재활용이 가능한 플라스틱 분류는 무엇일까요?`,
    // answer1:`불가능합니다`,
    answer2:`아래의 7가지 플라스틱 제품의 재활용 여부를 확인해보세요.`,
    x: 0,
    y: 0,
    unitWidth: 2,
    unitHeight: 1
  },
  //Row2
  {
    type: 'image',
    src: PETE,
    x: 2,
    y: 0,
    answer1:`가능합니다`,
    answer2:`생수병을 만드는 PETE 소재는 재활용이 가능합니다. 
    물로 깨끗이 세척 후 라벨을 분리해서 배출하면 됩니다.
    `,
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: true,
    title:'음료수가 담겨있던 페트병',
    category:'PETE'
  },
  {
    type: 'image',
    src: HDPE,
    x: 0,
    y: 1,
    answer1:`불가능합니다`,
    answer2:`세탁, 설거지를 위한 세제 용기는 일반적으로 HDPE로 만들어져 재활용이 가능합니다. 하지만 세제가 다른 플라스틱을 오염시킬 수 있기 때문에 반드시 깨끗이 씻어서 배출해야 합니다.
    `,
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: true,
    title:'세자가 담겨있던 주방 세제통',
    category:'HDPE'
  },
  {
    type: 'image',
    src: PVC,
    x: 2,
    y: 1,
    answer1:`불가능합니다.`,
    answer2:`국내에는 파이프의 원료인 PVC에 함유된 염소를 제거할 수 있는 별도의 공정이 없기 때문에, 일반적으로 재활용이 어렵습니다.`,
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: false,
    title:'플라스틱 파이프',
    category:'PVC'
  },
  //Row3
  {
    type: 'image',
    src: LDPE,
    x: 0,
    y: 2,
    answer1:`가능합니다`,
    answer2:`랩이나 지퍼백 같은 LDPE 소재는 깨끗이 씻어 이물질을 제거하고 배출하면 재활용할 수 있습니다.`,
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: true,
    title:'투명 포장재',
    category:'LDPE'
  },
  {
    type: 'image',
    src: PP,
    x: 2,
    y: 2,
    answer1:`가능합니다`,
    answer2:`배달음식을 주로 담는 PP 소재는 재활용이 가능합니다. 하지만 음식물을 반드시 깨끗이 씻어서 배출해야 합니다.`,
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: true,
    title:'배달 도시락 용기',
    category:'PP'
  },
  {
    type: 'image',
    src: PS,
    x: 0,
    y: 3,
    answer1:`가능합니다`,
    answer2:`요구르트와 바나나 우유병, 그리고 스티로폼은 모두 PS 재질입니다. 이 재질은 오염 물질을 제거하면 재활용이 가능합니다.`,
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: true,
    title:'바나나맛 우유병',
    category:'PS'
  },
  {
    type: 'image',
    src: OTHER,
    x: 2,
    y: 3,
    answer1:`불가능합니다`,
    answer2:`화장품 용기, 아기 젖병 등의 OTHER는 두 가지 이상의 재질이 섞인 복합재질을 의미합니다. 이 소재는 재활용할 수 없으며, 종량제 봉투에 배출해야 합니다.`,
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: false,
    title:'화장품 용기',
    category:'OTHER'
  },
]; 

export const gridDataOcean = [
  //Row1
  {
    type: 'question',
    question: `테트라포드 내부에 쌓여 있는 플라스틱 쓰레기가 많이 보이는데, 바로 수거해야 할까요?`,
    answer1:`썰물에 빠져 나온 쓰레기들을 수거해야 합니다.`,
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

export const gridDataOcean1 = [
  //Row1
  {
    type: 'question',
    question: `해양에서 수거되는 플라스틱 쓰레기도 우리 생활에서 발생하는 플라스틱과 같은 과정으로 재활용될까요?`,
    answer1:`해양쓰레기 재활용의 가장 큰 걸림돌은 염분입니다.`,
    answer2:`불행히도 지상에서 수거되는 쓰레기와 달리 바다에서 수거되는 쓰레기는 염분을 제거해야 합니다. 게다가 바다에서 처리장까지 이동거리가 길고, 전문 장비를 통해 수거해야 하고, 여름철 집중호우 기간이나 수산물 어획시기같이 특정 기간에 해양쓰레기가 한꺼번에 발생하기 때문에 지상 쓰레기에 비해 2배 이상의 처리비용이 필요합니다.`,
    x: 0,
    y: 0,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean8,
    x: 2,
    y: 0,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean9,
    x: 3,
    y: 0,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean10,
    x: 4,
    y: 0,
    unitWidth: 2,
    unitHeight: 1
  },
 
  //Row2
  {
    type: 'image',
    src: ocean11,
    x: 0,
    y: 1,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `우리가 플라스틱 사용을 줄이면 해양쓰레기 문제가 해결될까요?`,
    answer1:`해양쓰레기 문제는 지속적인 관심이 중요합니다.`,
    answer2:`생활 속에서 플라스틱 쓰레기를 줄이려는 노력은 아주 중요하지만, 우리가 쓰레기를 버리지 않는다고 해양쓰레기 문제가 다 해결되지는 않습니다. 지난 3년간 해양쓰레기의 60%는 폐어구와 폐부표같이 바다에서 사용하는 쓰레기입니다. 특히 폐어구나 폐선박 같이 부피가 큰 쓰레기들은 특별한 장비가 꼭 필요하고, 수거가 더 어렵습니다.`,
    x: 2,
    y: 1,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean12,
    x: 4,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean13,
    x: 5,
    y: 1,
    unitWidth: 1,
    unitHeight: 1
  },
  //Row3
  {
    type: 'question',
    question: `테트라포드 내부에 쌓여 있는 플라스틱 쓰레기가 많이 보이는데, 바로 수거해야 할까요?`,
    answer1:`썰물에 빠져 나온 쓰레기들을 수거해야 합니다.`,
    answer2:`경사면으로 이루어진 테트라포드에 올라서거나 구조물 속으로 들어가는 것은 매우 위험합니다. 2019년에는 17명이 추락해 사망하기도 했습니다. 테트라포드 내 쓰레기 수거를 위해서는 전문장비로 구조물을 드러내거나, 썰물에 빠져 나온 쓰레기들을 수거해야 합니다. 이런 구조물이 해양 쓰레기 수거를 어렵게 하는 이유 중 하나입니다.`,
    x: 0,
    y: 2,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean1,
    x: 2,
    y: 2,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean2,
    x: 4,
    y: 2,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean3,
    x: 5,
    y: 2,
    unitWidth: 1,
    unitHeight: 1
  },
  //Row2
  {
    type: 'image',
    src: ocean4,
    x: 0,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean5,
    x: 1,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `자원봉사 잠수부들이 바닷속에서 플라스틱 쓰레기를 수거할 때 두려워하는 것은 무엇일까요?`,
    answer1:`플라스틱 쓰레기가 목숨을 위협할 수 있습니다.`,
    answer2:`바다에는 언제나 생명을 위협하는 변수들이 존재합니다. 국내에서만 매년 4만톤 이상의 플라스틱 폐그물이 바다에 버려지고 있습니다. 바닷속에서 쓰레기를 수거할 때, 폐그물에 몸이 감길수도 있고, 폐그물에 달린 낚시바늘에 피부가 찢기는 상처를 입을 수도 있습니다.`,
    x: 2,
    y: 3,
    unitWidth: 2,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean6,
    x: 4,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean7,
    x: 5,
    y: 3,
    unitWidth: 1,
    unitHeight: 1
  },
]; 

export const gridDataOcean1Mobile = [
  //Row1
  {
    type: 'question',
    question: `테트라포드 내부에 쌓여 있는 플라스틱 쓰레기가 많이 보이는데, 바로 수거해야 할까요?`,
    answer1:`썰물에 빠져 나온 쓰레기들을 수거해야 합니다.`,
    answer2:`경사면으로 이루어진 테트라포드에 올라서거나 구조물 속으로 들어가는 것은 매우 위험합니다. 2019년에는 17명이 추락해 사망하기도 했습니다. 테트라포드 내 쓰레기 수거를 위해서는 전문장비로 구조물을 드러내거나, 썰물에 빠져 나온 쓰레기들을 수거해야 합니다. 이런 구조물이 해양 쓰레기 수거를 어렵게 하는 이유 중 하나입니다.`,
    x: 0,
    y: 0,
    unitWidth: 3,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean1,
    x: 3,
    y: 0,
    unitWidth: 3,
    unitHeight: 1
  },
  // {
  //   type: 'image',
  //   src: ocean2,
  //   x: 4,
  //   y: 0,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
  // {
  //   type: 'image',
  //   src: ocean3,
  //   x: 5,
  //   y: 0,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
  //Row2
  // {
  //   type: 'image',
  //   src: ocean4,
  //   x: 0,
  //   y: 1,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
  {
    type: 'image',
    src: ocean5,
    x: 0,
    y: 1,
    unitWidth: 3,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `자원봉사 잠수부들이 바닷속에서 플라스틱 쓰레기를 수거할 때 두려워하는 것은 무엇일까요?`,
    answer1:`플라스틱 쓰레기가 목숨을 위협할 수 있습니다.`,
    answer2:`바다에는 언제나 생명을 위협하는 변수들이 존재합니다. 국내에서만 매년 4만톤 이상의 플라스틱 폐그물이 바다에 버려지고 있습니다. 바닷속에서 쓰레기를 수거할 때, 폐그물에 몸이 감길수도 있고, 폐그물에 달린 낚시바늘에 피부가 찢기는 상처를 입을 수도 있습니다.`,
    x: 3,
    y: 1,
    unitWidth: 3,
    unitHeight: 1
  },
  // {
  //   type: 'image',
  //   src: ocean6,
  //   x: 4,
  //   y: 1,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
  // {
  //   type: 'image',
  //   src: ocean7,
  //   x: 5,
  //   y: 1,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
  //Row3
  {
    type: 'question',
    question: `해양에서 수거되는 플라스틱 쓰레기도 우리 생활에서 발생하는 플라스틱과 같은 과정으로 재활용될까요?`,
    answer1:`해양쓰레기 재활용의 가장 큰 걸림돌은 염분입니다.`,
    answer2:`불행히도 지상에서 수거되는 쓰레기와 달리 바다에서 수거되는 쓰레기는 염분을 제거해야 합니다. 게다가 바다에서 처리장까지 이동거리가 길고, 전문 장비를 통해 수거해야 하고, 여름철 집중호우 기간이나 수산물 어획시기같이 특정 기간에 해양쓰레기가 한꺼번에 발생하기 때문에 지상 쓰레기에 비해 2배 이상의 처리비용이 필요합니다.`,
    x: 0,
    y: 2,
    unitWidth: 3,
    unitHeight: 1
  },
  {
    type: 'image',
    src: ocean8,
    x: 3,
    y: 2,
    unitWidth: 3,
    unitHeight: 1
  },
  // {
  //   type: 'image',
  //   src: ocean9,
  //   x: 3,
  //   y: 2,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
  // {
  //   type: 'image',
  //   src: ocean10,
  //   x: 4,
  //   y: 2,
  //   unitWidth: 2,
  //   unitHeight: 1
  // },
 
  //Row4
  {
    type: 'image',
    src: ocean11,
    x: 0,
    y: 3,
    unitWidth: 3,
    unitHeight: 1
  },
  {
    type: 'question',
    question: `우리가 플라스틱 사용을 줄이면 해양쓰레기 문제가 해결될까요?`,
    answer1:`해양쓰레기 문제는 지속적인 관심이 중요합니다.`,
    answer2:`생활 속에서 플라스틱 쓰레기를 줄이려는 노력은 아주 중요하지만, 우리가 쓰레기를 버리지 않는다고 해양쓰레기 문제가 다 해결되지는 않습니다. 지난 3년간 해양쓰레기의 60%는 폐어구와 폐부표같이 바다에서 사용하는 쓰레기입니다. 특히 폐어구나 폐선박 같이 부피가 큰 쓰레기들은 특별한 장비가 꼭 필요하고, 수거가 더 어렵습니다.`,
    x: 3,
    y: 3,
    unitWidth: 3,
    unitHeight: 1
  },
  // {
  //   type: 'image',
  //   src: ocean12,
  //   x: 4,
  //   y: 3,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
  // {
  //   type: 'image',
  //   src: ocean13,
  //   x: 5,
  //   y: 3,
  //   unitWidth: 1,
  //   unitHeight: 1
  // },
]; 