<template>
  <ToggleGroup v-model="selectedItems" class="main-filter__toggles" type="multiple">
    <Toggle v-model:pressed="selectAll" color="gray"> Все </Toggle>
    <ToggleGroupItem v-for="item of TOGGLE_ITEMS" :key="item.key" color="gray" :value="item.name">
      <i v-if="item.icon" class="icon-xs" :class="item.icon" />
      <span v-else>{{ item.name }}</span>
    </ToggleGroupItem>
  </ToggleGroup>
</template>

<script setup lang="ts">
import { Toggle } from "~/shared/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "~/shared/ui/toggle-group";

const TOGGLE_ITEMS = [
  { key: "1", name: "1", icon: "icon-crown" },
  { key: "2", name: "2", icon: "icon-thumbs-down" },
  { key: "3", name: "3", icon: "icon-thumbs-up" },
  { key: "4", name: "4", icon: "icon-briefcase" },
  { key: "5", name: "5", icon: "icon-cloud-upload-alt" },
  { key: "6", name: "6", icon: "icon-truck" },
  { key: "7", name: "7", icon: "icon-money-bill-alt" },
  { key: "8", name: "8", icon: "icon-ruble" }
];
function toggleAll(v: boolean) {
  if (v) selectedItems.value = TOGGLE_ITEMS.map(el => el.key);
  else selectedItems.value.length = 0;
}

export type ToggleFilterModel = {
  selected: string[];
};
const toggleModel = defineModel<ToggleFilterModel>({ required: true });

const selectedItems = ref<string[]>([]);
watch(
  () => selectedItems.value.length,
  () => {
    toggleModel.value.selected = selectedItems.value;
  }
);

const selectAll = ref<boolean>();
watch(selectAll, v => {
  toggleAll(!!v);
});
</script>
