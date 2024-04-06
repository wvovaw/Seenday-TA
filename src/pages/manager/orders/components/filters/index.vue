<template>
<div class="filters">
  <MainFilter class="filters__block" />
  <YearFilter class="filters__block" />
</div>
</template>

<script setup lang="ts">
import MainFilter from "./main-filter.vue";
import YearFilter from "./year-filter.vue";
</script>

<style lang="scss">
@import "@/shared/assets/styles/components/order-filters";
</style>