<template>
  <InputDate v-model="date" placeholder="Период" />
  <Search
    v-model:search-type="searchType"
    :search-types="searchTypes"
    :search-query="searchQuery"
  />
  <ToggleGroup v-model="searchToggles" class="toggles" type="multiple">
    <ToggleGroupItem
      v-for="item of toggles"
      :key="item.key"
      color="gray"
      :value="item.name"
    >
      <i v-if=item.icon class="icon-xs" :class="item.icon" />
      <span v-else>{{item.name}}</span>
    </ToggleGroupItem>
  </ToggleGroup>
</template>

<script setup lang="ts">
import { InputDate } from "~/shared/ui/inputs/input-date";
import { Search } from "~/shared/ui/search";
import { ToggleGroup, ToggleGroupItem } from "~/shared/ui/toggle-group";

const date = ref();
const searchQuery = ref<string>("");
const searchTypes = {
  k1: { title: 'test', placeholder: 'test'},
  k2: { title: 'test2', placeholder: 'test2'}
};
const searchType = ref("k1");
const searchToggles = ref([]);

const toggles = reactive([ 
  { key: "0", name: "Все", value: false },
  { key: "1", name: "1", icon: "icon-crown", value: false },
  { key: "2", name: "2", icon: "icon-thumbs-down", value: false },
  { key: "3", name: "3", icon: "icon-thumbs-up", value: false },
  { key: "4", name: "4", icon: "icon-briefcase", value: false },
  { key: "5", name: "5", icon: "icon-cloud-upload-alt", value: false },
  { key: "6", name: "6", icon: "icon-truck", value: false },
  { key: "7", name: "7", icon: "icon-money-bill-alt", value: false },
  { key: "8", name: "8", icon: "icon-ruble", value: false },
 ])
</script>

<style lang="scss">
.toggles {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
</style>