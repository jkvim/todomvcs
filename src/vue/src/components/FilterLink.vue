<template>
  <span v-if="visbleFilter === filter">{{ filter }}</span>
  <a v-else v-bind:href="'#'+filter.toLowerCase()" v-on:click="setFilter(filter)">{{ filter }}</a>
</template>


<script>
  export default {
    props: ['visbleFilter', 'filter', 'setFilter'],
  };
</script>

<style scoped>
  span, a {
    margin: 10px;
  }
</style>