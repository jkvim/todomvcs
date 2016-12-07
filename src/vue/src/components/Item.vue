<template>
  <li 
    v-bind:key="todo.id" 
    v-bind:class="{complete: todo.complete}"
    v-on:blur="updateItem" 
    contenteditable >{{ todo.message }}</li>
</template>

<script>
  export default {
    props: ['todo'],
    methods: {
      toggleTodo() {
        this.$emit('toggle-todo', this.todo.id);
      },
      updateItem(e) {
        const newItem = {
          ...this.todo,
          message: e.target.textContent,
        };
        this.$emit('edit', newItem);
      },
    },
  };
</script>

<style>
  .complete {
    text-decoration: line-through;
  }
</style>