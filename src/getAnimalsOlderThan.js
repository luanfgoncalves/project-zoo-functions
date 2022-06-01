const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // if (!animal || !age) {
  //   return 'Adicione parâmetros';
  // }
  const filterCondition = (element) => element.name === animal;
  const selectedAnimal = data.species.find(filterCondition);
  const ageCondition = (element) => element.age >= age;
  return selectedAnimal.residents.every(ageCondition);
  // return selectedAnimal.every(ageCondition);
  // return selectedAnimal.every((element) => element.residents.age >= age);
}

module.exports = getAnimalsOlderThan;

// --- testes ---

// console.log(getAnimalsOlderThan());
// console.log('---');
// console.log(getAnimalsOlderThan('lions', 5));
// console.log('---');
// console.log(getAnimalsOlderThan('tigers', 18));
// console.log('---');
// console.log(getAnimalsOlderThan('otters', 7));
// console.log('---');
// console.log(getAnimalsOlderThan('penguins', 10));

// --- Organização e Lógica ---

// 1- adicionar uma condição para filtar os animais por especie usando o nome.
// 2- gera um novo array(selectedAnimal) contendo os dados do animal selecionado atráves do filter.
// 3- criar uma condição que verifica se a idade dos animais(selectedAnimal.residents.age) é '>=' o parâmetro age.
// 4- usa Array.every para averiguar se a condição é verdadeira para todos.
