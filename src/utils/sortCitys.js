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
  console.log('sortcitysjs');
  return sortedCitys;
}
