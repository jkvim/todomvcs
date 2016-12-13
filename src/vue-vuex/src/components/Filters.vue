<template>
  <div class="filters">
    SHOW: 
    <filter-link filter="SHOW_ALL">ALL</filter-link>
    <filter-link filter="SHOW_ACTIVE">ACTIVE</filter-link>
    <filter-link filter="SHOW_COMPLETE">COMPLETE</filter-link>
  </div>
</template>

<script>
import FilterLink from './FilterLink';

export default {
  components: {
    FilterLink,
  },
};
</script>

<style scoped>
  .filters {
    margin-top: 10px;
  }
</style>