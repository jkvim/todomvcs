<template>
  <input v-if="editing" v-model="message" @keyup.enter="submit">
  <li v-else @click="enableEdit">
    <input type="checkbox" :checked="todo.complete" @click="toggleTodo">
    {{ todo.text }}
  </li>
</template>

<script>

export default {
  data() {
    return {
      message: this.todo.text,
      editing: false,
    };
  },
  props: [
    'todo',
  ],
  methods: {
    enableEdit() {
      this.editing = true;
    },
    submit() {
      this.$store.commit('editTodo', {
        todo: this.todo,
        value: this.message,
      });
      this.editing = false;
    },
    toggleTodo() {
      this.$store.commit('toggleTodo', this.todo);
    },
  },
};
</script>