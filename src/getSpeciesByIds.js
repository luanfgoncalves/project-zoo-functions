const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const expected = [];
  if (!ids) {
    return expected;
  }
  // --- find ----
  // const findCondition = (element) => element.species.id === ids;
  // return data.find(findCondition);

  // --- filter ---
  const filterCondition = (element) => ids.includes(element.id);
  return data.species.filter(filterCondition);
}

module.exports = getSpeciesByIds;

// --- testes ----

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
console.log(getSpeciesByIds());
console.log('resultado esperado: Leão');
console.log(data);

// --- Organização do códio ---

// 1- usar o rest no parametro da função par ela poder receber multiplos argumentos.
// 2- adiciona um 'if' com 'return = []' para Retorne um array vazio se a função não receber um id.
// 3- adicionar uma condição e um find para encontar a especie com o id especifico.

// --- lógica ----

// filter verifica as species, detro de data, retornando um array contendo as chaves que possuem o id contido dentro de ids;
// includes checa se existem chaves id dentro de species (data.species.id) inbclusas dentro do parâmetros passado à função(ids).
// rest (... antes do argumento da função) permite que a função receba multiplos argumentos e seja executada para todos.
// if (!ids) verifica se 'ids' foi passado pra função.

// --- Referêcias: ---
// https://stackoverflow.com/questions/411352/how-best-to-determine-if-an-argument-is-not-sent-to-the-javascript-function
