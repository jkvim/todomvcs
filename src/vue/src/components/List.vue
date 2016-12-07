<template>
  <ul>
    <item v-for="todo in visbleTodo" v-bind:todo="todo" v-on:toggle-todo="toggleTodo"></item>
  <ul>
</template>

<script>
import Item from './Item';

export default {
  props: ['visbleFilter', 'todos', 'toggleTodo'],
  components: {
    Item,
  },
  methods: {
    getVisbleTodo() {
      switch (this.visbleFilter) {
        case 'COMPLETE': return this.todos.filter(t => t.complete);
        case 'ACTIVE': return this.todos.filter(t => !t.complete);
        case 'ALL':
        default: return this.todos;
      }
    },
  },
  computed: {
    visbleTodo() {
      return this.getVisbleTodo();
    },
  },
};
</script>

<style>
  ul {
    list-style: circle;
    width: 250px;
    margin: 0 auto;
    text-align: left
  }
</style>