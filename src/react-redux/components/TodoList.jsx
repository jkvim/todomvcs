'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.complete);
    case 'SHOW_COMPLETE':
      return todos.filter(t => t.complete);
    case 'SHOW_ALL':
      return todos;
  }
};

const Todo = ({
  onClick,
  complete,
  text
}) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration:  complete?
        'line-through' :
        'none'
      }}>
      {text}
    </li>
  )
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibleFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  }
};

const TodoList = ({
  todos,
  onTodoClick
}) => {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => {
            onTodoClick(todo.id)
        }}/>
      )}
    </ul>
  )
};

const VisbleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisbleTodoList;
