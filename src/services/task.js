const tasks = {
  toDo: [],
  inProgress: [],
  done: [],
};

const create = (task) => {
  tasks[task.state] = [task, ...tasks[task.state]];
};

const deleteCard = (task) => {
  console.log("before remove", tasks);
  const removeTask = tasks[task.state].filter(({ id }) => id !== task.id);
  tasks[task.state] = removeTask;
  console.log("after remove", tasks);
};

const update = (task) => {
  const removeTask = tasks[task.state].filter(({ id }) => id !== task.id);
  tasks[task.state] = [task, ...removeTask];
  console.log([tasks]);
};

const getTasks = () => {
  return tasks;
};

export default {
  create,
  getTasks,
  deleteCard,
  update,
};
