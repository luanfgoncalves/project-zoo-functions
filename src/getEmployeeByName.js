const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const findCondition = (obj) => obj.lastName === employeeName || obj.firstName === employeeName;
  return data.employees.find(findCondition);
}

module.exports = getEmployeeByName;

// --- testes ---

// console.log(getEmployeeByName());
// console.log(getEmployeeByName('Emery'));
// console.log(getEmployeeByName('Wishart'));
// console.log(getEmployeeByName('inexistente'));

// --- Organização e Lógica ---

// 1- adiciona um if (!employeeName) pra que o retorno seja '{}'.
// 2- adiciona uma condição para ser usada num filtro, que checa se 'data.employees.lastName' corresponde ao parâmetro passado.
// 3- retorna o array filtrado com a condição pré definida.
