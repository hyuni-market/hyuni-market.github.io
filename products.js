/* ==========================================================================
   혀니마켓 상품 데이터
   --------------------------------------------------------------------------
   상품을 추가하려면 `products` 배열에 객체를 하나 더 넣으면 됩니다.
   (색상/사이즈/가격/사진 경로만 바꾸면 사이트에 바로 반영됩니다.)
   브랜드를 추가하려면 `brands` 배열에 브랜드와 사이즈표를 추가하세요.
   ========================================================================== */

window.HYEONMARKET_DATA = {
  shop: {
    name: '혀니마켓',
    tagline: '예쁜 아동복을 만나보세요',
    shippingFee: 3500,
    combinedShippingFee: 0
  },

  /* 카테고리 (목록 위 탭) -------------------------------------------------- */
  /* 진열 순서대로 보입니다. '전체' 탭은 사이트가 자동으로 붙입니다. */
  categories: [
    { id: 'girl', name: '여아룩' },
    { id: 'bebe', name: '베베룩' },
    { id: 'unisex', name: '남녀공용' }
  ],

  /* 브랜드 + 브랜드별 사이즈표 -------------------------------------------- */
  brands: [
    {
      id: 'minirobe',
      name: '미니로브',
      nameEn: 'MINI ROBE',
      /* 표로 보여줄 사이즈 정보 */
      sizeTable: {
        columns: ['사이즈', '개월', '키'],
        rows: [
          ['S (80)', '10–18개월', '70–80cm'],
          ['M (90)', '18–24개월', '80–90cm'],
          ['L (100)', '24–36개월', '90–100cm'],
          ['XL (110)', '36–48개월', '100–110cm']
        ]
      },
      /* 브랜드가 제공한 원본 사이즈표 이미지 */
      sizeImage: 'assets/size-minirobe.jpg',
      sizeNote: '측정 위치와 방법에 따라 1~2cm 정도 차이가 날 수 있어요. 아이의 개월 수와 키를 함께 보고 여유 있게 골라 주세요.'
    }
  ],

  /* 상품 ------------------------------------------------------------------ */
  products: [
    {
      id: 'minirobe-reversible-mustang',
      brandId: 'minirobe',
      brand: '미니로브',
      name: '리버시블무스탕',
      price: 32000,
      badge: 'NEW',
      categories: ['unisex'],   // categories의 id (여러 개 가능)
      colors: ['베이지', '브라운'],
      colorHex: { '베이지': '#d9b98f', '브라운': '#6b4a37' },
      sizes: ['S', 'M', 'L', 'XL'],
      sizeHints: { 'S': '80', 'M': '90', 'L': '100', 'XL': '110' },
      /* 카드 썸네일 / 상세 이미지 */
      thumb: 'assets/minirobe-reversible-mustang-thumb.jpg',
      detailImages: [
        'assets/detail/01.jpg', 'assets/detail/02.jpg', 'assets/detail/03.jpg',
        'assets/detail/04.jpg', 'assets/detail/05.jpg', 'assets/detail/06.jpg',
        'assets/detail/07.jpg', 'assets/detail/08.jpg', 'assets/detail/09.jpg',
        'assets/detail/10.jpg', 'assets/detail/11.jpg', 'assets/detail/12.jpg',
        'assets/detail/13.jpg', 'assets/detail/14.jpg', 'assets/detail/15.jpg',
        'assets/detail/16.jpg', 'assets/detail/17.jpg', 'assets/detail/18.jpg',
        'assets/detail/19.jpg', 'assets/detail/20.jpg'
      ],
      description: [
        '한 벌로 두 가지 분위기, 앞뒤로 뒤집어 입는 리버시블 무스탕',
        '보들보들한 안감으로 겨울까지 포근하게',
        '베이지 · 브라운 두 컬러',
        '세탁 방법은 상품 라벨을 확인해 주세요'
      ]
    }
  ]
};
