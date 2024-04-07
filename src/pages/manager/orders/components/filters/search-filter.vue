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

const { t } = useI18n();

const SEARCH_TYPES = {
  order_number: {
    title: t("search-filter.types.order_number.title"),
    placeholder: t("search-filter.types.order_number.placeholder")
  },
  psid: { title: t("search-filter.types.psid.title"), placeholder: t("search-filter.types.psid.placeholder") },
  client_id: {
    title: t("search-filter.types.client_id.title"),
    placeholder: t("search-filter.types.client_id.placeholder")
  },
  phone: { title: t("search-filter.types.phone.title"), placeholder: t("search-filter.types.phone.placeholder") },
  email: { title: t("search-filter.types.email.title"), placeholder: t("search-filter.types.email.placeholder") },
  payer: { title: t("search-filter.types.payer.title"), placeholder: t("search-filter.types.payer.placeholder") }
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
