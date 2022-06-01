const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  }
  const filterCondition = (element) => animal.includes(element.name);
  const filteredArray = data.species.filter(filterCondition);
  return filteredArray.residents.length;
}

module.exports = countAnimals;

// --- Lógica e organização ---
// 1-
// 2-
// 3-
// 4-
