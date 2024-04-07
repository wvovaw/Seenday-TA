<template>
  <div class="filters">
    <div class="filters__block">
      <DatesFilter v-model="filters.dates" />
      <SearchFilter v-model="filters.search" @submit="handleSubmit" />
      <ToggleFilter v-model="filters.toggle" />
    </div>
    <YearFilter
      v-model="filters.year"
      class="filters__block"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import type { Raw } from "vue";

import DatesFilter, { type DatesFilterModel } from "./dates-filter.vue";
import SearchFilter, { type SearchFilterModel } from "./search-filter.vue";
import ToggleFilter, { type ToggleFilterModel } from "./toggle-filter.vue";
import YearFilter, { type YearFilterModel } from "./year-filter.vue";

export type FiltersModel = {
  dates: DatesFilterModel;
  search: SearchFilterModel;
  toggle: ToggleFilterModel;
  year: YearFilterModel;
};
const filters = reactive<FiltersModel>({
  dates: {
    date_start: null,
    date_end: null
  },
  search: {
    search_type: "",
    search_value: ""
  },
  toggle: {
    selected: []
  },
  year: null
});

const emit = defineEmits<{
  submit: [filter: Raw<FiltersModel>];
}>();

function handleSubmit() {
  emit('submit', toRaw(filters));
}
</script>

<style lang="scss">
@import "@/shared/assets/styles/components/order-filters";
</style>
