<template>
  <FixedLeftColumn>
    <template #fixed>
      <Filters @submit="f => handleFiltersSubmit(f)" />
    </template>
    <Suspense>
      <template #fallback>
        <Empty>Заказов ещё нет</Empty>
      </template>
      <OrdersList :orders="data" />
    </Suspense>
  </FixedLeftColumn>
</template>

<script setup lang="ts">
import type { Raw } from "vue";

import { FixedLeftColumn } from "~/shared/ui/templates";
import { Empty } from "~/shared/ui/empty";

import { Filters, type FiltersModel } from "./components/filters";
import { OrdersList } from "./components/orders-list";
import { useQueryOrders } from "./composables/useQueryOrders";

const { data, get } = useQueryOrders();

function handleFiltersSubmit(filters: Raw<FiltersModel>) {
  get(filters);
}

onMounted(() => {
  get();
});
</script>
