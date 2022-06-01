const data = require('../data/zoo_data');

function isManager(id) {
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

// --- Organização isManager ---
// 1 - Cria um find que busca se o parâmnetro passado à função(id do funcionário) está incluso entre os gerentes de algum funcionário(data.emplyees.managers)

// --- Organização getRelatedEmployees ---
// 1 - implementa um filto para criar um array com os funcionários gerenciados(checa se data.employees.managers inclui managerId).
// 2 - mapeia o array gerado pelo filter, retornando um novo array com nome e sobremone dos empregado gerenciados(managedEmployees.firstName).

// --- Referências ---
// https://www.w3schools.com/jsref/jsref_includes_array.asp
