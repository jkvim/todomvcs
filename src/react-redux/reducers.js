'use strick';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        complete: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        id: state.id,
        text: state.text,
        complete: !state.complete
      }
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibleFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBLE_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export {
  todos,
  visibleFilter
}
