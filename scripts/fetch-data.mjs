import data from '../data/locations.json';
import fetch from 'node-fetch';
import fs from 'fs';
import moment from 'moment';

const allIncidencesMonths = 2; // last 2 moths
const allCasesMonths = 2; // last 2 moths
const allCasesPeriod = 1; // every second day

const jsTemplate = (allData) => `
const data = ${allData}

export default data;
`;

const endFileDataJs = './src/routes/_data.js';
const endFileDataJsonDaily = (dateString) => {
  const date = dateString.substring(0, dateString.indexOf(','));
  return `./static/data/${moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD')}.json`;
};

const endpoint =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=*&returnGeometry=false&f=json&outSR=4326&where=';
const endpointNewCases =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/rki_key_data_v/FeatureServer/0/query?f=json&where=AdmUnitId%3D${data.AdmUnitId}&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=AdmUnitId%20asc&resultOffset=0&resultRecordCount=1&resultType=standard&cacheHint=true';
// Old until 1.2.2022
// const endpointNewCases =
//   'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=(NeuerFall%20IN(1%2C%20-1))%20AND%20(IdLandkreis%3D%27${data.RS}%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true';
const endpointAllCases =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Covid19_RKI_Sums/FeatureServer/0/query?f=json&where=(Meldedatum%3Etimestamp%20%27${date}%2022%3A59%3A59%27)%20AND%20(IdLandkreis%3D%27${data.RS}%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Meldedatum%20asc&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true';
const endpointAllIncidences =
  'https://services-eu1.arcgis.com/XfUqDXJfAezaKUnU/arcgis/rest/services/Tabelle_Ampelkarte/FeatureServer/0/query?f=json&where=(last_update%3Etimestamp%20%27${date}%2022%3A59%3A59%27)%20AND%20(rs%3D%27${data.RS}%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=last_update%20desc&outSR=102100&resultOffset=0&resultRecordCount=100&resultType=standard';
const endpointGermanNewCases =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/rki_key_data_blbrdv/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=AdmUnitId%20asc&resultOffset=0&resultRecordCount=1&resultType=standard&cacheHint=true';
const endpointIncidenceGermany =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/rki_key_data_blbrdv/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=AdmUnitId%20asc&resultOffset=0&resultRecordCount=1&resultType=standard&cacheHint=true';
const endpointIncidenceBavaria =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Coronaf%C3%A4lle_in_den_Bundesl%C3%A4ndern/FeatureServer/0/query?f=json&where=LAN_ew_AGS%3D09&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=OBJECTID,LAN_ew_AGS,LAN_ew_GEN,LAN_ew_BEZ,LAN_ew_EWZ,Fallzahl,Aktualisierung,Death,cases7_bl_per_100k,cases7_bl,death7_bl&orderByFields=LAN_ew_GEN%20asc&cacheHint=true02100&resultOffset=0&resultRecordCount=25&resultType=standard&cacheHint=true';
const endpointBavariaNewCases =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/rki_key_data_blbrdv/FeatureServer/0/query?f=json&where=(AnzAktivNeu%3C%3E0)%20AND%20(AdmUnitId%3D9)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=AdmUnitId%20asc&resultOffset=0&resultRecordCount=1&resultType=standard&cacheHint=true';
const endpointITS =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0/query?f=json&where=AGS%3D%27${RS}%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*';
const endpointHospitalization = 'https://corona-ampel-bayern.de/data/history14days.json';

const getLocationsEndpoint = () => {
  let _endpoint = endpoint;
  // endpoint
  // + escape(GEN = '' OR GEN = '')
  const locations = data.locations.map((location) => {
    return `county = '${location.toUpperCase()}'`;
  });
  _endpoint += encodeURI(locations.join(' OR '));
  // console.log(_endpoint);
  return _endpoint;
};

const getNewCasesEndpoint = (data) => {
  let _endpoint = endpointNewCases.replace('${data.AdmUnitId}', data.AdmUnitId);
  // console.log(_endpoint);
  return _endpoint;
};

const getAllCasesEndpoint = (data) => {
  let date = moment().subtract(allCasesMonths, 'months').format('YYYY-MM-DD');
  let _endpoint = endpointAllCases.replace('${data.RS}', data.RS).replace('${date}', date);
  // console.log(_endpoint);
  return _endpoint;
};

const getAllIncidencesEndpoint = (data) => {
  let date = moment().subtract(allIncidencesMonths, 'months').format('YYYY-MM-DD');
  let _endpoint = endpointAllIncidences.replace('${data.RS}', data.RS).replace('${date}', date);
  // console.log(_endpoint);
  return _endpoint;
};

const getITS = (data) => {
  let _endpoint = endpointITS.replace('${RS}', data.RS);
  return _endpoint;
};

const wellFormAllCases = (data) => {
  const newJson = {
    sick: {
      datasets: [
        {
          label: 'Fälle',
          type: 'line',
          backgroundColor: 'rgba(246,62,2,0.1)',
          pointRadius: 1,
          pointHitRadius: 10,
          pointBackgroundColor: '#f63e02',
          borderWidth: 3,
          borderColor: '#f63e02',
          data: [],
        },
      ],
    },
    casesperday: {
      datasets: [
        {
          label: 'Fälle pro Tag',
          type: 'bar',
          backgroundColor: '#f3b700',
          borderColor: ' #f3b700',
          data: [],
        },
      ],
    },
  };

  data
    .filter(function (value, index, Arr) {
      return index % allCasesPeriod == 0;
    })
    .map((item) => {
      const day = new Date(item.attributes.Meldedatum);
      const cases = item.attributes.SummeFall;
      const casesperday = item.attributes.AnzahlFall;
      // const recovered = item.attributes.SummeGenesen;
      // const activeCases = item.attributes.SummeFall - item.attributes.SummeGenesen;
      function setDataObject(category) {
        return {
          t: day,
          y: category,
        };
      }
      newJson.sick.datasets[0].data.push(setDataObject(cases));
      newJson.casesperday.datasets[0].data.push(setDataObject(casesperday));
      // newJson.sick.datasets[1].data.push(setDataObject(recovered));
      // newJson.recovered.datasets[0].data.push(setDataObject(activeCases));
    });
  return newJson;
};

const wellFormIncidences = (data) => {
  const newJson = {
    incidences: {
      datasets: [
        {
          label: 'Inzidenz',
          type: 'bar',
          backgroundColor: '#4e8d26',
          borderColor: ' #4e8d26',
          data: [],
        },
      ],
    },
  };

  data.map((item) => {
    const day = new Date(item.attributes.last_update);
    const incidence = item.attributes.cases7_per_100k;
    function setDataObject(category) {
      return {
        t: day,
        y: category,
      };
    }
    newJson.incidences.datasets[0].data.push(setDataObject(incidence.toFixed(1)));
  });
  return newJson;
};

let json = {
  locations: [],
};

const handleLocation = async (location) => {
  // Get new Cases from API for this city
  const newCases = await fetch(getNewCasesEndpoint(location))
    .then((res) => res.json())
    .then((_json) => _json.features[0].attributes.AnzFallNeu)
    .catch((error) => {
      console.log('\x1b[31m%s\x1b[0m', ` x getNewCasesEndpoint ${location.BEZ} ${location.GEN}`);
      console.log(error);
    });

  // Get all cases from API
  const allCases = await fetch(getAllCasesEndpoint(location))
    .then((res) => res.json())
    .then((_json) => wellFormAllCases(_json.features))
    .catch((error) => {
      console.log('\x1b[31m%s\x1b[0m', ` x wellFormAllCases ${location.BEZ} ${location.GEN}`);
      console.log(error);
    });

  // Get all cases from API
  const allIncidences = await fetch(getAllIncidencesEndpoint(location))
    .then((res) => res.json())
    .then((_json) => wellFormIncidences(_json.features))
    .catch((error) => {
      console.log('\x1b[31m%s\x1b[0m', ` x wellFormIncidences ${location.BEZ} ${location.GEN}`);
      console.log(error);
    });

  // Get new Cases from API for this city
  let itsData = await fetch(getITS(location))
    .then((res) => res.json())
    .then((_json) => _json.features[0])
    .catch((error) => {
      console.log('\x1b[31m%s\x1b[0m', ` x getITS ${location.BEZ} ${location.GEN}`);
      console.log(error);
    });

  json.date = location.last_update;

  let itsDataFinalJson = {
    betten_frei: null,
    betten_belegt: null,
    betten_gesamt: null,
    Anteil_betten_frei: null,
    faelle_covid_aktuell: null,
    faelle_covid_aktuell_beatmet: null,
    Anteil_covid_beatmet: null,
    Anteil_COVID_betten: null,
    daten_stand: null,
  };

  if (typeof itsData !== 'undefined') {
    itsDataFinalJson = {
      betten_frei: itsData.attributes.betten_frei,
      betten_belegt: itsData.attributes.betten_belegt,
      betten_gesamt: itsData.attributes.betten_gesamt,
      Anteil_betten_frei: itsData.attributes.Anteil_betten_frei,
      faelle_covid_aktuell: itsData.attributes.faelle_covid_aktuell,
      faelle_covid_aktuell_beatmet: itsData.attributes.faelle_covid_aktuell_beatmet,
      Anteil_covid_beatmet: itsData.attributes.Anteil_covid_beatmet,
      Anteil_COVID_betten: itsData.attributes.Anteil_COVID_betten,
      daten_stand: itsData.attributes.daten_stand,
    };
  }

  json.locations.push({
    ...itsDataFinalJson,
    id: location.OBJECTID,
    slug: `${location.BEZ}-${location.GEN}`.replace(/\s+/g, '-').replace(/ß/g, 'ss').toLowerCase(),
    district: location.BEZ,
    name: location.GEN,
    incidence: Number(location.cases7_per_100k).toFixed(2),
    population: location.EWZ,
    cases: location.cases,
    deaths: location.deaths,
    death_rate: location.death_rate,
    cases_in_7_days: Number(location.cases7_per_100k / (100000 / location.EWZ)).toFixed(0),
    cases7_bl_per_100k: location.cases7_bl_per_100k,
    BL: location.BL,
    newCases,
    allCases,
    allIncidences,
  });
  // console.log(statistics);
};

fetch(getLocationsEndpoint())
  .then((res) => res.json())
  .then(async (_json) => {
    await Promise.all(
      data.locations.map(async (location) => {
        await Promise.all(
          _json.features.map(async (_location) => {
            if (_location.attributes.county === location) {
              await handleLocation(_location.attributes);
            }
          }),
        );
      }),
    );

    const jsonLocations = JSON.stringify(json.locations);
    const jsonDate = JSON.stringify(json.date);
    const jsonGermanNew = JSON.stringify(
      await fetch(endpointGermanNewCases)
        .then((res) => res.json())
        .then((_json) => _json.features[0].attributes.AnzFallNeu)
        .catch((error) => {
          console.log('\x1b[31m%s\x1b[0m', ` x endpointGermanNewCases`);
          console.log(error);
        }),
    );
    const jsonGermanIncidence = JSON.stringify(
      await fetch(endpointIncidenceGermany)
        .then((res) => res.json())
        .then((_json) => _json.features[0].attributes.Inz7T)
        .catch((error) => {
          console.log('\x1b[31m%s\x1b[0m', ` x endpointIncidenceGermany`);
          console.log(error);
        }),
    );
    const jsonBavariaIncidence = JSON.stringify(
      await fetch(endpointIncidenceBavaria)
        .then((res) => res.json())
        .then((_json) => _json.features[0].attributes.cases7_bl_per_100k)
        .catch((error) => {
          console.log('\x1b[31m%s\x1b[0m', ` x endpointGermanNewCases`);
          console.log(error);
        }),
    );
    const jsonHospitalization = JSON.stringify(
      await fetch(endpointHospitalization)
        .then((res) => res.json())
        .then((_json) => _json)
        .catch((error) => {
          console.log('\x1b[31m%s\x1b[0m', ` x endpointHospitalization`);
          console.log(error);
        }),
    );

    const jsonBavariaNew = JSON.stringify(
      await fetch(endpointBavariaNewCases)
        .then((res) => res.json())
        .then((_json) => _json.features[0].attributes.AnzFallNeu)
        .catch((error) => {
          console.log('\x1b[31m%s\x1b[0m', ` x endpointBavariaNewCases`);
          console.log(error);
        }),
    );
    const allDataString = `{
      "citys": ${jsonLocations},
      "update": ${jsonDate},
      "germannew": ${jsonGermanNew},
      "bavarianew": ${jsonBavariaNew},
      "germanincidence": ${jsonGermanIncidence},
      "bavariaincidence": ${jsonBavariaIncidence},
      "hospitalization": ${jsonHospitalization}
    }`;
    fs.writeFileSync(endFileDataJs, jsTemplate(allDataString));
    console.log('\x1b[42m\x1b[30m%s\x1b[0m', ` ✔  Datei gespeichert: ${endFileDataJs}`);
    fs.writeFileSync(endFileDataJsonDaily(json.date), allDataString);
    console.log(
      '\x1b[42m\x1b[30m%s\x1b[0m',
      ` ✔  Datei gespeichert: ${endFileDataJsonDaily(json.date)}`,
    );
  })
  .catch((error) => {
    console.log('\x1b[31m%s\x1b[0m', ` x Error fetching getLocationsEndpoint`);
    console.log(error);
  });
