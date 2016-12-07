<template>
  <div id="app">
    <img src="./assets/logo.png">
    <add-todo v-on:add-todo="addTodo"></add-todo>
    <filters v-bind:visble-filter="visbleFilter" v-bind:set-filter="setFilter"></filters>
    <list v-bind:visble-filter="visbleFilter" v-bind:todos="todos" v-bind:toggle-todo="toggleTodo"></list>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo';
import List from './components/List';
import Filters from './components/Filters';

export default {
  name: 'app',
  components: {
    AddTodo,
    Filters,
    List,
  },
  data() {
    return {
      todos: [],
      visbleFilter: 'ALL',
    };
  },
  methods: {
    addTodo(todo) {
      console.log(todo);
      this.todos.push(todo);
    },
    toggleTodo(id) {
      this.todos = this.todos.map((t) => {
        if (t.id === id) {
          return {
            id,
            message: t.message,
            complete: !t.complete,
          };
        }
        return t;
      });
    },
    setFilter(filter) {
      console.log(filter);
      this.visbleFilter = filter;
    },
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
