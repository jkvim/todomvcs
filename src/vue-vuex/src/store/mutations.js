
export const state = {
  todos: [],
  visibleFilter: 'SHOW_ALL',
};

let id = 0;
export const mutations = {
  addTodo(state, { text }) {
    if (text === '') return;
    state.todos.push({
      id: id++,
      text,
      complete: false,
    });
  },

  clear(state) {
    state.todos = [];
  },

  toggleTodo(state, todo) {
    todo.complete = !todo.complete;
  },

  editTodo(state, { todo, value }) {
    todo.text = value;
  },

  setVisibleFilter(state, filter) {
    state.visibleFilter = filter;
  },
};

export const getters = {
  visibleTodos(state) {
    switch (state.visibleFilter) {
      case 'SHOW_ALL':
        return state.todos;
      case 'SHOW_ACTIVE':
        return state.todos.filter(t => !t.complete);
      case 'SHOW_COMPLETE':
        return state.todos.filter(t => t.complete);
      default:
        return state.todos;
    }
  },
};
