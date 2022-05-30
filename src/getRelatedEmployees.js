const data = require('../data/zoo_data');

function isManager(id) {
  // --- some ---
  const someCondition = (element) => element.managers.includes(id);
  return data.employees.some(someCondition);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const filterCondition = (element) => element.managers.includes(managerId);
    const managedEmployees = data.employees.filter(filterCondition);
    const mapCondition = (element) => `${element.firstName} ${element.lastName}`;
    const mappedManagedEmployees = managedEmployees.map(mapCondition);
    return mappedManagedEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

// --- Testes ---

console.log('--- testes ---');
console.log(isManager()); // false
console.log(isManager('56d43ba3-a5a7-40f6-8dd7-cbb05082383f')); // false
console.log(isManager('stephanieId'); // true
console.log(isManager('burlId'));
console.log(isManager('olaId'));
console.log(isManager('inexistente')); // false

// --- Organização isManager ---
// 1 - Cria um find que busca se o parâmnetro passado à função(id do funcionário) está incluso entre os gerentes de algum funcionário(data.emplyees.managers)

// --- Organização getRelatedEmployees ---
// 1 - implementa um filto para criar um array com os funcionários gerenciados(checa se data.employees.managers inclui managerId).
// 2 - mapeia o array gerado pelo filter, retornando um novo array com nome e sobremone dos empregado gerenciados(managedEmployees.firstName).

// --- Referências ---
// https://www.w3schools.com/jsref/jsref_includes_array.asp
