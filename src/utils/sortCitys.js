export function sortCitys(allCitys) {
  let sortedCitys = [];
  allCitys.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 0;
    }
    return 0;
  });
  allCitys.sort((a, b) => {
    return ('' + a.district).localeCompare(b.district);
  });
  allCitys.sort((a, b) => {
    return ('' + a.name).localeCompare(b.name);
  });
  allCitys.forEach((item) => {
    // SORT COBURG TO THE TOP
    const city = item.name.toLowerCase();
    const myCity = 'Coburg';
    if (city == myCity.toLowerCase()) {
      sortedCitys.unshift(item);
    } else {
      sortedCitys.push(item);
    }
  });
  // move landkreise coburg after kreisfreiestadt coburg
  const element = sortedCitys[0];
  sortedCitys.splice(0, 1);
  sortedCitys.splice(1, 0, element);
  return sortedCitys;
}
