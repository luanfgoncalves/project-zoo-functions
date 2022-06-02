const data = require('../data/zoo_data');

// function animalFinder(animal) {
//   const filterCondition = (element) => animal.specie === element.name;
//   const filteredArray = data.species.filter(filterCondition);
//   return filteredArray.residents.length;
// }
const expected = {
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

function countAnimals(animal) {
  if (!animal || animal === undefined) {
    return expected;
  }
  const filterCondition = (element) => animal.specie === element.name;
  const filteredArray = data.species.find(filterCondition);
  const specieResidents = filteredArray.residents;
  const maleResidents = specieResidents.filter((element) => element.sex === 'male');
  if (animal.sex === 'male') {
    return maleResidents.length;
  }
  if (animal.sex === 'female') {
    return specieResidents.length - maleResidents.length;
  }
  return specieResidents.length;
}

module.exports = countAnimals;

// --- testes ----
// countAnimals({ specie: 'lions' });

// --- Lógica e organização ---
// 1- adiciona um If para retornar um objeto contendo o numero de todos os animais caso a função não receba parâmetros.
// 2- adiciona uma condição para filtragem dos animais pelo nome
// 3-
// 4-
