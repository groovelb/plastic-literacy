export const sankeyData = {
  "nodes": [
    {
      "node": 1,
      "name": "생활 플라스틱"
    },
    {
      "node": 2,
      "name": "사업장 플라스틱"
    },
    {
      "node": 3,
      "name": "건설 폐기물"
    },
    {
      "node": 4,
      "name": "지정 폐기물"
    },
    {
      "node": 5,
      "name": "공동.단독 주책"
    },
    {
      "node": 6,
      "name": "산업 폐기물"
    },
    {
      "node": 7,
      "name": "종량제 봉투"
    },
    {
      "node": 8,
      "name": "재활용품"
    },
    {
      "node": 9,
      "name": "잔재물"
    },
    {
      "node": 10,
      "name": "재활용"
    },
    {
      "node": 11,
      "name": "시멘트 소성료"
    },
    {
      "node": 12,
      "name": "매립"
    },
    {
      "node": 13,
      "name": "소각"
    },
    {
      "node": 14,
      "name": "소각.매립"
    },
    {
      "node": 15,
      "name": "PP.PE"
    },
    {
      "node": 16,
      "name": "PET"
    },
    {
      "node": 17,
      "name": "비닐"
    }
  ],
  "links": [
    {
      "name": "생활배출",
      "source": 1,
      "target": 5,
      "value": 323
    },
    {
      "name": "산업배출1",
      "source": 2,
      "target": 6,
      "value": 30
    },
    {
      "name": "산업배출2",
      "source": 3,
      "target": 6,
      "value": 30
    },
    {
      "name": "산업배출3",
      "source": 4,
      "target": 6,
      "value": 30
    },
    {
      "name": "주택배출1",
      "source": 5,
      "target": 6,
      "value": 178
    },
    {
      "name": "주택배출2",
      "source": 5,
      "target": 7,
      "value": 145
    },
    {
      "name": "산업배툴 선별1",
      "source": 6,
      "target": 9,
      "value": 45
    },
    {
      "name": "산업배툴 선별2",
      "source": 6,
      "target": 10,
      "value": 45
    },
    {
      "name": "제활용품 배출1",
      "source": 8,
      "target": 9,
      "value": 67
    },
    {
      "name": "제활용품 배출2",
      "source": 8,
      "target": 10,
      "value": 77
    },
    {
      "name": "잔재물 처리1",
      "source": 9,
      "target": 11,
      "value": 56
    },
    {
      "name": "잔재물 처리2",
      "source": 9,
      "target": 12,
      "value": 8
    },
    {
      "name": "잔재물 처리3",
      "source": 9,
      "target": 13,
      "value": 3.4
    },
    {
      "name": "재활용 처리1",
      "source": 10,
      "target": 14,
      "value": 0
    },
    {
      "name": "재활용 처리2",
      "source": 10,
      "target": 15,
      "value": 17
    },
    {
      "name": "재활용 처리3",
      "source": 10,
      "target": 16,
      "value": 19.4
    },
    {
      "name": "재활용 처리4",
      "source": 10,
      "target": 17,
      "value": 41.2
    }
  ]
}