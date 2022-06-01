const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se handlerElephants é case sensitive', () => {
    expect(handlerElephants('COUNT')).toBeNull();
    expect(handlerElephants('NAMES')).toBeNull();
    expect(handlerElephants('AVERAGEAGE')).toBeNull();
    expect(handlerElephants('LOCATION')).toBeNull();
    expect(handlerElephants('AVAILABILITY')).toBeNull();
  });
  test('Verifica se handlerElephants retorn Null ao receber parâmetros inadequados', () => {
    expect(handlerElephants('teste')).toBeNull();
    expect(handlerElephants('parâmetro inexistente')).toBeNull();
    expect(handlerElephants('Dumbo')).toBeNull();
  });
  test('Verifica se handlerElephants retorna undefined se não receber parâmetros', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  test('Verifica se handlerElephants retorna a quantidade de elefantes ao receber "count" como parâmetro', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Verifica se handlerElephants retorna um array com a relação dos nomes de todos os elefantes ao receber "names" como parâmetro', () => {
    expect(handlerElephants('names')).toContain('Ilana');
    expect(handlerElephants('names')).toContain('Orval');
    expect(handlerElephants('names')).toContain('Bea');
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  test('Verifica se handlerElephants retorna a média de idade dos elefantes ao receber "averageAge" como parâmetro', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('Verifica se handlerElephants retorna a localização dos elefantes dentro do Zoológico ao receber "location" como parâmetro ', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  test('Verifica se handlerElephants retorna a popularidade dos elefantes ao receber "popularity" como parâmetro', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('Verifica se handlerElephants retorna um array com a relação de dias em que é possível visitar os elefantes quando recebe "availability" como parâmetro', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('names')).not.toContain('Monday');
  });
  test('Verifica se handlerElephants retorna o esperado se receber um objheto vazio como parâmetro', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
});

// --- Organização e lógica ---
// 1- inserir testes vazios com todos as descrições do que será verificado.
// 2- adiciona os parâmetros para a função dentro dos testes.
// 3- adiciona os valores relativos aos elefantes conforme os dados em zoo_data
// 4- insire testes para checar retorno indefinido na falta de parâmetros, case sentive e retorno nulo para parâmetros inadequados.
