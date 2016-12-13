<template>
  <div id="app">
    <img src="./assets/logo.png">
    <add-todo></add-todo>
    <filters></filters>
    <todo-list></todo-list>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

export default {
  name: 'app',
  components: {
    AddTodo,
    TodoList,
    Filters,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
