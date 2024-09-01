import jsonData from './currencies.json';

export type Currency = keyof (typeof data)[number]['conversion_rates'];

export const data = [
  {
    base_code: 'GBP',
    conversion_rates: {
      GBP: 1,
      AED: 4.6955,
      AFN: 91.1224,
      ALL: 118.8157,
      AMD: 494.8104,
      ANG: 2.2886,
      AOA: 1150.3451,
      ARS: 1195.5616,
      AUD: 1.9612,
      AWG: 2.2886,
      AZN: 2.1719,
      BAM: 2.2974,
      BBD: 2.5571,
      BDT: 150.6116,
      BGN: 2.2976,
      BHD: 0.4807,
      BIF: 3705.0566,
      BMD: 1.2786,
      BND: 1.6995,
      BOB: 8.8932,
      BRL: 7.3421,
      BSD: 1.2786,
      BTN: 106.9388,
      BWP: 17.4113,
      BYN: 4.0786,
      BZD: 2.5571,
      CAD: 1.7728,
      CDF: 3636.4444,
      CHF: 1.1029,
      CLP: 1212.5127,
      CNY: 9.1847,
      COP: 5220.1512,
      CRC: 670.4415,
      CUP: 30.6856,
      CVE: 129.524,
      CZK: 29.7595,
      DJF: 227.2281,
      DKK: 8.7621,
      DOP: 75.9223,
      DZD: 172.836,
      EGP: 62.3013,
      ERN: 19.1785,
      ETB: 114.0629,
      EUR: 1.1747,
      FJD: 2.894,
      FKP: 1,
      FOK: 8.7621,
      GEL: 3.4546,
      GGP: 1,
      GHS: 20.1928,
      GIP: 1,
      GMD: 89.414,
      GNF: 11088.2155,
      GTQ: 9.9484,
      GYD: 268.9973,
      HKD: 9.9814,
      HNL: 31.7805,
      HRK: 8.8505,
      HTG: 169.3558,
      HUF: 467.3361,
      IDR: 20667.9351,
      ILS: 4.864,
      IMP: 1,
      INR: 107.0297,
      IQD: 1685.5622,
      IRR: 54007.4018,
      ISK: 176.9198,
      JEP: 1,
      JMD: 199.7504,
      JOD: 0.9065,
      JPY: 188.5484,
      KES: 166.4766,
      KGS: 107.3614,
      KHR: 5307.2432,
      KID: 1.9612,
      KMF: 577.8955,
      KRW: 1743.2537,
      KWD: 0.3897,
      KYD: 1.0655,
      KZT: 608.1558,
      LAK: 31112.3925,
      LBP: 114431.6702,
      LKR: 386.3443,
      LRD: 255.9256,
      LSL: 23.3444,
      LYD: 6.2158,
      MAD: 12.633,
      MDL: 22.6423,
      MGA: 5813.7797,
      MKD: 72.9236,
      MMK: 3444.9682,
      MNT: 4357.9539,
      MOP: 10.2823,
      MRU: 50.9187,
      MUR: 59.6617,
      MVR: 19.8279,
      MWK: 2241.8384,
      MXN: 24.4296,
      MYR: 5.7727,
      MZN: 82.0527,
      NAD: 23.3444,
      NGN: 2128.1169,
      NIO: 47.2534,
      NOK: 14.0128,
      NPR: 171.102,
      NZD: 2.1439,
      OMR: 0.4916,
      PAB: 1.2786,
      PEN: 4.791,
      PGK: 4.9684,
      PHP: 74.0754,
      PKR: 357.2889,
      PLN: 5.0522,
      PYG: 9781.3911,
      QAR: 4.654,
      RON: 5.8522,
      RSD: 138.1352,
      RUB: 109.5052,
      RWF: 1753.8063,
      SAR: 4.7946,
      SBD: 10.8028,
      SCR: 18.6701,
      SDG: 575.0161,
      SEK: 13.576,
      SGD: 1.6972,
      SHP: 1,
      SLE: 28.7915,
      SLL: 28791.261,
      SOS: 734.086,
      SRD: 37.407,
      SSP: 2694.5915,
      STN: 28.7792,
      SYP: 16434.4414,
      SZL: 23.3444,
      THB: 45.1276,
      TJS: 13.5253,
      TMT: 4.4723,
      TND: 3.9772,
      TOP: 2.9825,
      TRY: 42.5047,
      TTD: 8.884,
      TVD: 1.9612,
      TWD: 41.8925,
      TZS: 3457.1314,
      UAH: 52.5147,
      UGX: 4776.5437,
      USD: 1.2786,
      UYU: 51.7172,
      UZS: 16043.9001,
      VES: 46.8668,
      VND: 32261.7833,
      VUV: 153.3908,
      WST: 3.4979,
      XAF: 770.5273,
      XCD: 3.4521,
      XDR: 0.9592,
      XOF: 770.5273,
      XPF: 140.1747,
      YER: 321.1955,
      ZAR: 23.3367,
      ZMW: 33.2889,
      ZWL: 17.9738,
    },
  },
  {
    base_code: 'USD',
    conversion_rates: {
      USD: 1,
      AED: 3.6725,
      AFN: 70.9546,
      ALL: 90.7503,
      AMD: 388.491,
      ANG: 1.79,
      AOA: 892.5851,
      ARS: 944,
      AUD: 1.5035,
      AWG: 1.79,
      AZN: 1.7005,
      BAM: 1.7774,
      BBD: 2,
      BDT: 117.5117,
      BGN: 1.7776,
      BHD: 0.376,
      BIF: 2882.8758,
      BMD: 1,
      BND: 1.3178,
      BOB: 6.928,
      BRL: 5.4747,
      BSD: 1,
      BTN: 83.9339,
      BWP: 13.4247,
      BYN: 3.2561,
      BZD: 2,
      CAD: 1.3697,
      CDF: 2843.2403,
      CHF: 0.8674,
      CLP: 933.0907,
      CNY: 7.1682,
      COP: 4025.7549,
      CRC: 524.8877,
      CUP: 24,
      CVE: 100.2075,
      CZK: 22.9222,
      DJF: 177.721,
      DKK: 6.7827,
      DOP: 59.7288,
      DZD: 134.4568,
      EGP: 48.9024,
      ERN: 15,
      ETB: 110.1884,
      EUR: 0.9088,
      FJD: 2.2399,
      FKP: 0.7741,
      FOK: 6.7827,
      GBP: 0.7741,
      GEL: 2.6921,
      GGP: 0.7741,
      GHS: 15.6525,
      GIP: 0.7741,
      GMD: 70.4356,
      GNF: 8646.8249,
      GTQ: 7.7458,
      GYD: 209.2099,
      HKD: 7.7955,
      HNL: 24.7822,
      HRK: 6.8473,
      HTG: 131.7248,
      HUF: 359.2457,
      IDR: 15704.8087,
      ILS: 3.6749,
      IMP: 0.7741,
      INR: 83.934,
      IQD: 1310.8002,
      IRR: 42080.5693,
      ISK: 139.1247,
      JEP: 0.7741,
      JMD: 157.1649,
      JOD: 0.709,
      JPY: 147.9212,
      KES: 128.8723,
      KGS: 85.693,
      KHR: 4080.3357,
      KID: 1.5035,
      KMF: 447.0942,
      KRW: 1352.6493,
      KWD: 0.306,
      KYD: 0.8333,
      KZT: 479.0592,
      LAK: 22012.6901,
      LBP: 89500,
      LKR: 298.8597,
      LRD: 195.0578,
      LSL: 17.8908,
      LYD: 4.8001,
      MAD: 9.7691,
      MDL: 17.5602,
      MGA: 4577.4061,
      MKD: 55.8821,
      MMK: 2103.1049,
      MNT: 3382.532,
      MOP: 8.0294,
      MRU: 39.7777,
      MUR: 46.3785,
      MVR: 15.4444,
      MWK: 1745.3796,
      MXN: 18.6503,
      MYR: 4.4344,
      MZN: 63.9381,
      NAD: 17.8908,
      NGN: 1586.5452,
      NIO: 36.813,
      NOK: 10.7076,
      NPR: 134.2943,
      NZD: 1.6561,
      OMR: 0.3845,
      PAB: 1,
      PEN: 3.7417,
      PGK: 3.9029,
      PHP: 57.1186,
      PKR: 278.8489,
      PLN: 3.884,
      PYG: 7604.6628,
      QAR: 3.64,
      RON: 4.5264,
      RSD: 106.3961,
      RUB: 89.1164,
      RWF: 1335.9539,
      SAR: 3.75,
      SBD: 8.4658,
      SCR: 13.4525,
      SDG: 510.9482,
      SEK: 10.4769,
      SGD: 1.3178,
      SHP: 0.7741,
      SLE: 22.4514,
      SLL: 22451.4237,
      SOS: 571.2846,
      SRD: 29.1503,
      SSP: 2771.9791,
      STN: 22.2653,
      SYP: 12877.8608,
      SZL: 17.8908,
      THB: 34.877,
      TJS: 10.603,
      TMT: 3.5004,
      TND: 3.0669,
      TOP: 2.3409,
      TRY: 33.7029,
      TTD: 6.7418,
      TVD: 1.5035,
      TWD: 32.1524,
      TZS: 2702.1121,
      UAH: 41.2135,
      UGX: 3723.1387,
      UYU: 40.3659,
      UZS: 12661.9776,
      VES: 36.6848,
      VND: 25047.8519,
      VUV: 118.6026,
      WST: 2.7417,
      XAF: 596.1256,
      XCD: 2.7,
      XDR: 0.7483,
      XOF: 596.1256,
      XPF: 108.4474,
      YER: 250.2768,
      ZAR: 17.8792,
      ZMW: 26.3207,
      ZWL: 13.7902,
    },
  },
  {
    base_code: 'EUR',
    conversion_rates: {
      EUR: 1,
      AED: 4.0411,
      AFN: 78.1273,
      ALL: 99.9067,
      AMD: 426.9254,
      ANG: 1.9696,
      AOA: 998.762,
      ARS: 1038.7389,
      AUD: 1.6551,
      AWG: 1.9696,
      AZN: 1.87,
      BAM: 1.9558,
      BBD: 2.2007,
      BDT: 129.4712,
      BGN: 1.9558,
      BHD: 0.4137,
      BIF: 3173.3113,
      BMD: 1.1004,
      BND: 1.4502,
      BOB: 7.6286,
      BRL: 6.0198,
      BSD: 1.1004,
      BTN: 92.3289,
      BWP: 14.7871,
      BYN: 3.5305,
      BZD: 2.2007,
      CAD: 1.508,
      CDF: 3143.6542,
      CHF: 0.955,
      CLP: 1025.2409,
      CNY: 7.8888,
      COP: 4424.8801,
      CRC: 577.2094,
      CUP: 26.4086,
      CVE: 110.265,
      CZK: 25.2091,
      DJF: 195.5569,
      DKK: 7.4676,
      DOP: 65.8017,
      DZD: 148.1325,
      EGP: 53.8399,
      ERN: 16.5054,
      ETB: 120.5328,
      FJD: 2.4656,
      FKP: 0.8524,
      FOK: 7.4676,
      GBP: 0.8524,
      GEL: 2.9584,
      GGP: 0.8524,
      GHS: 17.2269,
      GIP: 0.8524,
      GMD: 77.5199,
      GNF: 9519.1161,
      GTQ: 8.528,
      GYD: 230.3911,
      HKD: 8.5796,
      HNL: 27.2908,
      HRK: 7.5345,
      HTG: 145.1752,
      HUF: 394.7009,
      IDR: 17293.9054,
      ILS: 4.0489,
      IMP: 0.8524,
      INR: 92.329,
      IQD: 1443.6524,
      IRR: 46514.9582,
      ISK: 152.9367,
      JEP: 0.8524,
      JMD: 171.686,
      JOD: 0.7802,
      JPY: 162.9293,
      KES: 141.8777,
      KGS: 94.215,
      KHR: 4484.9467,
      KID: 1.6551,
      KMF: 491.9678,
      KRW: 1490.6588,
      KWD: 0.3362,
      KYD: 0.917,
      KZT: 526.7472,
      LAK: 24147.7566,
      LBP: 98482.1282,
      LKR: 329.7106,
      LRD: 214.7457,
      LSL: 19.6884,
      LYD: 5.2791,
      MAD: 10.7461,
      MDL: 19.29,
      MGA: 5004.4125,
      MKD: 61.495,
      MMK: 3561.0709,
      MNT: 3728.066,
      MOP: 8.8395,
      MRU: 43.7983,
      MUR: 51.0783,
      MVR: 16.9931,
      MWK: 1923.0095,
      MXN: 20.5474,
      MYR: 4.8782,
      MZN: 70.3631,
      NAD: 19.6884,
      NGN: 1747.1863,
      NIO: 40.5342,
      NOK: 11.7843,
      NPR: 147.7263,
      NZD: 1.8227,
      OMR: 0.4231,
      PAB: 1.1004,
      PEN: 4.117,
      PGK: 4.2755,
      PHP: 62.8206,
      PKR: 307.3086,
      PLN: 4.2645,
      PYG: 8389.0131,
      QAR: 4.0053,
      RON: 4.9758,
      RSD: 117.0254,
      RUB: 98.0399,
      RWF: 1505.6978,
      SAR: 4.1263,
      SBD: 9.2746,
      SCR: 15.1991,
      SDG: 492.4905,
      SEK: 11.5264,
      SGD: 1.4502,
      SHP: 0.8524,
      SLE: 24.7048,
      SLL: 24704.6251,
      SOS: 628.7308,
      SRD: 32.238,
      SSP: 3194.4775,
      STN: 24.5,
      SYP: 14106.2171,
      SZL: 19.6884,
      THB: 38.3745,
      TJS: 11.6507,
      TMT: 3.8461,
      TND: 3.3747,
      TOP: 2.5651,
      TRY: 37.1248,
      TTD: 7.6386,
      TVD: 1.6551,
      TWD: 35.5077,
      TZS: 2979.3808,
      UAH: 45.2789,
      UGX: 4094.9395,
      USD: 1.1004,
      UYU: 44.4768,
      UZS: 13857.9409,
      VES: 40.3313,
      VND: 27610.4547,
      VUV: 129.8175,
      WST: 2.9974,
      XAF: 655.957,
      XCD: 2.971,
      XDR: 0.8221,
      XOF: 655.957,
      XPF: 119.332,
      YER: 275.562,
      ZAR: 19.6821,
      ZMW: 29.0027,
      ZWL: 15.1471,
    },
  },
];

export const CURRENCY_CODES = [
  'GBP',
  'AED',
  'AFN',
  'ALL',
  'AMD',
  'ANG',
  'AOA',
  'ARS',
  'AUD',
  'AWG',
  'AZN',
  'BAM',
  'BBD',
  'BDT',
  'BGN',
  'BHD',
  'BIF',
  'BMD',
  'BND',
  'BOB',
  'BRL',
  'BSD',
  'BTN',
  'BWP',
  'BYN',
  'BZD',
  'CAD',
  'CDF',
  'CHF',
  'CLP',
  'CNY',
  'COP',
  'CRC',
  'CUP',
  'CVE',
  'CZK',
  'DJF',
  'DKK',
  'DOP',
  'DZD',
  'EGP',
  'ERN',
  'ETB',
  'EUR',
  'FJD',
  'FKP',
  'FOK',
  'GEL',
  'GGP',
  'GHS',
  'GIP',
  'GMD',
  'GNF',
  'GTQ',
  'GYD',
  'HKD',
  'HNL',
  'HRK',
  'HTG',
  'HUF',
  'IDR',
  'ILS',
  'IMP',
  'INR',
  'IQD',
  'IRR',
  'ISK',
  'JEP',
  'JMD',
  'JOD',
  'JPY',
  'KES',
  'KGS',
  'KHR',
  'KID',
  'KMF',
  'KRW',
  'KWD',
  'KYD',
  'KZT',
  'LAK',
  'LBP',
  'LKR',
  'LRD',
  'LSL',
  'LYD',
  'MAD',
  'MDL',
  'MGA',
  'MKD',
  'MMK',
  'MNT',
  'MOP',
  'MRU',
  'MUR',
  'MVR',
  'MWK',
  'MXN',
  'MYR',
  'MZN',
  'NAD',
  'NGN',
  'NIO',
  'NOK',
  'NPR',
  'NZD',
  'OMR',
  'PAB',
  'PEN',
  'PGK',
  'PHP',
  'PKR',
  'PLN',
  'PYG',
  'QAR',
  'RON',
  'RSD',
  'RUB',
  'RWF',
  'SAR',
  'SBD',
  'SCR',
  'SDG',
  'SEK',
  'SGD',
  'SHP',
  'SLE',
  'SLL',
  'SOS',
  'SRD',
  'SSP',
  'STN',
  'SYP',
  'SZL',
  'THB',
  'TJS',
  'TMT',
  'TND',
  'TOP',
  'TRY',
  'TTD',
  'TVD',
  'TWD',
  'TZS',
  'UAH',
  'UGX',
  'USD',
  'UYU',
  'UZS',
  'VES',
  'VND',
  'VUV',
  'WST',
  'XAF',
  'XCD',
  'XDR',
  'XOF',
  'XPF',
  'YER',
  'ZAR',
  'ZMW',
  'ZWL',
] as const;
type CurrencyCode = (typeof CURRENCY_CODES)[number];

export const currencies = jsonData.filter((entry) =>
  CURRENCY_CODES.includes(entry.cc as CurrencyCode)
);

export const HOME_CURRENCIES = ['GBP', 'EUR', 'USD'] as const;
export type HomeCurrency = (typeof HOME_CURRENCIES)[number];

export const homeCurrencies = currencies.filter((entry) =>
  HOME_CURRENCIES.includes(entry.cc as HomeCurrency)
);
