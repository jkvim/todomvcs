let nextTodoId = 0;

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextTodoId++
  }
};

const setVisbleFilter = (filter) => {
  return {
    type: 'SET_VISIBLE_FILTER',
    filter,
  }
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
};

export {
  addTodo,
  setVisbleFilter,
  toggleTodo
};
