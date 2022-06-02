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

// --- Função que catalóga os animais exibidos conforme o dia ---
const animalExibitions = (weekDay) => {
  const animalsOfTheDay = [];
  const animalSeacherCondition = (element) => element.availability.some((obj) => obj === weekDay);
  const animalSeacherByDay = data.species.filter(animalSeacherCondition);
  animalSeacherByDay.forEach((element) => animalsOfTheDay.push(element.name));
  return animalsOfTheDay;
};

// --- Funções que lidam com dias da semana ---
const dayList = Object.keys(data.hours);
const daySchedule = dayList.map((element) => {
  return {
    officeHour: `Open from ${data.hours[element].open}am until ${data.hours[element].close}pm`,
    exhibition: animalExibitions(element),
  };
});

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

// const completeSchedule = {
//   Tuesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
//   },
//   Wednesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
//   },
//   Thursday: {
//     officeHour: 'Open from 10am until 8pm',
//     exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
//   },
//   Friday: {
//     officeHour: 'Open from 10am until 8pm',
//     exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
//   },
//   Saturday: {
//     officeHour: 'Open from 8am until 10pm',
//     exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
//   },
//   Sunday: {
//     officeHour: 'Open from 8am until 8pm',
//     exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
//   },
//   Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
// };

// function getDefaultSchedule(day) {
//   const opening = Object.values(data.hours[day])[0];
//   const closing = Object.values(data.hours[day])[1];
//   const mapCdt = ({ name }) => name;
//   return {
//     officeHour: `Open from ${opening}am until ${closing}pm`,
//     exhibition: data.species.filter((obj) => obj.availability.includes(day)).map(mapCdt),
//   };
// }
// const completeSchedule = {
//   Tuesday: getDefaultSchedule('Tuesday'),
//   Wednesday: getDefaultSchedule('Wednesday'),
//   Thursday: getDefaultSchedule('Thursday'),
//   Friday: getDefaultSchedule('Friday'),
//   Saturday: getDefaultSchedule('Saturday'),
//   Sunday: getDefaultSchedule('Sunday'),
//   Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
// };
