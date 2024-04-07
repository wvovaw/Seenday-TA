<template>
  <Search
    v-model:search-type="searchType"
    v-model:search-query="searchQuery"
    :search-types="SEARCH_TYPES"
    select-display-value="icon"
    @submit="emit('submit')"
  />
</template>

<script setup lang="ts">
import { Search } from "~/shared/ui/search";

const SEARCH_TYPES = {
  order_number: { title: "Номер заказа", placeholder: "Введите номер заказа" },
  psid: { title: "Номер фотосессии", placeholder: "Введите номер фотосессии" },
  client_id: { title: "Клиент ID", placeholder: "Введите ID клиента" },
  phone: { title: "Телефон", placeholder: "Введите телефон" },
  email: { title: "Email", placeholder: "Введите e-mail" },
  payer: { title: "Плательщик, ребёнок", placeholder: "Введите имя" }
};

export type SearchFilterModel = {
  search_type: string;
  search_value: string;
};
const searchModel = defineModel<SearchFilterModel>({ required: true });
const emit = defineEmits<{
  submit: [void];
}>();

const searchType = ref<keyof typeof SEARCH_TYPES>("order_number");
const searchQuery = ref<string>("");
watch([searchType, searchQuery], ([newST, newSQ]) => {
  searchModel.value.search_type = newST;
  searchModel.value.search_value = newSQ;
});
</script>
