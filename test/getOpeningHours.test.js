const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const fechado = 'The zoo is closed';
  const aberto = 'The zoo is open';
  const expected = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  test('Verifica se getOpeningHours retorna a informação correta para os horarios de segunda-feira', () => {
    expect(getOpeningHours('Monday', '07:00-AM')).toBe(fechado);
    expect(getOpeningHours('Monday', '08:00-AM')).toBe(fechado);
    expect(getOpeningHours('Monday', '10:00-AM')).toBe(fechado);
    expect(getOpeningHours('Monday', '10:00-PM')).toBe(fechado);
  });
  test('Verifica se getOpeningHours retorna a informação correta para os horarios de terça-feira', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(aberto);
    expect(getOpeningHours('Tuesday', '05:00-PM')).toBe(aberto);
    expect(getOpeningHours('Tuesday', '07:00-PM')).toBe(fechado);
    expect(getOpeningHours('Tuesday', '10:00-PM')).toBe(fechado);
  });
  test('Verifica se getOpeningHours retorna a informação correta para os horarios de quarta-feira', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe(aberto);
    expect(getOpeningHours('Wednesday', '05:00-PM')).toBe(aberto);
    expect(getOpeningHours('Wednesday', '07:00-PM')).toBe(fechado);
    expect(getOpeningHours('Wednesday', '10:00-PM')).toBe(fechado);
  });
  test('Verifica se getOpeningHours retorna a informação correta para os horarios de quinta-feira', () => {
    expect(getOpeningHours('Thursday', '11:00-AM')).toBe(aberto);
    expect(getOpeningHours('Thursday', '07:00-PM')).toBe(aberto);
    expect(getOpeningHours('Thursday', '09:00-PM')).toBe(fechado);
    expect(getOpeningHours('Thursday', '10:00-PM')).toBe(fechado);
  });
  test('Verifica se getOpeningHours retorna a informação correta para os horarios de sexta-feira', () => {
    expect(getOpeningHours('Friday', '11:00-AM')).toBe(aberto);
    expect(getOpeningHours('Friday', '07:00-PM')).toBe(aberto);
    expect(getOpeningHours('Friday', '09:00-PM')).toBe(fechado);
    expect(getOpeningHours('Friday', '10:00-PM')).toBe(fechado);
  });
  test('Verifica se getOpeningHours retorna a informação correta para os horarios de sabado', () => {
    expect(getOpeningHours('Saturday', '09:00-AM')).toBe(aberto);
    expect(getOpeningHours('Saturday', '05:00-PM')).toBe(aberto);
    expect(getOpeningHours('Saturday', '09:00-PM')).toBe(aberto);
    expect(getOpeningHours('Saturday', '11:00-PM')).toBe(fechado);
  });
  test('Verifica se getOpeningHours retorna a informação correta para os horarios de domingo', () => {
    expect(getOpeningHours('Sunday', '09:00-AM')).toBe(aberto);
    expect(getOpeningHours('Sunday', '05:00-PM')).toBe(aberto);
    expect(getOpeningHours('Sunday', '09:00-PM')).toBe(fechado);
    expect(getOpeningHours('Sunday', '11:00-PM')).toBe(fechado);
  });
  test('Verifica se getOpeningHours retorna todos os horários caso não receba nenhum parâmetro', () => {
    expect(getOpeningHours()).toEqual(expected);
  });
  test('Verifica se getOpeningHours lança um Erro ao receber o nome do dia da semana passado como argumento fora do ingles', () => {
    expect(() => getOpeningHours('Segunda-feira', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Terça-Feira', '09:00-AM')).toThrow();
    expect(() => getOpeningHours('Quarta-feira', '09:00-AM')).toThrow();
    expect(() => getOpeningHours('Sabado', '09:00-AM')).toThrow();
  });
  test('Verifica se ao receber horas inexistentes getOpeningHours lança um Erro', () => {
    expect(() => getOpeningHours('Monday', '25:00-AM')).toThrow();
    expect(() => getOpeningHours('Monday', '50:00-AM')).toThrow();
    expect(() => getOpeningHours('Monday', '09:70-PM')).toThrow();
    expect(() => getOpeningHours('Monday', '09:90-PM')).toThrow();
  });
  test('Verifica se ao receber parâmetros inadequados nos horários getOpeningHours lança um Erro', () => {
    expect(() => getOpeningHours('Monday', '06:UV-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '07:AC-AM')).toThrow();
    expect(() => getOpeningHours('Monday', 'DC:00-PM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Monday', 'KG:00-PM')).toThrow();
  });
  test('Verifica se getOpeningHours lança um Erro ao receber a nomenclatura inadequada de validação das horas', () => {
    expect(() => getOpeningHours('Monday', '09:00-UV')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Monday', '09:00-AC')).toThrow();
    expect(() => getOpeningHours('Monday', '09:00-DC')).toThrow();
    expect(() => getOpeningHours('Monday', '09:00-KG')).toThrow();
  });
  test('Verifica se handlerElephants é case sensitive', () => {
    expect(getOpeningHours('MONDAY', '07:00-AM')).toBe(fechado);
    expect(getOpeningHours('TUESDAY', '09:00-AM')).toBe(aberto);
    expect(getOpeningHours('wEDNESDAY', '05:00-PM')).toBe(aberto);
    expect(getOpeningHours('sATURDAY', '05:00-PM')).toBe(aberto);
  });
});

// --- referencias: ----
// https://stackoverflow.com/questions/46042613/how-to-test-the-type-of-a-thrown-exception-in-jest
