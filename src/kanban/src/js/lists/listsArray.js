const listsArray = [
  {
    title: 'Backlog', // заголовок блока
    tasks: [ // массив задач
      {
        id: 'BacklogTask0',
        name: 'Sprint bugfix',
      },
    ],
  },

  {
    title: 'Ready',
    tasks: [
      {
        id: 'ReadyTask0',
        name: 'Shop bug1',
      },
      {
        id: 'ReadyTask1',
        name: 'Shop bug2',
      },
      {
        id: 'ReadyTask2',
        name: 'Shop bug3',
      },
    ],
  },

  {
    title: 'In Progress',
    tasks: [
      {
        id: 'ProgressTask0',
        name: 'Auth bugfix',
      },
    ],
  },

  {
    title: 'Finished',
    tasks: [
      {
        id: 'FinishedTask0',
        name: 'Main page bugfix',
      },
    ],
  },
];

export { listsArray };
