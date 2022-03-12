

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
import resource from '../translate/resources.json';

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

export const gridDataLand1 = [
  //Row1
  {
    type: 'question',
    question: resource.kr.translation['c2-summary1-question1'],
    answer1:resource.kr.translation['c2-summary1-subtitle1'],
    answer2:resource.kr.translation['c2-summary1-subexp1'],
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
    question: resource.kr.translation['c2-summary1-question2'],
    answer1:resource.kr.translation['c2-summary1-subtitle2'],
    answer2:resource.kr.translation['c2-summary1-subexp2'],
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
    question: resource.kr.translation['c2-summary1-question3'],
    answer1:resource.kr.translation['c2-summary1-subtitle3'],
    answer2:resource.kr.translation['c2-summary1-subexp3'],
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
    question: resource.kr.translation['c2-summary1-question4'],
    answer1:resource.kr.translation['c2-summary1-subtitle4'],
    answer2:resource.kr.translation['c2-summary1-subexp4'],
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
    question: resource.kr.translation['c2-summary1-question1'],
    answer1:resource.kr.translation['c2-summary1-subtitle1'],
    answer2:resource.kr.translation['c2-summary1-subexp1'],
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
    question: resource.kr.translation['c2-summary1-question2'],
    answer1:resource.kr.translation['c2-summary1-subtitle2'],
    answer2:resource.kr.translation['c2-summary1-subexp2'],
    x: 3,
    y: 1,
    unitWidth: 3,
    unitHeight: 1
  },
  //Row3
  {
    type: 'question',
    question: resource.kr.translation['c2-summary1-question3'],
    answer1:resource.kr.translation['c2-summary1-subtitle3'],
    answer2:resource.kr.translation['c2-summary1-subexp3'],
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
    question: resource.kr.translation['c2-summary1-question4'],
    answer1:resource.kr.translation['c2-summary1-subtitle4'],
    answer2:resource.kr.translation['c2-summary1-subexp4'],
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
    title: resource.kr.translation['c2-summary2-subtitle1'],
    answer1:`가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp1'],
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true,
    category:'PETE'
  },
  {
    type: 'image',
    src: HDPE,
    x: 2,
    y: 1,
    answer1:`불가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp2'],
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: false,
    title: resource.kr.translation['c2-summary2-subtitle2'],
    category:'HDPE'
  },
  {
    type: 'image',
    src: PVC,
    x: 3,
    y: 1,
    answer1:`불가능합니다.`,
    answer2: resource.kr.translation['c2-summary2-subexp3'],
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: false,
    title: resource.kr.translation['c2-summary2-subtitle3'],
    category:'PVC'
  },
  //Row3
  {
    type: 'image',
    src: LDPE,
    x: 0,
    y: 2,
    answer1:`가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp4'],
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true,
    title: resource.kr.translation['c2-summary2-subtitle4'],
    category:'LDPE'
  },
  {
    type: 'image',
    src: PP,
    x: 1,
    y: 2,
    answer1:`가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp5'],
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true,
    title: resource.kr.translation['c2-summary2-subtitle5'],
    category:'PP'
  },
  {
    type: 'image',
    src: PS,
    x: 2,
    y: 2,
    answer1:`가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp6'],
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: true,
    title: resource.kr.translation['c2-summary2-subtitle6'],
    category:'PS'
  },
  {
    type: 'image',
    src: OTHER,
    x: 3,
    y: 2,
    answer1:`불가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp7'],
    unitWidth: 1,
    unitHeight: 1,
    isRecycle: false,
    title: resource.kr.translation['c2-summary2-subtitle7'],
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
    answer2: resource.kr.translation['c2-summary2-subexp1'],
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: true,
    title: resource.kr.translation['c2-summary2-subtitle1'],
    category:'PETE'
  },
  {
    type: 'image',
    src: HDPE,
    x: 0,
    y: 1,
    answer1:`불가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp2'],
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: false,
    title: resource.kr.translation['c2-summary2-subtitle2'],
    category:'HDPE'
  },
  {
    type: 'image',
    src: PVC,
    x: 2,
    y: 1,
    answer1:`불가능합니다.`,
    answer2: resource.kr.translation['c2-summary2-subexp3'],
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: false,
    title: resource.kr.translation['c2-summary2-subtitle3'],
    category:'PVC'
  },
  //Row3
  {
    type: 'image',
    src: LDPE,
    x: 0,
    y: 2,
    answer1:`가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp4'],
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: true,
    title: resource.kr.translation['c2-summary2-subtitle4'],
    category:'LDPE'
  },
  {
    type: 'image',
    src: PP,
    x: 2,
    y: 2,
    answer1:`가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp5'],
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: true,
    title: resource.kr.translation['c2-summary2-subtitle5'],
    category:'PP'
  },
  {
    type: 'image',
    src: PS,
    x: 0,
    y: 3,
    answer1:`가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp6'],
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: true,
    title: resource.kr.translation['c2-summary2-subtitle6'],
    category:'PS'
  },
  {
    type: 'image',
    src: OTHER,
    x: 2,
    y: 3,
    answer1:`불가능합니다`,
    answer2: resource.kr.translation['c2-summary2-subexp7'],
    unitWidth: 2,
    unitHeight: 1,
    isRecycle: false,
    title: resource.kr.translation['c2-summary2-subtitle7'],
    category:'OTHER'
  },
]; 


export const gridDataOcean1 = [
  //Row1
  {
    type: 'question',
    question: resource.kr.translation['c2-summary3-question1'],
    answer1:resource.kr.translation['c2-summary3-subtitle1'],
    answer2:resource.kr.translation['c2-summary3-subexp1'],
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
    question: resource.kr.translation['c2-summary3-question2'],
    answer1:resource.kr.translation['c2-summary3-subtitle2'],
    answer2:resource.kr.translation['c2-summary3-subexp2'],
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
    question: resource.kr.translation['c2-summary3-question3'],
    answer1:resource.kr.translation['c2-summary3-subtitle3'],
    answer2:resource.kr.translation['c2-summary3-subexp3'],
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
    question: resource.kr.translation['c2-summary3-question4'],
    answer1:resource.kr.translation['c2-summary3-subtitle4'],
    answer2:resource.kr.translation['c2-summary3-subexp4'],
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
    question: resource.kr.translation['c2-summary3-question1'],
    answer1:resource.kr.translation['c2-summary3-subtitle1'],
    answer2:resource.kr.translation['c2-summary3-subexp1'],
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
    question: resource.kr.translation['c2-summary3-question2'],
    answer1:resource.kr.translation['c2-summary3-subtitle2'],
    answer2:resource.kr.translation['c2-summary3-subexp2'],
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
    question: resource.kr.translation['c2-summary3-question3'],
    answer1:resource.kr.translation['c2-summary3-subtitle3'],
    answer2:resource.kr.translation['c2-summary3-subexp3'],
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
    question: resource.kr.translation['c2-summary3-question4'],
    answer1:resource.kr.translation['c2-summary3-subtitle4'],
    answer2:resource.kr.translation['c2-summary3-subexp4'],
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