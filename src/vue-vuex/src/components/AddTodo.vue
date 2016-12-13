<template>
  <div class="add-todo">
    <input type="text" v-model="message">
    <button @click="addTodo">Add Todo</button>
    <button @click="clear">Clear</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', {
        text: this.message,
      });
      this.message = '';
    },
    clear() {
      this.$store.commit('clear');
    },
  },
};
</script>