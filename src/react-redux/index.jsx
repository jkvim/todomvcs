import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { todos, visibleFilter } from './reducers';
import { Provider } from 'react-redux';
import { AddTodo, VisbleTodoList, Footer } from './components';

const todoApps = combineReducers({
  todos,
  visibleFilter
});

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisbleTodoList />
    <Footer />
  </div>
);

ReactDOM.render(
  <Provider store={createStore(todoApps)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
