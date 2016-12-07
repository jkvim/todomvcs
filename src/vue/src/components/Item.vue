<template>
  <li v-bind:key="todo.id" v-on:click="toggleTodo" v-bind:class="{complete: todo.complete}">{{ todo.message }}</li>
</template>

<script>
  export default {
    props: ['todo'],
    methods: {
      toggleTodo() {
        this.$emit('toggle-todo', this.todo.id);
      },
    },
  };
</script>

<style>
  .complete {
    text-decoration: line-through;
  }
</style>