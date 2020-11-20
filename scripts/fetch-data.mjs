import data from '../data/locations.json';
import fetch from 'node-fetch';
import fs from 'fs';
import moment from 'moment';

const allCasesMonths = 2; // last 2 moths
const allCasesPeriod = 2; // every second day

const jsTemplate = (jsonLocations, jsonUpdate, jsonGermanNew, jsonBavariaNew) => `
const data = {
  "citys": ${jsonLocations},
  "update": ${jsonUpdate},
  "germannew": ${jsonGermanNew},
  "bavarianew": ${jsonBavariaNew},
}

export default data;
`;

const endFileDataJs = './src/routes/_data.js';

const endpoint =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=*&returnGeometry=false&f=json&outSR=4326&where=';
const endpointNewCases =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=(NeuerFall%20IN(1%2C%20-1))%20AND%20(IdLandkreis%3D%27${data.RS}%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true';
const endpointAllCases =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Covid19_RKI_Sums/FeatureServer/0/query?f=json&where=(Meldedatum%3Etimestamp%20%27${date}%2022%3A59%3A59%27)%20AND%20(IdLandkreis%3D%27${data.RS}%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Meldedatum%20asc&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true';
const endpointGermanNewCases =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=NeuerFall%20IN(1%2C%20-1)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true';
const endpointBavariaNewCases =
  'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=(NeuerFall%20IN(1%2C%20-1))%20AND%20(Bundesland%3D%27Bayern%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true';

const getLocationsEndpoint = () => {
  let _endpoint = endpoint;
  // endpoint
  // + escape(GEN = '' OR GEN = '')
  const locations = data.locations.map((location) => {
    return `GEN = '${location.toUpperCase()}'`;
  });
  _endpoint += encodeURI(locations.join(' OR '));
  return _endpoint;
};

const getNewCasesEndpoint = (data) => {
  let _endpoint = endpointNewCases.replace('${data.RS}', data.RS);
  return _endpoint;
};

const getAllCasesEndpoint = (data) => {
  let date = moment().subtract(allCasesMonths, 'months').format('YYYY-MM-DD');
  let _endpoint = endpointAllCases.replace('${data.RS}', data.RS).replace('${date}', date);
  // console.log(_endpoint);
  return _endpoint;
};

const wellFormAllCases = (data) => {
  const newJson = {
    sick: {
      datasets: [
        {
          label: 'Erkrankte',
          type: 'line',
          backgroundColor: 'rgba(246,62,2,0.1)',
          pointRadius: 1,
          pointHitRadius: 10,
          pointBackgroundColor: '#f63e02',
          borderWidth: 3,
          borderColor: '#f63e02',
          data: [],
        },
        {
          label: 'Genesene*',
          type: 'line',
          backgroundColor: 'rgba(78,141,38,0.1)',
          pointRadius: 1,
          pointHitRadius: 10,
          pointBackgroundColor: '#4e8d26',
          borderWidth: 3,
          borderColor: '#4e8d26',
          data: [],
        },
      ],
    },
    recovered: {
      datasets: [
        {
          label: 'Aktive Fälle*',
          type: 'line',
          backgroundColor: 'rgba(243,183,0,0.1)',
          pointRadius: 1,
          pointHitRadius: 10,
          pointBackgroundColor: ' #f3b700',
          borderWidth: 3,
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
      const recovered = item.attributes.SummeGenesen;
      const activeCases = item.attributes.SummeFall - item.attributes.SummeGenesen;
      function setDataObject(category) {
        return {
          t: day,
          y: category,
        };
      }
      newJson.sick.datasets[0].data.push(setDataObject(cases));
      newJson.sick.datasets[1].data.push(setDataObject(recovered));
      newJson.recovered.datasets[0].data.push(setDataObject(activeCases));
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
    .then((_json) => _json.features[0].attributes.value);

  // Get all cases from API
  const allCases = await fetch(getAllCasesEndpoint(location))
    .then((res) => res.json())
    .then((_json) => wellFormAllCases(_json.features));

  json.date = location.last_update;

  json.locations.push({
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
            if (_location.attributes.GEN === location) {
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
        .then((_json) => _json.features[0].attributes.value),
    );
    const jsonBavariaNew = JSON.stringify(
      await fetch(endpointBavariaNewCases)
        .then((res) => res.json())
        .then((_json) => _json.features[0].attributes.value),
    );
    fs.writeFileSync(
      endFileDataJs,
      jsTemplate(jsonLocations, jsonDate, jsonGermanNew, jsonBavariaNew),
    );
    console.log('\x1b[42m\x1b[30m%s\x1b[0m', ` ✔ Datei gespeichert: ${endFileDataJs}`);
  })
  .catch((error) => {
    console.log('\x1b[31m%s\x1b[0m', ` x Error fetching getLocationsEndpoint`);
    console.log(error);
  });
