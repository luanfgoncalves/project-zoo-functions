const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childFilterCondition = (element) => element.age < 18;
  const childEntrants = entrants.filter(childFilterCondition);
  const adultFilterCondition = (element) => element.age < 18;
  const adultEntrants = entrants.filter(adultFilterCondition);
  const seniorFilterCondition = (element) => element.age < 18;
  const seniorEntrants = entrants.filter(seniorFilterCondition);
  return {
    child: childEntrants.length,
    adult: adultEntrants.length,
    senior: seniorEntrants.length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const entrantInfo = countEntrants(entrants);
  return (entrantInfo.child * 20.99) + (entrantInfo.adult * 49.99) + (entrantInfo.senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };

// --- organização e lógica ---
// 1 - implementa um filtro para cada tipo de entrant
// 2 - retorn um array com keys para cada tipo de entrant
// 3- atribui o valor ás keys conforme o complimento do arrays filtrados.

// 4 - adiciona retorno 0, caso calculate entry não receba parâmetros ou receba um array vazio.
// 5 - adiciona uma constante que recupera o numero de cada tipo de entrant através de countEntrants
// 6 - retorna o valor final através de uma equação que multiplica o numero de cada entrant pelo valor contido em zoo_data
