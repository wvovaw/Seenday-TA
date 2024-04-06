<template>
<div class="filters">
  <div class="filters__block">
    <MainFilter />
  </div>
  <div class="filters__block">
    <YearFilter />
  </div>
</div>
</template>

<script setup lang="ts">
import MainFilter from "./main-filter.vue";
import YearFilter from "./year-filter.vue";
</script>

<style lang="scss" scoped>
@import "@/shared/assets/styles/components/_block.scss";

.filters { 
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  &__block {
    padding: 16px;
    @extend .block;

    display: flex;
    flex-direction: column;
    gap: 10px;
  }

}
</style>