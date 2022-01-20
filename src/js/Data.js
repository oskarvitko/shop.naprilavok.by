// 1 Sheet Polycarbonate
const SHEET_1_6MM = 72
// Polycarbonate 6mm:
const POLIC_6MM_4M    = SHEET_1_6MM * 3,
      POLIC_6MM_6M    = SHEET_1_6MM * 4,
      POLIC_6MM_8M    = SHEET_1_6MM * 5,
      POLIC_6MM_10M   = SHEET_1_6MM * 6
// Polycarbonate 4mm:
const POLIC_4MM_4M  = 53,
      POLIC_4MM_6M  = 69,
      POLIC_4MM_8M  = 85,
      POLIC_4MM_10M = 101
// Shipping:
const SHIPPING_MIN  = 64,
      SHIPPING_MID  = 77,
      SHIPPING_MAX  = 90
// 20-mini:
const $20MINI_4M_100SM   = 450,
      $20MINI_4M_67SM    = 478,
      $20MINI_6M_100SM   = 565,
      $20MINI_6M_67SM    = 611,
      $20MINI_8M_100SM   = 672,
      $20MINI_8M_67SM    = 738,
      $20MINI_10M_100SM  = 789,
      $20MINI_10M_67SM   = 865
// 24-mini:
const $24MINI_4M_100SM   = 447,
      $24MINI_4M_67SM    = 475,
      $24MINI_6M_100SM   = 569,
      $24MINI_6M_67SM    = 604,
      $24MINI_8M_100SM   = 681,
      $24MINI_8M_67SM    = 734,
      $24MINI_10M_100SM  = 799,
      $24MINI_10M_67SM   = 866
// 20-c:
const $20C_4M_100SM   = 459,
      $20C_4M_67SM    = 485,
      $20C_4M_50SM    = 524,
      $20C_6M_100SM   = 608,
      $20C_6M_67SM    = 649,
      $20C_6M_50SM    = 709,
      $20C_8M_100SM   = 767,
      $20C_8M_67SM    = 826,
      $20C_8M_50SM    = 903,
      $20C_10M_100SM  = 913,
      $20C_10M_67SM   = 982,
      $20C_10M_50SM   = 1079
// 40-c:
const $40C_4M_100SM   = 526,
      $40C_4M_67SM    = 571,
      $40C_4M_50SM    = 616,
      $40C_6M_100SM   = 702,
      $40C_6M_67SM    = 762,
      $40C_6M_50SM    = 822,
      $40C_8M_100SM   = 885,
      $40C_8M_67SM    = 961,
      $40C_8M_50SM    = 1037,
      $40C_10M_100SM  = 1046,
      $40C_10M_67SM   = 1138,
      $40C_10M_50SM   = 1229
// 20-fc:
const $20FC_4M_100SM   = 683,
      $20FC_4M_67SM    = 736,
      $20FC_6M_100SM   = 918,
      $20FC_6M_67SM    = 982,
      $20FC_8M_100SM   = 1153,
      $20FC_8M_67SM    = 1241,
      $20FC_10M_100SM  = 1370,
      $20FC_10M_67SM   = 1474
// 3500-40-c:
const $3500_40C_4M_100SM  = 613,
      $3500_40C_4M_67SM   = 654,
      $3500_40C_4M_50SM   = 693,
      $3500_40C_6M_100SM  = 804,
      $3500_40C_6M_67SM   = 870,
      $3500_40C_6M_50SM   = 935,
      $3500_40C_8M_100SM  = 984,
      $3500_40C_8M_67SM   = 1083,
      $3500_40C_8M_50SM   = 1170,
      $3500_40C_10M_100SM = 1156,
      $3500_40C_10M_67SM  = 1279,
      $3500_40C_10M_50SM  = 1388

const DATA = {
  about: [
    {
      imgUrl: '/15-02.svg',
      title: 'Лучшие материалы',
      description: 'В производстве теплиц используются самые лучшие материалы.'
    },
    {
      imgUrl: '/12-02.svg',
      title: 'Бесплатная доставка',
      description: 'Своя курьерская служба. Курьер заинтересован доставить товар быстро в целостности и сохранности.'
    },
    {
      imgUrl: '/16-02.svg',
      title: 'Услуги сборки',
      description: 'Профессиональные сборщики соберут теплицу с гарантией если в этом есть необходимость.'
    },
    {
      imgUrl: '/13-02.svg',
      title: 'Рассрочки',
      description: 'У нас можно приобрести теплицу в рассрочку от 3 до 36 месяцев.'
    },
    {
      imgUrl: '/18-02.svg',
      title: 'Доступные цены',
      description: 'Мы являемся прямым импортёром металла и у нас собственное производство. Поэтому у нас наиболее выгодные цены на все теплицы на территории РБ.'
    },
    {
      imgUrl: '/14-02.svg',
      title: 'Сертификация',
      description: 'Есть сертификаты и акцизные марки. Белорусское производство.'
    },
  ],
  makepurchase: [
    {
      id: 1,
      subtitle: 'первый',
      title: 'Выберите теплицу',
      description: 'Выберите из <a title="Перейти к каталогу" href="#catalog">каталога</a> теплицу, которая Вам приглянулась'
    },
    {
      id: 2,
      subtitle: 'второй',
      title: ' Оставьте заявку',
      description: 'Закажите обратный звонок или позвоните по номеру<br><a title="Получить консультацию по телефону" href="tel:+375255228110">+375 (25) 522-81-10</a>'
    },
    {
      id: 3,
      subtitle: 'третий',
      title: 'Оформляем заказ',
      description: 'Составляем заявку на доставку: время/адрес/удобный способ оплаты'
    },
    {
      id: 4,
      className: 'btn-pulse',
      subtitle: 'четвертый',
      title: 'Доставка/установка',
      description: 'Доставляем вашу теплицу в течении 2-3 дней. По желанию можем собрать Вашу теплицу'
    },
  ],
  catalogTeplic: [
    {
      id: '20m',
      title: 'Сибирская "Мини-20м"',
      productName: '20-mini',
      tube: '20x20',
      width: '2.00',
      height: '1.94',
      images: [
        'teplica-1.webp',
        'teplica-1.2.webp',
        'teplica-1.3.webp',
        'teplica-1.4.webp',
        'teplica-1.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '24m',
      title: 'Сибирская "Мини-24м"',
      productName: '24-mini',
      tube: '20x20',
      width: '2.40',
      height: '1.75',
      images: [
        'teplica-1.webp',
        'teplica-1.2.webp',
        'teplica-1.3.webp',
        'teplica-1.4.webp',
        'teplica-1.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '20c',
      title: '"Сверхпрочная-20ц"',
      productName: '20-c',
      tube: '20x20',
      width: '3.00',
      height: '2.10',
      images: [
        'teplica-2.webp',
        'teplica-2.2.webp',
        'teplica-2.3.webp',
        'teplica-2.4.webp',
        'teplica-2.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
        '0.5': '50sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '40c',
      title: '"Титан-40ц"',
      productName: '40-c',
      tube: '40x20',
      width: '3.00',
      height: '2.10',
      images: [
        'teplica-3.webp',
        'teplica-3.2.webp',
        'teplica-3.3.webp',
        'teplica-3.4.webp',
        'teplica-3.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
        '0.5': '50sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '40ck',
      title: '"Краб-40цк"',
      productName: '40-ck',
      tube: '40x20',
      width: '3.00',
      height: '2.10',
      images: [
        'teplica-40ck-01.webp',
        'teplica-40ck-02.webp',
        'teplica-40ck-03.webp',
        'teplica-40ck-04.webp',
        'teplica-40ck-05.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '20fc',
      title: 'Сибирская "Ферма-20фц"',
      productName: '20-fc',
      tube: '20x20',
      width: '3.00',
      height: '2.10',
      images: [
        'teplica-4.webp',
        'teplica-4.2.webp',
        'teplica-4.3.webp',
        'teplica-4.4.webp',
        'teplica-4.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
      },
      polycarbonate: ['3', '4', '6'],
    },
    {
      id: '3500-40c',
      title: 'Титан 3.5 ширина',
      productName: '3500-40c',
      tube: '40x20',
      width: '3.50',
      height: '2.10',
      images: [
        'teplica-5.webp',
        'teplica-5.2.webp',
        'teplica-5.3.webp',
        'teplica-5.4.webp',
        'teplica-5.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
        '0.5': '50sm',
      },
      polycarbonate: ['3', '4'],
    },
    {
      id: '4000-40c',
      title: 'Титан 4 ширина',
      productName: '4000-40c',
      tube: '40x20',
      width: '4.00',
      height: '2.10',
      images: [
        'teplica-40c-4000-01.webp',
        'teplica-40c-4000-02.webp',
        'teplica-40c-4000-03.webp',
        'teplica-5.webp',
        'teplica-5.3.webp',
        'teplica-5.4.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4', '5'],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
        '0.5': '50sm',
      },
      polycarbonate: ['3', '4'],
    },
    {
      id: '40dk',
      title: 'Домик',
      productName: '4000-40c',
      tube: '40x20',
      width: '2.85',
      height: '2.40',
      images: [
        'teplica-40dk-01.webp',
        'teplica-40dk-02.webp',
        'teplica-40dk-03.webp',
        'teplica-40dk-04.webp',
        'teplica-40dk-05.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4'],
      arcStep: {
        '1': '100sm',
      },
      polycarbonate: ['3', '4'],
    },
    {
      id: 'prom-40c',
      title: 'Промышленная ферма',
      productName: 'prom-40c',
      tube: '40x20',
      width: '7.00',
      height: '2.10',
      images: [
        'teplica-6.webp',
        'teplica-6.2.webp',
        'teplica-6.3.webp',
        'teplica-6.4.webp',
        'teplica-6.5.webp',
      ],
      numberIndicators: ['0', '1', '2', '3', '4',],
      arcStep: {
        '1': '100sm',
        '0.67': '67sm',
        '0.5': '50sm',
      },
      polycarbonate: ['3', '4'],
    },
  ],
  addEquipment: [
    {
      name: 'Парник<br>"Огурчик" 4м',
      imgUrl: '/pickle.webp',
      altName: 'Парник огурчик',
      price: 32,
    },
    {
      name: 'Парник<br>"Огурчик" 6м',
      imgUrl: '/pickle.webp',
      altName: 'Парник огурчик',
      price: 38,
    },
    {
      name: 'П-Профиль',
      imgUrl: '/p-profile.webp',
      altName: 'П-Профиль',
      price: 4,
    },
    {
      name: 'Подвязки 6м',
      imgUrl: '/garters.webp',
      altName: 'Подвязки',
      price: 16,
    },
    {
      name: 'Авто-полив',
      imgUrl: '/auto-watering.webp',
      altName: 'Автоматический полив',
      price: 47,
    },
    {
      name: 'Перфо-лента 10м',
      imgUrl: '/punched-tape.webp',
      altName: 'Перфорированая лента',
      price: 20,
    },
    {
      name: 'Газлифт',
      imgUrl: '/gaz-lift.webp',
      altName: 'Газлифт',
      price: 32,
    },
    {
      name: 'Поликарбонат 4мм',
      imgUrl: '/polic.webp',
      altName: 'Поликарбонат',
      price: 93,
    },
  ],
  accordion: [
    {
      title: 'Какой шаг между дугами оптимальный?',
      description: 'Стандартным шагом считается 1 метр, в большинстве случаев с такой теплицей ничего не случится. Для более искушенных клиентов рекомендуем взять теплицу с шагом 0, 67 метра, такая теплица выдержит даже самые суровые погодные условия в нашей стране. Ну, а с шагом 0, 5 метра теплица может выдержать катаклизм вселенского масштаба.'
    },
    {
      title: 'За какое время я могу собрать теплицу?',
      description: 'Конструкция теплиц элементарная, для людей без опыта среднее время сборки теплицы 2 — 4 часа. Рекомендуем собирать теплицу минимум вдвоем. Чем больше людей учувствуют в этом деле, тем быстрее будет результат.'
    },
    {
      title: 'Что необходимо для сборки теплицы?',
      description: 'Сборка наших теплиц осуществляется максимально просто. Из инструмента Вам необходимо иметь: шуруповерт или крестовую отвертку, канцелярский нож и гаечный ключ на 10.'
    },
    {
      title: 'За какое время вы привезете мне теплицу?',
      description: 'В любой регион доставка осуществляется от 2-ух дней с момента заказа, по мере формирования маршрута. Но Вы всегда можете зафиксировать любую другую дату и время позже этих рамок.'
    },
  ],
  priceList: {
    '20-mini': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $20MINI_4M_100SM,
            '4mm': $20MINI_4M_100SM + POLIC_4MM_4M,
            '6mm': $20MINI_4M_100SM + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $20MINI_4M_67SM,
            '4mm': $20MINI_4M_67SM + POLIC_4MM_4M,
            '6mm': $20MINI_4M_67SM + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20MINI_6M_100SM,
            '4mm': $20MINI_6M_100SM + POLIC_4MM_6M,
            '6mm': $20MINI_6M_100SM + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $20MINI_6M_67SM,
            '4mm': $20MINI_6M_67SM + POLIC_4MM_6M,
            '6mm': $20MINI_6M_67SM + POLIC_6MM_6M,
          }
        },
        '8m': {
          '100sm': {
            '3mm': $20MINI_8M_100SM,
            '4mm': $20MINI_8M_100SM + POLIC_4MM_8M,
            '6mm': $20MINI_8M_100SM + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $20MINI_8M_67SM,
            '4mm': $20MINI_8M_67SM + POLIC_4MM_8M,
            '6mm': $20MINI_8M_67SM + POLIC_6MM_8M,
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20MINI_10M_100SM,
            '4mm': $20MINI_10M_100SM + POLIC_4MM_10M,
            '6mm': $20MINI_10M_100SM + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $20MINI_10M_67SM,
            '4mm': $20MINI_10M_67SM + POLIC_4MM_10M,
            '6mm': $20MINI_10M_67SM + POLIC_6MM_10M,
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $20MINI_4M_100SM + SHIPPING_MIN,
            '4mm': $20MINI_4M_100SM + SHIPPING_MIN + POLIC_4MM_4M,
            '6mm': $20MINI_4M_100SM + SHIPPING_MIN + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $20MINI_4M_67SM + SHIPPING_MIN,
            '4mm': $20MINI_4M_67SM + SHIPPING_MIN + POLIC_4MM_4M,
            '6mm': $20MINI_4M_67SM + SHIPPING_MIN + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20MINI_6M_100SM + SHIPPING_MIN,
            '4mm': $20MINI_6M_100SM + SHIPPING_MIN + POLIC_4MM_6M,
            '6mm': $20MINI_6M_100SM + SHIPPING_MIN + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $20MINI_6M_67SM + SHIPPING_MIN,
            '4mm': $20MINI_6M_67SM + SHIPPING_MIN + POLIC_4MM_6M,
            '6mm': $20MINI_6M_67SM + SHIPPING_MIN + POLIC_6MM_6M,
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20MINI_8M_100SM + SHIPPING_MIN,
            '4mm': $20MINI_8M_100SM + SHIPPING_MIN + POLIC_4MM_8M,
            '6mm': $20MINI_8M_100SM + SHIPPING_MIN + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $20MINI_8M_67SM + SHIPPING_MIN,
            '4mm': $20MINI_8M_67SM + SHIPPING_MIN + POLIC_4MM_8M,
            '6mm': $20MINI_8M_67SM + SHIPPING_MIN + POLIC_6MM_8M,
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20MINI_10M_100SM + SHIPPING_MIN,
            '4mm': $20MINI_10M_100SM + SHIPPING_MIN + POLIC_4MM_10M,
            '6mm': $20MINI_10M_100SM + SHIPPING_MIN + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $20MINI_10M_67SM + SHIPPING_MIN,
            '4mm': $20MINI_10M_67SM + SHIPPING_MIN + POLIC_4MM_10M,
            '6mm': $20MINI_10M_67SM + SHIPPING_MIN + POLIC_6MM_10M,
          },
        },
      }
    },
    '24-mini': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $24MINI_4M_100SM,
            '4mm': $24MINI_4M_100SM + POLIC_4MM_4M,
            '6mm': $24MINI_4M_100SM + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $24MINI_4M_67SM,
            '4mm': $24MINI_4M_67SM + POLIC_4MM_4M,
            '6mm': $24MINI_4M_67SM + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $24MINI_6M_100SM,
            '4mm': $24MINI_6M_100SM + POLIC_4MM_6M,
            '6mm': $24MINI_6M_100SM + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $24MINI_6M_67SM,
            '4mm': $24MINI_6M_67SM + POLIC_4MM_6M,
            '6mm': $24MINI_6M_67SM + POLIC_6MM_6M,
          }
        },
        '8m': {
          '100sm': {
            '3mm': $24MINI_8M_100SM,
            '4mm': $24MINI_8M_100SM + POLIC_4MM_8M,
            '6mm': $24MINI_8M_100SM + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $24MINI_8M_67SM ,
            '4mm': $24MINI_8M_67SM  + POLIC_4MM_8M,
            '6mm': $24MINI_8M_67SM  + POLIC_6MM_8M,
          }
        },
        '10m': {
          '100sm': {
            '3mm': $24MINI_10M_100SM,
            '4mm': $24MINI_10M_100SM + POLIC_4MM_10M,
            '6mm': $24MINI_10M_100SM + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $24MINI_10M_67SM,
            '4mm': $24MINI_10M_67SM + POLIC_4MM_10M,
            '6mm': $24MINI_10M_67SM + POLIC_6MM_10M,
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $24MINI_4M_100SM + SHIPPING_MIN,
            '4mm': $24MINI_4M_100SM + SHIPPING_MIN + POLIC_4MM_4M,
            '6mm': $24MINI_4M_100SM + SHIPPING_MIN + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $24MINI_4M_67SM + SHIPPING_MIN,
            '4mm': $24MINI_4M_67SM + SHIPPING_MIN + POLIC_4MM_4M,
            '6mm': $24MINI_4M_67SM + SHIPPING_MIN + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $24MINI_6M_100SM + SHIPPING_MIN,
            '4mm': $24MINI_6M_100SM + SHIPPING_MIN + POLIC_4MM_6M,
            '6mm': $24MINI_6M_100SM + SHIPPING_MIN + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $24MINI_6M_67SM + SHIPPING_MIN,
            '4mm': $24MINI_6M_67SM + SHIPPING_MIN + POLIC_4MM_6M,
            '6mm': $24MINI_6M_67SM + SHIPPING_MIN + POLIC_6MM_6M,
          }
        },
        '8m': {
          '100sm': {
            '3mm': $24MINI_8M_100SM + SHIPPING_MIN,
            '4mm': $24MINI_8M_100SM + SHIPPING_MIN + POLIC_4MM_8M,
            '6mm': $24MINI_8M_100SM + SHIPPING_MIN + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $24MINI_8M_67SM  + SHIPPING_MIN,
            '4mm': $24MINI_8M_67SM  + SHIPPING_MIN + POLIC_4MM_8M,
            '6mm': $24MINI_8M_67SM  + SHIPPING_MIN + POLIC_6MM_8M,
          }
        },
        '10m': {
          '100sm': {
            '3mm': $24MINI_10M_100SM + SHIPPING_MIN,
            '4mm': $24MINI_10M_100SM + SHIPPING_MIN + POLIC_4MM_10M,
            '6mm': $24MINI_10M_100SM + SHIPPING_MIN + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $24MINI_10M_67SM + SHIPPING_MIN,
            '4mm': $24MINI_10M_67SM + SHIPPING_MIN + POLIC_4MM_10M,
            '6mm': $24MINI_10M_67SM + SHIPPING_MIN + POLIC_6MM_10M,
          },
        },
      }
    },
    '20-c': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $20C_4M_100SM,
            '4mm': $20C_4M_100SM + POLIC_4MM_4M,
            '6mm': $20C_4M_100SM + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $20C_4M_67SM,
            '4mm': $20C_4M_67SM + POLIC_4MM_4M,
            '6mm': $20C_4M_67SM + POLIC_6MM_4M,
          },
          '50sm': {
            '3mm': $20C_4M_50SM,
            '4mm': $20C_4M_50SM + POLIC_4MM_4M,
            '6mm': $20C_4M_50SM + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20C_6M_100SM,
            '4mm': $20C_6M_100SM + POLIC_4MM_6M,
            '6mm': $20C_6M_100SM + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $20C_6M_67SM,
            '4mm': $20C_6M_67SM + POLIC_4MM_6M,
            '6mm': $20C_6M_67SM + POLIC_6MM_6M,
          },
          '50sm': {
            '3mm': $20C_6M_50SM,
            '4mm': $20C_6M_50SM + POLIC_4MM_6M,
            '6mm': $20C_6M_50SM + POLIC_6MM_6M,
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20C_8M_100SM,
            '4mm': $20C_8M_100SM + POLIC_4MM_8M,
            '6mm': $20C_8M_100SM + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $20C_8M_67SM,
            '4mm': $20C_8M_67SM + POLIC_4MM_8M,
            '6mm': $20C_8M_67SM + POLIC_6MM_8M,
          },
          '50sm': {
            '3mm': $20C_8M_50SM,
            '4mm': $20C_8M_50SM + POLIC_4MM_8M,
            '6mm': $20C_8M_50SM + POLIC_6MM_8M,
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20C_10M_100SM,
            '4mm': $20C_10M_100SM + POLIC_4MM_10M,
            '6mm': $20C_10M_100SM + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $20C_10M_67SM,
            '4mm': $20C_10M_67SM + POLIC_4MM_10M,
            '6mm': $20C_10M_67SM + POLIC_6MM_10M,
          },
          '50sm': {
            '3mm': $20C_10M_50SM,
            '4mm': $20C_10M_50SM + POLIC_4MM_10M,
            '6mm': $20C_10M_50SM + POLIC_6MM_10M,
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $20C_4M_100SM + SHIPPING_MID,
            '4mm': $20C_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20C_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $20C_4M_67SM + SHIPPING_MID,
            '4mm': $20C_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20C_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
          },
          '50sm': {
            '3mm': $20C_4M_50SM + SHIPPING_MID,
            '4mm': $20C_4M_50SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20C_4M_50SM + SHIPPING_MID + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20C_6M_100SM + SHIPPING_MID,
            '4mm': $20C_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20C_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $20C_6M_67SM + SHIPPING_MID,
            '4mm': $20C_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20C_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
          },
          '50sm': {
            '3mm': $20C_6M_50SM + SHIPPING_MID,
            '4mm': $20C_6M_50SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20C_6M_50SM + SHIPPING_MID + POLIC_6MM_6M,
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20C_8M_100SM + SHIPPING_MID,
            '4mm': $20C_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20C_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $20C_8M_67SM + SHIPPING_MID,
            '4mm': $20C_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20C_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
          },
          '50sm': {
            '3mm': $20C_8M_50SM + SHIPPING_MID,
            '4mm': $20C_8M_50SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20C_8M_50SM + SHIPPING_MID + POLIC_6MM_8M,
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20C_10M_100SM + SHIPPING_MID,
            '4mm': $20C_10M_100SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20C_10M_100SM + SHIPPING_MID + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $20C_10M_67SM + SHIPPING_MID,
            '4mm': $20C_10M_67SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20C_10M_67SM + SHIPPING_MID + POLIC_6MM_10M,
          },
          '50sm': {
            '3mm': $20C_10M_50SM + SHIPPING_MID,
            '4mm': $20C_10M_50SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20C_10M_50SM + SHIPPING_MID + POLIC_6MM_10M,
          },
        },
      }
    },
    '40-c': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $40C_4M_100SM,
            '4mm': $40C_4M_100SM + POLIC_4MM_4M,
            '6mm': $40C_4M_100SM + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $40C_4M_67SM,
            '4mm': $40C_4M_67SM + POLIC_4MM_4M,
            '6mm': $40C_4M_67SM + POLIC_6MM_4M,
          },
          '50sm': {
            '3mm': $40C_4M_50SM,
            '4mm': $40C_4M_50SM + POLIC_4MM_4M,
            '6mm': $40C_4M_50SM + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40C_6M_100SM,
            '4mm': $40C_6M_100SM + POLIC_4MM_6M,
            '6mm': $40C_6M_100SM + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $40C_6M_67SM,
            '4mm': $40C_6M_67SM + POLIC_4MM_6M,
            '6mm': $40C_6M_67SM + POLIC_6MM_6M,
          },
          '50sm': {
            '3mm': $40C_6M_50SM,
            '4mm': $40C_6M_50SM + POLIC_4MM_6M,
            '6mm': $40C_6M_50SM + POLIC_6MM_6M,
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40C_8M_100SM,
            '4mm': $40C_8M_100SM + POLIC_4MM_8M,
            '6mm': $40C_8M_100SM + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $40C_8M_67SM,
            '4mm': $40C_8M_67SM + POLIC_4MM_8M,
            '6mm': $40C_8M_67SM + POLIC_6MM_8M,
          },
          '50sm': {
            '3mm': $40C_8M_50SM,
            '4mm': $40C_8M_50SM + POLIC_4MM_8M,
            '6mm': $40C_8M_50SM + POLIC_6MM_8M,
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40C_10M_100SM,
            '4mm': $40C_10M_100SM + POLIC_4MM_10M,
            '6mm': $40C_10M_100SM + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $40C_10M_67SM,
            '4mm': $40C_10M_67SM + POLIC_4MM_10M,
            '6mm': $40C_10M_67SM + POLIC_6MM_10M,
          },
          '50sm': {
            '3mm': $40C_10M_50SM,
            '4mm': $40C_10M_50SM + POLIC_4MM_10M,
            '6mm': $40C_10M_50SM + POLIC_6MM_10M,
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $40C_4M_100SM + SHIPPING_MID,
            '4mm': $40C_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40C_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $40C_4M_67SM + SHIPPING_MID,
            '4mm': $40C_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40C_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
          },
          '50sm': {
            '3mm': $40C_4M_50SM + SHIPPING_MID,
            '4mm': $40C_4M_50SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $40C_4M_50SM + SHIPPING_MID + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $40C_6M_100SM + SHIPPING_MID,
            '4mm': $40C_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40C_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $40C_6M_67SM + SHIPPING_MID,
            '4mm': $40C_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40C_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
          },
          '50sm': {
            '3mm': $40C_6M_50SM + SHIPPING_MID,
            '4mm': $40C_6M_50SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $40C_6M_50SM + SHIPPING_MID + POLIC_6MM_6M,
          },
        },
        '8m': {
          '100sm': {
            '3mm': $40C_8M_100SM + SHIPPING_MID,
            '4mm': $40C_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40C_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $40C_8M_67SM + SHIPPING_MID,
            '4mm': $40C_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40C_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
          },
          '50sm': {
            '3mm': $40C_8M_50SM + SHIPPING_MID,
            '4mm': $40C_8M_50SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $40C_8M_50SM + SHIPPING_MID + POLIC_6MM_8M,
          },
        },
        '10m': {
          '100sm': {
            '3mm': $40C_10M_100SM + SHIPPING_MID,
            '4mm': $40C_10M_100SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40C_10M_100SM + SHIPPING_MID + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $40C_10M_67SM + SHIPPING_MID,
            '4mm': $40C_10M_67SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40C_10M_67SM + SHIPPING_MID + POLIC_6MM_10M,
          },
          '50sm': {
            '3mm': $40C_10M_50SM + SHIPPING_MID,
            '4mm': $40C_10M_50SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $40C_10M_50SM + SHIPPING_MID + POLIC_6MM_10M,
          },
        },
      }
    },
    '20-fc': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $20FC_4M_100SM,
            '4mm': $20FC_4M_100SM + POLIC_4MM_4M,
            '6mm': $20FC_4M_100SM + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $20FC_4M_67SM,
            '4mm': $20FC_4M_67SM + POLIC_4MM_4M,
            '6mm': $20FC_4M_67SM + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20FC_6M_100SM,
            '4mm': $20FC_6M_100SM + POLIC_4MM_6M,
            '6mm': $20FC_6M_100SM + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $20FC_6M_67SM,
            '4mm': $20FC_6M_67SM + POLIC_4MM_6M,
            '6mm': $20FC_6M_67SM + POLIC_6MM_6M,
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20FC_8M_100SM,
            '4mm': $20FC_8M_100SM + POLIC_4MM_8M,
            '6mm': $20FC_8M_100SM + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $20FC_8M_67SM,
            '4mm': $20FC_8M_67SM + POLIC_4MM_8M,
            '6mm': $20FC_8M_67SM + POLIC_6MM_8M,
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20FC_10M_100SM,
            '4mm': $20FC_10M_100SM + POLIC_4MM_10M,
            '6mm': $20FC_10M_100SM + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $20FC_10M_67SM,
            '4mm': $20FC_10M_67SM + POLIC_4MM_10M,
            '6mm': $20FC_10M_67SM + POLIC_6MM_10M,
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $20FC_4M_100SM + SHIPPING_MID,
            '4mm': $20FC_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20FC_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
          },
          '67sm': {
            '3mm': $20FC_4M_67SM + SHIPPING_MID,
            '4mm': $20FC_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
            '6mm': $20FC_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
          },
        },
        '6m': {
          '100sm': {
            '3mm': $20FC_6M_100SM + SHIPPING_MID,
            '4mm': $20FC_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20FC_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
          },
          '67sm': {
            '3mm': $20FC_6M_67SM + SHIPPING_MID,
            '4mm': $20FC_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
            '6mm': $20FC_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
          },
        },
        '8m': {
          '100sm': {
            '3mm': $20FC_8M_100SM + SHIPPING_MID,
            '4mm': $20FC_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20FC_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
          },
          '67sm': {
            '3mm': $20FC_8M_67SM + SHIPPING_MID,
            '4mm': $20FC_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
            '6mm': $20FC_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
          },
        },
        '10m': {
          '100sm': {
            '3mm': $20FC_10M_100SM + SHIPPING_MID,
            '4mm': $20FC_10M_100SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20FC_10M_100SM + SHIPPING_MID + POLIC_6MM_10M,
          },
          '67sm': {
            '3mm': $20FC_10M_67SM + SHIPPING_MID,
            '4mm': $20FC_10M_67SM + SHIPPING_MID + POLIC_4MM_10M,
            '6mm': $20FC_10M_67SM + SHIPPING_MID + POLIC_6MM_10M,
          },
        },
      }
    },
    '3500-40c': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': $3500_40C_4M_100SM,
            '4mm': $3500_40C_4M_100SM + POLIC_4MM_4M,
          },
          '67sm': {
            '3mm': $3500_40C_4M_67SM,
            '4mm': $3500_40C_4M_67SM + POLIC_4MM_4M
          },
          '50sm': {
            '3mm': $3500_40C_4M_50SM,
            '4mm': $3500_40C_4M_50SM + POLIC_4MM_4M
          },
        },
        '6m': {
          '100sm': {
            '3mm': $3500_40C_6M_100SM,
            '4mm': $3500_40C_6M_100SM + POLIC_4MM_6M
          },
          '67sm': {
            '3mm': $3500_40C_6M_67SM,
            '4mm': $3500_40C_6M_67SM + POLIC_4MM_6M,
          },
          '50sm': {
            '3mm': $3500_40C_6M_50SM,
            '4mm': $3500_40C_6M_50SM + POLIC_4MM_6M
          },
        },
        '8m': {
          '100sm': {
            '3mm': $3500_40C_8M_100SM,
            '4mm': $3500_40C_8M_100SM + POLIC_4MM_8M,
          },
          '67sm': {
            '3mm': $3500_40C_8M_67SM,
            '4mm': $3500_40C_8M_67SM + POLIC_4MM_8M,
          },
          '50sm': {
            '3mm': $3500_40C_8M_50SM,
            '4mm': $3500_40C_8M_50SM + POLIC_4MM_8M
          },
        },
        '10m': {
          '100sm': {
            '3mm': $3500_40C_10M_100SM,
            '4mm': $3500_40C_10M_100SM + POLIC_4MM_10M,
          },
          '67sm': {
            '3mm': $3500_40C_10M_67SM,
            '4mm': $3500_40C_10M_67SM + POLIC_4MM_10M,
          },
          '50sm': {
            '3mm': $3500_40C_10M_50SM,
            '4mm': $3500_40C_10M_50SM + POLIC_4MM_10M
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': $3500_40C_4M_100SM + SHIPPING_MAX,
            '4mm': $3500_40C_4M_100SM + SHIPPING_MAX + POLIC_4MM_4M,
          },
          '67sm': {
            '3mm': $3500_40C_4M_67SM + SHIPPING_MAX,
            '4mm': $3500_40C_4M_67SM + SHIPPING_MAX + POLIC_4MM_4M
          },
          '50sm': {
            '3mm': $3500_40C_4M_50SM + SHIPPING_MAX,
            '4mm': $3500_40C_4M_50SM + SHIPPING_MAX + POLIC_4MM_4M
          },
        },
        '6m': {
          '100sm': {
            '3mm': $3500_40C_6M_100SM + SHIPPING_MAX,
            '4mm': $3500_40C_6M_100SM + SHIPPING_MAX + POLIC_4MM_6M
          },
          '67sm': {
            '3mm': $3500_40C_6M_67SM + SHIPPING_MAX,
            '4mm': $3500_40C_6M_67SM + SHIPPING_MAX + POLIC_4MM_6M,
          },
          '50sm': {
            '3mm': $3500_40C_6M_50SM + SHIPPING_MAX,
            '4mm': $3500_40C_6M_50SM + SHIPPING_MAX + POLIC_4MM_6M
          },
        },
        '8m': {
          '100sm': {
            '3mm': $3500_40C_8M_100SM + SHIPPING_MAX,
            '4mm': $3500_40C_8M_100SM + SHIPPING_MAX + POLIC_4MM_8M,
          },
          '67sm': {
            '3mm': $3500_40C_8M_67SM + SHIPPING_MAX,
            '4mm': $3500_40C_8M_67SM + SHIPPING_MAX + POLIC_4MM_8M,
          },
          '50sm': {
            '3mm': $3500_40C_8M_50SM + SHIPPING_MAX,
            '4mm': $3500_40C_8M_50SM + SHIPPING_MAX + POLIC_4MM_8M
          },
        },
        '10m': {
          '100sm': {
            '3mm': $3500_40C_10M_100SM + SHIPPING_MAX,
            '4mm': $3500_40C_10M_100SM + SHIPPING_MAX + POLIC_4MM_10M,
          },
          '67sm': {
            '3mm': $3500_40C_10M_67SM + SHIPPING_MAX,
            '4mm': $3500_40C_10M_67SM + SHIPPING_MAX + POLIC_4MM_10M,
          },
          '50sm': {
            '3mm': $3500_40C_10M_50SM + SHIPPING_MAX,
            '4mm': $3500_40C_10M_50SM + SHIPPING_MAX + POLIC_4MM_10M
          },
        },
      }
    },
    '4000-40c': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': 450,
            '4mm': 500,
          },
          '67sm': {
            '3mm': 500,
            '4mm': 600
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '6m': {
          '100sm': {
            '3mm': 200,
            '4mm': 600
          },
          '67sm': {
            '3mm': 300,
            '4mm': 700,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '8m': {
          '100sm': {
            '3mm': 100,
            '4mm': 400,
          },
          '67sm': {
            '3mm': 100,
            '4mm': 400,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '10m': {
          '100sm': {
            '3mm': 300,
            '4mm': 600,
          },
          '67sm': {
            '3mm': 300,
            '4mm': 600,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': 514,
            '4mm': 550,
          },
          '67sm': {
            '3mm': 500,
            '4mm': 600
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '6m': {
          '100sm': {
            '3mm': 200,
            '4mm': 600
          },
          '67sm': {
            '3mm': 300,
            '4mm': 700,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '8m': {
          '100sm': {
            '3mm': 100,
            '4mm': 400,
          },
          '67sm': {
            '3mm': 100,
            '4mm': 400,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '10m': {
          '100sm': {
            '3mm': 300,
            '4mm': 600,
          },
          '67sm': {
            '3mm': 300,
            '4mm': 600,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
      }
    },
    'prom-40c': {
      'demountable': {
        '4m': {
          '100sm': {
            '3mm': 450,
            '4mm': 500,
          },
          '67sm': {
            '3mm': 500,
            '4mm': 600
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '6m': {
          '100sm': {
            '3mm': 200,
            '4mm': 600
          },
          '67sm': {
            '3mm': 300,
            '4mm': 700,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '8m': {
          '100sm': {
            '3mm': 100,
            '4mm': 400,
          },
          '67sm': {
            '3mm': 100,
            '4mm': 400,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '10m': {
          '100sm': {
            '3mm': 300,
            '4mm': 600,
          },
          '67sm': {
            '3mm': 300,
            '4mm': 600,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
      },
      'one-piece': {
        '4m': {
          '100sm': {
            '3mm': 514,
            '4mm': 550,
          },
          '67sm': {
            '3mm': 500,
            '4mm': 600
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '6m': {
          '100sm': {
            '3mm': 200,
            '4mm': 600
          },
          '67sm': {
            '3mm': 300,
            '4mm': 700,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '8m': {
          '100sm': {
            '3mm': 100,
            '4mm': 400,
          },
          '67sm': {
            '3mm': 100,
            '4mm': 400,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
        '10m': {
          '100sm': {
            '3mm': 300,
            '4mm': 600,
          },
          '67sm': {
            '3mm': 300,
            '4mm': 600,
          },
          '50sm': {
            '3mm': 500,
            '4mm': 600
          },
        },
      }
    },
  },
}
