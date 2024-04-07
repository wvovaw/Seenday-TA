<template>
  <div class="filters">
    <div class="filters__block">
      <DatesFilter v-model="filters.dates" />
      <SearchFilter v-model="filters.search" />
      <ToggleFilter v-model="filters.toggle" />
    </div>
    <YearFilter v-model="filters.year" class="filters__block" />
  </div>
</template>

<script setup lang="ts">
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

const filters = defineModel<FiltersModel>({ required: true });
</script>

<style lang="scss">
@import "@/shared/assets/styles/components/order-filters";
</style>
