const data = require('../data/zoo_data');

// --- função para retorno na ausencia de parametros adequados ---
const completeSchedule = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

// --- Funções que lida com animais ---
const aniList = data.species.map((element) => element.name);
const animalSchedule = (animal) => {
  const findCondition = (element) => animal.includes(element.name);
  const foundAnimals = data.species.find(findCondition);
  return foundAnimals.availability;
};

// --- Função que recupera animais pelo dia ---
const animalExibitions = (weekDay) => {
  const SeacherCondition = (element) => element.availability.includes(weekDay);
  const animalSeacher = data.species.filter(SeacherCondition);
  const mapCondition = (element) => element.name;
  const desiredAnimals = animalSeacher.map(mapCondition);
  return desiredAnimals;
};

// --- Funções que lidam com dias da semana ---
const dayList = Object.keys(data.hours);
const daySchedule = (element) => {
  const openTime = data.hours[element].open;
  const closeTime = data.hours[element].close;
  const desiredAnswer = {
    [element]: {
      officeHour: `Open from ${openTime}am until ${closeTime}pm`,
      exhibition: animalExibitions(element),
    },
  };
  return desiredAnswer;
};

// --- Função identificadora de tipo de parâmetros ---
const complexitySkipper = (skipperParam) => {
  if (skipperParam === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (aniList.includes(skipperParam) === true) {
    return animalSchedule(skipperParam);
  }
  if (dayList.includes(skipperParam) === true) {
    return daySchedule(skipperParam);
  }
};
// --- Função principal ---
function getSchedule(scheduleTarget) {
  if ((dayList.includes(scheduleTarget) !== true) && (aniList.includes(scheduleTarget) !== true)) {
    return completeSchedule;
  }
  return complexitySkipper(scheduleTarget);
}

module.exports = getSchedule;

// --- Lógica e organização ---
// 1- adiciona uma condição de busca para foundAnimals em que o array de disponibilidade é retornado conforme o nome do animal
// 2- adiciona um if para checar se o parâmetro é adequado, e caso não seja retorna um Objeto contendo os horários completos do zoologico.
// 3 - pqp, s~tres da manhã, dps eu faço um fluxograma.
// 4- dscp pessoa que for fazer code review :(

// referencias: https://stackoverflow.com/questions/52933643/javascript-how-to-convert-function-parameters-to-object
