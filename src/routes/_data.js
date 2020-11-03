
const data = {
  citys: [
    {
      id: 303,
      slug: "landkreis-schweinfurt",
      district: "Landkreis",
      name: "Schweinfurt",
      incidence: "1.04",
      population: 115445,
      cases: 1287,
      deaths: 28,
      death_rate: 2.17560217560218,
      cases_in_7_days: "209",
      cases7_bl_per_100k: 135.316997209163,
      BL: "Bayern",
      newCases: 40,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          {
            name: "Männlich",
            chartType: "bar",
            values: [11, 55, 224, 204, 93, 29],
          },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [7, 43, 202, 247, 98, 66],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [688, 749, 846, 1056, 1260],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [662, 723, 815, 887, 894],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [26, 26, 31, 169, 366],
          },
        ],
      },
    },
    {
      id: 396,
      slug: "landkreis-sonneberg",
      district: "Landkreis",
      name: "Sonneberg",
      incidence: "39.30",
      population: 57717,
      cases: 388,
      deaths: 26,
      death_rate: 6.70103092783505,
      cases_in_7_days: "40",
      cases7_bl_per_100k: 64.8736417081267,
      BL: "Thüringen",
      newCases: 14,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          {
            name: "Männlich",
            chartType: "bar",
            values: [3, 4, 32, 60, 48, 24],
          },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [5, 5, 36, 81, 54, 36],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [324, 325, 332, 341, 388],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [299, 300, 307, 309, 314],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [25, 25, 25, 32, 74],
          },
        ],
      },
    },
    {
      id: 268,
      slug: "kreisfreie-stadt-bamberg",
      district: "Kreisfreie Stadt",
      name: "Bamberg",
      incidence: "161.56",
      population: 77373,
      cases: 471,
      deaths: 22,
      death_rate: 4.67091295116773,
      cases_in_7_days: "125",
      cases7_bl_per_100k: 135.316997209163,
      BL: "Bayern",
      newCases: 9,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          {
            name: "Männlich",
            chartType: "bar",
            values: [1, 11, 94, 73, 37, 11],
          },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [2, 6, 81, 79, 25, 38],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [265, 283, 295, 342, 466],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [243, 260, 268, 285, 287],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [22, 23, 27, 57, 179],
          },
        ],
      },
    },
    {
      id: 294,
      slug: "kreisfreie-stadt-schweinfurt",
      district: "Kreisfreie Stadt",
      name: "Schweinfurt",
      incidence: "213.38",
      population: 53426,
      cases: 553,
      deaths: 21,
      death_rate: 3.79746835443038,
      cases_in_7_days: "114",
      cases7_bl_per_100k: 135.316997209163,
      BL: "Bayern",
      newCases: 20,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          {
            name: "Männlich",
            chartType: "bar",
            values: [4, 22, 99, 76, 30, 25],
          },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [4, 14, 83, 97, 41, 35],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [255, 287, 337, 435, 541],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [237, 266, 315, 345, 349],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [18, 21, 22, 90, 192],
          },
        ],
      },
    },
    {
      id: 270,
      slug: "kreisfreie-stadt-coburg",
      district: "Kreisfreie Stadt",
      name: "Coburg",
      incidence: "82.78",
      population: 41072,
      cases: 220,
      deaths: 4,
      death_rate: 1.81818181818182,
      cases_in_7_days: "34",
      cases7_bl_per_100k: 135.316997209163,
      BL: "Bayern",
      newCases: 3,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          { name: "Männlich", chartType: "bar", values: [2, 4, 42, 37, 20, 6] },
          { name: "Weiblich", chartType: "bar", values: [1, 5, 37, 41, 17, 8] },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [148, 151, 159, 184, 217],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [144, 146, 154, 166, 166],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [4, 5, 5, 18, 51],
          },
        ],
      },
    },
    {
      id: 274,
      slug: "landkreis-coburg",
      district: "Landkreis",
      name: "Coburg",
      incidence: "97.99",
      population: 86747,
      cases: 609,
      deaths: 31,
      death_rate: 5.09031198686371,
      cases_in_7_days: "85",
      cases7_bl_per_100k: 135.316997209163,
      BL: "Bayern",
      newCases: 9,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          {
            name: "Männlich",
            chartType: "bar",
            values: [7, 13, 69, 99, 47, 23],
          },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [5, 19, 64, 134, 49, 80],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [446, 454, 464, 520, 600],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [415, 422, 431, 457, 463],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [31, 32, 33, 63, 137],
          },
        ],
      },
    },
    {
      id: 393,
      slug: "landkreis-hildburghausen",
      district: "Landkreis",
      name: "Hildburghausen",
      incidence: "162.98",
      population: 63197,
      cases: 244,
      deaths: 1,
      death_rate: 0.409836065573771,
      cases_in_7_days: "103",
      cases7_bl_per_100k: 64.8736417081267,
      BL: "Thüringen",
      newCases: 35,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          { name: "Männlich", chartType: "bar", values: [4, 7, 24, 44, 19, 9] },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [3, 3, 27, 51, 23, 29],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [96, 98, 101, 139, 209],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [95, 97, 100, 117, 127],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [1, 1, 1, 22, 82],
          },
        ],
      },
    },
    {
      id: 272,
      slug: "landkreis-bamberg",
      district: "Landkreis",
      name: "Bamberg",
      incidence: "122.31",
      population: 147163,
      cases: 883,
      deaths: 38,
      death_rate: 4.3035107587769,
      cases_in_7_days: "180",
      cases7_bl_per_100k: 135.316997209163,
      BL: "Bayern",
      newCases: 37,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          {
            name: "Männlich",
            chartType: "bar",
            values: [11, 16, 119, 155, 73, 22],
          },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [8, 26, 117, 194, 70, 67],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [522, 555, 594, 681, 862],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [484, 508, 538, 575, 579],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [38, 47, 56, 106, 283],
          },
        ],
      },
    },
    {
      id: 279,
      slug: "landkreis-lichtenfels",
      district: "Landkreis",
      name: "Lichtenfels",
      incidence: "223.13",
      population: 66776,
      cases: 642,
      deaths: 19,
      death_rate: 2.9595015576324,
      cases_in_7_days: "149",
      cases7_bl_per_100k: 135.316997209163,
      BL: "Bayern",
      newCases: 8,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          {
            name: "Männlich",
            chartType: "bar",
            values: [2, 28, 83, 111, 55, 20],
          },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [6, 23, 89, 122, 59, 43],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [377, 395, 419, 480, 635],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [360, 378, 396, 426, 427],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [17, 17, 23, 54, 208],
          },
        ],
      },
    },
    {
      id: 277,
      slug: "landkreis-kronach",
      district: "Landkreis",
      name: "Kronach",
      incidence: "131.85",
      population: 66743,
      cases: 337,
      deaths: 3,
      death_rate: 0.890207715133531,
      cases_in_7_days: "88",
      cases7_bl_per_100k: 135.316997209163,
      BL: "Bayern",
      newCases: 10,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          { name: "Männlich", chartType: "bar", values: [6, 9, 49, 68, 22, 8] },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [6, 5, 49, 74, 28, 12],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [187, 198, 207, 243, 327],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [184, 195, 204, 226, 231],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [3, 3, 3, 17, 96],
          },
        ],
      },
    },
    {
      id: 299,
      slug: "landkreis-haßberge",
      district: "Landkreis",
      name: "Haßberge",
      incidence: "73.47",
      population: 84384,
      cases: 424,
      deaths: 6,
      death_rate: 1.41509433962264,
      cases_in_7_days: "62",
      cases7_bl_per_100k: 135.316997209163,
      BL: "Bayern",
      newCases: null,
      statistics: {
        labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
        datasets: [
          {
            name: "Männlich",
            chartType: "bar",
            values: [2, 14, 89, 87, 29, 8],
          },
          {
            name: "Weiblich",
            chartType: "bar",
            values: [1, 3, 74, 73, 29, 14],
          },
        ],
      },
      allCases: {
        labels: ["04.10", "11.10", "18.10", "25.10", "01.11"],
        datasets: [
          {
            name: "Erkrankte",
            chartType: "line",
            values: [233, 246, 280, 343, 424],
          },
          {
            name: "Genesene*",
            chartType: "line",
            values: [227, 238, 271, 305, 321],
          },
          {
            name: "Aktive Fälle*",
            chartType: "line",
            values: [6, 8, 9, 38, 103],
          },
        ],
      },
    },
  ],
  update: "03.11.2020, 00:00 Uhr",
};

export default data;
