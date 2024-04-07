<template>
  <Search
    v-model:search-type="searchType"
    v-model:search-query="searchQuery"
    :search-types="SEARCH_TYPES"
    select-display-value="icon"
    @submit="handleSubmit"
    @keypress.enter="handleSubmit"
    @clear="handleClear"
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

const searchType = ref<keyof typeof SEARCH_TYPES>("order_number");
const searchQuery = ref<string>("");

function handleSubmit() {
  searchModel.value.search_type = searchType.value;
  searchModel.value.search_value = searchQuery.value;
}
function handleClear() {
  searchType.value = "order_number";
  searchQuery.value = "";
  searchModel.value.search_type = "";
  searchModel.value.search_value = "";
}
</script>
