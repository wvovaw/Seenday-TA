<template>
  <FixedLeftColumn>
    <template #fixed>
      <Filters v-model="filters" />
    </template>
    <OrdersList v-if="data.length > 0" :orders="data" />
    <Empty v-else>{{ $t("no-orders") }}</Empty>
  </FixedLeftColumn>
</template>

<script setup lang="ts">
import { FixedLeftColumn } from "~/shared/ui/templates";
import { Empty } from "~/shared/ui/empty";

import { Filters, type FiltersModel } from "./components/filters";
import { OrdersList } from "./components/orders-list";
import { useQueryOrders } from "./composables/useQueryOrders";

const { data, get } = useQueryOrders();

const filters = reactive<FiltersModel>({
  dates: {
    date_start: null,
    date_finish: null
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

const router = useRouter();
const queryParams = useUrlSearchParams("history");
const queryString = computed(() => useRoute().fullPath.replace(/\/manager\/orders\??/, ""));
watch(filters, async f => {
  const updatedQueryParams = {
    date_start: f.dates.date_start ? f.dates.date_start.toISOString().split("T")[0].replace(/-/g, "") : undefined,
    date_finish: f.dates.date_finish ? f.dates.date_finish.toISOString().split("T")[0].replace(/-/g, "") : undefined,
    search_type: f.search.search_type.length > 0 ? f.search.search_type : undefined,
    search_value: f.search.search_value.length > 0 ? f.search.search_value : undefined,
    year: f.year ? f.year : undefined
  };

  Object.assign(queryParams, updatedQueryParams);

  await router.replace({
    query: queryParams
  });

  get(queryString.value);
});

onMounted(() => {
  get();
});
</script>
