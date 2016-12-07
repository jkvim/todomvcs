<template>
  <div>
  <input type="checkbox" v-bind:checked="todo.complete" v-on:click="toggleTodo">
    <li
      v-bind:key="todo.id" 
      v-bind:class="{complete: todo.complete}"
      v-on:blur="updateItem" 
      contenteditable 
    >
      {{ todo.message }}
    </li>
  </div>
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

<style scoped>
  li {
    width: 200px;
  }
  li, input {
    display: inline-block;
  }
  .complete {
    text-decoration: line-through;
  }
</style>