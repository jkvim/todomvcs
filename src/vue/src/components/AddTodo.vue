<template>
  <div>
    <input v-model="message" placeholder="edit me">
    <button v-on:click="addTodo">Add Todo</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
        id: 0,
      };
    },
    methods: {
      addTodo() {
        this.id++;
        this.$emit('add-todo', {
          message: this.message,
          id: this.id,
          complete: false,
        });
      },
    },
  };
</script>