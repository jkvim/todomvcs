<template>
  <div>
    <filter-link v-for="filter in filters" v-bind:filter="filter" v-bind:visble-filter="visbleFilter" v-bind:set-filter="setFilter">
      {{ filter }}
    </filter-link>
  </div>
</template>

<script>
import FilterLink from './FilterLink';

export default {
  props: [
    'visbleFilter',
    'setFilter',
  ],
  components: {
    FilterLink,
  },
  data() {
    return {
      filters: [
        'ALL',
        'ACTIVE',
        'COMPLETE',
      ],
    };
  },
};
</script>

<style scoped>
  div {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>