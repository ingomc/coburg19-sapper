daten von:

- Deutschland vergangenheit fälle
- Bayern vergangenheit fälle
- Landkreise vergangenheit:
  - neuefälle
  - letzten 7 Tage
  - Fälle insgesamt
  - tote
  - Todesrate
  - Einwohnerzahl? durch tote vlt verändert
  - 7 Tage inzidenz Bundesland
    Intensivstation: - Betten frei - belegt - belegt mit c-19 - beatmet

Deaktivieren der Graphen - in Zeitreisemmodus nicht möglich

    Breadcrumb zeitreisesymbol wenn zeitreise aktiv

Neuer Todesfall

"IdLandkreis":"09478"
Lichtenfels

endpoint stats from date

&resultRecordCount=1
where=%28Meldedatum%3Etimestamp+%272020-10-01+22%3A59%3A59%27%29+AND+%28IdLandkreis%3D%2716072%27%29

https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Covid19_RKI_Sums/FeatureServer/0//query?where=%28Meldedatum%3Etimestamp+%272020-10-01+22%3A59%3A59%27%29+AND+%28IdLandkreis%3D%2716072%27%29&objectIds=&time=&resultType=none&outFields=*&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=1&sqlFormat=none&f=pjson&token=

"features" : [
{
"attributes" : {
"AnzahlFall" : 0,
"AnzahlTodesfall" : 0,
"SummeFall" : 324,
"SummeTodesfall" : 25,
"ObjectId" : 136416,
"Datenstand" : "01.12.2020, 00:00 Uhr",
"Meldedatum" : 1601596800000,
"Bundesland" : "Thüringen",
"IdBundesland" : 16,
"Landkreis" : "LK Sonneberg",
"IdLandkreis" : "16072",
"AnzahlGenesen" : 0,
"SummeGenesen" : 299
}
}
]

Anzahl Fälle Deutschland heute
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=NeuerFall%20IN(1%2C%20-1)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true

https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Covid19_Refdate/FeatureServer/0/query?f=json&where=Datum%3Etimestamp%20%272020-03-01%2022%3A59%3A59%27%20AND%20AnzahlFall%3C%3E0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Datum%20asc&resultOffset=96000&resultRecordCount=32000&resultType=standard&cacheHint=true

Alle Fälle deutschlands, summe bilden aus den anzahfall
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Covid19_Refdate/FeatureServer/0/query?f=json&where=Datum%3Etimestamp%20%272020-03-01%2022%3A59%3A59%27%20AND%20AnzahlFall%3C%3E0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=FID%2CAnzahlFall%2CDatum%2CIstErkrankungsbeginn&orderByFields=Datum%20asc&resultOffset=96000&resultRecordCount=32000&resultType=standard&cacheHint=true

Alle Fälle selber zamgebastelt deutschland
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Covid19_RKI_Sums/FeatureServer/0/query?f=json&where=(Meldedatum%3Etimestamp%20%272020-11-29%2022%3A59%3A59%27)+AND+(Meldedatum%3Ctimestamp%20%272020-11-30%2023%3A00%3A00%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&resultType=standard&cacheHint=true

Zusammengerechnet alle fälle deutsschland?
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Covid19_RKI_Sums/FeatureServer/0/query?f=json&where=(Meldedatum%3Etimestamp%20%272020-11-30%2022%3A59%3A59%27)+AND+(Meldedatum%3Ctimestamp%20%272020-12-01%2023%3A00%3A00%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true

standard deutschland alle fälle heute
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=(Meldedatum%3D1606608000000)+AND+NeuerFall%20IN(1%2C%20-1)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&resultType=standard&cacheHint=true

corona-karte.de
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=json&outStatistics=[%20{%20%22statisticType%22:%20%22sum%22,%20%22onStatisticField%22:%20%22AnzahlFall%22,%20%22outStatisticFieldName%22:%20%22GesamtFaelle%22%20}%20]&groupByFieldsForStatistics=Refdatum,IstErkrankungsbeginn&orderByFields=Refdatum%20desc

nachbau corona-karte nach datum sortiert
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=&time=1606780800000&outFields=*&outSR=4326&f=json&groupByFieldsForStatistics=Meldedatum&outStatistics=[{%22statisticType%22:%20%22sum%22,%20%22onStatisticField%22:%20%22AnzahlFall%22,%20%22outStatisticFieldName%22:%20%22GesamtFaelleTag%22}]&orderByFields=Meldedatum%20desc

Zusammengerechnet alle fälle deutsschland? mit neuem filter
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Covid19_RKI_Sums/FeatureServer/0/query?f=json&where=(Meldedatum%3Etimestamp%20%272020-11-30%2022%3A59%3A59%27)+AND+(Meldedatum%3Ctimestamp%20%272020-12-01%2023%3A00%3A00%27)+AND+NeuerFall%20IN(1%2C%20-1)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true

Anzahl Fälle Deutschland heute best try bisher
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?f=json&where=(Meldedatum%3Etimestamp%20%272020-11-30%2022%3A59%3A59%27)+AND+(Meldedatum%3Ctimestamp%20%272020-12-01%2023%3A00%3A00%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22AnzahlFall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true
