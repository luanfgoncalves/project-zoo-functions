const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeFindCondition = (element) => element.id === id;
  const selectedEmployee = data.employees.find(employeeFindCondition);
  const managedAnimal = selectedEmployee.responsibleFor[0];
  const specieFindCondition = (element) => managedAnimal.includes(element.id);
  const filteredSpecie = data.species.find(specieFindCondition);
  const mapcondition = (element) => element.age;
  const mapedAnimalData = filteredSpecie.residents.map(mapcondition);
  let maxAge = mapedAnimalData[0];
  mapedAnimalData.forEach((element) => {
    if (element > maxAge) {
      maxAge = element;
    }
  });
  const Answer = filteredSpecie.residents.find((element) => element.age === maxAge);
  return [Answer.name, Answer.sex, Answer.age];
}

module.exports = getOldestFromFirstSpecies;

// --- testes ---

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// --- organização e lógica ---
// 1- cria condição e filtro para encontrar o funcionário por id.
// 2- identifica a primeira especie manejada pelo funcionario, já que estas estão dispostas conforme a ordem delas em zoo data.
// 3- mapeia as idades dos animais da especie manejada, retornando um array com as respectivas idades.
// 4- identifica a maior idade através do forEach e atribui ela a uma variavel.
// 5- Encontra o animal mais velho a partir da idade em maxAge, e atribui o objeto do animal mais velho a uma variavel.
// 6- retorna uma array com tres propriedades que acessam as chaves contidas no objeto Answer, basicamente o array com as informações do bicho.
