const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
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
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };

// --- organização e lógica ---
// 1 - implementa um filtro para cada tipo de entrant
// 2 - retorn um array com keys para cada tipo de entrant
// 3- atribui o valor ás keys conforme o complimento do arrays filtrados.
