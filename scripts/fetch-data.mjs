import data from "../data/locations.json";
import fetch from "node-fetch";
import fs from "fs";

const jsTemplate = (jsonLocations, jsonUpdate) => `
const data = {
  "citys": ${jsonLocations},
  "update": ${jsonUpdate}
}

export default data;
`;

const endFileDataJs = "./src/routes/_data.js";

const endpoint =
  "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=*&returnGeometry=false&f=json&outSR=4326&where=";
const endpointNewCases =
  "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=(NeuerFall%20IN(1%2C%20-1))%20AND%20(IdLandkreis%3D%27${data.RS}%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true";
const endpointSexes =
  "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=(Geschlecht%3C%3E%27unbekannt%27%20AND%20Altersgruppe%3C%3E%27unbekannt%27%20AND%20NeuerFall%20IN(0%2C%201))%20AND%20(IdLandkreis%3D%27${data.RS}%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=Altersgruppe%2CGeschlecht&orderByFields=Altersgruppe%20asc&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true";

const getLocationsEndpoint = () => {
  let _endpoint = endpoint;
  // endpoint
  // + escape(GEN = '' OR GEN = '')
  const locations = data.locations.map((location) => {
    return `GEN = '${location.toUpperCase()}'`;
  });
  _endpoint += encodeURI(locations.join(" OR "));
  return _endpoint;
};

const getNewCasesEndpoint = (data) => {
  let _endpoint = endpointNewCases.replace("${data.RS}", data.RS);
  return _endpoint;
};

const getStatisticsEndpoint = (data) => {
  let _endpoint = endpointSexes.replace("${data.RS}", data.RS);
  return _endpoint;
};

const wellFormStatistics = (data) => {
  const newJson = {
    labels: ["0-4", "5-14", "35-59", "60-79", "80+"],
    datasets: [
      {
        name: "Männlich",
        chartType: "bar",
        values: [],
      },
      {
        name: "Weiblich",
        chartType: "bar",
        values: [],
      },
    ],
  };
  data.map((item) => {
    if (item.attributes.Geschlecht == "M") {
      newJson.datasets[0].values.push(item.attributes.value);
    }
    if (item.attributes.Geschlecht == "W") {
      newJson.datasets[1].values.push(item.attributes.value);
    }
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

  // Get sex statistics form API
  const statistics = await fetch(getStatisticsEndpoint(location))
    .then((res) => res.json())
    .then((_json) => wellFormStatistics(_json.features));

  json.date = location.last_update;

  json.locations.push({
    id: location.OBJECTID,
    slug: `${location.BEZ}-${location.GEN}`.replace(/\s+/g, "-").toLowerCase(),
    district: location.BEZ,
    name: location.GEN,
    incidence: location.cases7_per_100k,
    population: location.EWZ,
    cases: location.cases,
    deaths: location.deaths,
    death_rate: location.death_rate,
    cases7_bl_per_100k: location.cases7_bl_per_100k,
    BL: location.BL,
    newCases,
    statistics,
  });
  console.log(statistics);
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
          })
        );
      })
    );

    const jsonLocations = JSON.stringify(json.locations);
    const jsonDate = JSON.stringify(json.date);
    fs.writeFileSync(endFileDataJs, jsTemplate(jsonLocations, jsonDate));
  });
