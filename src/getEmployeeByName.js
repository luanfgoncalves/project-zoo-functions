const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const filterCondition = (element) => element.lastName === employeeName;
  return data.employees.filter(filterCondition);
}

module.exports = getEmployeeByName;

// --- testes ---

console.log(getEmployeeByName());
console.log(getEmployeeByName('Nelson'));
console.log(getEmployeeByName('inexistente'));

// --- Organização e Lógica ---

// 1- adiciona um if (!employeeName) pra que o retorno seja '{}'.
// 2- adiciona uma condição para ser usada num filtro, que checa se 'data.employees.lastName' corresponde ao parâmetro passado.
// 3- retorna o array filtrado com a condição pré definida.
