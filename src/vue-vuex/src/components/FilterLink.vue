<template>
  <span v-if="filter === visibleFilter">
    <slot></slot>
  </span>
  <a v-else 
     class="filter-link" 
     @click="setFilter" 
     :href="'#' + filter"
  >
    <slot></slot>
  </a>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['filter'],
  computed: mapState([
    'visibleFilter',
  ]),
  methods: {
    setFilter() {
      this.$store.commit('setVisibleFilter', this.filter);
    },
  },
};
</script>