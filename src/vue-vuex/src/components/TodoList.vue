<template>
  <ul class="todo-list">
    <todo-item v-for="todo in todos" 
               :todo="todo" 
               :key="todo.id"
    ></todo-item>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoItem from './TodoItem';

export default {
  computed: {
    ...mapGetters({
      todos: 'visibleTodos',
    }),
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
  ul {
    width: 240px;
    margin: 0 auto;
    margin-top: 10px;
    list-style: none;
    text-align: left;
    padding: 0;
  }
</style>