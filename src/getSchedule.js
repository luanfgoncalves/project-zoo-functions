const data = require('../data/zoo_data');

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

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || scheduleTarget === null || scheduleTarget === undefined) {
    return completeSchedule;
  }
  const findCondition = (element) => scheduleTarget.includes(element.name);
  const foundAnimals = data.species.find(findCondition);
  return foundAnimals.availability;
}

module.exports = getSchedule;

// --- Lógica e organização ---
// 1- adiciona uma condição de busca para foundAnimals em que o array de disponibilidade é retornado conforme o nome do animal
// 2- adiciona um if para checar se o parâmetro é adequado, e caso não seja retorna um Objeto contendo os horários completos do zoologico.