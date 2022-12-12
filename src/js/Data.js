const isRu = !!window.isRu
const PRICE_KEY = isRu ? 'price_ru' : 'price_rb'
const BUY_KEY = isRu ? 'ru_buy' : 'rb_buy'
const CURRENCY_KEY = isRu ? 'RU' : 'BLR'
const DELIVERY_KEY = isRu ? 'delivery_ru_ru' : 'delivery_r_br'

// 1 Sheet Polycarbonate
const SHEET_1_3MM = 600
const SHEET_1_6MM = 739

// Polycarbonate 4mm:
const POLIC_4MM_4M = 515,
    POLIC_4MM_6M = 516,
    POLIC_4MM_8M = 517,
    POLIC_4MM_10M = 518
// Polycarbonate 4mm DK:
const POLIC_DK_4MM_4M = 844,
    POLIC_DK_4MM_6M = 845,
    POLIC_DK_4MM_8M = 846,
    POLIC_DK_4MM_10M = 847
// Shipping:
const SHIPPING_MIN = 291,
    SHIPPING_MID = 226,
    SHIPPING_MAX = 526
// 20-mini:
const $20MINI_4M_100SM = 291,
    $20MINI_6M_100SM = 292,
    $20MINI_8M_100SM = 293,
    $20MINI_10M_100SM = 294,
    $20MINI_4M_67SM = 714,
    $20MINI_6M_67SM = 715,
    $20MINI_8M_67SM = 716,
    $20MINI_10M_67SM = 717
// 24-mini:
const $24MINI_4M_100SM = 702,
    $24MINI_6M_100SM = 703,
    $24MINI_8M_100SM = 704,
    $24MINI_10M_100SM = 705,
    $24MINI_4M_67SM = 706,
    $24MINI_6M_67SM = 707,
    $24MINI_8M_67SM = 708,
    $24MINI_10M_67SM = 709
// 20-c:
const $20C_4M_100SM = 226,
    $20C_6M_100SM = 227,
    $20C_8M_100SM = 228,
    $20C_10M_100SM = 229,
    $20C_4M_67SM = 238,
    $20C_6M_67SM = 239,
    $20C_8M_67SM = 240,
    $20C_10M_67SM = 241,
    $20C_4M_50SM = 246,
    $20C_6M_50SM = 247,
    $20C_8M_50SM = 248,
    $20C_10M_50SM = 249
// 40-c:
const $40C_4M_100SM = 254,
    $40C_6M_100SM = 255,
    $40C_8M_100SM = 256,
    $40C_10M_100SM = 257,
    $40C_4M_67SM = 262,
    $40C_6M_67SM = 263,
    $40C_8M_67SM = 264,
    $40C_10M_67SM = 265,
    $40C_4M_50SM = 270,
    $40C_6M_50SM = 271,
    $40C_8M_50SM = 272,
    $40C_10M_50SM = 273
// 40-ck:
const $40CK_4M_67SM = 274,
    $40CK_6M_67SM = 275,
    $40CK_8M_67SM = 276,
    $40CK_10M_67SM = 277
// 20-fc:
const $20FC_4M_100SM = 278,
    $20FC_6M_100SM = 279,
    $20FC_8M_100SM = 280,
    $20FC_10M_100SM = 281,
    $20FC_4M_67SM = 282,
    $20FC_6M_67SM = 283,
    $20FC_8M_67SM = 284,
    $20FC_10M_67SM = 285
// 3500-40-c:
const $3500_40C_4M_100SM = 334,
    $3500_40C_6M_100SM = 333,
    $3500_40C_8M_100SM = 332,
    $3500_40C_10M_100SM = 331,
    $3500_40C_4M_67SM = 478,
    $3500_40C_6M_67SM = 337,
    $3500_40C_8M_67SM = 336,
    $3500_40C_10M_67SM = 335,
    $3500_40C_4M_50SM = 482,
    $3500_40C_6M_50SM = 483,
    $3500_40C_8M_50SM = 484,
    $3500_40C_10M_50SM = 485
// 4000-40-c:
const $4000_40C_4M_100SM = 526,
    $4000_40C_6M_100SM = 527,
    $4000_40C_8M_100SM = 528,
    $4000_40C_10M_100SM = 529,
    $4000_40C_4M_67SM = 530,
    $4000_40C_6M_67SM = 531,
    $4000_40C_8M_67SM = 532,
    $4000_40C_10M_67SM = 533,
    $4000_40C_4M_50SM = 534,
    $4000_40C_6M_50SM = 535,
    $4000_40C_8M_50SM = 536,
    $4000_40C_10M_50SM = 537
// 20-d:
const $20D_4M_100SM = 879,
    $20D_6M_100SM = 880,
    $20D_8M_100SM = 881,
    $20D_10M_100SM = 882,
    $20D_4M_67SM = 883,
    $20D_6M_67SM = 884,
    $20D_8M_67SM = 885,
    $20D_10M_67SM = 886
// 20-df:
const $20DF_4M_67SM = 919,
    $20DF_6M_67SM = 920,
    $20DF_8M_67SM = 921,
    $20DF_10M_67SM = 922
// 40-dk:
const $40DK_4M_100SM = 836,
    $40DK_6M_100SM = 837,
    $40DK_8M_100SM = 838,
    $40DK_10M_100SM = 839
// 40-a:
const $40A_4M_100SM = 857
const $40A_6M_100SM = 858
const $40A_8M_100SM = 859
const $40A_10M_100SM = 860
const $40A_4M_67SM = 861
const $40A_6M_67SM = 862
const $40A_8M_67SM = 863
const $40A_10M_67SM = 864
// 40-ak:
const $40AK_4M_100SM = 866
const $40AK_6M_100SM = 867
const $40AK_8M_100SM = 868
const $40AK_10M_100SM = 869
const $40AK_4M_67SM = 870
const $40AK_6M_67SM = 871
const $40AK_8M_67SM = 872
const $40AK_10M_67SM = 873

const DATA = {
    about: [
        {
            imgUrl: '/15-02.svg',
            title: 'Лучшие материалы',
            description:
                'В производстве теплиц используются самые лучшие материалы.',
        },
        {
            imgUrl: '/12-02.svg',
            title: 'Бесплатная доставка',
            description:
                'Своя курьерская служба. Курьер заинтересован доставить товар быстро в целостности и сохранности.',
        },
        {
            imgUrl: '/16-02.svg',
            title: 'Услуги сборки',
            description:
                'Профессиональные сборщики соберут теплицу с гарантией если в этом есть необходимость.',
        },
        {
            imgUrl: '/13-02.svg',
            title: 'Рассрочки',
            description:
                'У нас можно приобрести теплицу в кредит/рассрочку от 3 до 48 месяцев.',
        },
        {
            imgUrl: '/18-02.svg',
            title: 'Доступные цены',
            description:
                'Мы являемся прямым импортёром металла и у нас собственное производство. Поэтому у нас наиболее выгодные цены на все теплицы на территории РБ.',
        },
        {
            imgUrl: '/14-02.svg',
            title: 'Сертификация',
            description:
                'Есть сертификаты и акцизные марки. Белорусское производство.',
        },
    ],
    makepurchase: [
        {
            id: 1,
            subtitle: 'первый',
            title: 'Выберите теплицу',
            description:
                'Выберите из <a title="Перейти к каталогу" href="#catalog">каталога</a> теплицу, которая Вам приглянулась',
        },
        {
            id: 2,
            subtitle: 'второй',
            title: ' Оставьте заявку',
            description:
                'Закажите обратный звонок или позвоните по номеру<br><a title="Получить консультацию по телефону" href="tel:+375297428310">+375 (29) 742-83-10</a>',
        },
        {
            id: 3,
            subtitle: 'третий',
            title: 'Оформляем заказ',
            description:
                'Составляем заявку на доставку: время/адрес/удобный способ оплаты',
        },
        {
            id: 4,
            className: 'btn-pulse',
            subtitle: 'четвертый',
            title: 'Доставка/установка',
            description:
                'Доставляем вашу теплицу в течении 2-3 дней. По желанию можем собрать Вашу теплицу',
        },
    ],
    catalogTeplic: [
        {
            id: '20m',
            title: 'Сибирская "Мини-20м"',
            productName: '20-mini',
            tube: '20x20',
            width: '2.00',
            height: '1.92',
            images: [
                'teplica-1.webp',
                'teplica-1.2.webp',
                'teplica-1.3.webp',
                'teplica-1.4.webp',
                'teplica-1.5.webp',
            ],
            numberIndicators: ['0', '1', '2', '3', '4'],
            arcStep: {
                1: '100sm',
                0.67: '67sm',
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
            numberIndicators: ['0', '1', '2', '3', '4'],
            arcStep: {
                1: '100sm',
                0.67: '67sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
        {
            id: '20c',
            title: '"Стандартная-20ц"',
            productName: '20-c',
            tube: '20x20',
            width: '3.00',
            height: '2.00',
            images: [
                'teplica-2.3.webp',
                'teplica-2.4.webp',
                'teplica-2.5.webp',
            ],
            numberIndicators: ['0', '1', '2'],
            arcStep: {
                1: '100sm',
                0.67: '67sm',
                0.5: '50sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
        {
            id: '40c',
            title: '"Титан-40ц"',
            productName: '40-c',
            tube: '40x20',
            width: '3.00',
            height: '2.00',
            images: [
                'teplica-3.2.webp',
                'teplica-3.3.webp',
                'teplica-3.4.webp',
                'teplica-3.5.webp',
            ],
            numberIndicators: ['0', '1', '2', '3'],
            arcStep: {
                1: '100sm',
                0.67: '67sm',
                0.5: '50sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
        {
            id: '40ck',
            title: '"Краб-40цк"',
            productName: '40-ck',
            tube: '40x20',
            width: '3.00',
            height: '2.00',
            images: [
                'teplica-40ck-04.webp',
                'teplica-40ck-02.webp',
                'teplica-40ck-01.webp',
                'teplica-40ck-05.webp',
            ],
            numberIndicators: ['0', '1', '2', '3'],
            arcStep: {
                0.67: '67sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
        {
            id: '20fc',
            title: 'Сибирская "Ферма-20фц"',
            productName: '20-fc',
            tube: '20x20',
            width: '3.00',
            height: '2.00',
            images: [
                'teplica-4.2.webp',
                'teplica-4.3.webp',
                'teplica-4.5.webp',
            ],
            numberIndicators: ['0', '1', '2'],
            arcStep: {
                1: '100sm',
                0.67: '67sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
        {
            id: '3500-40c',
            title: 'Титан 3.5 ширина',
            productName: '3500-40c',
            tube: '40x20',
            width: '3.50',
            height: '2.00',
            images: [
                'teplica-5.webp',
                'teplica-5.2.webp',
                'teplica-5.4.webp',
                'teplica-5.5.webp',
            ],
            numberIndicators: ['0', '1', '2', '3'],
            arcStep: {
                1: '100sm',
                0.67: '67sm',
                0.5: '50sm',
            },
            polycarbonate: ['3', '4'],
        },
        {
            id: '4000-40c',
            title: 'Титан 4 ширина',
            productName: '4000-40c',
            tube: '40x20',
            width: '4.00',
            height: '2.00',
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
                1: '100sm',
                0.67: '67sm',
                0.5: '50sm',
            },
            polycarbonate: ['3', '4'],
        },
        {
            id: '20d',
            title: '"Домик-20Д"',
            productName: '20d',
            tube: '20x20',
            width: '2.85',
            height: '2.40',
            images: [
                'teplica-20d-1.webp',
                'teplica-20d-2.webp',
                'teplica-20d-3.webp',
                'teplica-20d-4.webp',
                'teplica-20d-5.webp',
                'teplica-20d-6.webp',
            ],
            numberIndicators: ['0', '1', '2', '3', '4', '5'],
            arcStep: {
                1: '100sm',
                0.67: '67sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
        {
            id: '20df',
            title: '"Домик-20ДФ"',
            productName: '20df',
            tube: '20x20',
            width: '2.85',
            height: '2.40',
            images: [
                'teplica-20df-1.webp',
                'teplica-20df-2.webp',
                'teplica-20df-3.webp',
                'teplica-20df-4.webp',
                'teplica-20df-5.webp',
                'teplica-20df-6.webp',
            ],
            numberIndicators: ['0', '1', '2', '3', '4', '5'],
            arcStep: {
                0.67: '67sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
        {
            id: '40dk',
            title: '"Домик-40ДК"',
            productName: '40dk',
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
                1: '100sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
        {
            id: '40a',
            title: '"Капля-40А"',
            productName: '40-a',
            tube: '40x20',
            width: '3.00',
            height: '2.30',
            images: [
                'teplica-40a-02.webp',
                'teplica-40a-01.webp',
                'teplica-40a-03.webp',
                'teplica-40a-04.webp',
                'teplica-40a-05.webp',
            ],
            numberIndicators: ['0', '1', '2', '3', '4'],
            arcStep: {
                1: '100sm',
                0.67: '67sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
        {
            id: '40ak',
            title: '"Капля Краб-40АК"',
            productName: '40-ak',
            tube: '40x20',
            width: '3.00',
            height: '2.30',
            images: [
                'teplica-40ak-01.webp',
                'teplica-40ak-02.webp',
                'teplica-40ak-03.webp',
                'teplica-40ak-04.webp',
                'teplica-40ak-05.webp',
            ],
            numberIndicators: ['0', '1', '2', '3', '4'],
            arcStep: {
                1: '100sm',
                0.67: '67sm',
            },
            polycarbonate: ['3', '4', '6'],
        },
    ],
    addEquipment: [
        {
            name: 'Парник<br>"Огурчик" 4м',
            imgUrl: '/pickle.webp',
            altName: 'Парник огурчик',
            price: 43,
        },
        {
            name: 'Парник<br>"Огурчик" 6м',
            imgUrl: '/pickle.webp',
            altName: 'Парник огурчик',
            price: 51,
        },
        {
            name: 'П-Профиль',
            imgUrl: '/p-profile.webp',
            altName: 'П-Профиль',
            price: 6,
        },
        {
            name: 'Подвязки 6м',
            imgUrl: '/garters.webp',
            altName: 'Подвязки',
            price: 21,
        },
        {
            name: 'Авто-полив',
            imgUrl: '/auto-watering.webp',
            altName: 'Автоматический полив',
            price: 61,
        },
        {
            name: 'Перфо-лента 1м',
            imgUrl: '/punched-tape.webp',
            altName: 'Перфорированая лента',
            price: 2,
        },
        {
            name: 'Газлифт',
            imgUrl: '/gaz-lift.webp',
            altName: 'Газлифт',
            price: 43,
        },
        {
            name: 'Поликарбонат 4мм',
            imgUrl: '/polic.webp',
            altName: 'Поликарбонат',
            price: 121,
        },
    ],
    accordion: [
        {
            title: 'Какой шаг между дугами оптимальный?',
            description:
                'Стандартным шагом считается 1 метр, в большинстве случаев с такой теплицей ничего не случится. Для более искушенных клиентов рекомендуем взять теплицу с шагом 0, 67 метра, такая теплица выдержит даже самые суровые погодные условия в нашей стране. Ну, а с шагом 0, 5 метра теплица может выдержать катаклизм вселенского масштаба.',
        },
        {
            title: 'За какое время я могу собрать теплицу?',
            description:
                'Конструкция теплиц элементарная, для людей без опыта среднее время сборки теплицы 2 — 4 часа. Рекомендуем собирать теплицу минимум вдвоем. Чем больше людей учувствуют в этом деле, тем быстрее будет результат.',
        },
        {
            title: 'Что необходимо для сборки теплицы?',
            description:
                'Сборка наших теплиц осуществляется максимально просто. Из инструмента Вам необходимо иметь: шуруповерт или крестовую отвертку, канцелярский нож и гаечный ключ на 10.',
        },
        {
            title: 'За какое время вы привезете мне теплицу?',
            description:
                'В любой регион доставка осуществляется от 2-ух дней с момента заказа, по мере формирования маршрута. Но Вы всегда можете зафиксировать любую другую дату и время позже этих рамок.',
        },
    ],
    priceList: {},
}

const priceKey = {
    SHEET_1_3MM: BUY_KEY,
    SHIPPING_MIN: DELIVERY_KEY,
    SHIPPING_MID: DELIVERY_KEY,
    SHIPPING_MAX: DELIVERY_KEY,
}

function loadCatalogData() {
    var URL = `https://firma-crm.by/price/get-by-product-ids`
    var priceIds = {
        SHEET_1_3MM,
        SHEET_1_6MM,

        SHIPPING_MIN,
        SHIPPING_MID,
        SHIPPING_MAX,

        POLIC_DK_4MM_4M,
        POLIC_DK_4MM_6M,
        POLIC_DK_4MM_8M,
        POLIC_DK_4MM_10M,

        POLIC_4MM_4M,
        POLIC_4MM_6M,
        POLIC_4MM_8M,
        POLIC_4MM_10M,

        $20MINI_4M_100SM,
        $20MINI_6M_100SM,
        $20MINI_8M_100SM,
        $20MINI_10M_100SM,
        $20MINI_4M_67SM,
        $20MINI_6M_67SM,
        $20MINI_8M_67SM,
        $20MINI_10M_67SM,
        $24MINI_4M_100SM,
        $24MINI_6M_100SM,
        $24MINI_8M_100SM,
        $24MINI_10M_100SM,
        $24MINI_4M_67SM,
        $24MINI_6M_67SM,
        $24MINI_8M_67SM,
        $24MINI_10M_67SM,
        $20C_4M_100SM,
        $20C_6M_100SM,
        $20C_8M_100SM,
        $20C_10M_100SM,
        $20C_4M_67SM,
        $20C_6M_67SM,
        $20C_8M_67SM,
        $20C_10M_67SM,
        $20C_4M_50SM,
        $20C_6M_50SM,
        $20C_8M_50SM,
        $20C_10M_50SM,
        $40C_4M_100SM,
        $40C_6M_100SM,
        $40C_8M_100SM,
        $40C_10M_100SM,
        $40C_4M_67SM,
        $40C_6M_67SM,
        $40C_8M_67SM,
        $40C_10M_67SM,
        $40C_4M_50SM,
        $40C_6M_50SM,
        $40C_8M_50SM,
        $40C_10M_50SM,
        $40CK_4M_67SM,
        $40CK_6M_67SM,
        $40CK_8M_67SM,
        $40CK_10M_67SM,
        $20FC_4M_100SM,
        $20FC_6M_100SM,
        $20FC_8M_100SM,
        $20FC_10M_100SM,
        $20FC_4M_67SM,
        $20FC_6M_67SM,
        $20FC_8M_67SM,
        $20FC_10M_67SM,
        $3500_40C_4M_100SM,
        $3500_40C_6M_100SM,
        $3500_40C_8M_100SM,
        $3500_40C_10M_100SM,
        $3500_40C_4M_67SM,
        $3500_40C_6M_67SM,
        $3500_40C_8M_67SM,
        $3500_40C_10M_67SM,
        $3500_40C_4M_50SM,
        $3500_40C_6M_50SM,
        $3500_40C_8M_50SM,
        $3500_40C_10M_50SM,
        $4000_40C_4M_100SM,
        $4000_40C_6M_100SM,
        $4000_40C_8M_100SM,
        $4000_40C_10M_100SM,
        $4000_40C_4M_67SM,
        $4000_40C_6M_67SM,
        $4000_40C_8M_67SM,
        $4000_40C_10M_67SM,
        $4000_40C_4M_50SM,
        $4000_40C_6M_50SM,
        $4000_40C_8M_50SM,
        $4000_40C_10M_50SM,
        $20D_4M_100SM,
        $20D_6M_100SM,
        $20D_8M_100SM,
        $20D_10M_100SM,
        $20D_4M_67SM,
        $20D_6M_67SM,
        $20D_8M_67SM,
        $20D_10M_67SM,
        $20DF_4M_67SM,
        $20DF_6M_67SM,
        $20DF_8M_67SM,
        $20DF_10M_67SM,
        $40DK_4M_100SM,
        $40DK_6M_100SM,
        $40DK_8M_100SM,
        $40DK_10M_100SM,
        $40A_4M_100SM,
        $40A_6M_100SM,
        $40A_8M_100SM,
        $40A_10M_100SM,
        $40A_4M_67SM,
        $40A_6M_67SM,
        $40A_8M_67SM,
        $40A_10M_67SM,
        $40AK_4M_100SM,
        $40AK_6M_100SM,
        $40AK_8M_100SM,
        $40AK_10M_100SM,
        $40AK_4M_67SM,
        $40AK_6M_67SM,
        $40AK_8M_67SM,
        $40AK_10M_67SM,
    }

    var xhr = new XMLHttpRequest()
    xhr.open('POST', URL)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(
        JSON.stringify({
            ids: Object.values(priceIds),
            options: {
                fields: [BUY_KEY],
                withCurrency: true,
            },
        }),
    )
    xhr.onload = function (e) {
        if (e.target.status === 201) {
            var data = JSON.parse(e.target.response)

            Object.keys(priceIds).forEach((key) => {
                const id = priceIds[key]
                const item = data.find((item) => item.product_id === id)

                if (item) {
                    priceIds[key] = priceKey[key]
                        ? {
                              [priceKey[key]]: item[priceKey[key]],
                              price: item[PRICE_KEY],
                          }
                        : item[PRICE_KEY]
                }
            })

            const {
                SHIPPING_MIN: SHIPPING_MIN_COST,
                SHIPPING_MID: SHIPPING_MID_COST,
                SHIPPING_MAX: SHIPPING_MAX_COST,
                SHEET_1_3MM: SHEET_1_3MM_COST,
                SHEET_1_6MM: SHEET_1_6MM_COST,
                POLIC_DK_4MM_4M,
                POLIC_DK_4MM_6M,
                POLIC_DK_4MM_8M,
                POLIC_DK_4MM_10M,
                POLIC_4MM_4M,
                POLIC_4MM_6M,
                POLIC_4MM_8M,
                POLIC_4MM_10M,
                $20MINI_4M_100SM,
                $20MINI_6M_100SM,
                $20MINI_8M_100SM,
                $20MINI_10M_100SM,
                $20MINI_4M_67SM,
                $20MINI_6M_67SM,
                $20MINI_8M_67SM,
                $20MINI_10M_67SM,
                $24MINI_4M_100SM,
                $24MINI_6M_100SM,
                $24MINI_8M_100SM,
                $24MINI_10M_100SM,
                $24MINI_4M_67SM,
                $24MINI_6M_67SM,
                $24MINI_8M_67SM,
                $24MINI_10M_67SM,
                $20C_4M_100SM,
                $20C_6M_100SM,
                $20C_8M_100SM,
                $20C_10M_100SM,
                $20C_4M_67SM,
                $20C_6M_67SM,
                $20C_8M_67SM,
                $20C_10M_67SM,
                $20C_4M_50SM,
                $20C_6M_50SM,
                $20C_8M_50SM,
                $20C_10M_50SM,
                $40C_4M_100SM,
                $40C_6M_100SM,
                $40C_8M_100SM,
                $40C_10M_100SM,
                $40C_4M_67SM,
                $40C_6M_67SM,
                $40C_8M_67SM,
                $40C_10M_67SM,
                $40C_4M_50SM,
                $40C_6M_50SM,
                $40C_8M_50SM,
                $40C_10M_50SM,
                $40CK_4M_67SM,
                $40CK_6M_67SM,
                $40CK_8M_67SM,
                $40CK_10M_67SM,
                $20FC_4M_100SM,
                $20FC_6M_100SM,
                $20FC_8M_100SM,
                $20FC_10M_100SM,
                $20FC_4M_67SM,
                $20FC_6M_67SM,
                $20FC_8M_67SM,
                $20FC_10M_67SM,
                $3500_40C_4M_100SM,
                $3500_40C_6M_100SM,
                $3500_40C_8M_100SM,
                $3500_40C_10M_100SM,
                $3500_40C_4M_67SM,
                $3500_40C_6M_67SM,
                $3500_40C_8M_67SM,
                $3500_40C_10M_67SM,
                $3500_40C_4M_50SM,
                $3500_40C_6M_50SM,
                $3500_40C_8M_50SM,
                $3500_40C_10M_50SM,
                $4000_40C_4M_100SM,
                $4000_40C_6M_100SM,
                $4000_40C_8M_100SM,
                $4000_40C_10M_100SM,
                $4000_40C_4M_67SM,
                $4000_40C_6M_67SM,
                $4000_40C_8M_67SM,
                $4000_40C_10M_67SM,
                $4000_40C_4M_50SM,
                $4000_40C_6M_50SM,
                $4000_40C_8M_50SM,
                $4000_40C_10M_50SM,
                $20D_4M_100SM,
                $20D_6M_100SM,
                $20D_8M_100SM,
                $20D_10M_100SM,
                $20D_4M_67SM,
                $20D_6M_67SM,
                $20D_8M_67SM,
                $20D_10M_67SM,
                $20DF_4M_67SM,
                $20DF_6M_67SM,
                $20DF_8M_67SM,
                $20DF_10M_67SM,
                $40DK_4M_100SM,
                $40DK_6M_100SM,
                $40DK_8M_100SM,
                $40DK_10M_100SM,
                $40A_4M_100SM,
                $40A_6M_100SM,
                $40A_8M_100SM,
                $40A_10M_100SM,
                $40A_4M_67SM,
                $40A_6M_67SM,
                $40A_8M_67SM,
                $40A_10M_67SM,
                $40AK_4M_100SM,
                $40AK_6M_100SM,
                $40AK_8M_100SM,
                $40AK_10M_100SM,
                $40AK_4M_67SM,
                $40AK_6M_67SM,
                $40AK_8M_67SM,
                $40AK_10M_67SM,
            } = priceIds

            const currencyRate = data.at(-1).currency[`${CURRENCY_KEY}_USD`]

            const SHEET_1_3MM = Math.round(
                SHEET_1_3MM_COST[BUY_KEY] * currencyRate,
            )
            const SHEET_1_6MM = SHEET_1_6MM_COST - SHEET_1_3MM_COST.price
            // Polycarbonate 6mm:
            const POLIC_6MM_4M = SHEET_1_6MM * 3,
                POLIC_6MM_6M = SHEET_1_6MM * 4,
                POLIC_6MM_8M = SHEET_1_6MM * 5,
                POLIC_6MM_10M = SHEET_1_6MM * 6

            // Polycarbonate 6mm DK:
            const POLIC_DK_6MM_4M = SHEET_1_6MM * 4,
                POLIC_DK_6MM_6M = SHEET_1_6MM * 5,
                POLIC_DK_6MM_8M = SHEET_1_6MM * 6,
                POLIC_DK_6MM_10M = SHEET_1_6MM * 7

            const SHIPPING_MIN = SHIPPING_MIN_COST[DELIVERY_KEY]
            const SHIPPING_MID = SHIPPING_MID_COST[DELIVERY_KEY]
            const SHIPPING_MAX = SHIPPING_MAX_COST[DELIVERY_KEY]

            ;(DATA.priceList = {
                '20-mini': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $20MINI_4M_100SM,
                                '4mm': $20MINI_4M_100SM + POLIC_4MM_4M,
                                '6mm': $20MINI_4M_100SM + POLIC_6MM_4M,
                                '0mm': $20MINI_4M_100SM - SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $20MINI_4M_67SM,
                                '4mm': $20MINI_4M_67SM + POLIC_4MM_4M,
                                '6mm': $20MINI_4M_67SM + POLIC_6MM_4M,
                                '0mm': $20MINI_4M_67SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $20MINI_6M_100SM,
                                '4mm': $20MINI_6M_100SM + POLIC_4MM_6M,
                                '6mm': $20MINI_6M_100SM + POLIC_6MM_6M,
                                '0mm': $20MINI_6M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $20MINI_6M_67SM,
                                '4mm': $20MINI_6M_67SM + POLIC_4MM_6M,
                                '6mm': $20MINI_6M_67SM + POLIC_6MM_6M,
                                '0mm': $20MINI_6M_67SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $20MINI_8M_100SM,
                                '4mm': $20MINI_8M_100SM + POLIC_4MM_8M,
                                '6mm': $20MINI_8M_100SM + POLIC_6MM_8M,
                                '0mm': $20MINI_8M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $20MINI_8M_67SM,
                                '4mm': $20MINI_8M_67SM + POLIC_4MM_8M,
                                '6mm': $20MINI_8M_67SM + POLIC_6MM_8M,
                                '0mm': $20MINI_8M_67SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $20MINI_10M_100SM,
                                '4mm': $20MINI_10M_100SM + POLIC_4MM_10M,
                                '6mm': $20MINI_10M_100SM + POLIC_6MM_10M,
                                '0mm': $20MINI_10M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $20MINI_10M_67SM,
                                '4mm': $20MINI_10M_67SM + POLIC_4MM_10M,
                                '6mm': $20MINI_10M_67SM + POLIC_6MM_10M,
                                '0mm': $20MINI_10M_67SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $20MINI_4M_100SM + SHIPPING_MIN,
                                '4mm':
                                    $20MINI_4M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_4M,
                                '6mm':
                                    $20MINI_4M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_4M,
                                '0mm':
                                    $20MINI_4M_100SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $20MINI_4M_67SM + SHIPPING_MIN,
                                '4mm':
                                    $20MINI_4M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_4M,
                                '6mm':
                                    $20MINI_4M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_4M,
                                '0mm':
                                    $20MINI_4M_67SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $20MINI_6M_100SM + SHIPPING_MIN,
                                '4mm':
                                    $20MINI_6M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_6M,
                                '6mm':
                                    $20MINI_6M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_6M,
                                '0mm':
                                    $20MINI_6M_100SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $20MINI_6M_67SM + SHIPPING_MIN,
                                '4mm':
                                    $20MINI_6M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_6M,
                                '6mm':
                                    $20MINI_6M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_6M,
                                '0mm':
                                    $20MINI_6M_67SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $20MINI_8M_100SM + SHIPPING_MIN,
                                '4mm':
                                    $20MINI_8M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_8M,
                                '6mm':
                                    $20MINI_8M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_8M,
                                '0mm':
                                    $20MINI_8M_100SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $20MINI_8M_67SM + SHIPPING_MIN,
                                '4mm':
                                    $20MINI_8M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_8M,
                                '6mm':
                                    $20MINI_8M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_8M,
                                '0mm':
                                    $20MINI_8M_67SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $20MINI_10M_100SM + SHIPPING_MIN,
                                '4mm':
                                    $20MINI_10M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $20MINI_10M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $20MINI_10M_100SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $20MINI_10M_67SM + SHIPPING_MIN,
                                '4mm':
                                    $20MINI_10M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $20MINI_10M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $20MINI_10M_67SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
                '24-mini': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $24MINI_4M_100SM,
                                '4mm': $24MINI_4M_100SM + POLIC_4MM_4M,
                                '6mm': $24MINI_4M_100SM + POLIC_6MM_4M,
                                '0mm': $24MINI_4M_100SM - SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $24MINI_4M_67SM,
                                '4mm': $24MINI_4M_67SM + POLIC_4MM_4M,
                                '6mm': $24MINI_4M_67SM + POLIC_6MM_4M,
                                '0mm': $24MINI_4M_67SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $24MINI_6M_100SM,
                                '4mm': $24MINI_6M_100SM + POLIC_4MM_6M,
                                '6mm': $24MINI_6M_100SM + POLIC_6MM_6M,
                                '0mm': $24MINI_6M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $24MINI_6M_67SM,
                                '4mm': $24MINI_6M_67SM + POLIC_4MM_6M,
                                '6mm': $24MINI_6M_67SM + POLIC_6MM_6M,
                                '0mm': $24MINI_6M_67SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $24MINI_8M_100SM,
                                '4mm': $24MINI_8M_100SM + POLIC_4MM_8M,
                                '6mm': $24MINI_8M_100SM + POLIC_6MM_8M,
                                '0mm': $24MINI_8M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $24MINI_8M_67SM,
                                '4mm': $24MINI_8M_67SM + POLIC_4MM_8M,
                                '6mm': $24MINI_8M_67SM + POLIC_6MM_8M,
                                '0mm': $24MINI_8M_67SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $24MINI_10M_100SM,
                                '4mm': $24MINI_10M_100SM + POLIC_4MM_10M,
                                '6mm': $24MINI_10M_100SM + POLIC_6MM_10M,
                                '0mm': $24MINI_10M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $24MINI_10M_67SM,
                                '4mm': $24MINI_10M_67SM + POLIC_4MM_10M,
                                '6mm': $24MINI_10M_67SM + POLIC_6MM_10M,
                                '0mm': $24MINI_10M_67SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $24MINI_4M_100SM + SHIPPING_MIN,
                                '4mm':
                                    $24MINI_4M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_4M,
                                '6mm':
                                    $24MINI_4M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_4M,
                                '0mm':
                                    $24MINI_4M_100SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $24MINI_4M_67SM + SHIPPING_MIN,
                                '4mm':
                                    $24MINI_4M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_4M,
                                '6mm':
                                    $24MINI_4M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_4M,
                                '0mm':
                                    $24MINI_4M_67SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $24MINI_6M_100SM + SHIPPING_MIN,
                                '4mm':
                                    $24MINI_6M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_6M,
                                '6mm':
                                    $24MINI_6M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_6M,
                                '0mm':
                                    $24MINI_6M_100SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $24MINI_6M_67SM + SHIPPING_MIN,
                                '4mm':
                                    $24MINI_6M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_6M,
                                '6mm':
                                    $24MINI_6M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_6M,
                                '0mm':
                                    $24MINI_6M_67SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $24MINI_8M_100SM + SHIPPING_MIN,
                                '4mm':
                                    $24MINI_8M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_8M,
                                '6mm':
                                    $24MINI_8M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_8M,
                                '0mm':
                                    $24MINI_8M_100SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $24MINI_8M_67SM + SHIPPING_MIN,
                                '4mm':
                                    $24MINI_8M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_8M,
                                '6mm':
                                    $24MINI_8M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_8M,
                                '0mm':
                                    $24MINI_8M_67SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $24MINI_10M_100SM + SHIPPING_MIN,
                                '4mm':
                                    $24MINI_10M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $24MINI_10M_100SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $24MINI_10M_100SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $24MINI_10M_67SM + SHIPPING_MIN,
                                '4mm':
                                    $24MINI_10M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $24MINI_10M_67SM +
                                    SHIPPING_MIN +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $24MINI_10M_67SM +
                                    SHIPPING_MIN -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
                '20-c': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $20C_4M_100SM,
                                '4mm': $20C_4M_100SM + POLIC_4MM_4M,
                                '6mm': $20C_4M_100SM + POLIC_6MM_4M,
                                '0mm': $20C_4M_100SM - SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $20C_4M_67SM,
                                '4mm': $20C_4M_67SM + POLIC_4MM_4M,
                                '6mm': $20C_4M_67SM + POLIC_6MM_4M,
                                '0mm': $20C_4M_67SM - SHEET_1_3MM * 3,
                            },
                            '50sm': {
                                '3mm': $20C_4M_50SM,
                                '4mm': $20C_4M_50SM + POLIC_4MM_4M,
                                '6mm': $20C_4M_50SM + POLIC_6MM_4M,
                                '0mm': $20C_4M_50SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $20C_6M_100SM,
                                '4mm': $20C_6M_100SM + POLIC_4MM_6M,
                                '6mm': $20C_6M_100SM + POLIC_6MM_6M,
                                '0mm': $20C_6M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $20C_6M_67SM,
                                '4mm': $20C_6M_67SM + POLIC_4MM_6M,
                                '6mm': $20C_6M_67SM + POLIC_6MM_6M,
                                '0mm': $20C_6M_67SM - SHEET_1_3MM * 4,
                            },
                            '50sm': {
                                '3mm': $20C_6M_50SM,
                                '4mm': $20C_6M_50SM + POLIC_4MM_6M,
                                '6mm': $20C_6M_50SM + POLIC_6MM_6M,
                                '0mm': $20C_6M_50SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $20C_8M_100SM,
                                '4mm': $20C_8M_100SM + POLIC_4MM_8M,
                                '6mm': $20C_8M_100SM + POLIC_6MM_8M,
                                '0mm': $20C_8M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $20C_8M_67SM,
                                '4mm': $20C_8M_67SM + POLIC_4MM_8M,
                                '6mm': $20C_8M_67SM + POLIC_6MM_8M,
                                '0mm': $20C_8M_67SM - SHEET_1_3MM * 5,
                            },
                            '50sm': {
                                '3mm': $20C_8M_50SM,
                                '4mm': $20C_8M_50SM + POLIC_4MM_8M,
                                '6mm': $20C_8M_50SM + POLIC_6MM_8M,
                                '0mm': $20C_8M_50SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $20C_10M_100SM,
                                '4mm': $20C_10M_100SM + POLIC_4MM_10M,
                                '6mm': $20C_10M_100SM + POLIC_6MM_10M,
                                '0mm': $20C_10M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $20C_10M_67SM,
                                '4mm': $20C_10M_67SM + POLIC_4MM_10M,
                                '6mm': $20C_10M_67SM + POLIC_6MM_10M,
                                '0mm': $20C_10M_67SM - SHEET_1_3MM * 6,
                            },
                            '50sm': {
                                '3mm': $20C_10M_50SM,
                                '4mm': $20C_10M_50SM + POLIC_4MM_10M,
                                '6mm': $20C_10M_50SM + POLIC_6MM_10M,
                                '0mm': $20C_10M_50SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $20C_4M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20C_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $20C_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $20C_4M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $20C_4M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20C_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $20C_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $20C_4M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                            '50sm': {
                                '3mm': $20C_4M_50SM + SHIPPING_MID,
                                '4mm':
                                    $20C_4M_50SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $20C_4M_50SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $20C_4M_50SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $20C_6M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20C_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $20C_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $20C_6M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $20C_6M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20C_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $20C_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $20C_6M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                            '50sm': {
                                '3mm': $20C_6M_50SM + SHIPPING_MID,
                                '4mm':
                                    $20C_6M_50SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $20C_6M_50SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $20C_6M_50SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $20C_8M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20C_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $20C_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $20C_8M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $20C_8M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20C_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $20C_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $20C_8M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                            '50sm': {
                                '3mm': $20C_8M_50SM + SHIPPING_MID,
                                '4mm':
                                    $20C_8M_50SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $20C_8M_50SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $20C_8M_50SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $20C_10M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20C_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $20C_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $20C_10M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $20C_10M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20C_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $20C_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $20C_10M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                            '50sm': {
                                '3mm': $20C_10M_50SM + SHIPPING_MID,
                                '4mm':
                                    $20C_10M_50SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $20C_10M_50SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $20C_10M_50SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
                '40-c': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $40C_4M_100SM,
                                '4mm': $40C_4M_100SM + POLIC_4MM_4M,
                                '6mm': $40C_4M_100SM + POLIC_6MM_4M,
                                '0mm': $40C_4M_100SM - SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $40C_4M_67SM,
                                '4mm': $40C_4M_67SM + POLIC_4MM_4M,
                                '6mm': $40C_4M_67SM + POLIC_6MM_4M,
                                '0mm': $40C_4M_67SM - SHEET_1_3MM * 3,
                            },
                            '50sm': {
                                '3mm': $40C_4M_50SM,
                                '4mm': $40C_4M_50SM + POLIC_4MM_4M,
                                '6mm': $40C_4M_50SM + POLIC_6MM_4M,
                                '0mm': $40C_4M_50SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $40C_6M_100SM,
                                '4mm': $40C_6M_100SM + POLIC_4MM_6M,
                                '6mm': $40C_6M_100SM + POLIC_6MM_6M,
                                '0mm': $40C_6M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $40C_6M_67SM,
                                '4mm': $40C_6M_67SM + POLIC_4MM_6M,
                                '6mm': $40C_6M_67SM + POLIC_6MM_6M,
                                '0mm': $40C_6M_67SM - SHEET_1_3MM * 4,
                            },
                            '50sm': {
                                '3mm': $40C_6M_50SM,
                                '4mm': $40C_6M_50SM + POLIC_4MM_6M,
                                '6mm': $40C_6M_50SM + POLIC_6MM_6M,
                                '0mm': $40C_6M_50SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $40C_8M_100SM,
                                '4mm': $40C_8M_100SM + POLIC_4MM_8M,
                                '6mm': $40C_8M_100SM + POLIC_6MM_8M,
                                '0mm': $40C_8M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $40C_8M_67SM,
                                '4mm': $40C_8M_67SM + POLIC_4MM_8M,
                                '6mm': $40C_8M_67SM + POLIC_6MM_8M,
                                '0mm': $40C_8M_67SM - SHEET_1_3MM * 5,
                            },
                            '50sm': {
                                '3mm': $40C_8M_50SM,
                                '4mm': $40C_8M_50SM + POLIC_4MM_8M,
                                '6mm': $40C_8M_50SM + POLIC_6MM_8M,
                                '0mm': $40C_8M_50SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $40C_10M_100SM,
                                '4mm': $40C_10M_100SM + POLIC_4MM_10M,
                                '6mm': $40C_10M_100SM + POLIC_6MM_10M,
                                '0mm': $40C_10M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $40C_10M_67SM,
                                '4mm': $40C_10M_67SM + POLIC_4MM_10M,
                                '6mm': $40C_10M_67SM + POLIC_6MM_10M,
                                '0mm': $40C_10M_67SM - SHEET_1_3MM * 6,
                            },
                            '50sm': {
                                '3mm': $40C_10M_50SM,
                                '4mm': $40C_10M_50SM + POLIC_4MM_10M,
                                '6mm': $40C_10M_50SM + POLIC_6MM_10M,
                                '0mm': $40C_10M_50SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $40C_4M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40C_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $40C_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $40C_4M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $40C_4M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40C_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $40C_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $40C_4M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                            '50sm': {
                                '3mm': $40C_4M_50SM + SHIPPING_MID,
                                '4mm':
                                    $40C_4M_50SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $40C_4M_50SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $40C_4M_50SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $40C_6M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40C_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $40C_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $40C_6M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $40C_6M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40C_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $40C_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $40C_6M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                            '50sm': {
                                '3mm': $40C_6M_50SM + SHIPPING_MID,
                                '4mm':
                                    $40C_6M_50SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $40C_6M_50SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $40C_6M_50SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $40C_8M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40C_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $40C_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $40C_8M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $40C_8M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40C_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $40C_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $40C_8M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                            '50sm': {
                                '3mm': $40C_8M_50SM + SHIPPING_MID,
                                '4mm':
                                    $40C_8M_50SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $40C_8M_50SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $40C_8M_50SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $40C_10M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40C_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $40C_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $40C_10M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $40C_10M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40C_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $40C_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $40C_10M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                            '50sm': {
                                '3mm': $40C_10M_50SM + SHIPPING_MID,
                                '4mm':
                                    $40C_10M_50SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $40C_10M_50SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $40C_10M_50SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
                '40-ck': {
                    demountable: {
                        '4m': {
                            '67sm': {
                                '3mm': $40CK_4M_67SM,
                                '4mm': $40CK_4M_67SM + POLIC_4MM_4M,
                                '6mm': $40CK_4M_67SM + POLIC_6MM_4M,
                                '0mm': $40CK_4M_67SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '67sm': {
                                '3mm': $40CK_6M_67SM,
                                '4mm': $40CK_6M_67SM + POLIC_4MM_6M,
                                '6mm': $40CK_6M_67SM + POLIC_6MM_6M,
                                '0mm': $40CK_6M_67SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '67sm': {
                                '3mm': $40CK_8M_67SM,
                                '4mm': $40CK_8M_67SM + POLIC_4MM_8M,
                                '6mm': $40CK_8M_67SM + POLIC_6MM_8M,
                                '0mm': $40CK_8M_67SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '67sm': {
                                '3mm': $40CK_10M_67SM,
                                '4mm': $40CK_10M_67SM + POLIC_4MM_10M,
                                '6mm': $40CK_10M_67SM + POLIC_6MM_10M,
                                '0mm': $40CK_10M_67SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '67sm': {
                                '3mm': $40CK_4M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40CK_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $40CK_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $40CK_4M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '67sm': {
                                '3mm': $40CK_6M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40CK_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $40CK_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $40CK_6M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '67sm': {
                                '3mm': $40CK_8M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40CK_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $40CK_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $40CK_8M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '67sm': {
                                '3mm': $40CK_10M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40CK_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $40CK_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $40CK_10M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
                '20-fc': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $20FC_4M_100SM,
                                '4mm': $20FC_4M_100SM + POLIC_4MM_4M,
                                '6mm': $20FC_4M_100SM + POLIC_6MM_4M,
                                '0mm': $20FC_4M_100SM - SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $20FC_4M_67SM,
                                '4mm': $20FC_4M_67SM + POLIC_4MM_4M,
                                '6mm': $20FC_4M_67SM + POLIC_6MM_4M,
                                '0mm': $20FC_4M_67SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $20FC_6M_100SM,
                                '4mm': $20FC_6M_100SM + POLIC_4MM_6M,
                                '6mm': $20FC_6M_100SM + POLIC_6MM_6M,
                                '0mm': $20FC_6M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $20FC_6M_67SM,
                                '4mm': $20FC_6M_67SM + POLIC_4MM_6M,
                                '6mm': $20FC_6M_67SM + POLIC_6MM_6M,
                                '0mm': $20FC_6M_67SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $20FC_8M_100SM,
                                '4mm': $20FC_8M_100SM + POLIC_4MM_8M,
                                '6mm': $20FC_8M_100SM + POLIC_6MM_8M,
                                '0mm': $20FC_8M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $20FC_8M_67SM,
                                '4mm': $20FC_8M_67SM + POLIC_4MM_8M,
                                '6mm': $20FC_8M_67SM + POLIC_6MM_8M,
                                '0mm': $20FC_8M_67SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $20FC_10M_100SM,
                                '4mm': $20FC_10M_100SM + POLIC_4MM_10M,
                                '6mm': $20FC_10M_100SM + POLIC_6MM_10M,
                                '0mm': $20FC_10M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $20FC_10M_67SM,
                                '4mm': $20FC_10M_67SM + POLIC_4MM_10M,
                                '6mm': $20FC_10M_67SM + POLIC_6MM_10M,
                                '0mm': $20FC_10M_67SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $20FC_4M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20FC_4M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_4M,
                                '6mm':
                                    $20FC_4M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_4M,
                                '0mm':
                                    $20FC_4M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $20FC_4M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20FC_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $20FC_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $20FC_4M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $20FC_6M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20FC_6M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_6M,
                                '6mm':
                                    $20FC_6M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_6M,
                                '0mm':
                                    $20FC_6M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $20FC_6M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20FC_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $20FC_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $20FC_6M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $20FC_8M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20FC_8M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_8M,
                                '6mm':
                                    $20FC_8M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_8M,
                                '0mm':
                                    $20FC_8M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $20FC_8M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20FC_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $20FC_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $20FC_8M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $20FC_10M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20FC_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $20FC_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $20FC_10M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $20FC_10M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20FC_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $20FC_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $20FC_10M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
                '3500-40c': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $3500_40C_4M_100SM,
                                '4mm': $3500_40C_4M_100SM + POLIC_4MM_4M,
                                '0mm': $3500_40C_4M_100SM - SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $3500_40C_4M_67SM,
                                '4mm': $3500_40C_4M_67SM + POLIC_4MM_4M,
                                '0mm': $3500_40C_4M_67SM - SHEET_1_3MM * 3,
                            },
                            '50sm': {
                                '3mm': $3500_40C_4M_50SM,
                                '4mm': $3500_40C_4M_50SM + POLIC_4MM_4M,
                                '0mm': $3500_40C_4M_50SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $3500_40C_6M_100SM,
                                '4mm': $3500_40C_6M_100SM + POLIC_4MM_6M,
                                '0mm': $3500_40C_6M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $3500_40C_6M_67SM,
                                '4mm': $3500_40C_6M_67SM + POLIC_4MM_6M,
                                '0mm': $3500_40C_6M_67SM - SHEET_1_3MM * 4,
                            },
                            '50sm': {
                                '3mm': $3500_40C_6M_50SM,
                                '4mm': $3500_40C_6M_50SM + POLIC_4MM_6M,
                                '0mm': $3500_40C_6M_50SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $3500_40C_8M_100SM,
                                '4mm': $3500_40C_8M_100SM + POLIC_4MM_8M,
                                '0mm': $3500_40C_8M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $3500_40C_8M_67SM,
                                '4mm': $3500_40C_8M_67SM + POLIC_4MM_8M,
                                '0mm': $3500_40C_8M_67SM - SHEET_1_3MM * 5,
                            },
                            '50sm': {
                                '3mm': $3500_40C_8M_50SM,
                                '4mm': $3500_40C_8M_50SM + POLIC_4MM_8M,
                                '0mm': $3500_40C_8M_50SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $3500_40C_10M_100SM,
                                '4mm': $3500_40C_10M_100SM + POLIC_4MM_10M,
                                '0mm': $3500_40C_10M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $3500_40C_10M_67SM,
                                '4mm': $3500_40C_10M_67SM + POLIC_4MM_10M,
                                '0mm': $3500_40C_10M_67SM - SHEET_1_3MM * 6,
                            },
                            '50sm': {
                                '3mm': $3500_40C_10M_50SM,
                                '4mm': $3500_40C_10M_50SM + POLIC_4MM_10M,
                                '0mm': $3500_40C_10M_50SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $3500_40C_4M_100SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_4M_100SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_4M,
                                '0mm':
                                    $3500_40C_4M_100SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $3500_40C_4M_67SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_4M_67SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_4M,
                                '0mm':
                                    $3500_40C_4M_67SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 3,
                            },
                            '50sm': {
                                '3mm': $3500_40C_4M_50SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_4M_50SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_4M,
                                '0mm':
                                    $3500_40C_4M_50SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $3500_40C_6M_100SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_6M_100SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_6M,
                                '0mm':
                                    $3500_40C_6M_100SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $3500_40C_6M_67SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_6M_67SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_6M,
                                '0mm':
                                    $3500_40C_6M_67SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 4,
                            },
                            '50sm': {
                                '3mm': $3500_40C_6M_50SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_6M_50SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_6M,
                                '0mm':
                                    $3500_40C_6M_50SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $3500_40C_8M_100SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_8M_100SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_8M,
                                '0mm':
                                    $3500_40C_8M_100SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $3500_40C_8M_67SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_8M_67SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_8M,
                                '0mm':
                                    $3500_40C_8M_67SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 5,
                            },
                            '50sm': {
                                '3mm': $3500_40C_8M_50SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_8M_50SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_8M,
                                '0mm':
                                    $3500_40C_8M_50SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $3500_40C_10M_100SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_10M_100SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_10M,
                                '0mm':
                                    $3500_40C_10M_100SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $3500_40C_10M_67SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_10M_67SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_10M,
                                '0mm':
                                    $3500_40C_10M_67SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 6,
                            },
                            '50sm': {
                                '3mm': $3500_40C_10M_50SM + SHIPPING_MAX,
                                '4mm':
                                    $3500_40C_10M_50SM +
                                    SHIPPING_MAX +
                                    POLIC_4MM_10M,
                                '0mm':
                                    $3500_40C_10M_50SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
                '4000-40c': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $4000_40C_4M_100SM,
                                '4mm': $4000_40C_4M_100SM + POLIC_4MM_4M,
                                '0mm': $4000_40C_4M_100SM - SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $4000_40C_4M_67SM,
                                '4mm': $4000_40C_4M_67SM + POLIC_4MM_4M,
                                '0mm': $4000_40C_4M_67SM - SHEET_1_3MM * 3,
                            },
                            '50sm': {
                                '3mm': $4000_40C_4M_50SM,
                                '4mm': $4000_40C_4M_50SM + POLIC_4MM_4M,
                                '0mm': $4000_40C_4M_50SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $4000_40C_6M_100SM,
                                '4mm': $4000_40C_6M_100SM + POLIC_4MM_6M,
                                '0mm': $4000_40C_6M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $4000_40C_6M_67SM,
                                '4mm': $4000_40C_6M_67SM + POLIC_4MM_6M,
                                '0mm': $4000_40C_6M_67SM - SHEET_1_3MM * 4,
                            },
                            '50sm': {
                                '3mm': $4000_40C_6M_50SM,
                                '4mm': $4000_40C_6M_50SM + POLIC_4MM_6M,
                                '0mm': $4000_40C_6M_50SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $4000_40C_8M_100SM,
                                '4mm': $4000_40C_8M_100SM + POLIC_4MM_8M,
                                '0mm': $4000_40C_8M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $4000_40C_8M_67SM,
                                '4mm': $4000_40C_8M_67SM + POLIC_4MM_8M,
                                '0mm': $4000_40C_8M_67SM - SHEET_1_3MM * 5,
                            },
                            '50sm': {
                                '3mm': $4000_40C_8M_50SM,
                                '4mm': $4000_40C_8M_50SM + POLIC_4MM_8M,
                                '0mm': $4000_40C_8M_50SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $4000_40C_10M_100SM,
                                '4mm': $4000_40C_10M_100SM + POLIC_4MM_10M,
                                '0mm': $4000_40C_10M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $4000_40C_10M_67SM,
                                '4mm': $4000_40C_10M_67SM + POLIC_4MM_10M,
                                '0mm': $4000_40C_10M_67SM - SHEET_1_3MM * 6,
                            },
                            '50sm': {
                                '3mm': $4000_40C_10M_50SM,
                                '4mm': $4000_40C_10M_50SM + POLIC_4MM_10M,
                                '0mm': $4000_40C_10M_50SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $4000_40C_4M_100SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_4M_100SM +
                                    POLIC_4MM_4M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_4M_100SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $4000_40C_4M_67SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_4M_67SM +
                                    POLIC_4MM_4M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_4M_67SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 3,
                            },
                            '50sm': {
                                '3mm': $4000_40C_4M_50SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_4M_50SM +
                                    POLIC_4MM_4M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_4M_50SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $4000_40C_6M_100SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_6M_100SM +
                                    POLIC_4MM_6M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_6M_100SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $4000_40C_6M_67SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_6M_67SM +
                                    POLIC_4MM_6M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_6M_67SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 4,
                            },
                            '50sm': {
                                '3mm': $4000_40C_6M_50SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_6M_50SM +
                                    POLIC_4MM_6M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_6M_50SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $4000_40C_8M_100SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_8M_100SM +
                                    POLIC_4MM_8M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_8M_100SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $4000_40C_8M_67SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_8M_67SM +
                                    POLIC_4MM_8M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_8M_67SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 5,
                            },
                            '50sm': {
                                '3mm': $4000_40C_8M_50SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_8M_50SM +
                                    POLIC_4MM_8M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_8M_50SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $4000_40C_10M_100SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_10M_100SM +
                                    POLIC_4MM_10M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_10M_100SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $4000_40C_10M_67SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_10M_67SM +
                                    POLIC_4MM_10M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_10M_67SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 6,
                            },
                            '50sm': {
                                '3mm': $4000_40C_10M_50SM + SHIPPING_MAX,
                                '4mm':
                                    $4000_40C_10M_50SM +
                                    POLIC_4MM_10M +
                                    SHIPPING_MAX,
                                '0mm':
                                    $4000_40C_10M_50SM +
                                    SHIPPING_MAX -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
                '20d': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $20D_4M_100SM,
                                '4mm': $20D_4M_100SM + POLIC_DK_4MM_4M,
                                '6mm': $20D_4M_100SM + POLIC_DK_6MM_4M,
                                '0mm': $20D_4M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $20D_4M_67SM,
                                '4mm': $20D_4M_67SM + POLIC_DK_4MM_4M,
                                '6mm': $20D_4M_67SM + POLIC_DK_6MM_4M,
                                '0mm': $20D_4M_67SM - SHEET_1_3MM * 4,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $20D_6M_100SM,
                                '4mm': $20D_6M_100SM + POLIC_DK_4MM_6M,
                                '6mm': $20D_6M_100SM + POLIC_DK_6MM_6M,
                                '0mm': $20D_6M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $20D_6M_67SM,
                                '4mm': $20D_6M_67SM + POLIC_DK_4MM_6M,
                                '6mm': $20D_6M_67SM + POLIC_DK_6MM_6M,
                                '0mm': $20D_6M_67SM - SHEET_1_3MM * 5,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $20D_8M_100SM,
                                '4mm': $20D_8M_100SM + POLIC_DK_4MM_8M,
                                '6mm': $20D_8M_100SM + POLIC_DK_6MM_8M,
                                '0mm': $20D_8M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $20D_8M_67SM,
                                '4mm': $20D_8M_67SM + POLIC_DK_4MM_8M,
                                '6mm': $20D_8M_67SM + POLIC_DK_6MM_8M,
                                '0mm': $20D_8M_67SM - SHEET_1_3MM * 6,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $20D_10M_100SM,
                                '4mm': $20D_10M_100SM + POLIC_DK_4MM_10M,
                                '6mm': $20D_10M_100SM + POLIC_DK_6MM_10M,
                                '0mm': $20D_10M_100SM - SHEET_1_3MM * 7,
                            },
                            '67sm': {
                                '3mm': $20D_10M_67SM,
                                '4mm': $20D_10M_67SM + POLIC_DK_4MM_10M,
                                '6mm': $20D_10M_67SM + POLIC_DK_6MM_10M,
                                '0mm': $20D_10M_67SM - SHEET_1_3MM * 7,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $20D_4M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20D_4M_100SM +
                                    POLIC_DK_4MM_4M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20D_4M_100SM +
                                    POLIC_DK_6MM_4M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20D_4M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $20D_4M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20D_4M_67SM +
                                    POLIC_DK_4MM_4M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20D_4M_67SM +
                                    POLIC_DK_6MM_4M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20D_4M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $20D_6M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20D_6M_100SM +
                                    POLIC_DK_4MM_6M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20D_6M_100SM +
                                    POLIC_DK_6MM_6M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20D_6M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $20D_6M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20D_6M_67SM +
                                    POLIC_DK_4MM_6M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20D_6M_67SM +
                                    POLIC_DK_6MM_6M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20D_6M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $20D_8M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20D_8M_100SM +
                                    POLIC_DK_4MM_8M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20D_8M_100SM +
                                    POLIC_DK_6MM_8M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20D_8M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $20D_8M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20D_8M_67SM +
                                    POLIC_DK_4MM_8M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20D_8M_67SM +
                                    POLIC_DK_6MM_8M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20D_8M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $20D_10M_100SM + SHIPPING_MID,
                                '4mm':
                                    $20D_10M_100SM +
                                    POLIC_DK_4MM_10M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20D_10M_100SM +
                                    POLIC_DK_6MM_10M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20D_10M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 7,
                            },
                            '67sm': {
                                '3mm': $20D_10M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20D_10M_67SM +
                                    POLIC_DK_4MM_10M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20D_10M_67SM +
                                    POLIC_DK_6MM_10M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20D_10M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 7,
                            },
                        },
                    },
                },
                '20df': {
                    demountable: {
                        '4m': {
                            '67sm': {
                                '3mm': $20DF_4M_67SM,
                                '4mm': $20DF_4M_67SM + POLIC_DK_4MM_4M,
                                '6mm': $20DF_4M_67SM + POLIC_DK_6MM_4M,
                                '0mm': $20DF_4M_67SM - SHEET_1_3MM * 4,
                            },
                        },
                        '6m': {
                            '67sm': {
                                '3mm': $20DF_6M_67SM,
                                '4mm': $20DF_6M_67SM + POLIC_DK_4MM_6M,
                                '6mm': $20DF_6M_67SM + POLIC_DK_6MM_6M,
                                '0mm': $20DF_6M_67SM - SHEET_1_3MM * 5,
                            },
                        },
                        '8m': {
                            '67sm': {
                                '3mm': $20DF_8M_67SM,
                                '4mm': $20DF_8M_67SM + POLIC_DK_4MM_8M,
                                '6mm': $20DF_8M_67SM + POLIC_DK_6MM_8M,
                                '0mm': $20DF_8M_67SM - SHEET_1_3MM * 6,
                            },
                        },
                        '10m': {
                            '67sm': {
                                '3mm': $20DF_10M_67SM,
                                '4mm': $20DF_10M_67SM + POLIC_DK_4MM_10M,
                                '6mm': $20DF_10M_67SM + POLIC_DK_6MM_10M,
                                '0mm': $20DF_10M_67SM - SHEET_1_3MM * 7,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '67sm': {
                                '3mm': $20DF_4M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20DF_4M_67SM +
                                    POLIC_DK_4MM_4M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20DF_4M_67SM +
                                    POLIC_DK_6MM_4M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20DF_4M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '6m': {
                            '67sm': {
                                '3mm': $20DF_6M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20DF_6M_67SM +
                                    POLIC_DK_4MM_6M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20DF_6M_67SM +
                                    POLIC_DK_6MM_6M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20DF_6M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '8m': {
                            '67sm': {
                                '3mm': $20DF_8M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20DF_8M_67SM +
                                    POLIC_DK_4MM_8M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20DF_8M_67SM +
                                    POLIC_DK_6MM_8M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20DF_8M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                        },
                        '10m': {
                            '67sm': {
                                '3mm': $20DF_10M_67SM + SHIPPING_MID,
                                '4mm':
                                    $20DF_10M_67SM +
                                    POLIC_DK_4MM_10M +
                                    SHIPPING_MID,
                                '6mm':
                                    $20DF_10M_67SM +
                                    POLIC_DK_6MM_10M +
                                    SHIPPING_MID,
                                '0mm':
                                    $20DF_10M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 7,
                            },
                        },
                    },
                },
                '40dk': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $40DK_4M_100SM,
                                '4mm': $40DK_4M_100SM + POLIC_DK_4MM_4M,
                                '6mm': $40DK_4M_100SM + POLIC_DK_6MM_4M,
                                '0mm': $40DK_4M_100SM - SHEET_1_3MM * 4,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $40DK_6M_100SM,
                                '4mm': $40DK_6M_100SM + POLIC_DK_4MM_6M,
                                '6mm': $40DK_6M_100SM + POLIC_DK_6MM_6M,
                                '0mm': $40DK_6M_100SM - SHEET_1_3MM * 5,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $40DK_8M_100SM,
                                '4mm': $40DK_8M_100SM + POLIC_DK_4MM_8M,
                                '6mm': $40DK_8M_100SM + POLIC_DK_6MM_8M,
                                '0mm': $40DK_8M_100SM - SHEET_1_3MM * 6,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $40DK_10M_100SM,
                                '4mm': $40DK_10M_100SM + POLIC_DK_4MM_10M,
                                '6mm': $40DK_10M_100SM + POLIC_DK_6MM_10M,
                                '0mm': $40DK_10M_100SM - SHEET_1_3MM * 7,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $40DK_4M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40DK_4M_100SM +
                                    POLIC_DK_4MM_4M +
                                    SHIPPING_MID,
                                '6mm':
                                    $40DK_4M_100SM +
                                    POLIC_DK_6MM_4M +
                                    SHIPPING_MID,
                                '0mm':
                                    $40DK_4M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $40DK_6M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40DK_6M_100SM +
                                    POLIC_DK_4MM_6M +
                                    SHIPPING_MID,
                                '6mm':
                                    $40DK_6M_100SM +
                                    POLIC_DK_6MM_6M +
                                    SHIPPING_MID,
                                '0mm':
                                    $40DK_6M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $40DK_8M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40DK_8M_100SM +
                                    POLIC_DK_4MM_8M +
                                    SHIPPING_MID,
                                '6mm':
                                    $40DK_8M_100SM +
                                    POLIC_DK_6MM_8M +
                                    SHIPPING_MID,
                                '0mm':
                                    $40DK_8M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $40DK_10M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40DK_10M_100SM +
                                    POLIC_DK_4MM_10M +
                                    SHIPPING_MID,
                                '6mm':
                                    $40DK_10M_100SM +
                                    POLIC_DK_6MM_10M +
                                    SHIPPING_MID,
                                '0mm':
                                    $40DK_10M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 7,
                            },
                        },
                    },
                },
                '40-a': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $40A_4M_100SM,
                                '4mm': $40A_4M_100SM + POLIC_4MM_4M,
                                '6mm': $40A_4M_100SM + POLIC_6MM_4M,
                                '0mm': $40A_4M_100SM - SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $40A_4M_67SM,
                                '4mm': $40A_4M_67SM + POLIC_4MM_4M,
                                '6mm': $40A_4M_67SM + POLIC_6MM_4M,
                                '0mm': $40A_4M_67SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $40A_6M_100SM,
                                '4mm': $40A_6M_100SM + POLIC_4MM_6M,
                                '6mm': $40A_6M_100SM + POLIC_6MM_6M,
                                '0mm': $40A_6M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $40A_6M_67SM,
                                '4mm': $40A_6M_67SM + POLIC_4MM_6M,
                                '6mm': $40A_6M_67SM + POLIC_6MM_6M,
                                '0mm': $40A_6M_67SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $40A_8M_100SM,
                                '4mm': $40A_8M_100SM + POLIC_4MM_8M,
                                '6mm': $40A_8M_100SM + POLIC_6MM_8M,
                                '0mm': $40A_8M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $40A_8M_67SM,
                                '4mm': $40A_8M_67SM + POLIC_4MM_8M,
                                '6mm': $40A_8M_67SM + POLIC_6MM_8M,
                                '0mm': $40A_8M_67SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $40A_10M_100SM,
                                '4mm': $40A_10M_100SM + POLIC_4MM_10M,
                                '6mm': $40A_10M_100SM + POLIC_6MM_10M,
                                '0mm': $40A_10M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $40A_10M_67SM,
                                '4mm': $40A_10M_67SM + POLIC_4MM_10M,
                                '6mm': $40A_10M_67SM + POLIC_6MM_10M,
                                '0mm': $40A_10M_67SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $40A_4M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40A_4M_100SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $40A_4M_100SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $40A_4M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $40A_4M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40A_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $40A_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $40A_4M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $40A_6M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40A_6M_100SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $40A_6M_100SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $40A_6M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $40A_6M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40A_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $40A_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $40A_6M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $40A_8M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40A_8M_100SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $40A_8M_100SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $40A_8M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $40A_8M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40A_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $40A_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $40A_8M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $40A_10M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40A_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $40A_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $40A_10M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $40A_10M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40A_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $40A_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $40A_10M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
                '40-ak': {
                    demountable: {
                        '4m': {
                            '100sm': {
                                '3mm': $40AK_4M_100SM,
                                '4mm': $40AK_4M_100SM + POLIC_4MM_4M,
                                '6mm': $40AK_4M_100SM + POLIC_6MM_4M,
                                '0mm': $40AK_4M_100SM - SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $40AK_4M_67SM,
                                '4mm': $40AK_4M_67SM + POLIC_4MM_4M,
                                '6mm': $40AK_4M_67SM + POLIC_6MM_4M,
                                '0mm': $40AK_4M_67SM - SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $40AK_6M_100SM,
                                '4mm': $40AK_6M_100SM + POLIC_4MM_6M,
                                '6mm': $40AK_6M_100SM + POLIC_6MM_6M,
                                '0mm': $40AK_6M_100SM - SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $40AK_6M_67SM,
                                '4mm': $40AK_6M_67SM + POLIC_4MM_6M,
                                '6mm': $40AK_6M_67SM + POLIC_6MM_6M,
                                '0mm': $40AK_6M_67SM - SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $40AK_8M_100SM,
                                '4mm': $40AK_8M_100SM + POLIC_4MM_8M,
                                '6mm': $40AK_8M_100SM + POLIC_6MM_8M,
                                '0mm': $40AK_8M_100SM - SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $40AK_8M_67SM,
                                '4mm': $40AK_8M_67SM + POLIC_4MM_8M,
                                '6mm': $40AK_8M_67SM + POLIC_6MM_8M,
                                '0mm': $40AK_8M_67SM - SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $40AK_10M_100SM,
                                '4mm': $40AK_10M_100SM + POLIC_4MM_10M,
                                '6mm': $40AK_10M_100SM + POLIC_6MM_10M,
                                '0mm': $40AK_10M_100SM - SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $40A_10M_67SM,
                                '4mm': $40A_10M_67SM + POLIC_4MM_10M,
                                '6mm': $40A_10M_67SM + POLIC_6MM_10M,
                                '0mm': $40A_10M_67SM - SHEET_1_3MM * 6,
                            },
                        },
                    },
                    'one-piece': {
                        '4m': {
                            '100sm': {
                                '3mm': $40AK_4M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40AK_4M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_4M,
                                '6mm':
                                    $40AK_4M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_4M,
                                '0mm':
                                    $40AK_4M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                            '67sm': {
                                '3mm': $40AK_4M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40AK_4M_67SM + SHIPPING_MID + POLIC_4MM_4M,
                                '6mm':
                                    $40AK_4M_67SM + SHIPPING_MID + POLIC_6MM_4M,
                                '0mm':
                                    $40AK_4M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 3,
                            },
                        },
                        '6m': {
                            '100sm': {
                                '3mm': $40AK_6M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40AK_6M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_6M,
                                '6mm':
                                    $40AK_6M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_6M,
                                '0mm':
                                    $40AK_6M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                            '67sm': {
                                '3mm': $40AK_6M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40AK_6M_67SM + SHIPPING_MID + POLIC_4MM_6M,
                                '6mm':
                                    $40AK_6M_67SM + SHIPPING_MID + POLIC_6MM_6M,
                                '0mm':
                                    $40AK_6M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 4,
                            },
                        },
                        '8m': {
                            '100sm': {
                                '3mm': $40AK_8M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40AK_8M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_8M,
                                '6mm':
                                    $40AK_8M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_8M,
                                '0mm':
                                    $40AK_8M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                            '67sm': {
                                '3mm': $40AK_8M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40AK_8M_67SM + SHIPPING_MID + POLIC_4MM_8M,
                                '6mm':
                                    $40AK_8M_67SM + SHIPPING_MID + POLIC_6MM_8M,
                                '0mm':
                                    $40AK_8M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 5,
                            },
                        },
                        '10m': {
                            '100sm': {
                                '3mm': $40AK_10M_100SM + SHIPPING_MID,
                                '4mm':
                                    $40AK_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $40AK_10M_100SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $40AK_10M_100SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                            '67sm': {
                                '3mm': $40AK_10M_67SM + SHIPPING_MID,
                                '4mm':
                                    $40AK_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_4MM_10M,
                                '6mm':
                                    $40AK_10M_67SM +
                                    SHIPPING_MID +
                                    POLIC_6MM_10M,
                                '0mm':
                                    $40AK_10M_67SM +
                                    SHIPPING_MID -
                                    SHEET_1_3MM * 6,
                            },
                        },
                    },
                },
            }),
                document.dispatchEvent(new Event('catalogDataLoaded'))
        } else {
            setTimeout(function () {
                loadCatalogData()
            }, 3000)
        }
    }
}

loadCatalogData()
